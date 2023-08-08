package com.softeer2nd.ohmycarset.dto.selectiveOptionDto.internalDeviceOption;

import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOption;

import java.util.List;

public class InternalDeviceOptionDto {
    private final Long id;
    private final String name;
    private final Integer price;
    private final String iconSrc;
    private final List<InternalDeviceOptionComponentDto> components;

    public InternalDeviceOptionDto(InternalDeviceOption internalDevice, List<InternalDeviceOptionComponentDto> components) {
        this.id = internalDevice.getId();
        this.name = internalDevice.getName();
        this.price = internalDevice.getPrice();
        this.iconSrc = internalDevice.getIconSrc();
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

    public List<InternalDeviceOptionComponentDto> getComponents() {
        return components;
    }
}
