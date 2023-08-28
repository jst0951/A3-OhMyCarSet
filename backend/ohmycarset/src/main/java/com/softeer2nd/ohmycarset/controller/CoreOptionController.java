package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.CoreOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.CoreOptionDto;
import com.softeer2nd.ohmycarset.service.CoreOptionService;
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
@Tag(name = "핵심 옵션", description = "핵심 옵션 관련 API입니다.")
public class CoreOptionController {
    private final CoreOptionService coreOptionService;

    @GetMapping(value = "/core_option")
    @Operation(summary = "[랜딩페이지]핵심 옵션", description = "모든 핵심 옵션 데이터를 제공합니다.")
    public List<CoreOptionDto> getAllCoreOption() {
        return coreOptionService.getAllCoreOption();
    }
}
