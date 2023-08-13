package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.*;
import com.softeer2nd.ohmycarset.service.SelectiveOptionService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SelectiveOptionController {
    private final SelectiveOptionService selectiveOptionService;

    public SelectiveOptionController(SelectiveOptionService selectiveOptionService) {
        this.selectiveOptionService = selectiveOptionService;
    }

    @GetMapping(value = "/selective_option/{optionName}")
    public List<RequiredOptionDto> getOptionByName(@PathVariable String optionName) {
        return selectiveOptionService.getOptionByName(optionName);
    }

    @GetMapping(value = "/selective_option/{packageName}")
    public List<OptionPackageDto> getPackageByName(@PathVariable String packageName) {
        return selectiveOptionService.getPackageByName(packageName);
    }
}
