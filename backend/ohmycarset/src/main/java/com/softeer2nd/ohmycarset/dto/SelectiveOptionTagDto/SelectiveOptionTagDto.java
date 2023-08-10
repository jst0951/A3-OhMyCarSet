package com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto;

import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.domain.selectiveOption.*;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOption;

public class SelectiveOptionTagDto {
    private static final String PURCHASE_PERCENTAGE = "구매비율";

    private final Long optionId;
    private final String optionName;
    private final String tagName;
    private final Double percentage;

    public SelectiveOptionTagDto(PowerTrainOption powerTrainOption, Double percentage) {
        this.optionId = powerTrainOption.getId();
        this.optionName = powerTrainOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(PowerTrainOption powerTrainOption, Tag tag, Double percentage) {
        this.optionId = powerTrainOption.getId();
        this.optionName = powerTrainOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(WDOption wdOption, Double percentage) {
        this.optionId = wdOption.getId();
        this.optionName = wdOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(WDOption wdOption, Tag tag, Double percentage) {
        this.optionId = wdOption.getId();
        this.optionName = wdOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(BodyOption bodyOption, Double percentage) {
        this.optionId = bodyOption.getId();
        this.optionName = bodyOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(BodyOption bodyOption, Tag tag, Double percentage) {
        this.optionId = bodyOption.getId();
        this.optionName = bodyOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(ExteriorColorOption exteriorColorOption, Double percentage) {
        this.optionId = exteriorColorOption.getId();
        this.optionName = exteriorColorOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(ExteriorColorOption exteriorColorOption, Tag tag, Double percentage) {
        this.optionId = exteriorColorOption.getId();
        this.optionName = exteriorColorOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(InteriorColorOption interiorColorOption, Double percentage) {
        this.optionId = interiorColorOption.getId();
        this.optionName = interiorColorOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(InteriorColorOption interiorColorOption, Tag tag, Double percentage) {
        this.optionId = interiorColorOption.getId();
        this.optionName = interiorColorOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(WheelOption wheelOption, Double percentage) {
        this.optionId = wheelOption.getId();
        this.optionName = wheelOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(WheelOption wheelOption, Tag tag, Double percentage) {
        this.optionId = wheelOption.getId();
        this.optionName = wheelOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(SystemOption systemOption, Double percentage) {
        this.optionId = systemOption.getId();
        this.optionName = systemOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(SystemOption systemOption, Tag tag, Double percentage) {
        this.optionId = systemOption.getId();
        this.optionName = systemOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(TemperatureOption temperatureOption, Double percentage) {
        this.optionId = temperatureOption.getId();
        this.optionName = temperatureOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(TemperatureOption temperatureOption, Tag tag, Double percentage) {
        this.optionId = temperatureOption.getId();
        this.optionName = temperatureOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(ExternalDeviceOption externalDeviceOption, Double percentage) {
        this.optionId = externalDeviceOption.getId();
        this.optionName = externalDeviceOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(ExternalDeviceOption externalDeviceOption, Tag tag, Double percentage) {
        this.optionId = externalDeviceOption.getId();
        this.optionName = externalDeviceOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(InternalDeviceOption internalDeviceOption, Double percentage) {
        this.optionId = internalDeviceOption.getId();
        this.optionName = internalDeviceOption.getName();
        this.tagName = PURCHASE_PERCENTAGE;
        this.percentage = percentage;
    }

    public SelectiveOptionTagDto(InternalDeviceOption internalDeviceOption, Tag tag, Double percentage) {
        this.optionId = internalDeviceOption.getId();
        this.optionName = internalDeviceOption.getName();
        this.tagName = tag.getName();
        this.percentage = percentage;
    }

    public Long getOptionId() {
        return optionId;
    }

    public String getOptionName() {
        return optionName;
    }

    public String getTagName() {
        return tagName;
    }

    public Double getPercentage() {
        return percentage;
    }
}
