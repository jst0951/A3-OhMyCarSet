package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;

import java.util.List;

public class ExteriorColorDto {
    private final Long trimId;
    private final String trimName;
    private final List<ExteriorColor> eColorList;

    public ExteriorColorDto(Trim trim, List<ExteriorColor> exteriorColorList) {
        this.trimId = trim.getId();
        this.trimName = trim.getName();
        this.eColorList = exteriorColorList;
    }

    public Long getTrimId() {
        return trimId;
    }

    public String getTrimName() {
        return trimName;
    }

    public List<ExteriorColor> geteColorList() {
        return eColorList;
    }
}
