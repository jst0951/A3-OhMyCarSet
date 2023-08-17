package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.RecommendDto;
import com.softeer2nd.ohmycarset.dto.UserInfoDto;
import com.softeer2nd.ohmycarset.service.SelectiveOptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class RecommendController {
    private final SelectiveOptionService selectiveOptionService;

    @PostMapping(value = "/recommend")
    public RecommendDto getPreset(@RequestBody UserInfoDto userInfoDto) {
        return selectiveOptionService.recommendSelectiveOption(userInfoDto);
    }
}
