package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;

public class TrimDto {
    private final Long id;
    private final String name;
    private final String description;
    private final Integer defaultPrice;
    private final ExteriorColor repColor;
    private final Boolean isBest;

    public TrimDto(Trim trim, ExteriorColor repColor) {
        this.id = trim.getId();
        this.name = trim.getName();
        this.description = trim.getDescription();
        this.defaultPrice = trim.getDefaultPrice();
        this.repColor = repColor;
        this.isBest = trim.isBest();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Integer getDefaultPrice() {
        return defaultPrice;
    }

    public ExteriorColor getRepColor() {
        return repColor;
    }

    public Boolean getBest() {
        return isBest;
    }
}
