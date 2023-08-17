package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import lombok.Getter;

import java.beans.ConstructorProperties;
import java.util.ArrayList;
import java.util.List;

@Getter
public class OptionPackageDto {
    private final Long id;
    private final String name;
    private final Integer price;
    private final String iconSrc;
    private final List<PackageComponentDto> components;

    @ConstructorProperties({"id", "name", "price", "iconSrc", "components"})
    public OptionPackageDto(Long id, String name, Integer price, String iconSrc, List<PackageComponentDto> components) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.iconSrc = iconSrc;
        this.components = components;
    }

    public OptionPackageDto(OptionPackage optionPackage, List<PackageComponent> componentList) {
        this.id = optionPackage.getId();
        this.name = optionPackage.getName();
        this.price = optionPackage.getPrice();
        this.iconSrc = optionPackage.getIconSrc();
        List<PackageComponentDto> componentDtoList = new ArrayList<>();
        for(PackageComponent systemOptionComponent: componentList) {
            componentDtoList.add(new PackageComponentDto(systemOptionComponent));
        }
        this.components = componentDtoList;
    }
}
