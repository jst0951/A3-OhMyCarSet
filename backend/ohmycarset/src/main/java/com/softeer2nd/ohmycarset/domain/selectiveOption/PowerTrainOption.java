package com.softeer2nd.ohmycarset.domain.selectiveOption;

public class PowerTrainOption {
    private Long id;
    private String name;
    private String mainDescription;
    private String subDescription;
    private String mainFeedback;
    private String subFeedback;
    private Integer price;
    private String imgSrc;

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

    public String getMainDescription() {
        return mainDescription;
    }

    public void setMainDescription(String mainDescription) {
        this.mainDescription = mainDescription;
    }

    public String getSubDescription() {
        return subDescription;
    }

    public void setSubDescription(String subDescription) {
        this.subDescription = subDescription;
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
}
