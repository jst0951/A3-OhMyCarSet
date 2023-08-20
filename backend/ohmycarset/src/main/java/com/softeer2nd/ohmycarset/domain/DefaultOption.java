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
}
