package com.softeer2nd.ohmycarset.dto.selectiveOptionDto.systemOption;

import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOption;

import java.util.List;

public class SystemOptionDto {
    private final Long id;
    private final String name;
    private final Integer price;
    private final String iconSrc;
    private final List<SystemOptionComponentDto> components;

    public SystemOptionDto(SystemOption system, List<SystemOptionComponentDto> componentDtoList) {
        this.id = system.getId();
        this.name = system.getName();
        this.price = system.getPrice();
        this.iconSrc = system.getIconSrc();
        this.components = componentDtoList;
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

    public List<SystemOptionComponentDto> getComponents() {
        return components;
    }
}
