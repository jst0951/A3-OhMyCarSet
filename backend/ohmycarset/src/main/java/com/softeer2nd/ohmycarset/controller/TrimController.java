package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.TrimDto;
import com.softeer2nd.ohmycarset.service.ExteriorColorService;
import com.softeer2nd.ohmycarset.service.TrimService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@Tag(name = "트림", description = "트림 기본 정보 관련 API입니다.")
public class TrimController {

    private final TrimService trimService;
    public TrimController(ExteriorColorService exteriorColorService, TrimService trimService) {
        this.trimService = trimService;
    }

    @GetMapping(value = "/trim")
    @Operation(summary = "[랜딩페이지]트림 기본 데이터", description = "모든 트림의 기본 데이터 정보를 제공합니다.")
    public List<TrimDto> getAllTrim() {
        return trimService.getAllTrim();
    }
}
