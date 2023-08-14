package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.*;
import com.softeer2nd.ohmycarset.exception.CustomException;
import com.softeer2nd.ohmycarset.service.SelectiveOptionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@Tag(name = "선택옵션", description = "선택옵션 관련 API입니다.")
public class SelectiveOptionController {
    private final SelectiveOptionService selectiveOptionService;
    private final List<String> accessiblePathList = new ArrayList<>(Arrays.asList(
            "powertrain", "wd", "body", "exterior_color", "interior_color", "wheel", "system", "temperature", "external_device", "internal_device"));

    public SelectiveOptionController(SelectiveOptionService selectiveOptionService) {
        this.selectiveOptionService = selectiveOptionService;
    }

    @GetMapping(value = "/selective_option/required_option/{optionName}")
    @Operation(summary = "[셀프페이지]필수 옵션 목록", description = "주어진 옵션 카테고리의 모든 옵션 목록을 제공합니다.\n선택지 : powertrain, wd, body, wheel")
    public List<RequiredOptionDto> getAllOptionByName(@PathVariable String optionName) {
        validatePath(optionName);
        return selectiveOptionService.getAllOptionByName(optionName);
    }

    @GetMapping(value = "/selective_option/option_package/{packageName}")
    @Operation(summary = "[셀프페이지]부가 옵션 목록", description = "주어진 패키지 카테고리의 모든 옵션 목록을 제공합니다.\n선택지 : system, temperature, external_device, internal_device")
    public List<OptionPackageDto> getAllPackageByName(@PathVariable String packageName) {
        validatePath(packageName);
        return selectiveOptionService.getAllPackageByName(packageName);
    }

    private void validatePath(String path) {
        if(!accessiblePathList.contains(path)) {
            throw new CustomException(HttpStatus.NOT_FOUND, "존재하지 않는 경로입니다.");
        }
    }
}
