package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;

import java.util.List;

public interface SelectiveOptionRepository {
    List<RequiredOption> findAllOptionByName(String optionName);
    List<OptionPackage> findAllPackageByName(String packageName);
    List<PackageComponent> findAllComponentByPackageNameAndPackageId(String packageName, Long packageId);
}
