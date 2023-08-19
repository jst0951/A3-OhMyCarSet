package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;

import java.util.List;
import java.util.Optional;

public interface SelectiveOptionRepository {
    List<RequiredOption> findAllOptionByOptionName(String optionName);

    List<OptionPackage> findAllPackageByCategoryName(String packageName);

    List<PackageComponent> findAllComponentByPackageNameAndPackageId(String packageName, Long packageId);

    Optional<RequiredOption> findOptionByCategoryNameAndOptionId(String categoryName, Long optionId);

    List<RequiredOption> findRemainOptionByCategoryNameAndOptionId(String categoryName, Long optionId);

    List<OptionPackage> findAllPackageByCategoryNameAndPackageId(String categoryName, List<Long> recommendOptionId);

    List<OptionPackage> findAllRemainPackageByCategoryNameAndPackageId(String categoryName, List<Long> recommendOptionId);
}
