package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOptionComponent;

public class SelectiveOptionAdditionalComponentDto {
    private final Long id;
    private final String name;
    private final String description;
    private final String imgSrc;

    public SelectiveOptionAdditionalComponentDto(SystemOptionComponent systemOptionComponent) {
        this.id = systemOptionComponent.getId();
        this.name = systemOptionComponent.getName();
        this.description = systemOptionComponent.getDescription();
        this.imgSrc = systemOptionComponent.getImgSrc();
    }

    public SelectiveOptionAdditionalComponentDto(TemperatureOptionComponent temperatureOptionComponent) {
        this.id = temperatureOptionComponent.getId();
        this.name = temperatureOptionComponent.getName();
        this.description = temperatureOptionComponent.getDescription();
        this.imgSrc = temperatureOptionComponent.getImgSrc();
    }

    public SelectiveOptionAdditionalComponentDto(ExternalDeviceOptionComponent externalDeviceOptionComponent) {
        this.id = externalDeviceOptionComponent.getId();
        this.name = externalDeviceOptionComponent.getName();
        this.description = externalDeviceOptionComponent.getDescription();
        this.imgSrc = externalDeviceOptionComponent.getImgSrc();
    }

    public SelectiveOptionAdditionalComponentDto(InternalDeviceOptionComponent internalDeviceOptionComponent) {
        this.id = internalDeviceOptionComponent.getId();
        this.name = internalDeviceOptionComponent.getName();
        this.description = internalDeviceOptionComponent.getDescription();
        this.imgSrc = internalDeviceOptionComponent.getImgSrc();
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
