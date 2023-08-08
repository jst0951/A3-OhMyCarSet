package com.softeer2nd.ohmycarset.dto.selectiveOptionDto.externalDeviceOption;

import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOption;

import java.util.List;

public class ExternalDeviceOptionDto {
    private final Long id;
    private final String name;
    private final Integer price;
    private final String iconSrc;
    private final List<ExternalDeviceOptionComponentDto> components;

    public ExternalDeviceOptionDto(ExternalDeviceOption externalDevice, List<ExternalDeviceOptionComponentDto> components) {
        this.id = externalDevice.getId();
        this.name = externalDevice.getName();
        this.price = externalDevice.getPrice();
        this.iconSrc = externalDevice.getIconSrc();
        this.components = components;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getPrice() {
        return price;
    }

    public String getIconSrc() {
        return iconSrc;
    }

    public List<ExternalDeviceOptionComponentDto> getComponents() {
        return components;
    }
}
