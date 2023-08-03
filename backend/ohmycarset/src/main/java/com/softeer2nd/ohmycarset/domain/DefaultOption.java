package com.softeer2nd.ohmycarset.domain;

public class DefaultOption {
    private Long id;
    private String name;
    private String imgSrc;
    private String defCategoryName;

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

    public String getDefCategoryName() {
        return defCategoryName;
    }

    public void setDefCategoryName(String defCategoryName) {
        this.defCategoryName = defCategoryName;
    }
}
