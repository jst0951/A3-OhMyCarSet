package com.softeer2nd.ohmycarset.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PurchaseHistory {
    private Long id;
    private Long trimId;
    private Long powertrainId;
    private Long wdId;
    private Long bodyId;
    private Long exteriorColorId;
    private Long interiorColorId;
    private Long wheelId;
    private Integer age;
    private Character gender;
    private Long tag1Id;
    private Long tag2Id;
    private Long tag3Id;
}
