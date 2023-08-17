package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.TagDto;
import lombok.Getter;

import java.util.List;

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
    private final Double purchaseRate;
    private final List<TagDto> tags;

    // 셀프모드/가이드모드에서 선택 옵션들을 제공받는 경우 이 생성자를 이용합니다.
    public RequiredOptionDto(RequiredOption requiredOption, Double purchaseRate, List<TagDto> tagDtoList) {
        this.id = requiredOption.getId();
        this.name = requiredOption.getName();
        this.mainDescription = requiredOption.getMainDescription();
        this.subDescription = requiredOption.getSubDescription();
        this.mainFeedback = requiredOption.getMainFeedback();
        this.subFeedback = requiredOption.getSubFeedback();
        this.price = requiredOption.getPrice();
        this.imgSrc = requiredOption.getImgSrc();
        this.iconSrc = requiredOption.getIconSrc();
        this.purchaseRate = purchaseRate;
        this.tags = tagDtoList;
    }

    // /recommend를 통해 응답을 받는 경우 이 생성자를 이용합니다.
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
        this.purchaseRate = null;
        this.tags = null;
    }
}
