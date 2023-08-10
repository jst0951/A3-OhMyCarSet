package com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.PowerTrainOption;

public class SelectiveOptionTagDto {
    private final Long optionId;
    private final String optionName;
    private final String tagName;
    private final Double percentage;

    public SelectiveOptionTagDto(PowerTrainOption powerTrainOption, Double percentage) {
        this.optionId = powerTrainOption.getId();
        this.optionName = powerTrainOption.getName();
        this.tagName = "구매비율";
        this.percentage = percentage;
    }

    public Long getOptionId() {
        return optionId;
    }

    public String getOptionName() {
        return optionName;
    }

    public String getTagName() {
        return tagName;
    }

    public Double getPercentage() {
        return percentage;
    }
}
