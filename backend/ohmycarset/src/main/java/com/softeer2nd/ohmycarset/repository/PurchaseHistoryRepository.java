package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import com.softeer2nd.ohmycarset.dto.PurchaseCountDto;

import java.util.List;
import java.util.Optional;

public interface PurchaseHistoryRepository {
    List<PurchaseHistory> findAll();

    Long count();

    Optional<PurchaseHistory> findById(Long id);

    List<PurchaseHistory> findAllByTrimId(Long trimId);

    Long countByTrimId(Long trimId);

    List<PurchaseHistory> findAllByTagId(Long tagID);

    Long countByTagId(Long tagId);

    List<PurchaseHistory> findAllByOptionNameAndOptionId(String optionName, Long optionId);

    Long countByOptionNameAndOptionId(String optionName, Long optionId);

    List<PurchaseHistory> findAllByPackageNameAndOptionId(String packageName, Long optionId);

    Long countByPackageNameAndOptionId(String packageName, Long optionId);

    Long countByTagIdAndOptionNameAndOptionId(Long tagId, String optionName, Long optionId);

    Long countByTagIdAndPackageNameAndOptionId(Long tagId, String packageName, Long optionId);

    List<PurchaseCountDto> countByCategoryNameAndGenderAndAgeAndTags(String optionName, Character gender, Integer age, List<Long> tagIds);
    List<PurchaseCountDto> countByPackageNameAndGenderAndAgeAndTags(String packageName, Character gender, Integer age, List<Long> tagIds);
    Long countByGenderAndAgeAndTags(Character gender, Integer age, List<Long> tagIds);

    PurchaseCountDto findOptionByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age);

    List<PurchaseCountDto> findAllByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age);

    Double countByCategoryNameAndOptionIdAndGender(String categoryName, Long id, Character gender);

    Double countByCategoryNameAndOptionIdAndAge(String categoryName, Long id, Integer age);

    List<Long> countByCategoryNameAndOptionIds(String categoryName, List<Long> optionIds);
}
