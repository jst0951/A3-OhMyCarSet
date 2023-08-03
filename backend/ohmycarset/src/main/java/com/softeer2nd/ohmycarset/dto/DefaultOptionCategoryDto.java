package com.softeer2nd.ohmycarset.dto;

import java.util.List;

public class DefaultOptionCategoryDto {
    private final String categoryName;
    private final List<DefaultOptionDetailDto> defaultOptionDetailDtoList;

    public DefaultOptionCategoryDto(String categoryName, List<DefaultOptionDetailDto> defaultOptionDetailDtoList) {
        this.categoryName = categoryName;
        this.defaultOptionDetailDtoList = defaultOptionDetailDtoList;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public List<DefaultOptionDetailDto> getDefaultOptionDetailDtoList() {
        return defaultOptionDetailDtoList;
    }
}
