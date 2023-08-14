package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.InteriorColorDto;
import com.softeer2nd.ohmycarset.service.InteriorColorService;
import com.softeer2nd.ohmycarset.service.TrimService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@Tag(name = "내장 색상", description = "내장 색상 관련 API입니다.")
public class InteriorColorController {

    private final InteriorColorService interiorColorService;
    public InteriorColorController(TrimService trimService, InteriorColorService interiorColorService) {
        this.interiorColorService = interiorColorService;
    }

    @GetMapping(value = "/interior_color")
    @Operation(summary = "[랜딩페이지]내장 색상", description = "모든 내장 색상 데이터를 제공합니다.")
    public List<InteriorColorDto> getAllInteriorColor() {
        return interiorColorService.getAllInteriorColor();
    }
}
