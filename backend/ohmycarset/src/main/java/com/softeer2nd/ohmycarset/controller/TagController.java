package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.SelectiveOptionTagDto;
import com.softeer2nd.ohmycarset.dto.UserInfoDto;
import com.softeer2nd.ohmycarset.service.TagService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Tag(name = "태그[Depreceated]", description = "태그 관련 API입니다.")
public class TagController {

    private final TagService tagService;
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

//    @GetMapping(value = "/tag/required_option/{optionName}")
//    @Operation(summary = "[셀프페이지]필수옵션 구매비율", description = "각 옵션의 구매비율을 제공합니다.\n선택지 : powertrain, wd, body, exterior_color, interior_color, wheel")
//    public List<SelectiveOptionTagDto> getPurchaseTagRequiredOption(@PathVariable String optionName) {
//        return tagService.getPurchaseTagByOptionName(optionName);
//    }
//
//    @GetMapping(value = "/tag/option_package/{packageName}")
//    @Operation(summary = "[셀프페이지]부가옵션 구매비율", description = "각 옵션의 구매비율을 제공합니다.\n선택지 : system, temperature, external_device, internal_device")
//    public List<SelectiveOptionTagDto> getPurchaseTagOptionPackage(@PathVariable String packageName) {
//        return tagService.getPurchaseTagByPackageName(packageName);
//    }

    @PostMapping(value = "/tag/required_option/{optionName}")
    @Cacheable(value = "keywordTagRequiredOption", key = "{#userInfoDto.age, #userInfoDto.gender, #userInfoDto.tag1, #userInfoDto.tag2, #userInfoDto.tag3}")
    @Operation(summary = "[가이드페이지]필수옵션 태그별 비율", description = "각 옵션의 태그별 비율을 제공합니다.\n선택지 : powertrain, wd, body, exterior_color, interior_color, wheel")
    public List<SelectiveOptionTagDto> getKeywordTagRequiredOption(@RequestBody UserInfoDto userInfoDto, @PathVariable String optionName) {
        return tagService.getKeywordTagRequiredOption(userInfoDto, optionName);
    }

    @PostMapping(value = "/tag/option_package/{packageName}")
    @Operation(summary = "[가이드페이지]부가옵션 태그별 비율", description = "각 옵션의 태그별 비율을 제공합니다.\n선택지 : system, temperature, external_device, internal_device")
    @Cacheable(value = "keywordTagOptionPackage", key = "{#userInfoDto.age, #userInfoDto.gender, #userInfoDto.tag1, #userInfoDto.tag2, #userInfoDto.tag3}")
    public List<SelectiveOptionTagDto> getKeywordTagOptionPackage(@RequestBody UserInfoDto userInfoDto, @PathVariable String packageName) {
        return tagService.getKeywordTagOptionPackage(userInfoDto, packageName);
    }
}
