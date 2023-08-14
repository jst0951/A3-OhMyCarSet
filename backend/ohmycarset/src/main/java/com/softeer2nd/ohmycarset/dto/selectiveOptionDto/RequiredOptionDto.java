package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import lombok.Getter;

@Getter
public class RequiredOptionDto {
    private final Long id;
    private final String name;
    private final String mainDescription;
    private final String subDescription;
    private final String mainFeedback;
    private final String subFeedback;
    private final Integer price;
    private final String imgSrc;
    private final String iconSrc;

    public RequiredOptionDto(RequiredOption requiredOption) {
        this.id = requiredOption.getId();
        this.name = requiredOption.getName();
        this.mainDescription = requiredOption.getMainDescription();
        this.subDescription = requiredOption.getSubDescription();
        this.mainFeedback = requiredOption.getMainFeedback();
        this.subFeedback = requiredOption.getSubFeedback();
        this.price = requiredOption.getPrice();
        this.imgSrc = requiredOption.getImgSrc();
        this.iconSrc = requiredOption.getIconSrc();
    }
}
