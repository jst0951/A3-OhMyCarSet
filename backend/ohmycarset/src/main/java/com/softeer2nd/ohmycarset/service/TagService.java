package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.SelectiveOptionTagDto;
import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.TagDto;
import com.softeer2nd.ohmycarset.dto.UserInfoDto;
import com.softeer2nd.ohmycarset.repository.PurchaseHistoryRepository;
import com.softeer2nd.ohmycarset.repository.SelectiveOptionRepository;
import com.softeer2nd.ohmycarset.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.*;

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
        for(RequiredOption option: optionList) {
            Long purchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(optionName, option.getId());
            purchaseCountMap.put(option, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(RequiredOption option: optionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(option) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(option, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagByPackageName(String packageName) {
        // 각 카운트 조회
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();

        List<RequiredOption> optionList = selectiveOptionRepository.findAllOptionByOptionName(packageName);
        for(RequiredOption option: optionList) {
            Long purchaseCount = purchaseHistoryRepository.countByPackageNameAndOptionId(packageName, option.getId());
            purchaseCountMap.put(option, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(RequiredOption option: optionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(option) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(option, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getKeywordTagRequiredOption(UserInfoDto userInfoDto, String optionName) {
        // 입력된 태그명에 해당하는 Tag 객체들로 변환합니다.
        List<Tag> tagList = new ArrayList<>();
        List<String> tagNameList = new ArrayList<>(Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3()));
        for (String tagName : tagNameList) {
            tagList.add(tagRepository.findByName(tagName).orElse(null));
        }

        // 본 카테고리의 모든 옵션의 목록을 가져옵니다.
        List<RequiredOption> optionList = selectiveOptionRepository.findAllOptionByOptionName(optionName);

        // 모든 부가 정보들을 담을 목록을 만듭니다.
        List<SelectiveOptionTagDto> optionTagDtoList = new ArrayList<>();

        // 각 옵션에 대해 구매비율, 유사도 및 태그 목록을 구합니다.
        Long totalPurchaseCount = purchaseHistoryRepository.count(); // 구매비율 연산용
        for (RequiredOption option : optionList) {
            // 구매비율
            Long optionPurchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(optionName, option.getId());
            Double purchaseRate = (double) optionPurchaseCount / totalPurchaseCount * 100;

            // TODO 유사도 연산 로직
            Double similarity = 0.;

            // 사용자 선택 태그 기반 태그 유사도
            List<TagDto> tagDtoList = new ArrayList<>();

            // 유저가 선택한 태그와 옵션에 정의된 태그 중 겹치는 태그만 연산합니다.
            List<Tag> intersectionTagList = new ArrayList<>();
            List<Tag> optionTagList = tagRepository.findAllByOptionNameAndOptionId(optionName, option.getId());
            for (Tag tag : tagList) {
                for (Tag optionTag : optionTagList) {
                    if (Objects.equals(tag.getId(), optionTag.getId())) {
                        intersectionTagList.add(tag);
                    }
                }
            }

            // 유저가 선택한 3가지 태그에 대해 유사도를 연산합니다.
            for (Tag tag : intersectionTagList) {
                // 해당 태그를 선택한 구매 내역 수를 받아옵니다.
                Long purchaseCount = purchaseHistoryRepository.countByTagId(tag.getId());

                // 해당 태그를 선택하고, 해당 옵션을 구매한 내역 수를 받아옵니다.
                Long intersectionPurchaseCount = purchaseHistoryRepository.countByTagIdAndOptionNameAndOptionId(tag.getId(), optionName, option.getId());

                // 선택 비율을 연산합니다.
                Double selectionPercentage = (double) intersectionPurchaseCount / purchaseCount * 100;

                // 태그 목록에 추가합니다.
                tagDtoList.add(new TagDto(tag, selectionPercentage));
            }

            // 높은 유사도순으로 재정렬합니다.
            tagDtoList.sort((t0, t1) -> Double.compare(t1.getPercentage(), t0.getPercentage()));

            // 목록에 담습니다.
            optionTagDtoList.add(new SelectiveOptionTagDto(option, purchaseRate, similarity, tagDtoList));
        }

        return optionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getKeywordTagOptionPackage(UserInfoDto userInfoDto, String packageName) {
        // 입력된 태그명에 해당하는 Tag 객체들로 변환합니다.
        List<Tag> tagList = new ArrayList<>();
        List<String> tagNameList = new ArrayList<>(Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3()));
        for (String tagName : tagNameList) {
            tagList.add(tagRepository.findByName(tagName).orElse(null));
        }

        // 본 카테고리의 모든 옵션의 목록을 가져옵니다.
        List<RequiredOption> optionList = selectiveOptionRepository.findAllOptionByOptionName(packageName);

        // 모든 부가 정보들을 담을 목록을 만듭니다.
        List<SelectiveOptionTagDto> optionTagDtoList = new ArrayList<>();

        // 각 옵션에 대해 구매비율, 유사도 및 태그 목록을 구합니다.
        Long totalPurchaseCount = purchaseHistoryRepository.count(); // 구매비율 연산용
        for (RequiredOption option : optionList) {
            // 구매비율
            Long optionPurchaseCount = purchaseHistoryRepository.countByPackageNameAndOptionId(packageName, option.getId());
            Double purchaseRate = (double) optionPurchaseCount / totalPurchaseCount * 100;

            // TODO 유사도 연산 로직
            Double similarity = 0.;

            // 사용자 선택 태그 기반 태그 유사도
            List<TagDto> tagDtoList = new ArrayList<>();

            // 유저가 선택한 태그와 옵션에 정의된 태그 중 겹치는 태그만 연산합니다.
            List<Tag> intersectionTagList = new ArrayList<>();
            List<Tag> optionTagList = tagRepository.findAllByOptionNameAndOptionId(packageName, option.getId());
            for (Tag tag : tagList) {
                for (Tag optionTag : optionTagList) {
                    if (Objects.equals(tag.getId(), optionTag.getId())) {
                        intersectionTagList.add(tag);
                    }
                }
            }

            // 유저가 선택한 3가지 태그에 대해 유사도를 연산합니다.
            for (Tag tag : intersectionTagList) {
                // 해당 태그를 선택한 구매 내역 수를 받아옵니다.
                Long purchaseCount = purchaseHistoryRepository.countByTagId(tag.getId());

                // 해당 태그를 선택하고, 해당 옵션을 구매한 내역 수를 받아옵니다.
                Long intersectionPurchaseCount = purchaseHistoryRepository.countByTagIdAndPackageNameAndOptionId(tag.getId(), packageName, option.getId());

                // 선택 비율을 연산합니다.
                Double selectionPercentage = (double) intersectionPurchaseCount / purchaseCount * 100;

                // 태그 목록에 추가합니다.
                tagDtoList.add(new TagDto(tag, selectionPercentage));
            }

            // 높은 유사도순으로 재정렬합니다.
            tagDtoList.sort((t0, t1) -> Double.compare(t1.getPercentage(), t0.getPercentage()));

            // 목록에 담습니다.
            optionTagDtoList.add(new SelectiveOptionTagDto(option, purchaseRate, similarity, tagDtoList));
        }

        return optionTagDtoList;
    }
}
