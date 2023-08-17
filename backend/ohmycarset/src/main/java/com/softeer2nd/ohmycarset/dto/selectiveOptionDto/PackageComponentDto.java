package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.TagDto;
import lombok.Getter;

import java.beans.ConstructorProperties;
import java.util.List;

@Getter
public class PackageComponentDto {
    private final Long id;
    private final String name;
    private final String description;
    private final String imgSrc;
    private final Double purchaseRate;
    private final List<TagDto> tags;

    @ConstructorProperties({"id", "name", "description", "imgSrc", "purchaseRate", "tags"})
    public PackageComponentDto(Long id, String name, String description, String imgSrc, Double purchaseRate, List<TagDto> tags) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.purchaseRate = purchaseRate;
        this.tags = tags;
    }

    // 셀프모드/가이드모드에서 선택 옵션들을 제공받는 경우 이 생성자를 이용합니다.
    public PackageComponentDto(PackageComponent component, Double purchaseRate, List<TagDto> tagDtoList) {
        this.id = component.getId();
        this.name = component.getName();
        this.description = component.getDescription();
        this.imgSrc = component.getImgSrc();
        this.purchaseRate = purchaseRate;
        this.tags = tagDtoList;
    }

    // /recommend를 통해 응답을 받는 경우 이 생성자를 이용합니다.
    public PackageComponentDto(PackageComponent component) {
        this.id = component.getId();
        this.name = component.getName();
        this.description = component.getDescription();
        this.imgSrc = component.getImgSrc();
        this.purchaseRate = null;
        this.tags = null;
    }
}
