package com.softeer2nd.ohmycarset.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DefaultOption {
    private Long id;
    private String name;
    private String description;
    private String imgSrc;
    private Long defCategoryId;

    public DefaultOption(Long id, String name, String description, String imgSrc, Long defCategoryId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.defCategoryId = defCategoryId;
    }
}
