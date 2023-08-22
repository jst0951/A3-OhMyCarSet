package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.DefaultCategory;
import com.softeer2nd.ohmycarset.domain.DefaultOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.DefaultOptionCategoryDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDetailDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDto;
import com.softeer2nd.ohmycarset.service.DefaultOptionService;
import com.softeer2nd.ohmycarset.service.TrimService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Tag(name = "기본 옵션", description = "기본 옵션 관련 API입니다.")
public class DefaultOptionController {
    private final DefaultOptionService defaultOptionService;

    @GetMapping(value = "/default_option")
    @Operation(summary = "[랜딩페이지]기본 옵션", description = "모든 기본 옵션 데이터를 제공합니다.")
    public List<DefaultOptionDto> getAllDefaultOption() {
        return defaultOptionService.getAllDefaultOption();
    }
}
