package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.ExteriorColorDto;
import com.softeer2nd.ohmycarset.service.ExteriorColorService;
import com.softeer2nd.ohmycarset.service.TrimService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@Tag(name = "외장 색상", description = "외장 색상 관련 API입니다.")
public class ExteriorColorController {

    private final ExteriorColorService exteriorColorService;
    public ExteriorColorController(TrimService trimService, ExteriorColorService exteriorColorService) {
        this.exteriorColorService = exteriorColorService;
    }

    @GetMapping(value = "/exterior_color")
    @Operation(summary = "[랜딩페이지]외장 색상", description = "모든 외장 색상 데이터를 제공합니다.")
    public List<ExteriorColorDto> getAllExteriorColor() {
        return exteriorColorService.getAllExteriorColor();
    }

}
