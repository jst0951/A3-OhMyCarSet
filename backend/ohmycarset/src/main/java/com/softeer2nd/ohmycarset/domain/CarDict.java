package com.softeer2nd.ohmycarset.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CarDict {
    private Long id;
    private String keyword;
    private String description;
    private String imgSrc;
}
