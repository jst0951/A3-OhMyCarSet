package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.domain.DefaultOption;
import lombok.Getter;

@Getter
public class DefaultOptionDetailDto {
    private final Long optionId;
    private final String optionName;
    private final String description;
    private final String imgSrc;

    public DefaultOptionDetailDto(Long id, String name, String description, String imgSrc) {
        this.optionId = id;
        this.optionName = name;
        this.description = description;
        this.imgSrc = imgSrc;
    }
}
