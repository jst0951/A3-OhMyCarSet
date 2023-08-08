package com.softeer2nd.ohmycarset.dto.selectiveOptionDto.temperatureOption;

import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOption;

import java.util.List;

public class TemperatureOptionDto {
    private final Long id;
    private final String name;
    private final Integer price;
    private final String iconSrc;
    private final List<TemperatureOptionComponentDto> components;

    public TemperatureOptionDto(TemperatureOption temperature, List<TemperatureOptionComponentDto> components) {
        this.id = temperature.getId();
        this.name = temperature.getName();
        this.price = temperature.getPrice();
        this.iconSrc = temperature.getIconSrc();
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

    public List<TemperatureOptionComponentDto> getComponents() {
        return components;
    }
}
