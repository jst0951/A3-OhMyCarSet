package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.DefaultCategory;
import com.softeer2nd.ohmycarset.domain.DefaultOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.DefaultOptionCategoryDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDetailDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDto;
import com.softeer2nd.ohmycarset.service.DefaultCategoryService;
import com.softeer2nd.ohmycarset.service.DefaultOptionService;
import com.softeer2nd.ohmycarset.service.TrimService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DefaultOptionController {
    private final DefaultOptionService defaultOptionService;
    private final DefaultCategoryService defaultCategoryService;
    private final TrimService trimService;

    public DefaultOptionController(DefaultOptionService defaultOptionService, DefaultCategoryService defaultCategoryService, TrimService trimService) {
        this.defaultOptionService = defaultOptionService;
        this.defaultCategoryService = defaultCategoryService;
        this.trimService = trimService;
    }

    @GetMapping(value = "/default_option")
    public List<DefaultOptionDto> getAllDefaultOption() {
        List<DefaultOptionDto> defaultOptionDtoList = new ArrayList<>();
        List<Trim> trimList = trimService.findAll();

        for (Trim trim : trimList) {
            List<DefaultCategory> defaultCategoryList = defaultCategoryService.findAll();
            List<DefaultOptionCategoryDto> defaultOptionCategoryDtoList = new ArrayList<>();

            for(DefaultCategory defaultCategory : defaultCategoryList) {
                List<DefaultOption> defaultOptionList = defaultOptionService.findByTrimIdAndDefCategoryId(trim.getId(), defaultCategory.getId());
                List<DefaultOptionDetailDto> defaultOptionDetailDtoList = new ArrayList<>();

                for(DefaultOption defaultOption : defaultOptionList) {
                    defaultOptionDetailDtoList.add(new DefaultOptionDetailDto(defaultOption));
                }

                defaultOptionCategoryDtoList.add(new DefaultOptionCategoryDto(defaultCategory.getName(), defaultOptionDetailDtoList));
            }

            defaultOptionDtoList.add(new DefaultOptionDto(trim, defaultOptionCategoryDtoList));
        }

        return defaultOptionDtoList;
    }
}
