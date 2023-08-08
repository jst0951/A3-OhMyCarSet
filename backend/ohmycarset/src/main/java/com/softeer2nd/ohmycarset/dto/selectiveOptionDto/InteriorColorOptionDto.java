package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.InteriorColorOption;

public class InteriorColorOptionDto {
    private final Long id;
    private final String name;
    private final String mainFeedback;
    private final String subFeedback;
    private final Integer price;
    private final String imgSrc;
    private final String iconSrc;

    public InteriorColorOptionDto(InteriorColorOption interiorColor) {
        this.id = interiorColor.getId();
        this.name = interiorColor.getName();
        this.mainFeedback = interiorColor.getMainFeedback();
        this.subFeedback = interiorColor.getSubFeedback();
        this.price = interiorColor.getPrice();
        this.imgSrc = interiorColor.getImgSrc();
        this.iconSrc = interiorColor.getIconSrc();
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
