package com.softeer2nd.ohmycarset.domain;

public class Trim {
    private Long id;
    private String name;
    private String description;
    private Integer defaultPrice;
    private Long repColorId;
    private Boolean isBest;

    public Trim() {
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

    public Long getRepColorId() {
        return repColorId;
    }

    public Boolean isBest() {
        return isBest;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDefaultPrice(Integer defaultPrice) {
        this.defaultPrice = defaultPrice;
    }

    public void setRepColorId(Long repColorId) {
        this.repColorId = repColorId;
    }

    public void setIsBest(Boolean isBest) {
        this.isBest = isBest;
    }
}
