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

    private final TrimService trimService;
    private final InteriorColorService interiorColorService;
    public InteriorColorController(TrimService trimService, InteriorColorService interiorColorService) {
        this.trimService = trimService;
        this.interiorColorService = interiorColorService;
    }

    @GetMapping(value = "/interior_color")
    public List<InteriorColorDto> getAllInteriorColor() {
        List<InteriorColorDto> interiorColorDtoList = new ArrayList<>();
        List<Trim> trimList = trimService.findAll();
        for(Trim trim: trimList) {
            List<InteriorColor> interiorColorList = interiorColorService.findAllByTrimId(trim.getId());
            interiorColorDtoList.add(new InteriorColorDto(trim, interiorColorList));
        }

        return interiorColorDtoList;
    }
}
