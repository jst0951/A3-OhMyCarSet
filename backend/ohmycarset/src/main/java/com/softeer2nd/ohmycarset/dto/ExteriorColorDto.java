package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import lombok.Getter;

import java.util.List;

@Getter
public class ExteriorColorDto {
    private final Long trimId;
    private final String trimName;
    private final List<ExteriorColor> eColorList;

    public ExteriorColorDto(Long trimId, String trimName, List<ExteriorColor> exteriorColorList) {
        this.trimId = trimId;
        this.trimName = trimName;
        this.eColorList = exteriorColorList;
    }
}
