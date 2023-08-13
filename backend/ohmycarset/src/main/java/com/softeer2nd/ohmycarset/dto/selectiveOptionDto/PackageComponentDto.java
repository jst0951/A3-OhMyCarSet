package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import lombok.Getter;

@Getter
public class PackageComponentDto {
    private final Long id;
    private final String name;
    private final String description;
    private final String imgSrc;

    public PackageComponentDto(PackageComponent component) {
        this.id = component.getId();
        this.name = component.getName();
        this.description = component.getDescription();
        this.imgSrc = component.getImgSrc();
    }
}
