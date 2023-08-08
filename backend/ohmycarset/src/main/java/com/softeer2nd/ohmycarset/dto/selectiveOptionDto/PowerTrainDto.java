package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.PowerTrainOption;

public class PowerTrainDto {
    private final Long id;
    private final String name;
    private final String mainDescription;
    private final String subDescription;
    private final String mainFeedback;
    private final String subFeedback;
    private final Integer price;
    private final String imgSrc;

    public PowerTrainDto(PowerTrainOption powerTrainOption) {
        this.id = powerTrainOption.getId();
        this.name = powerTrainOption.getName();
        this.mainDescription = powerTrainOption.getMainDescription();
        this.subDescription = powerTrainOption.getSubDescription();
        this.mainFeedback = powerTrainOption.getMainFeedback();
        this.subFeedback = powerTrainOption.getSubFeedback();
        this.price = powerTrainOption.getPrice();
        this.imgSrc = powerTrainOption.getImgSrc();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getMainDescription() {
        return mainDescription;
    }

    public String getSubDescription() {
        return subDescription;
    }

    public String getMainFeedback() {
        return mainFeedback;
    }

    public String getSubFeedback() {
        return subFeedback;
    }

    public Integer getPrice() {
        return price;
    }

    public String getImgSrc() {
        return imgSrc;
    }
}
