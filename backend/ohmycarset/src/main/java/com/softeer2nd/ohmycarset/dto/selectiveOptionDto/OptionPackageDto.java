package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.TagDto;
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
    private final Double purchaseRate;
    private final List<TagDto> tags;

    @ConstructorProperties({"id", "name", "price", "iconSrc", "components", "purchaseRate", "tags"})
    public OptionPackageDto(Long id, String name, Integer price, String iconSrc, List<PackageComponentDto> components, Double purchaseRate, List<TagDto> tagDtoList) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.iconSrc = iconSrc;
        this.components = components;
        this.purchaseRate = purchaseRate;
        this.tags = tagDtoList;
    }

    // 셀프모드/가이드모드에서 선택 옵션들을 제공받는 경우 이 생성자를 이용합니다.
    public OptionPackageDto(OptionPackage optionPackage, List<PackageComponent> componentList, Double purchaseRate, List<TagDto> tagDtoList) {
        this.id = optionPackage.getId();
        this.name = optionPackage.getName();
        this.price = optionPackage.getPrice();
        this.iconSrc = optionPackage.getIconSrc();
        List<PackageComponentDto> componentDtoList = new ArrayList<>();
        for(PackageComponent systemOptionComponent: componentList) {
            componentDtoList.add(new PackageComponentDto(systemOptionComponent));
        }
        this.components = componentDtoList;
        this.purchaseRate = purchaseRate;
        this.tags = tagDtoList;
    }

    // /recommend를 통해 응답을 받는 경우 이 생성자를 이용합니다.
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
        this.purchaseRate = null;
        this.tags = null;
    }
}
