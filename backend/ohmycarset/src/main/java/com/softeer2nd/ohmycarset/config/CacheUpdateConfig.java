package com.softeer2nd.ohmycarset.config;

import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.dto.PurchaseCountDto;
import com.softeer2nd.ohmycarset.repository.PurchaseHistoryRepository;
import com.softeer2nd.ohmycarset.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Component
@EnableScheduling
@RequiredArgsConstructor
public class CacheUpdateConfig {
    /**
     * 이 아래로는 주기적 캐시 동기화를 위한 메서드들이 존재합니다.
     */
    private final PurchaseHistoryRepository purchaseHistoryRepository;

    @CachePut(value = "count")
    public Long count() {
        return purchaseHistoryRepository.count();
    }

    @CachePut(value = "countByTagId", key = "#tagId")
    public Long countByTagId(Long tagId) {
        return purchaseHistoryRepository.countByTagId(tagId);
    }

    @CachePut(value = "countByCategoryNameAndOptionId", key = "{#optionName, #optionId}")
    public Long countByCategoryNameAndOptionId(String optionName, Long optionId) {
        return purchaseHistoryRepository.countByCategoryNameAndOptionId(optionName, optionId);
    }

    @CachePut(value = "countByCategoryNameAndPackageId", key = "{#categoryName, #packageId}")
    public Long countByCategoryNameAndPackageId(String categoryName, Long packageId) {
        return purchaseHistoryRepository.countByCategoryNameAndPackageId(categoryName, packageId);
    }

    @CachePut(value = "countByTagIdAndCategoryNameAndOptionId", key = "{#tagId, #categoryName, #optionId}")
    public Long countByTagIdAndCategoryNameAndOptionId(Long tagId, String categoryName, Long optionId) {
        return purchaseHistoryRepository.countByTagIdAndCategoryNameAndOptionId(tagId, categoryName, optionId);
    }

    @CachePut(value = "countByTagIdAndCategoryNameAndPackageId", key = "{#tagId, #categoryName, #packageId}")
    public Long countByTagIdAndCategoryNameAndPackageId(Long tagId, String categoryName, Long packageId) {
        return purchaseHistoryRepository.countByTagIdAndCategoryNameAndPackageId(tagId, categoryName, packageId);
    }

    @CachePut(value = "countByCategoryNameAndGenderAndAge", key = "{#categoryName, #gender, #age}")
    public List<PurchaseCountDto> countByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age) {
        return purchaseHistoryRepository.countByCategoryNameAndGenderAndAge(categoryName, gender, age);
    }

    @CachePut(value = "countByCategoryNameAndExteriorColorId", key = "{#categoryName, exteriorColorId}")
    public List<PurchaseCountDto> countByCategoryNameAndExteriorColorId(String categoryName, Long exteriorColorId) {
        return purchaseHistoryRepository.countByCategoryNameAndExteriorColorId(categoryName, exteriorColorId);
    }

    @CachePut(value = "countByCategoryNameAndOptionIdAndGender", key = "{#categoryName, #optionId, #gender}")
    public Long countByCategoryNameAndOptionIdAndGender(String categoryName, Long optionId, Character gender) {
        return purchaseHistoryRepository.countByCategoryNameAndOptionIdAndGender(categoryName, optionId, gender);
    }

    @CachePut(value = "countByCategoryNameAndOptionIdAndAge", key = "{#categoryName, #optionId, #age}")
    public Long countByCategoryNameAndOptionIdAndAge(String categoryName, Long optionId, Integer age) {
        return purchaseHistoryRepository.countByCategoryNameAndOptionIdAndAge(categoryName, optionId, age);
    }

    @CachePut(value = "countByCategoryNameAndOptionIdAndGenderAndAge", key = "{#categoryName, #optionId, #gender, #age}")
    public Long countByCategoryNameAndOptionIdAndGenderAndAge(String categoryName, Long optionId, Character gender, Integer age) {
        return purchaseHistoryRepository.countByCategoryNameAndOptionIdAndGenderAndAge(categoryName, optionId, gender, age);
    }

    @CachePut(value = "countByGenderAndAge", key = "{#gender, #age}")
    public Long countByGenderAndAge(Character gender, Integer age) {
        return purchaseHistoryRepository.countByGenderAndAge(gender, age);
    }

    @CachePut(value = "countByGender", key = "#gender")
    public Long countByGender(Character gender) {
        return purchaseHistoryRepository.countByGender(gender);
    }

    @CachePut(value = "countByAge", key = "#age")
    public Long countByAge(Integer age) {
        return purchaseHistoryRepository.countByAge(age);
    }
}
