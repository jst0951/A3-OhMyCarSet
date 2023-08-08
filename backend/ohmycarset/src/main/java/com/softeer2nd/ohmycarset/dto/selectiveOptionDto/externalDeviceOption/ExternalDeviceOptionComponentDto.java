package com.softeer2nd.ohmycarset.dto.selectiveOptionDto.externalDeviceOption;

import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOptionComponent;

public class ExternalDeviceOptionComponentDto {
    private final Long id;
    private final String name;
    private final String description;
    private final String imgSrc;

    public ExternalDeviceOptionComponentDto(ExternalDeviceOptionComponent externalDeviceComponent) {
        this.id = externalDeviceComponent.getId();
        this.name = externalDeviceComponent.getName();
        this.description = externalDeviceComponent.getDescription();
        this.imgSrc = externalDeviceComponent.getImgSrc();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImgSrc() {
        return imgSrc;
    }
}
