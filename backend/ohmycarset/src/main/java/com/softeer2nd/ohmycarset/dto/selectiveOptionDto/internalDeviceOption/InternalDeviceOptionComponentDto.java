package com.softeer2nd.ohmycarset.dto.selectiveOptionDto.internalDeviceOption;

import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOptionComponent;

public class InternalDeviceOptionComponentDto {
    private final Long id;
    private final String name;
    private final String description;
    private final String imgSrc;

    public InternalDeviceOptionComponentDto(InternalDeviceOptionComponent internalDeviceComponent) {
        this.id = internalDeviceComponent.getId();
        this.name = internalDeviceComponent.getName();
        this.description = internalDeviceComponent.getDescription();
        this.imgSrc = internalDeviceComponent.getImgSrc();
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
