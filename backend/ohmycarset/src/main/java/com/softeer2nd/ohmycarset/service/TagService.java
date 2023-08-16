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
import java.util.stream.Stream;

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

    public List<SelectiveOptionTagDto> getKeywordTagRequiredOption(UserInfoDto userInfoDto, String optionName) {
        List<SelectiveOptionTagDto> response = new ArrayList<>();

        // 성별, 나이, 태그 id
        Character gender = userInfoDto.getGender();
        Integer age = userInfoDto.getAge();
        List<Long> tagIds = Stream.of(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3())
                .map(tagName -> tagRepository.findByName(tagName).orElseThrow().getId())
                .collect(Collectors.toList());

        // 옵션id, 구매내역수 - 구매내역 수 내림차순으로 정렬
        List<PurchaseCountDto> purchaseCountDtoList = purchaseHistoryRepository.countByOptionNameAndGenderAndAgeAndTags(optionName, gender, age, tagIds)
                .stream()
                .sorted(Comparator.comparing(PurchaseCountDto::getCount).reversed())
                .collect(Collectors.toList());

        // tag dto 생성
        List<TagDto> tagDtoList = new ArrayList<>();

        /**
         * 1. 옵션에 포함되어 있는 태그와 사용자가 선택한 태그의 교집합을 구한다.
         * 2. 해당 태그와 옵션이 포함되어있는 구매내역 수 / 해당 태그가 포함되어있는 구매내역 수
         */

        // 총 유사유저 수
        Long totalSimilarUserCount = purchaseHistoryRepository.countByGenderAndAgeAndTags(gender, age, tagIds);

        // 유사유저 정보
        RequiredOption mostSimilarOption = selectiveOptionRepository.findOptionByOptionIdAndOptionName(purchaseCountDtoList.get(0).getOptionId(), optionName);

        // 태그 교집합
        List<Tag> optionTags = tagRepository.findAllByOptionNameAndOptionId(optionName, mostSimilarOption.getId());
        List<String> userTagNames = Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3());
        List<Tag> intersectTags = optionTags.stream()
                .filter(tag -> userTagNames.contains(tag.getName()))
                .collect(Collectors.toList());

        for (Tag tag : intersectTags) {
            Double percentage = (double)purchaseHistoryRepository.countByTagIdAndOptionNameAndOptionId(tag.getId(), optionName, mostSimilarOption.getId()) / purchaseHistoryRepository.countByTagId(tag.getId()) * 100;
            tagDtoList.add(new TagDto(tag.getId(), tag.getName(), percentage));
        }
        tagDtoList.sort(Comparator.comparing(TagDto::getPercentage).reversed());

        response.add(new SelectiveOptionTagDto(mostSimilarOption.getId(), mostSimilarOption.getName(), (double) purchaseCountDtoList.get(0).getCount() / totalSimilarUserCount * 100, tagDtoList));

        // 전체 판매량
        Long totalPurchaseCount = purchaseHistoryRepository.count();

        // 구매비율 정보
        purchaseCountDtoList.subList(1, purchaseCountDtoList.size())
                .stream()
                .sorted(Comparator.comparing(dto -> {
                    Long purchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(optionName, dto.getOptionId());
                    return -purchaseCount; // 내림차순으로 정렬하기 위해 음수로 변환
                }))
                .forEach(dto -> {
                    Long purchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(optionName, dto.getOptionId());
                    RequiredOption option = selectiveOptionRepository.findOptionByOptionIdAndOptionName(dto.getOptionId(), optionName);
                    response.add(new SelectiveOptionTagDto(option.getId(), option.getName(), (double) purchaseCount / totalPurchaseCount * 100, null));
                });

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
            Double percentage = (double)purchaseHistoryRepository.countByTagIdAndPackageNameAndOptionId(tag.getId(), packageName, mostSimilarPackage.getId()) / purchaseHistoryRepository.countByTagId(tag.getId()) * 100;
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
