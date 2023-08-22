package com.softeer2nd.ohmycarset.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InteriorColor {
    private Long id;
    private String name;
    private String imgSrc;

    public InteriorColor(Long id, String name, String imgSrc) {
        this.id = id;
        this.name = name;
        this.imgSrc = imgSrc;
    }
}
