package com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto;

import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import lombok.Getter;

import java.beans.ConstructorProperties;
import java.util.List;

@Getter
public class SelectiveOptionTagDto {
    private final Long optionId;
    private final String optionName;
    private final Double purchaseRate;
    private final List<TagDto> tags;

    @ConstructorProperties({"optionId", "optionName", "purchaseRate", "tags"})
    public SelectiveOptionTagDto(Long optionId, String optionName, Double purchaseRate, List<TagDto> tagDtoList) {
        this.optionId = optionId;
        this.optionName = optionName;
        this.purchaseRate = purchaseRate;
        this.tags = tagDtoList;
    }

    public SelectiveOptionTagDto(RequiredOption requiredOption, Double purchaseRate) {
        this.optionId = requiredOption.getId();
        this.optionName = requiredOption.getName();
        this.purchaseRate = purchaseRate;
        this.tags = null;
    }

    public SelectiveOptionTagDto(RequiredOption requiredOption, Double purchaseRate, List<TagDto> tagDtoList) {
        this.optionId = requiredOption.getId();
        this.optionName = requiredOption.getName();
        this.purchaseRate = purchaseRate;
        this.tags = tagDtoList;
    }

    public SelectiveOptionTagDto(OptionPackage requiredOption, Double purchaseRate) {
        this.optionId = requiredOption.getId();
        this.optionName = requiredOption.getName();
        this.purchaseRate = purchaseRate;
        this.tags = null;
    }

    public SelectiveOptionTagDto(OptionPackage requiredOption, Double purchaseRate, List<TagDto> tagDtoList) {
        this.optionId = requiredOption.getId();
        this.optionName = requiredOption.getName();
        this.purchaseRate = purchaseRate;
        this.tags = tagDtoList;
    }
}
