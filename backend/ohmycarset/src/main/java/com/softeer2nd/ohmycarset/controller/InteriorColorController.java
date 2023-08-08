package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.InteriorColorDto;
import com.softeer2nd.ohmycarset.service.InteriorColorService;
import com.softeer2nd.ohmycarset.service.TrimService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class InteriorColorController {

    private final InteriorColorService interiorColorService;
    public InteriorColorController(TrimService trimService, InteriorColorService interiorColorService) {
        this.interiorColorService = interiorColorService;
    }

    @GetMapping(value = "/interior_color")
    public List<InteriorColorDto> getAllInteriorColor() {
        return interiorColorService.getAllInteriorColor();
    }
}
