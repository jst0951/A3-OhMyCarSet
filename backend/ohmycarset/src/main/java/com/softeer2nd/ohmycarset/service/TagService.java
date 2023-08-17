package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import com.softeer2nd.ohmycarset.dto.PurchaseCountDto;
import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.SelectiveOptionTagDto;
import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.TagDto;
import com.softeer2nd.ohmycarset.dto.UserInfoDto;
import com.softeer2nd.ohmycarset.repository.PurchaseHistoryRepository;
import com.softeer2nd.ohmycarset.repository.SelectiveOptionRepository;
import com.softeer2nd.ohmycarset.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class TagService {
    private final TagRepository tagRepository;
    private final SelectiveOptionRepository selectiveOptionRepository;
    private final PurchaseHistoryRepository purchaseHistoryRepository;

    public TagService(TagRepository tagRepository, SelectiveOptionRepository selectiveOptionRepository, PurchaseHistoryRepository purchaseHistoryRepository) {
        this.tagRepository = tagRepository;
        this.selectiveOptionRepository = selectiveOptionRepository;
        this.purchaseHistoryRepository = purchaseHistoryRepository;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagByOptionName(String optionName) {
        // 각 카운트 조회
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();

        List<RequiredOption> optionList = selectiveOptionRepository.findAllOptionByOptionName(optionName);
        for (RequiredOption option : optionList) {
            Long purchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(optionName, option.getId());
            purchaseCountMap.put(option, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for (RequiredOption option : optionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(option) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(option, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagByPackageName(String packageName) {
        // 각 카운트 조회
        Map<OptionPackage, Long> purchaseCountMap = new HashMap<>();


        List<OptionPackage> optionPackageList = selectiveOptionRepository.findAllPackageByPackageName(packageName);
        for (OptionPackage optionPackage : optionPackageList) {
            Long purchaseCount = purchaseHistoryRepository.countByPackageNameAndOptionId(packageName, optionPackage.getId());
            purchaseCountMap.put(optionPackage, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();

        for (OptionPackage optionPackage : optionPackageList) {
            Double purchasePercentage = (double) purchaseCountMap.get(optionPackage) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(optionPackage, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getKeywordTagRequiredOption(UserInfoDto userInfoDto, String categoryName) {
        List<SelectiveOptionTagDto> response = new ArrayList<>();
        Character gender = userInfoDto.getGender();
        Integer age = userInfoDto.getAge();
        Long optionId = 1L; // 추천된 옵션id

        if (categoryName.equals("powertrain") || categoryName.equals("wd") || categoryName.equals("body")) {
            RequiredOption recommendedOption = selectiveOptionRepository.findOptionByOptionIdAndOptionName(optionId, categoryName);

            // 키워드 포함
            List<Long> tagIds = tagRepository.findIdsByNames(new ArrayList<>(Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3())));
            List<PurchaseCountDto> purchaseCountDtoList = purchaseHistoryRepository.countByCategoryNameAndGenderAndAgeAndTags(categoryName, gender, age, tagIds);
            Long totalSimilarCount = purchaseCountDtoList.stream().mapToLong(PurchaseCountDto::getCount).sum();


            // 키워드 포함x - 연령대+성별
        }

        if(categoryName.equals("wheel")) {

        }

        // 색상 - 연령대+성별 기준 제일 많이 팔린 것 선택
        if (categoryName.equals("exterior_color") || categoryName.equals("interior_color")) {
            List<PurchaseCountDto> purchaseCountDtoList = purchaseHistoryRepository.findAllByCategoryNameAndGenderAndAge(categoryName, gender, age);

            /**
             * 추천 옵션 - 유사유저 구매 비율
             */
            Long totalSimilarCount = purchaseCountDtoList.stream().mapToLong(PurchaseCountDto::getCount).sum();
            RequiredOption recommendedOption = selectiveOptionRepository.findOptionByOptionIdAndOptionName(purchaseCountDtoList.get(0).getOptionId(), categoryName);
            Double genderRatio = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndGender(categoryName, recommendedOption.getId(), gender);
            Double ageRatio = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndAge(categoryName, recommendedOption.getId(), age);
            List<TagDto> tagDtoList = Arrays.asList(new TagDto(1L, "성별", genderRatio), new TagDto(2L, "나이대", ageRatio));

            response.add(new SelectiveOptionTagDto(
                    recommendedOption.getId(),
                    recommendedOption.getName(),
                    (double) purchaseCountDtoList.get(0).getCount() / totalSimilarCount * 100,
                    tagDtoList));

            /**
             * 나머지 옵션 - 총 구매비율
             */
            Long totalCount = purchaseHistoryRepository.count();
            List<Long> optionIds = purchaseCountDtoList.subList(1, purchaseCountDtoList.size()).stream()
                    .map(PurchaseCountDto::getOptionId)
                    .collect(Collectors.toList());

            List<Long> counts = purchaseHistoryRepository.countByCategoryNameAndOptionIds(categoryName, optionIds);

            int idx = 0;
            List<RequiredOption> options = selectiveOptionRepository.findOptionsByOptionIdsAndCategoryName(optionIds, categoryName);
            for (RequiredOption option : options) {
                response.add(new SelectiveOptionTagDto(
                        option.getId(),
                        option.getName(),
                        (double) counts.get(idx++) / totalCount * 100,
                        null
                ));
            }

            return response;
        }


//
//        List<Long> tagIds = tagRepository.findIdsByNames(new ArrayList<>(Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3())));
//
//        // 옵션id, 구매내역수 - 구매내역 수 내림차순으로 정렬
//        List<PurchaseCountDto> purchaseCountDtoList = purchaseHistoryRepository.countByCategoryNameAndGenderAndAgeAndTags(categoryName, gender, age, tagIds)
//                .stream()
//                .sorted(Comparator.comparing(PurchaseCountDto::getCount).reversed())
//                .collect(Collectors.toList());
//
//        // 총 유사유저 수
//        Long totalSimilarUserCount = purchaseCountDtoList.stream()
//                .mapToLong(PurchaseCountDto::getCount)
//                .sum();
//
//        System.out.println("totalSimilarUserCount = " + totalSimilarUserCount);
//
//        // 유사유저 정보
//        RequiredOption mostSimilarOption = selectiveOptionRepository.findOptionByOptionIdAndOptionName(purchaseCountDtoList.get(0).getOptionId(), categoryName);
//
//        // 태그 교집합
//        List<Tag> optionTags = tagRepository.findAllByOptionNameAndOptionId(categoryName, mostSimilarOption.getId());
//        List<String> userTagNames = Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3());
//        List<Tag> intersectTags = optionTags.stream()
//                .filter(tag -> userTagNames.contains(tag.getName()))
//                .collect(Collectors.toList());
//
//        // tag dto 생성
//        List<TagDto> tagDtoList = new ArrayList<>();
//
//        for (Tag tag : intersectTags) {
//            Double percentage = (double) purchaseHistoryRepository.countByTagIdAndOptionNameAndOptionId(tag.getId(), categoryName, mostSimilarOption.getId()) / purchaseHistoryRepository.countByTagId(tag.getId()) * 100;
//            tagDtoList.add(new TagDto(tag.getId(), tag.getName(), percentage));
//        }
//        tagDtoList.sort(Comparator.comparing(TagDto::getPercentage).reversed());
//
//        response.add(new SelectiveOptionTagDto(mostSimilarOption.getId(), mostSimilarOption.getName(), (double) purchaseCountDtoList.get(0).getCount() / totalSimilarUserCount * 100, tagDtoList));
//
//        // 전체 판매량
//        Long totalPurchaseCount = purchaseHistoryRepository.count();
//
//        // 구매비율 정보
//        purchaseCountDtoList.subList(1, purchaseCountDtoList.size())
//                .stream()
//                .sorted(Comparator.comparing(dto -> {
//                    Long purchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(categoryName, dto.getOptionId());
//                    return -purchaseCount; // 내림차순으로 정렬하기 위해 음수로 변환
//                }))
//                .forEach(dto -> {
//                    Long purchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(categoryName, dto.getOptionId());
//                    RequiredOption option = selectiveOptionRepository.findOptionByOptionIdAndOptionName(dto.getOptionId(), categoryName);
//                    response.add(new SelectiveOptionTagDto(option.getId(), option.getName(), (double) purchaseCount / totalPurchaseCount * 100, null));
//                });
//
//        for (PurchaseCountDto dto : purchaseCountDtoList.subList(1, purchaseCountDtoList.size())) {
//            Long purchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(categoryName, dto.getOptionId());
//            RequiredOption option = selectiveOptionRepository.findOptionByOptionIdAndOptionName(dto.getOptionId(), categoryName);
//            response.add(new SelectiveOptionTagDto(option.getId(), option.getName(), (double)purchaseCount / totalPurchaseCount * 100, null));
//        }


        return response;
    }

    public List<SelectiveOptionTagDto> getKeywordTagOptionPackage(UserInfoDto userInfoDto, String packageName) {
        List<SelectiveOptionTagDto> response = new ArrayList<>();

        // 성별, 나이, 태그 id
        Character gender = userInfoDto.getGender();
        Integer age = userInfoDto.getAge();
        List<Long> tagIds = Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3()).stream()
                .map(tagName -> tagRepository.findByName(tagName).orElseThrow().getId())
                .collect(Collectors.toList());

        // 옵션id, 구매내역수 - 구매내역수 내림차순으로 정렬
        List<PurchaseCountDto> purchaseCountDtoList = purchaseHistoryRepository.countByPackageNameAndGenderAndAgeAndTags(packageName, gender, age, tagIds)
                .stream()
                .sorted(Comparator.comparing(PurchaseCountDto::getCount).reversed())
                .collect(Collectors.toList());

        // tag dto 생성
        List<TagDto> tagDtoList = new ArrayList<>();

        // 총 유사유저 수
        Long totalSimilarUserCount = purchaseHistoryRepository.countByGenderAndAgeAndTags(gender, age, tagIds);

        // 유사유저 정보
        OptionPackage mostSimilarPackage = selectiveOptionRepository.findPackageByPackageIdAndPackageName(purchaseCountDtoList.get(0).getOptionId(), packageName);

        // 태그 교집합
        List<Tag> packageTags = tagRepository.findAllByOptionNameAndOptionId(packageName, mostSimilarPackage.getId());
        List<String> userTagNames = Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3());
        List<Tag> intersectTags = packageTags.stream()
                .filter(tag -> userTagNames.contains(tag.getName()))
                .collect(Collectors.toList());

        for (Tag tag : intersectTags) {
            Double percentage = (double) purchaseHistoryRepository.countByTagIdAndPackageNameAndOptionId(tag.getId(), packageName, mostSimilarPackage.getId()) / purchaseHistoryRepository.countByTagId(tag.getId()) * 100;
            tagDtoList.add(new TagDto(tag.getId(), tag.getName(), percentage));
        }
        tagDtoList.sort(Comparator.comparing(TagDto::getPercentage).reversed());

        response.add(new SelectiveOptionTagDto(mostSimilarPackage.getId(), mostSimilarPackage.getName(), (double) purchaseCountDtoList.get(0).getCount() / totalSimilarUserCount * 100, tagDtoList));

        // 전체 판매량
        Long totalPurchaseCount = purchaseHistoryRepository.count();

        // 구매비율 정보
        purchaseCountDtoList.subList(1, purchaseCountDtoList.size())
                .stream()
                .sorted(Comparator.comparing(dto -> {
                    Long purchaseCount = purchaseHistoryRepository.countByPackageNameAndOptionId(packageName, dto.getOptionId());
                    return -purchaseCount; // 내림차순으로 정렬하기 위해 음수로 변환
                }))
                .forEach(dto -> {
                    Long purchaseCount = purchaseHistoryRepository.countByPackageNameAndOptionId(packageName, dto.getOptionId());
                    OptionPackage optionPackage = selectiveOptionRepository.findPackageByPackageIdAndPackageName(dto.getOptionId(), packageName);
                    response.add(new SelectiveOptionTagDto(optionPackage.getId(), optionPackage.getName(), (double) purchaseCount / totalPurchaseCount * 100, null));
                });

        return response;
    }
}
