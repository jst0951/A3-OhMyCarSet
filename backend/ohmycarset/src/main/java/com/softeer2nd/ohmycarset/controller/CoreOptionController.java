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
    private final TrimService trimService;

    public CoreOptionController(CoreOptionService coreOptionService, TrimService trimService) {
        this.coreOptionService = coreOptionService;
        this.trimService = trimService;
    }

    @GetMapping(value = "/core_option")
    public List<CoreOptionDto> getAllCoreOption() {
        List<CoreOptionDto> coreOptionDtoList = new ArrayList<>();
        List<Trim> trimList = trimService.findAll();

        for (Trim trim : trimList) {
            List<CoreOption> coreOptionList = coreOptionService.findByTrimId(trim.getId());
            coreOptionDtoList.add(new CoreOptionDto(trim, coreOptionList));
        }

        return coreOptionDtoList;
    }
}
