package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.SelectiveOptionTagDto;
import com.softeer2nd.ohmycarset.service.TagService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TagController {

    private final TagService tagService;
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping(value = "/tag/powertrain")
    public List<SelectiveOptionTagDto> getPurchaseTagPowerTrain() {
        return tagService.getPurchaseTagPowerTrain();
    }
}
