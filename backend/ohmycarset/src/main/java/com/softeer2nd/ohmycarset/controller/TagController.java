package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.SelectiveOptionTagDto;
import com.softeer2nd.ohmycarset.dto.UserInfoDto;
import com.softeer2nd.ohmycarset.service.TagService;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TagController {

    private final TagService tagService;
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping(value = "/tag/required_option/{optionName}")
    public List<SelectiveOptionTagDto> getPurchaseTagRequiredOption(@PathVariable String optionName) {
        return tagService.getPurchaseTagByOptionName(optionName);
    }

    @GetMapping(value = "/tag/option_package/{packageName}")
    public List<SelectiveOptionTagDto> getPurchaseTagOptionPackage(@PathVariable String packageName) {
        return tagService.getPurchaseTagByPackageName(packageName);
    }

    @PostMapping(value = "/tag/required_option/{optionName}")
    public List<SelectiveOptionTagDto> getKeywordTagRequiredOption(@RequestBody UserInfoDto userInfoDto, @PathVariable String optionName) {
        return tagService.getKeywordTagRequiredOption(userInfoDto, optionName);
    }

    @PostMapping(value = "/tag/option_package/{packageName}")
    public List<SelectiveOptionTagDto> getKeywordTagOptionPackage(@RequestBody UserInfoDto userInfoDto, @PathVariable String packageName) {
        return tagService.getKeywordTagOptionPackage(userInfoDto, packageName);
    }
}
