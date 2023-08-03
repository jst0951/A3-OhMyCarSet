package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.TrimDto;
import com.softeer2nd.ohmycarset.service.ExteriorColorService;
import com.softeer2nd.ohmycarset.service.TrimService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TrimController {

    private final ExteriorColorService exteriorColorService;
    private final TrimService trimService;
    public TrimController(ExteriorColorService exteriorColorService, TrimService trimService) {
        this.exteriorColorService = exteriorColorService;
        this.trimService = trimService;
    }

    @GetMapping(value = "/trim")
    public List<TrimDto> getAllTrim() {
        List<TrimDto> trimDtoList = new ArrayList<>();
        List<Trim> trimList = trimService.findAll();
        for(Trim trim: trimList) {
            ExteriorColor exteriorColor = exteriorColorService.findById(trim.getRepColorId()).orElse(null);
            trimDtoList.add(new TrimDto(trim, exteriorColor));
        }

        return trimDtoList;
    }
}
