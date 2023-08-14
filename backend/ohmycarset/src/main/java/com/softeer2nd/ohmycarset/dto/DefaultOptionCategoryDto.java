package com.softeer2nd.ohmycarset.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class DefaultOptionCategoryDto {
    private final String categoryName;
    private final List<DefaultOptionDetailDto> defaultOptionDetailDtoList;

    public DefaultOptionCategoryDto(String categoryName, List<DefaultOptionDetailDto> defaultOptionDetailDtoList) {
        this.categoryName = categoryName;
        this.defaultOptionDetailDtoList = defaultOptionDetailDtoList;
    }
}
