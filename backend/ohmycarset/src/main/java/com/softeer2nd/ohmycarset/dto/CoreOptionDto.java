package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.domain.CoreOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import lombok.Getter;

import java.util.List;

@Getter
public class CoreOptionDto {

    private final Long trimId;
    private final String trimName;
    List<CoreOption> coreOptionList;

    public CoreOptionDto(Trim trim, List<CoreOption> coreOptionList) {
        this.trimId = trim.getId();
        this.trimName = trim.getName();
        this.coreOptionList = coreOptionList;
    }
}
