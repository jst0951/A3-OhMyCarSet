package com.softeer2nd.ohmycarset.domain.selective;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequiredOption {
    private Long id;
    private String name;
    private String mainDescription;
    private String subDescription;
    private String mainFeedback;
    private String subFeedback;
    private Integer price;
    private String imgSrc;
    private String iconSrc;
}
