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

    public CoreOptionDto(Long trimId, String trimName, List<CoreOption> coreOptionList) {
        this.trimId = trimId;
        this.trimName = trimName;
        this.coreOptionList = coreOptionList;
    }
}
