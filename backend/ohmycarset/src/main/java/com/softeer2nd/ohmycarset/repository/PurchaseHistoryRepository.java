package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;

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
}
