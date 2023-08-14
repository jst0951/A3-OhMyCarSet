package com.softeer2nd.ohmycarset.domain.selective;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PackageComponent {
    private Long id;
    private Long packageId;
    private String name;
    private String description;
    private String imgSrc;
}
