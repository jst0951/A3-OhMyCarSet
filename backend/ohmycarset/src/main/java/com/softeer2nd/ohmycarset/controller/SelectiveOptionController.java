package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.*;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.externalDeviceOption.ExternalDeviceOptionDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.internalDeviceOption.InternalDeviceOptionDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.systemOption.SystemOptionDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.temperatureOption.TemperatureOptionDto;
import com.softeer2nd.ohmycarset.service.SelectiveOptionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SelectiveOptionController {
    private final SelectiveOptionService selectiveOptionService;

    public SelectiveOptionController(SelectiveOptionService selectiveOptionService) {
        this.selectiveOptionService = selectiveOptionService;
    }

    @GetMapping(value = "/selective_option/powertrain")
    public List<SelectiveOptionDefaultDto> getAllPowerTrain() {
        return selectiveOptionService.getAllPowerTrainOption();
    }

    @GetMapping(value = "/selective_option/wd")
    public List<SelectiveOptionDefaultDto> getAllWD() {
        return selectiveOptionService.getAllWDOption();
    }

    @GetMapping(value = "/selective_option/body")
    public List<SelectiveOptionDefaultDto> getAllBody() {
        return selectiveOptionService.getAllBodyOption();
    }

    @GetMapping(value = "/selective_option/exterior_color")
    public List<SelectiveOptionDefaultDto> getAllExteriorColor() {
        return selectiveOptionService.getAllExteriorColorOption();
    }

    @GetMapping(value = "/selective_option/interior_color")
    public List<SelectiveOptionDefaultDto> getAllInteriorColor() {
        return selectiveOptionService.getAllInteriorColorOption();
    }

    @GetMapping(value = "/selective_option/wheel")
    public List<SelectiveOptionDefaultDto> getAllWheel() {
        return selectiveOptionService.getAllWheelOption();
    }

    @GetMapping(value = "/selective_option/system")
    public List<SystemOptionDto> getAllSystem() {
        return selectiveOptionService.getAllSystemOption();
    }

    @GetMapping(value = "/selective_option/temperature")
    public List<TemperatureOptionDto> getAllTemperature() {
        return selectiveOptionService.getAllTemperatureOption();
    }

    @GetMapping(value = "/selective_option/external_device")
    public List<ExternalDeviceOptionDto> getAllExternalDevice() {
        return selectiveOptionService.getAllExternalDeviceOption();
    }

    @GetMapping(value = "/selective_option/internal_device")
    public List<InternalDeviceOptionDto> getAllInternalDevice() {
        return selectiveOptionService.getAllInternalDeviceOption();
    }
}
