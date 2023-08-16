package com.softeer2nd.ohmycarset.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PurchaseCountDto {
    private Long optionId;
    private Long count;

    public PurchaseCountDto(Long optionId, Long count) {
        this.optionId = optionId;
        this.count = count;
    }

    public PurchaseCountDto() {
    }
}
