package com.softeer2nd.ohmycarset.domain;

public class PurchaseHistory {
    private Long id;
    private Long trimId;
    private Long powertrainId;
    private Long wdId;
    private Long bodyId;
    private Long eColorId;
    private Long iColorId;
    private Long wheelId;
    private Integer age;
    private Character gender;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTrimId() {
        return trimId;
    }

    public void setTrimId(Long trimId) {
        this.trimId = trimId;
    }

    public Long getPowertrainId() {
        return powertrainId;
    }

    public void setPowertrainId(Long powertrainId) {
        this.powertrainId = powertrainId;
    }

    public Long getWdId() {
        return wdId;
    }

    public void setWdId(Long wdId) {
        this.wdId = wdId;
    }

    public Long getBodyId() {
        return bodyId;
    }

    public void setBodyId(Long bodyId) {
        this.bodyId = bodyId;
    }

    public Long geteColorId() {
        return eColorId;
    }

    public void seteColorId(Long eColorId) {
        this.eColorId = eColorId;
    }

    public Long getiColorId() {
        return iColorId;
    }

    public void setiColorId(Long iColorId) {
        this.iColorId = iColorId;
    }

    public Long getWheelId() {
        return wheelId;
    }

    public void setWheelId(Long wheelId) {
        this.wheelId = wheelId;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Character getGender() {
        return gender;
    }

    public void setGender(Character gender) {
        this.gender = gender;
    }
}
