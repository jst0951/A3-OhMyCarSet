package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import com.softeer2nd.ohmycarset.dto.PurchaseCountDto;

import java.util.List;
import java.util.Optional;

public interface PurchaseHistoryRepository {
    List<PurchaseHistory> findAll();

    Long count();

    Long updateCount();

    Optional<PurchaseHistory> findById(Long id);

    List<PurchaseHistory> findAllByTrimId(Long trimId);

    Long countByTagId(Long tagId);

    Long updateCountByTagId(Long tagId);

    Long countByCategoryNameAndOptionId(String categoryName, Long optionId);

    Long updateCountByCategoryNameAndOptionId(String optionName, Long optionId);

    Long countByCategoryNameAndPackageId(String categoryName, Long packageId);

    Long updateCountByCategoryNameAndPackageId(String categoryName, Long packageId);

    Long countByTagIdAndCategoryNameAndOptionId(Long tagId, String categoryName, Long optionId);

    Long updateCountByTagIdAndCategoryNameAndOptionId(Long tagId, String categoryName, Long optionId);

    List<PurchaseCountDto> countByCategoryNameAndAge(String categoryName, Integer age);

    List<PurchaseCountDto> updateCountByCategoryNameAndAge(String categoryName, Integer age);

    List<PurchaseCountDto> countByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age);

    List<PurchaseCountDto> updateCountByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age);

    List<PurchaseCountDto> countByCategoryNameAndExteriorColorId(String categoryName, Long exteriorColorId);

    List<PurchaseCountDto> updateCountByCategoryNameAndExteriorColorId(String categoryName, Long exteriorColorId);

    Long countByCategoryNameAndOptionIdAndGenderAndAgeAndTags(String categoryName, Long id, Character gender, Integer age, List<Long> tagIds);

    Long countByGenderAndAgeAndTags(Character gender, Integer age, List<Long> tagIds);

    Long countByCategoryNameAndOptionIdAndGender(String categoryName, Long id, Character gender);

    Long updateCountByCategoryNameAndOptionIdAndGender(String categoryName, Long optionId, Character gender);

    Long countByCategoryNameAndOptionIdAndAge(String categoryName, Long id, Integer age);

    Long updateCountByCategoryNameAndOptionIdAndAge(String categoryName, Long optionId, Integer age);

    Long countByCategoryNameAndOptionIdAndGenderAndAge(String categoryName, Long id, Character gender, Integer age);

    Long updateCountByCategoryNameAndOptionIdAndGenderAndAge(String categoryName, Long optionId, Character gender, Integer age);

    Long countByGenderAndAge(Character gender, Integer age);

    Long updateCountByGenderAndAge(Character gender, Integer age);

    Long countByGender(Character gender);

    Long updateCountByGender(Character gender);

    Long countByAge(Integer age);

    Long updateCountByAge(Integer age);

    Long countByTagIdAndCategoryNameAndPackageId(Long id, String categoryName, Long id1);

    Long updateCountByTagIdAndCategoryNameAndPackageId(Long tagId, String categoryName, Long packageId);

    Long countByCategoryNameAndPackageIdAndGenderAndAgeAndTags(String categoryName, Long id, Character gender, Integer age, List<Long> tagIds);

    Long countByCategoryNameAndOptionIdAndAgeAndTags(String categoryName, Long id, Integer age, List<Long> tagIds);

    Long countByAgeAndTags(Integer age, List<Long> tagIds);

    Long countByCategoryNameAndPackageIdAndAgeAndTags(String categoryName, Long id, Integer age, List<Long> tagIds);
}
