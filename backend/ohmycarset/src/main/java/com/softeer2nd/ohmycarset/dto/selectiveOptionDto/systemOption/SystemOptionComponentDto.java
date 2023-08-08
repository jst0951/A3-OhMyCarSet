package com.softeer2nd.ohmycarset.dto.selectiveOptionDto.systemOption;

import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOptionComponent;

public class SystemOptionComponentDto {
    private final Long id;
    private final String name;
    private final String description;
    private final String imgSrc;

    public SystemOptionComponentDto(SystemOptionComponent systemComponent) {
        this.id = systemComponent.getId();
        this.name = systemComponent.getName();
        this.description = systemComponent.getDescription();
        this.imgSrc = systemComponent.getImgSrc();
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
