package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.domain.DefaultOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import lombok.Getter;

import java.util.List;

@Getter
public class DefaultOptionDto {
    private final Long trimId;
    private final String trimName;
    private final List<DefaultOptionCategoryDto> defaultOptionCategoryDtoList;

    public DefaultOptionDto(Long trimId, String trimName, List<DefaultOptionCategoryDto> defaultOptionCategoryDtoList) {
        this.trimId = trimId;
        this.trimName = trimName;
        this.defaultOptionCategoryDtoList = defaultOptionCategoryDtoList;
    }
}
