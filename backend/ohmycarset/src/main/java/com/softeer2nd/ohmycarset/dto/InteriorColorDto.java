package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import lombok.Getter;

import java.util.List;

@Getter
public class InteriorColorDto {
    private final Long trimId;
    private final String trimName;
    private final List<InteriorColor> iColorList;

    public InteriorColorDto(Long trimId, String trimName, List<InteriorColor> interiorColorList) {
        this.trimId = trimId;
        this.trimName = trimName;
        this.iColorList = interiorColorList;
    }
}
