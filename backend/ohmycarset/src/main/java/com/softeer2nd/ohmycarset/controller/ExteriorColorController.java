package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.ExteriorColorDto;
import com.softeer2nd.ohmycarset.service.ExteriorColorService;
import com.softeer2nd.ohmycarset.service.TrimService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ExteriorColorController {

    private final ExteriorColorService exteriorColorService;
    public ExteriorColorController(TrimService trimService, ExteriorColorService exteriorColorService) {
        this.exteriorColorService = exteriorColorService;
    }

    @GetMapping(value = "/exterior_color")
    public List<ExteriorColorDto> getAllExteriorColor() {
        return exteriorColorService.getAllExteriorColor();
    }

}
