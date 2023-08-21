package com.softeer2nd.ohmycarset.config;

import com.softeer2nd.ohmycarset.domain.Tag;
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
}
