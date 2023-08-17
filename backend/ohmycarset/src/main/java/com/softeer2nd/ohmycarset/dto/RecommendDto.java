package com.softeer2nd.ohmycarset.dto;

import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.OptionPackageDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.RequiredOptionDto;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Getter
public class RecommendDto {
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
