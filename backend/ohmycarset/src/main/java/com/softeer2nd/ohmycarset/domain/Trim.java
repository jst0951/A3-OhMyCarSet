package com.softeer2nd.ohmycarset.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Trim {
    private Long id;
    private String name;
    private String description;
    private Integer defaultPrice;
    private Long repColorId;
    private Boolean isBest;
}
