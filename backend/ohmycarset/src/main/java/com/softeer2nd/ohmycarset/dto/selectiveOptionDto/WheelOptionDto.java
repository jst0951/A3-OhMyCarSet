package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.WDOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.WheelOption;

public class WheelOptionDto {
    private final Long id;
    private final String name;
    private final String mainFeedback;
    private final String subFeedback;
    private final Integer price;
    private final String imgSrc;
    private final String iconSrc;

    public WheelOptionDto(WheelOption wheel) {
        this.id = wheel.getId();
        this.name = wheel.getName();
        this.mainFeedback = wheel.getMainFeedback();
        this.subFeedback = wheel.getSubFeedback();
        this.price = wheel.getPrice();
        this.imgSrc = wheel.getImgSrc();
        this.iconSrc = wheel.getIconSrc();
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
