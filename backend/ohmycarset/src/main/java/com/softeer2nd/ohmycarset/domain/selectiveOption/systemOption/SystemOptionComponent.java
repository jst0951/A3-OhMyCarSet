package com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption;

public class SystemOptionComponent {
    private Long id;
    private Long sOptionId;
    private String name;
    private String description;
    private String imgSrc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getsOptionId() {
        return sOptionId;
    }

    public void setsOptionId(Long sOptionId) {
        this.sOptionId = sOptionId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }
}
