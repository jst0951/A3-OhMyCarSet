package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.domain.DefaultOption;

public class DefaultOptionDetailDto {
    private final Long optionId;
    private final String optionName;
    private final String imgSrc;

    public DefaultOptionDetailDto(DefaultOption defaultOption) {
        this.optionId = defaultOption.getId();
        this.optionName = defaultOption.getName();
        this.imgSrc = defaultOption.getImgSrc();
    }

    public Long getOptionId() {
        return optionId;
    }

    public String getOptionName() {
        return optionName;
    }

    public String getImgSrc() {
        return imgSrc;
    }
}
