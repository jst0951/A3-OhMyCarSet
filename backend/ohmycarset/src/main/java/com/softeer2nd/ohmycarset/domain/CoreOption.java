package com.softeer2nd.ohmycarset.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CoreOption {
    private Long id;
    private String name;
    private Long trimId;
    private String imgSrc;

    public CoreOption(Long id, String name, Long trimId, String imgSrc) {
        this.id = id;
        this.name = name;
        this.trimId = trimId;
        this.imgSrc = imgSrc;
    }
}
