package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.*;
import com.softeer2nd.ohmycarset.repository.SelectiveOptionRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SelectiveOptionService {

    private final SelectiveOptionRepository selectiveOptionRepository;

    public SelectiveOptionService(SelectiveOptionRepository selectiveOptionRepository) {
        this.selectiveOptionRepository = selectiveOptionRepository;
    }

    public List<RequiredOptionDto> getOptionByName(String optionName) {
        List<RequiredOptionDto> requiredOptionDtoList = new ArrayList<>();

        List<RequiredOption> requiredOptionList = selectiveOptionRepository.findOptionByName(optionName);

        for (RequiredOption requiredOption : requiredOptionList) {
            requiredOptionDtoList.add(new RequiredOptionDto(requiredOption));
        }

        return requiredOptionDtoList;
    }

    public List<OptionPackageDto> getPackageByName(String packageName) {
        List<OptionPackageDto> optionPackageDtoList = new ArrayList<>();

        List<OptionPackage> packageList = selectiveOptionRepository.findPackageByName(packageName);

        for (OptionPackage optionPackage : packageList) {
            List<PackageComponent> packageComponentList = selectiveOptionRepository.findComponentByPackageNameAndPackageId(packageName, optionPackage.getId());
            optionPackageDtoList.add(new OptionPackageDto(optionPackage, packageComponentList));
        }

        return optionPackageDtoList;
    }
}
