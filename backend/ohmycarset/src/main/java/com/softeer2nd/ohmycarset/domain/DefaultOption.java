package com.softeer2nd.ohmycarset.domain;

public class DefaultOption {
    private Long id;
    private String name;
    private String imgSrc;
    private Long defCategoryId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public Long getDefCategoryId() {
        return defCategoryId;
    }

    public void setDefCategoryId(Long defCategoryId) {
        this.defCategoryId = defCategoryId;
    }
}
