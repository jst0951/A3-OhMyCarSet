package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;

import java.util.List;

public interface SelectiveOptionRepository {
    List<RequiredOption> findOptionByName(String optionName);
    List<OptionPackage> findPackageByName(String packageName);
    List<PackageComponent> findComponentByPackageNameAndPackageId(String packageName, Long packageId);
}
