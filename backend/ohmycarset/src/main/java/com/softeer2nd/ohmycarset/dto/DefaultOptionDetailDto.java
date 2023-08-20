package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.domain.DefaultOption;
import lombok.Getter;

@Getter
public class DefaultOptionDetailDto {
    private final Long optionId;
    private final String optionName;
    private final String description;
    private final String imgSrc;

    public DefaultOptionDetailDto(DefaultOption defaultOption) {
        this.optionId = defaultOption.getId();
        this.optionName = defaultOption.getName();
        this.description = defaultOption.getDescription();
        this.imgSrc = defaultOption.getImgSrc();
    }
}
