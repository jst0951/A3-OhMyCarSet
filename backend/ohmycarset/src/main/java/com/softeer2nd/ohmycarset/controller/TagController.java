package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.SelectiveOptionTagDto;
import com.softeer2nd.ohmycarset.service.TagService;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TagController {

    private final TagService tagService;
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping(value = "/tag/powertrain")
    public List<SelectiveOptionTagDto> getPurchaseTagPowerTrainOption() {
        return tagService.getPurchaseTagPowerTrainOption();
    }

    @GetMapping(value = "/tag/wd")
    public List<SelectiveOptionTagDto> getPurchaseTagWDOption() {
        return tagService.getPurchaseTagWDOption();
    }

    @GetMapping(value = "/tag/body")
    public List<SelectiveOptionTagDto> getPurchaseTagBodyOption() {
        return tagService.getPurchaseTagBodyOption();
    }

    @GetMapping(value = "/tag/exterior_color")
    public List<SelectiveOptionTagDto> getPurchaseTagExteriorColorOption() {
        return tagService.getPurchaseTagExteriorColorOption();
    }

    @GetMapping(value = "/tag/interior_color")
    public List<SelectiveOptionTagDto> getPurchaseTagInteriorColorOption() {
        return tagService.getPurchaseTagInteriorColorOption();
    }

    @GetMapping(value = "/tag/wheel")
    public List<SelectiveOptionTagDto> getPurchaseTagWheelOption() {
        return tagService.getPurchaseTagWheelOption();
    }

    @GetMapping(value = "/tag/system")
    @Cacheable(value = "purchaseTagSystemOption")
    public List<SelectiveOptionTagDto> getPurchaseTagSystemOption() {
        return tagService.getPurchaseTagSystemOption();
    }

    @GetMapping(value = "/tag/temperature")
    @Cacheable(value = "purchaseTagTemperatureOption")
    public List<SelectiveOptionTagDto> getPurchaseTagTemperatureOption() {
        return tagService.getPurchaseTagTemperatureOption();
    }

    @GetMapping(value = "/tag/external_device")
    @Cacheable(value = "purchaseTagExternalDeviceOption")
    public List<SelectiveOptionTagDto> getPurchaseTagExternalDeviceOption() {
        return tagService.getPurchaseTagExternalDeviceOption();
    }

    @GetMapping(value = "/tag/internal_device")
    @Cacheable(value = "purchaseTagInternalDeviceOption")
    public List<SelectiveOptionTagDto> getPurchaseTagInternalDeviceOption() {
        return tagService.getPurchaseTagInternalDeviceOption();
    }
}
