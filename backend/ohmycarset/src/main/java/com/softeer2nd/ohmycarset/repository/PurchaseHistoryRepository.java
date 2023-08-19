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

    Long countByTagId(Long tagId);

    Long countByCategoryNameAndPackageId(String categoryName, Long packageId);

    Long countByCategoryNameAndOptionId(String optionName, Long optionId);

    Long countByTagIdAndCategoryNameAndOptionId(Long tagId, String optionName, Long optionId);

    List<PurchaseCountDto> countByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age);

    List<PurchaseCountDto> countByCategoryNameAndExteriorColorId(String categoryName, Long exteriorColorId);

    Long countByCategoryNameAndOptionIdAndGenderAndAgeAndTags(String categoryName, Long id, Character gender, Integer age, List<Long> tagIds);

    Long countByGenderAndAgeAndTags(Character gender, Integer age, List<Long> tagIds);

    Long countByCategoryNameAndOptionIdAndGender(String categoryName, Long id, Character gender);

    Long countByCategoryNameAndOptionIdAndAge(String categoryName, Long id, Integer age);

    Long countByCategoryNameAndOptionIdAndGenderAndAge(String categoryName, Long id, Character gender, Integer age);

    Long countByGenderAndAge(Character gender, Integer age);

    Long countByGender(Character gender);

    Long countByAge(Integer age);

    Long countByTagIdAndCategoryNameAndPackageId(Long id, String categoryName, Long id1);

    Long countByCategoryNameAndPackageIdAndGenderAndAgeAndTags(String categoryName, Long id, Character gender, Integer age, List<Long> tagIds);
}
