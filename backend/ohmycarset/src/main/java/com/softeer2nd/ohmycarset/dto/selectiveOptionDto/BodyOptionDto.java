package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.BodyOption;

public class BodyOptionDto {
    private final Long id;
    private final String name;
    private final String mainDescription;
    private final String mainFeedback;
    private final String subFeedback;
    private final Integer price;
    private final String imgSrc;

    public BodyOptionDto(BodyOption body) {
        this.id = body.getId();
        this.name = body.getName();
        this.mainDescription = body.getMainDescription();
        this.mainFeedback = body.getMainFeedback();
        this.subFeedback = body.getSubFeedback();
        this.price = body.getPrice();
        this.imgSrc = body.getImgSrc();
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
