package com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto;

import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import lombok.Getter;

import java.beans.ConstructorProperties;

@Getter
public class SelectiveOptionTagDto {
    private static final String PURCHASE_PERCENTAGE = "구매비율";

    private final Long optionId;
    private final String optionName;
    private final String tagName;
    private final Double percentage;

    @ConstructorProperties({"optionId", "optionName", "tagName", "percentage"})
    public SelectiveOptionTagDto(Long optionId, String optionName, String tagName, Double percentage) {
        this.optionId = optionId;
        this.optionName = optionName;
        this.tagName = tagName;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(RequiredOption requiredOption, Double percentage) {
        this.optionId = requiredOption.getId();
        this.optionName = requiredOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(RequiredOption requiredOption, Tag tag, Double percentage) {
        this.optionId = requiredOption.getId();
        this.optionName = requiredOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }


    public SelectiveOptionTagDto(OptionPackage requiredOption, Double percentage) {
        this.optionId = requiredOption.getId();
        this.optionName = requiredOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(OptionPackage requiredOption, Tag tag, Double percentage) {
        this.optionId = requiredOption.getId();
        this.optionName = requiredOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }
}
