package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.ExteriorColorOption;

public class ExteriorColorOptionDto {
    private final Long id;
    private final String name;
    private final String mainFeedback;
    private final String subFeedback;
    private final Integer price;
    private final String imgSrc;
    private final String iconSrc;

    public ExteriorColorOptionDto(ExteriorColorOption exteriorColor) {
        this.id = exteriorColor.getId();
        this.name = exteriorColor.getName();
        this.mainFeedback = exteriorColor.getMainFeedback();
        this.subFeedback = exteriorColor.getSubFeedback();
        this.price = exteriorColor.getPrice();
        this.imgSrc = exteriorColor.getImgSrc();
        this.iconSrc = exteriorColor.getIconSrc();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
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
