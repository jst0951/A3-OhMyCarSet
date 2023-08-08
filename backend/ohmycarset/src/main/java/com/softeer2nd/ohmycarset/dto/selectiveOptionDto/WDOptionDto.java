package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.WDOption;

public class WDOptionDto {
    private final Long id;
    private final String name;
    private final String mainDescription;
    private final String mainFeedback;
    private final String subFeedback;
    private final Integer price;
    private final String imgSrc;

    public WDOptionDto(WDOption wd) {
        this.id = wd.getId();
        this.name = wd.getName();
        this.mainDescription = wd.getMainDescription();
        this.mainFeedback = wd.getMainFeedback();
        this.subFeedback = wd.getSubFeedback();
        this.price = wd.getPrice();
        this.imgSrc = wd.getImgSrc();
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
