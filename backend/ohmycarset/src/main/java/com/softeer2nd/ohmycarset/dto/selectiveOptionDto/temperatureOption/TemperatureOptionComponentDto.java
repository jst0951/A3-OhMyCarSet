package com.softeer2nd.ohmycarset.dto.selectiveOptionDto.temperatureOption;

import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOptionComponent;

public class TemperatureOptionComponentDto {
    private final Long id;
    private final String name;
    private final String description;
    private final String imgSrc;

    public TemperatureOptionComponentDto(TemperatureOptionComponent temperatureComponent) {
        this.id = temperatureComponent.getId();
        this.name = temperatureComponent.getName();
        this.description = temperatureComponent.getDescription();
        this.imgSrc = temperatureComponent.getImgSrc();
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
