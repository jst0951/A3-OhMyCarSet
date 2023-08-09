package com.softeer2nd.ohmycarset.dto.selectiveOptionDto;

import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOptionComponent;

import java.util.ArrayList;
import java.util.List;

public class SelectiveOptionAdditionalDto {
    private final Long id;
    private final String name;
    private final Integer price;
    private final String iconSrc;
    private final List<SelectiveOptionAdditionalComponentDto> selectiveOptionAdditionalComponentDtoList;

    public SelectiveOptionAdditionalDto(SystemOption systemOption, List<SystemOptionComponent> systemOptionComponentList) {
        this.id = systemOption.getId();
        this.name = systemOption.getName();
        this.price = systemOption.getPrice();
        this.iconSrc = systemOption.getIconSrc();
        List<SelectiveOptionAdditionalComponentDto> componentDtoList = new ArrayList<>();
        for(SystemOptionComponent systemOptionComponent: systemOptionComponentList) {
            componentDtoList.add(new SelectiveOptionAdditionalComponentDto(systemOptionComponent));
        }
        this.selectiveOptionAdditionalComponentDtoList = componentDtoList;
    }

    public SelectiveOptionAdditionalDto(TemperatureOption temperatureOption, List<TemperatureOptionComponent> temperatureOptionComponentList) {
        this.id = temperatureOption.getId();
        this.name = temperatureOption.getName();
        this.price = temperatureOption.getPrice();
        this.iconSrc = temperatureOption.getIconSrc();
        List<SelectiveOptionAdditionalComponentDto> componentDtoList = new ArrayList<>();
        for(TemperatureOptionComponent temperatureOptionComponent: temperatureOptionComponentList) {
            componentDtoList.add(new SelectiveOptionAdditionalComponentDto(temperatureOptionComponent));
        }
        this.selectiveOptionAdditionalComponentDtoList = componentDtoList;
    }

    public SelectiveOptionAdditionalDto(ExternalDeviceOption externalDeviceOption, List<ExternalDeviceOptionComponent> externalDeviceOptionComponentList) {
        this.id = externalDeviceOption.getId();
        this.name = externalDeviceOption.getName();
        this.price = externalDeviceOption.getPrice();
        this.iconSrc = externalDeviceOption.getIconSrc();
        List<SelectiveOptionAdditionalComponentDto> componentDtoList = new ArrayList<>();
        for(ExternalDeviceOptionComponent externalDeviceOptionComponent: externalDeviceOptionComponentList) {
            componentDtoList.add(new SelectiveOptionAdditionalComponentDto(externalDeviceOptionComponent));
        }
        this.selectiveOptionAdditionalComponentDtoList = componentDtoList;
    }

    public SelectiveOptionAdditionalDto(InternalDeviceOption internalDeviceOption, List<InternalDeviceOptionComponent> internalDeviceOptionComponentList) {
        this.id = internalDeviceOption.getId();
        this.name = internalDeviceOption.getName();
        this.price = internalDeviceOption.getPrice();
        this.iconSrc = internalDeviceOption.getIconSrc();
        List<SelectiveOptionAdditionalComponentDto> componentDtoList = new ArrayList<>();
        for(InternalDeviceOptionComponent internalDeviceOptionComponent: internalDeviceOptionComponentList) {
            componentDtoList.add(new SelectiveOptionAdditionalComponentDto(internalDeviceOptionComponent));
        }
        this.selectiveOptionAdditionalComponentDtoList = componentDtoList;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Integer getPrice() {
        return price;
    }

    public String getIconSrc() {
        return iconSrc;
    }

    public List<SelectiveOptionAdditionalComponentDto> getComponents() {
        return selectiveOptionAdditionalComponentDtoList;
    }
}
