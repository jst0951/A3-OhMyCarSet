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

    public DefaultOptionDto(Trim trim, List<DefaultOptionCategoryDto> defaultOptionCategoryDtoList) {
        this.trimId = trim.getId();
        this.trimName = trim.getName();
        this.defaultOptionCategoryDtoList = defaultOptionCategoryDtoList;
    }
}
