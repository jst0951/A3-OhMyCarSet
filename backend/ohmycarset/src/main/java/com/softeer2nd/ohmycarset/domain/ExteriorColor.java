package com.softeer2nd.ohmycarset.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExteriorColor {
    private Long id;
    private String name;
    private String colorCode;
    private String imgSrc;

    public ExteriorColor(Long id, String name, String colorCode, String imgSrc) {
        this.id = id;
        this.name = name;
        this.colorCode = colorCode;
        this.imgSrc = imgSrc;
    }
}
