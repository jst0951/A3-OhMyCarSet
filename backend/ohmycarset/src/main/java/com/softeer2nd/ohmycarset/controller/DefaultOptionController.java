package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.DefaultCategory;
import com.softeer2nd.ohmycarset.domain.DefaultOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.DefaultOptionCategoryDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDetailDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDto;
import com.softeer2nd.ohmycarset.service.DefaultOptionService;
import com.softeer2nd.ohmycarset.service.TrimService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DefaultOptionController {
    private final DefaultOptionService defaultOptionService;

    public DefaultOptionController(DefaultOptionService defaultOptionService) {
        this.defaultOptionService = defaultOptionService;
    }

    @GetMapping(value = "/default_option")
    public List<DefaultOptionDto> getAllDefaultOption() {
        return defaultOptionService.getAllDefaultOption();
    }
}
