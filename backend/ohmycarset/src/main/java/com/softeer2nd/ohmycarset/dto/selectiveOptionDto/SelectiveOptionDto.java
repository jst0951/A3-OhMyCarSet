package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.*;

public class SelectiveOptionDto {
    private final Long id;
    private final String name;
    private final String mainDescription;
    private final String subDescription;
    private final String mainFeedback;
    private final String subFeedback;
    private final Integer price;
    private final String imgSrc;
    private final String iconSrc;

    public SelectiveOptionDto(PowerTrainOption powerTrainOption) {
        this.id = powerTrainOption.getId();
        this.name = powerTrainOption.getName();
        this.mainDescription = powerTrainOption.getMainDescription();
        this.subDescription = powerTrainOption.getSubDescription();
        this.mainFeedback = powerTrainOption.getMainFeedback();
        this.subFeedback = powerTrainOption.getSubFeedback();
        this.price = powerTrainOption.getPrice();
        this.imgSrc = powerTrainOption.getImgSrc();
        this.iconSrc = null;
    }

    public SelectiveOptionDto(WDOption wdOption) {
        this.id = wdOption.getId();
        this.name = wdOption.getName();
        this.mainDescription = wdOption.getMainDescription();
        this.subDescription = null;
        this.mainFeedback = wdOption.getMainFeedback();
        this.subFeedback = wdOption.getSubFeedback();
        this.price = wdOption.getPrice();
        this.imgSrc = wdOption.getImgSrc();
        this.iconSrc = null;
    }

    public SelectiveOptionDto(BodyOption bodyOption) {
        this.id = bodyOption.getId();
        this.name = bodyOption.getName();
        this.mainDescription = bodyOption.getMainDescription();
        this.subDescription = null;
        this.mainFeedback = bodyOption.getMainFeedback();
        this.subFeedback = bodyOption.getSubFeedback();
        this.price = bodyOption.getPrice();
        this.imgSrc = bodyOption.getImgSrc();
        this.iconSrc = null;
    }

    public SelectiveOptionDto(ExteriorColorOption exteriorColorOption) {
        this.id = exteriorColorOption.getId();
        this.name = exteriorColorOption.getName();
        this.mainDescription = null;
        this.subDescription = null;
        this.mainFeedback = exteriorColorOption.getMainFeedback();;
        this.subFeedback = exteriorColorOption.getSubFeedback();
        this.price = exteriorColorOption.getPrice();
        this.imgSrc = exteriorColorOption.getImgSrc();
        this.iconSrc = exteriorColorOption.getIconSrc();
    }

    public SelectiveOptionDto(InteriorColorOption interiorColorOption) {
        this.id = interiorColorOption.getId();
        this.name = interiorColorOption.getName();
        this.mainDescription = null;
        this.subDescription = null;
        this.mainFeedback = interiorColorOption.getMainFeedback();
        this.subFeedback = interiorColorOption.getSubFeedback();
        this.price = interiorColorOption.getPrice();
        this.imgSrc = interiorColorOption.getImgSrc();
        this.iconSrc = interiorColorOption.getIconSrc();
    }

    public SelectiveOptionDto(WheelOption wheelOption) {
        this.id = wheelOption.getId();
        this.name = wheelOption.getName();
        this.mainDescription = null;
        this.subDescription = null;
        this.mainFeedback = wheelOption.getMainFeedback();
        this.subFeedback = wheelOption.getSubFeedback();
        this.price = wheelOption.getPrice();
        this.imgSrc = wheelOption.getImgSrc();
        this.iconSrc = wheelOption.getIconSrc();
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

    public String getIconSrc() {
        return iconSrc;
    }
}
