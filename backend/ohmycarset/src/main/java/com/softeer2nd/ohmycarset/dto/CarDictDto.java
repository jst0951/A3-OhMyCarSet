package com.softeer2nd.ohmycarset.dto;

import lombok.Getter;

@Getter
public class CarDictDto {
    private final Long id;
    private final String keyword;
    private final String description;
    private final String imgSrc;

    public CarDictDto(Long id, String keyword, String description, String imgSrc) {
        this.id = id;
        this.keyword = keyword;
        this.description = description;
        this.imgSrc = imgSrc;
    }
}
