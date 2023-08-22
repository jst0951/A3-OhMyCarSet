package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import com.softeer2nd.ohmycarset.dto.PurchaseCountDto;
import com.softeer2nd.ohmycarset.dto.RecommendDto;
import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.TagDto;
import com.softeer2nd.ohmycarset.dto.UserInfoDto;
import com.softeer2nd.ohmycarset.dto.UserWithPresetDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.*;
import com.softeer2nd.ohmycarset.repository.PurchaseHistoryRepository;
import com.softeer2nd.ohmycarset.repository.SelectiveOptionRepository;
import com.softeer2nd.ohmycarset.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class SelectiveOptionService {
    private static final String MALE = "남자";
    private static final String FEMALE = "여자";
    private static final String NONE = "NONE";

    private final SelectiveOptionRepository selectiveOptionRepository;
    private final PurchaseHistoryRepository purchaseHistoryRepository;
    private final TagRepository tagRepository;

    public SelectiveOptionService(SelectiveOptionRepository selectiveOptionRepository, PurchaseHistoryRepository purchaseHistoryRepository, TagRepository tagRepository) {
        this.selectiveOptionRepository = selectiveOptionRepository;
        this.purchaseHistoryRepository = purchaseHistoryRepository;
        this.tagRepository = tagRepository;
    }

    public List<RequiredOptionDto> getAllOptionByCategoryName(String categoryName) {
        // 해당 카테고리의 모든 옵션 목록을 받아옵니다.
        List<RequiredOption> requiredOptionList = selectiveOptionRepository.findAllOptionByCategoryName(categoryName);

        // 각 옵션에 대해 구매 건수를 조회합니다.
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();
        for (RequiredOption requiredOption : requiredOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByCategoryNameAndOptionId(categoryName, requiredOption.getId());
            purchaseCountMap.put(requiredOption, purchaseCount);
        }

        // 내림차순으로 정렬합니다.
        List<RequiredOption> sortedKeys = purchaseCountMap.entrySet().stream()
                .sorted(Map.Entry.<RequiredOption, Long>comparingByValue().reversed())
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        // 외장 색상 옵션인 경우 특수 처리 필요
        if (categoryName.equals("exterior_color")) {
            handleExteriorColorOption(sortedKeys);
        }

        // 모든 옵션을 담아 전송합니다.
        List<RequiredOptionDto> requiredOptionDtoList = new ArrayList<>();
        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum(); // 구매비율 계산용
        for (RequiredOption requiredOption : sortedKeys) {
            Double purchaseRate = (double) purchaseCountMap.get(requiredOption) / purchaseCountSum * 100;
            requiredOptionDtoList.add(new RequiredOptionDto(requiredOption, purchaseRate, null));
        }

        return requiredOptionDtoList;
    }

    public List<OptionPackageDto> getAllPackageByCategoryName(String categoryName) {
        // 해당 카테고리의 모든 옵션 패키지 목록을 받아옵니다.
        List<OptionPackage> packageList = selectiveOptionRepository.findAllPackageByCategoryName(categoryName);

        // 각 옵션에 대해 구매 건수를 조회합니다.
        Map<OptionPackage, Long> purchaseCountMap = new HashMap<>();
        for (OptionPackage optionPackage : packageList) {
            Long purchaseCount = purchaseHistoryRepository.countByCategoryNameAndPackageId(categoryName, optionPackage.getId());
            purchaseCountMap.put(optionPackage, purchaseCount);
        }

        // 내림차순으로 정렬합니다.
        List<OptionPackage> sortedKeys = purchaseCountMap.entrySet().stream()
                .sorted(Map.Entry.<OptionPackage, Long>comparingByValue().reversed())
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        List<OptionPackageDto> optionPackageDtoList = new ArrayList<>();
        Long purchaseCountSum = purchaseHistoryRepository.count(); // 구매비율 계산용
        for (OptionPackage optionPackage : sortedKeys) {
            List<PackageComponent> packageComponentList = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId(categoryName, optionPackage.getId());
            Double purchaseRate = (double) purchaseCountMap.get(optionPackage) / purchaseCountSum * 100;
            optionPackageDtoList.add(new OptionPackageDto(optionPackage, packageComponentList, purchaseRate, null));
        }

        return optionPackageDtoList;
    }

    public List<RequiredOptionDto> getAllOptionByCategory(UserWithPresetDto userInfoDto, String categoryName) {
        List<RequiredOptionDto> response = new ArrayList<>();

        Character gender = userInfoDto.getGender();
        Integer age = userInfoDto.getAge();

        RequiredOption recommendedOption = selectiveOptionRepository.findOptionByCategoryNameAndOptionId(categoryName, userInfoDto.getRecommendOptionId().get(0)).get();
        List<RequiredOption> remainOptions = selectiveOptionRepository.findRemainOptionByCategoryNameAndOptionId(categoryName, userInfoDto.getRecommendOptionId().get(0));

        if (categoryName.equals("powertrain") || categoryName.equals("wd") || categoryName.equals("body") || categoryName.equals("wheel")) {
            List<TagDto> tagDtoList = new ArrayList<>();

            List<Tag> optionTags = tagRepository.findAllByCategoryNameAndOptionId(categoryName, recommendedOption.getId());
            List<String> userTagNames = Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3());

            // 사용자가 선택한 태그와 옵션의 태그가 겹치는 것을 찾는다.
            List<Tag> intersectTags = optionTags.stream()
                    .filter(tag -> userTagNames.contains(tag.getName()))
                    .collect(Collectors.toList());

            List<Long> tagIds = userTagNames.stream()
                    .map(tagName -> tagRepository.findByName(tagName).orElseThrow().getId())
                    .collect(Collectors.toList());

            // 태그별 옵션 선택률을 구한다. <A태그와 B옵션이 포함된 견적의 수 / A태그가 포함된 견적의 수 * 100(%)>
            if (!intersectTags.isEmpty()) {
                for (Tag tag : intersectTags) {
                    // A태그와 B옵션이 포함된 견적의 수 : countByTagIdAndCategoryNameAndOptionId
                    // A태그가 포함된 견적의 수 : countByTagId
                    Long countByTagAndOption = purchaseHistoryRepository.countByTagIdAndCategoryNameAndOptionId(tag.getId(), categoryName, recommendedOption.getId());
                    Long countByTag = purchaseHistoryRepository.countByTagId(tag.getId());
                    Double percentage = (double) countByTagAndOption / countByTag * 100;
                    tagDtoList.add(new TagDto(tag.getId(), tag.getName(), percentage));
                }
                tagDtoList.sort(Comparator.comparing(TagDto::getPercentage).reversed());
            }

            // 비슷한 사용자의 옵션 선택률을 구한다. <A옵션이 포함된 유사유저의 견적의 수 / 유사유저의 견적의 수 * 100(%)>
            // A옵션이 포함된 유사유저의 견적의 수 : countByCategoryNameAndOptionIdAndGenderAndAgeAndTags
            // 유사유저의 견적의 수 : countByGenderAndAgeAndTags
            Double similarPercentage = getSimilarPercentage(categoryName, gender, age, recommendedOption, tagIds);

            // 추천 옵션 추가
            response.add(new RequiredOptionDto(recommendedOption, similarPercentage, tagDtoList));
        }

        if (categoryName.equals("exterior_color") || categoryName.equals("interior_color")) {
            String genderRepresentation = getGenderRepresentation(gender.toString());

            Double similarPercentage = getSimilarPercentage(categoryName, gender, age, recommendedOption);
            Double genderRatio = genderRepresentation.equals(NONE) ? 0.0 : getGenderRatio(categoryName, gender, recommendedOption);
            Double ageRatio = getAgeRatio(categoryName, age, recommendedOption);

            List<TagDto> tagDtoList = Arrays.asList(new TagDto(100L, genderRepresentation, genderRatio), new TagDto(101L, age + "대", ageRatio));

            // 추천 옵션 추가
            response.add(new RequiredOptionDto(recommendedOption, similarPercentage, tagDtoList));
        }

        // 남은 옵션 추가
        Long countTotalUser = purchaseHistoryRepository.count();
        List<RequiredOptionDto> unsortedRemainOptions = new ArrayList<>();
        for (RequiredOption remainOption : remainOptions) {
            Long countUserWithOption = purchaseHistoryRepository.countByCategoryNameAndOptionId(categoryName, remainOption.getId());
            Double purchasePercentage = (double) countUserWithOption / countTotalUser * 100;
            unsortedRemainOptions.add(new RequiredOptionDto(remainOption, purchasePercentage, null));
        }
        unsortedRemainOptions.sort(Comparator.comparing(RequiredOptionDto::getPurchaseRate, Comparator.reverseOrder()));
        response.addAll(unsortedRemainOptions);

        return response;
    }

    public List<OptionPackageDto> getAllPackageByCategory(UserWithPresetDto userInfoDto, String categoryName) {
        List<OptionPackageDto> response = new ArrayList<>();

        Character gender = userInfoDto.getGender();
        Integer age = userInfoDto.getAge();

        List<OptionPackage> recommendedPackages = new ArrayList<>();

        if (!userInfoDto.getRecommendOptionId().isEmpty()) {
            recommendedPackages = selectiveOptionRepository.findAllPackageByCategoryNameAndPackageId(categoryName, userInfoDto.getRecommendOptionId());
        }
        List<OptionPackage> remainPackages = selectiveOptionRepository.findAllRemainPackageByCategoryNameAndPackageId(categoryName, userInfoDto.getRecommendOptionId());


        for (OptionPackage recommendedPackage : recommendedPackages) {
            List<Tag> optionTags = tagRepository.findAllByCategoryNameAndPackageId(categoryName, recommendedPackage.getId());
            List<String> userTagNames = Arrays.asList(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3());

            // 사용자가 선택한 태그와 패키지옵션의 태그가 겹치는 것을 찾는다.
            List<Tag> intersectTags = optionTags.stream()
                    .filter(tag -> userTagNames.contains(tag.getName()))
                    .collect(Collectors.toList());

            List<Long> tagIds = userTagNames.stream()
                    .map(tagName -> tagRepository.findByName(tagName).orElseThrow().getId())
                    .collect(Collectors.toList());

            // 태그별 패키지옵션 선택률을 구한다. <A태그와 B패키지옵션이 포함된 견적의 수 / A태그가 포함된 견적의 수 * 100(%)>
            List<TagDto> tagDtoList = new ArrayList<>();
            if (!intersectTags.isEmpty()) {
                for (Tag tag : intersectTags) {
                    // A태그와 B패키지옵션이 포함된 견적의 수 : countByTagIdAndCategoryNameAndOptionId
                    // A태그가 포함된 견적의 수 : countByTagId
                    Long countByTagAndPackage = purchaseHistoryRepository.countByTagIdAndCategoryNameAndPackageId(tag.getId(), categoryName, recommendedPackage.getId());
                    Long countByTag = purchaseHistoryRepository.countByTagId(tag.getId());
                    Double percentage = (double) countByTagAndPackage / countByTag * 100;
                    tagDtoList.add(new TagDto(tag.getId(), tag.getName(), percentage));
                }
                tagDtoList.sort(Comparator.comparing(TagDto::getPercentage).reversed());
            }

            // 비슷한 사용자의 패키지옵션 선택률을 구한다. <A패키지옵션이 포함된 유사유저의 견적의 수 / 유사유저의 견적의 수 * 100(%)>
            // A패키지옵션이 포함된 유사유저의 견적의 수 : countByCategoryNameAndOptionIdAndGenderAndAgeAndTags
            // 유사유저의 견적의 수 : countByGenderAndAgeAndTags
            Double similarPercentage = getSimilarPercentage(categoryName, gender, age, recommendedPackage, tagIds);

            // 추천 패키지옵션 추가
            List<PackageComponent> components = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId(categoryName, recommendedPackage.getId());
            response.add(new OptionPackageDto(recommendedPackage, components, similarPercentage, tagDtoList));
        }
        response.sort(Comparator.comparing(OptionPackageDto::getPurchaseRate, Comparator.reverseOrder()));

        // 남은 패키지옵션 추가
        Long countTotalUser = purchaseHistoryRepository.count();
        List<OptionPackageDto> unsortedRemainPackages = new ArrayList<>();
        for (OptionPackage remainPackage : remainPackages) {
            Long countUserWithPackage = purchaseHistoryRepository.countByCategoryNameAndPackageId(categoryName, remainPackage.getId());
            Double purchasePercentage = (double) countUserWithPackage / countTotalUser * 100;

            List<PackageComponent> components = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId(categoryName, remainPackage.getId());
            unsortedRemainPackages.add(new OptionPackageDto(remainPackage, components, purchasePercentage, null));
        }
        unsortedRemainPackages.sort(Comparator.comparing(OptionPackageDto::getPurchaseRate, Comparator.reverseOrder()));
        response.addAll(unsortedRemainPackages);

        return response;
    }

    private String getGenderRepresentation(String gender) {
        if (gender.equals("M")) {
            return MALE;
        } else if (gender.equals("F")) {
            return FEMALE;
        } else {
            return NONE;
        }
    }

    private Double getSimilarPercentage(String categoryName, Character gender, Integer age, RequiredOption recommendedOption, List<Long> tagIds) {
        Long countSimilarUserWithOption = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndGenderAndAgeAndTags(categoryName, recommendedOption.getId(), gender, age, tagIds);
        Long countSimilarUser = purchaseHistoryRepository.countByGenderAndAgeAndTags(gender, age, tagIds);
        return (double) countSimilarUserWithOption / countSimilarUser * 100;
    }

    private Double getSimilarPercentage(String categoryName, Character gender, Integer age, OptionPackage recommendedPackage, List<Long> tagIds) {
        Long countSimilarUserWithOption = purchaseHistoryRepository.countByCategoryNameAndPackageIdAndGenderAndAgeAndTags(categoryName, recommendedPackage.getId(), gender, age, tagIds);
        Long countSimilarUser = purchaseHistoryRepository.countByGenderAndAgeAndTags(gender, age, tagIds);
        return (double) countSimilarUserWithOption / countSimilarUser * 100;
    }

    private Double getSimilarPercentage(String categoryName, Character gender, Integer age, RequiredOption recommendedOption) {
        Long countSimilarUserWithOption = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndGenderAndAge(categoryName, recommendedOption.getId(), gender, age);
        Long countSimilarUser = purchaseHistoryRepository.countByGenderAndAge(gender, age);
        return (double) countSimilarUserWithOption / countSimilarUser * 100;
    }

    private Double getAgeRatio(String categoryName, Integer age, RequiredOption recommendedOption) {
        Long countUserByAge = purchaseHistoryRepository.countByAge(age);
        Long countUserByAgeAndOption = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndAge(categoryName, recommendedOption.getId(), age);
        return (double) countUserByAgeAndOption / countUserByAge * 100;
    }

    private Double getGenderRatio(String categoryName, Character gender, RequiredOption recommendedOption) {
        Long countUserByGender = purchaseHistoryRepository.countByGender(gender);
        Long countUserByGenderAndOption = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndGender(categoryName, recommendedOption.getId(), gender);
        return (double) countUserByGenderAndOption / countUserByGender * 100;
    }

    private void handleExteriorColorOption(List<RequiredOption> optionList) {
        //각 순위에 따라 다르게 Feedback을 설정해줍니다.
        for (int rank = 1; rank < optionList.size() + 1; rank++) {
            RequiredOption option = optionList.get(rank - 1);
            if (rank == 1) {
                option.setMainFeedback(String.format("%s 색상은 가장 많이 판매됐어요!", option.getName()));
                option.setSubFeedback("가장 인기있는 색상을 원하신다면, 탁월한 선택입니다.");
            }
            if (2 <= rank && rank <= 3) {
                option.setMainFeedback(String.format("%s 색상은 인기가 많아요!", option.getName()));
                option.setSubFeedback("인기있는 색상을 원하신다면, 탁월한 선택입니다.");
            }
            if (4 <= rank && rank <= 6) {
                option.setMainFeedback(String.format("%s 색상은 희소성이 있어요!", option.getName()));
                option.setSubFeedback("독특한 색상을 원하신다면, 탁월한 선택입니다.");
            }
        }
    }

    public RecommendDto recommendSelectiveOption(UserInfoDto userInfoDto) {
        // 목표 : 추천 프리셋 조건에 따라 옵션을 구하고, RecommendDto에 담아 반환합니다.
        RequiredOptionDto powertrain;
        RequiredOptionDto wd;
        RequiredOptionDto body;
        RequiredOptionDto exteriorColor;
        RequiredOptionDto interiorColor;
        RequiredOptionDto wheel;
        List<OptionPackageDto> system;
        List<OptionPackageDto> temperature;
        List<OptionPackageDto> externalDevice;
        List<OptionPackageDto> internalDevice;

        // 성별, 나이, 태그 id들 을 유저 입력 정보에서 추출합니다.
        Character gender = userInfoDto.getGender();
        Integer age = userInfoDto.getAge();
        List<Long> tagIds = Stream.of(userInfoDto.getTag1(), userInfoDto.getTag2(), userInfoDto.getTag3())
                .map(tagName -> tagRepository.findByName(tagName).orElseThrow().getId())
                .collect(Collectors.toList());

        // 옵션 선택
        // 외장 색상, 내장 색상의 경우, 연령대 및 성별 별 가장 많이 팔린 옵션으로 설정해줍니다.
        exteriorColor = getMostPurchasedOptionByCategoryNameAndGenderAndAge("exterior_color", gender, age);
        interiorColor = getMostPurchasedOptionByCategoryNameAndGenderAndAge("interior_color", gender, age);

        // 파워트레인, 바디타입, 구동방식은 태그 또한 고려하여 설정합니다.
        powertrain = getMostSelectedOptionByCategoryNameAndGenderAndAgeAndTags("powertrain", gender, age, tagIds);
        body = getMostSelectedOptionByCategoryNameAndGenderAndAgeAndTags("body", gender, age, tagIds);
        wd = getMostSelectedOptionByCategoryNameAndGenderAndAgeAndTags("wd", gender, age, tagIds);

        // 휠은 별도의 로직이 필요합니다.
        wheel = getWheelOptionByTagsAndExteriorColor(tagIds, exteriorColor.getId());

        // 부가옵션은 겹치는 태그가 하나라도 있으면 모두 담습니다.
        system = getAllPackageByCategoryNameAndTags("system", tagIds);
        temperature = getAllPackageByCategoryNameAndTags("temperature", tagIds);
        externalDevice = getAllPackageByCategoryNameAndTags("external_device", tagIds);
        internalDevice = getAllPackageByCategoryNameAndTags("internal_device", tagIds);

        return new RecommendDto(powertrain, wd, body, exteriorColor, interiorColor, wheel, system, temperature, externalDevice, internalDevice);
    }

    private RequiredOptionDto getMostPurchasedOptionByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age) {
        // 옵션id, 구매내역수 - 구매내역 수 내림차순으로 정렬
        List<PurchaseCountDto> purchaseCountDtoList;
        if (gender.equals('N')) {
            purchaseCountDtoList = purchaseHistoryRepository.countByCategoryNameAndAge(categoryName, age)
                    .stream()
                    .sorted(Comparator.comparing(PurchaseCountDto::getCount).reversed())
                    .collect(Collectors.toList());
        } else {
            purchaseCountDtoList = purchaseHistoryRepository.countByCategoryNameAndGenderAndAge(categoryName, gender, age)
                    .stream()
                    .sorted(Comparator.comparing(PurchaseCountDto::getCount).reversed())
                    .collect(Collectors.toList());
        }

        // 가장 많이 팔린 옵션을 찾습니다.
        RequiredOption defaultOption = selectiveOptionRepository.findOptionByCategoryNameAndOptionId(categoryName, 1L).orElseThrow();
        RequiredOption mostPurchasedOption;
        try {
            mostPurchasedOption = selectiveOptionRepository.findOptionByCategoryNameAndOptionId(categoryName, purchaseCountDtoList.get(0).getOptionId()).orElseThrow();
        } catch (Exception e) {
            mostPurchasedOption = defaultOption;
        }

        // Dto로 변환하여 전달합니다.
        return new RequiredOptionDto(mostPurchasedOption);
    }

    private RequiredOptionDto getMostSelectedOptionByCategoryNameAndGenderAndAgeAndTags(String categoryName, Character gender, Integer age, List<Long> tagIds) {
        // 모든 옵션 목록에 대해 진행합니다.
        final List<RequiredOption> optionList = selectiveOptionRepository.findAllOptionByCategoryName(categoryName);

        // 1. 사용자가 선택한 태그가 포함되는 옵션들을 불러옵니다.
        Map<RequiredOption, List<Tag>> optionTagListMap = new LinkedHashMap<>();
        for (RequiredOption option : optionList) {
            List<Tag> optionTagList = tagRepository.findAllByCategoryNameAndOptionId(categoryName, option.getId());
            List<Tag> interceptTagList = optionTagList.stream()
                    .filter(tag -> tagIds.contains(tag.getId()))
                    .collect(Collectors.toList());
            // 겹치는 태그가 존재하는 경우에만 Map에 담습니다.
            if (!interceptTagList.isEmpty()) {
                optionTagListMap.put(option, interceptTagList);
            }
        }

        // 2. 태그가 포함되는 옵션이 없는 경우, 연령대+성별 기준으로 내림차순 정렬하여 가장 많이 팔린 옵션을 반환합니다.
        if (optionTagListMap.isEmpty()) {
            return getMostPurchasedOptionByCategoryNameAndGenderAndAge(categoryName, gender, age);
        }

        // 3. 충돌이 없는 경우(태그가 겹치는 옵션이 1개인 경우) 해당 옵션을 선택합니다.
        if (optionTagListMap.size() == 1) {
            RequiredOption option = optionTagListMap.entrySet().iterator().next().getKey();
            return new RequiredOptionDto(option);
        }

        // 4. 충돌이 일어나는 경우(태그가 겹치는 옵션이 2개 이상인 경우) 유저 선택 우선순위가 높은 태그를 갖는 옵션을 선택합니다.
        Optional<RequiredOption> highPriorityOption;
        // 1순위 태그를 포함하는 옵션이 있다면 해당 옵션을 반환합니다.
        highPriorityOption = optionTagListMap.entrySet().stream()
                .filter(entry -> {
                    List<Tag> tagList = entry.getValue();
                    return tagList.stream()
                            .anyMatch(tag -> Objects.equals(tag.getId(), tagIds.get(0)));
                })
                .map(Map.Entry::getKey)
                .findFirst();
        if (highPriorityOption.isPresent()) {
            return new RequiredOptionDto(highPriorityOption.get());
        }

        // 2순위 태그를 포함하는 옵션이 있다면 해당 옵션을 반환합니다.
        highPriorityOption = optionTagListMap.entrySet().stream()
                .filter(entry -> {
                    List<Tag> tagList = entry.getValue();
                    return tagList.stream()
                            .anyMatch(tag -> Objects.equals(tag.getId(), tagIds.get(1)));
                })
                .map(Map.Entry::getKey)
                .findFirst();
        if (highPriorityOption.isPresent()) {
            return new RequiredOptionDto(highPriorityOption.get());
        }

        // 3순위 태그만 겹치는 경우, 아무 옵션이나(이 경우 LinkedHashMap의 첫 요소) 반환합니다.
        return new RequiredOptionDto(optionTagListMap.entrySet().iterator().next().getKey());
    }

    private RequiredOptionDto getWheelOptionByTagsAndExteriorColor(List<Long> tagIds, Long exteriorColorId) {
        // 휠만을 위한 로직이므로, 카테고리는 wheel으로 고정입니다.
        final String categoryName = "wheel";

        // 1. '디자인 중시', '안전성', '주행' 중 하나도 선택되지 않았으면 기본 휠을 반환합니다.
        Tag design = tagRepository.findByName("디자인 중시").orElseThrow();
        Tag safety = tagRepository.findByName("안전성").orElseThrow();
        Tag driving = tagRepository.findByName("주행").orElseThrow();
        if (!tagIds.contains(design.getId()) && !tagIds.contains(safety.getId()) && !tagIds.contains(driving.getId())) {
            // 기본 선택 휠은 "20인치 알로이 휠 & 타이어"이고, 해당 옵션의 id는 1입니다.
            RequiredOption option = selectiveOptionRepository.findOptionByCategoryNameAndOptionId(categoryName, 1L).orElseThrow();
            return new RequiredOptionDto(option);
        }

        // 2. '안전성' 혹은 '주행'을 선택한 경우 "알콘(alcon) 단조 브레이크 & 20인치 블랙톤 전면 가공 휠"을 선택합니다. 해당 옵션의 id는 4입니다.
        if (tagIds.contains(safety.getId()) || tagIds.contains(driving.getId())) {
            RequiredOption option = selectiveOptionRepository.findOptionByCategoryNameAndOptionId(categoryName, 4L).orElseThrow();
            return new RequiredOptionDto(option);
        }

        // 3. 트림(고정)과 외장색상 기준으로, "20인치 다크 스퍼터링 휠"과 "20인치 다크 스퍼터링 휠" 중 가장 많이 팔린 것을 반환합니다. 각각 옵션의 id는 2,3입니다.
        Long optionId;
        List<PurchaseCountDto> purchaseCountDtoList = purchaseHistoryRepository.countByCategoryNameAndExteriorColorId(categoryName, exteriorColorId);
        try {
            Long purchaseCount2 = purchaseCountDtoList.stream()
                    .filter(dto -> dto.getOptionId() == 2L)
                    .findAny().orElseThrow()
                    .getCount();
            Long purchaseCount3 = purchaseCountDtoList.stream()
                    .filter(dto -> dto.getOptionId() == 3L)
                    .findAny().orElseThrow()
                    .getCount();

            if (purchaseCount2 > purchaseCount3) {
                optionId = 2L;
            } else {
                optionId = 3L;
            }
        } catch (Exception e) {
            optionId = 1L;
        }
        RequiredOption option = selectiveOptionRepository.findOptionByCategoryNameAndOptionId(categoryName, optionId).orElseThrow();
        return new RequiredOptionDto(option);
    }

    private List<OptionPackageDto> getAllPackageByCategoryNameAndTags(String categoryName, List<Long> tagIds) {
        // 해당하는 옵션 패키지 DTO들을 담을 목표 List를 생성합니다.
        List<OptionPackageDto> optionPackageDtoList = new ArrayList<>();

        // 각 옵션 패키지에 대해 진행합니다.
        List<OptionPackage> optionPackageList = selectiveOptionRepository.findAllPackageByCategoryName(categoryName);
        for (OptionPackage optionPackage : optionPackageList) {
            // 각 옵션 패키지가 가진 태그 목록과 유저가 선택한 태그 목록에 겹치는 태그가 존재하는지 판별합니다.
            List<Tag> optionTagList = tagRepository.findAllByCategoryNameAndOptionId(categoryName, optionPackage.getId());
            Optional<Tag> intersectTag = optionTagList.stream()
                    .filter(tag -> tagIds.contains(tag.getId()))
                    .findAny();
            // 겹치는 태그가 존재한다면
            if (intersectTag.isPresent()) {
                // 해당 옵션 패키지를 DTO로 만들어 목표 List에 담습니다.
                // DTO로 만들기 위해서는 패키지에 포함된 컴포넌트들을 구해야 합니다.
                List<PackageComponent> componentList = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId(categoryName, optionPackage.getId());
                // 목표 List에 담습니다.
                optionPackageDtoList.add(new OptionPackageDto(optionPackage, componentList));
            }
        }

        return optionPackageDtoList;
    }
}
