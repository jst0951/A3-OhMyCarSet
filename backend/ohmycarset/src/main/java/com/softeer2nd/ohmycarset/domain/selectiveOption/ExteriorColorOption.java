package com.softeer2nd.ohmycarset.domain.selectiveOption;

public class ExteriorColorOption {
    private Long id;
    private String name;
    private String mainFeedback;
    private String subFeedback;
    private Integer price;
    private String imgSrc;
    private String iconSrc;

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

    public String getMainFeedback() {
        return mainFeedback;
    }

    public void setMainFeedback(String mainFeedback) {
        this.mainFeedback = mainFeedback;
    }

    public String getSubFeedback() {
        return subFeedback;
    }

    public void setSubFeedback(String subFeedback) {
        this.subFeedback = subFeedback;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getIconSrc() {
        return iconSrc;
    }

    public void setIconSrc(String iconSrc) {
        this.iconSrc = iconSrc;
    }
}
