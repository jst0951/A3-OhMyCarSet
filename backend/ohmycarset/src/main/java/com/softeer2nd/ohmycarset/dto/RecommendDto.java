package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.OptionPackageDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.RequiredOptionDto;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.beans.ConstructorProperties;
import java.util.List;

@Getter
public class RecommendDto {

    @ConstructorProperties({"powertrain", "wd", "body", "exteriorColor", "interiorColor", "wheel", "system", "temperature", "externalDevice", "internalDevice"})
    public RecommendDto(RequiredOptionDto powertrain, RequiredOptionDto wd, RequiredOptionDto body, RequiredOptionDto exteriorColor, RequiredOptionDto interiorColor, RequiredOptionDto wheel, List<OptionPackageDto> system, List<OptionPackageDto> temperature, List<OptionPackageDto> externalDevice, List<OptionPackageDto> internalDevice) {
        this.powertrain = powertrain;
        this.wd = wd;
        this.body = body;
        this.exteriorColor = exteriorColor;
        this.interiorColor = interiorColor;
        this.wheel = wheel;
        this.system = system;
        this.temperature = temperature;
        this.externalDevice = externalDevice;
        this.internalDevice = internalDevice;
    }

    private final RequiredOptionDto powertrain;
    private final RequiredOptionDto wd;
    private final RequiredOptionDto body;
    private final RequiredOptionDto exteriorColor;
    private final RequiredOptionDto interiorColor;
    private final RequiredOptionDto wheel;
    private final List<OptionPackageDto> system;
    private final List<OptionPackageDto> temperature;
    private final List<OptionPackageDto> externalDevice;
    private final List<OptionPackageDto> internalDevice;
}
