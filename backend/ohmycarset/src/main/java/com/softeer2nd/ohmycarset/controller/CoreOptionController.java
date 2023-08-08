package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.CoreOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.CoreOptionDto;
import com.softeer2nd.ohmycarset.service.CoreOptionService;
import com.softeer2nd.ohmycarset.service.TrimService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CoreOptionController {
    private final CoreOptionService coreOptionService;

    public CoreOptionController(CoreOptionService coreOptionService, TrimService trimService) {
        this.coreOptionService = coreOptionService;
    }

    @GetMapping(value = "/core_option")
    public List<CoreOptionDto> getAllCoreOption() {
        return coreOptionService.getAllCoreOption();
    }
}
