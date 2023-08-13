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

    @GetMapping(value = "/selective_option/required_option/{optionName}")
    public List<RequiredOptionDto> getAllOptionByName(@PathVariable String optionName) {
        return selectiveOptionService.getAllOptionByName(optionName);
    }

    @GetMapping(value = "/selective_option/option_package/{packageName}")
    public List<OptionPackageDto> getAllPackageByName(@PathVariable String packageName) {
        return selectiveOptionService.getAllPackageByName(packageName);
    }
}
