package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.RecommendDto;
import com.softeer2nd.ohmycarset.dto.UserInfoDto;
import com.softeer2nd.ohmycarset.service.SelectiveOptionService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Tag(name = "유저 프리셋", description = "유저 프리셋 관련 API입니다.")
public class RecommendController {
    private final SelectiveOptionService selectiveOptionService;

    @PostMapping(value = "/recommend")
    @Cacheable(value = "Preset", key = "{#userInfoDto.age, #userInfoDto.gender, #userInfoDto.tag1, #userInfoDto.tag2, #userInfoDto.tag3}")
    @Operation(summary = "[가이드페이지]유저 프리셋",
            description = "유저가 선택한 사항들을 기반으로 프리셋을 만들어 제공합니다.<br>" +
                    "age[Integer] : 유저의 나이대, ex. 20대면 20, 30대면 30. 반드시 10의 배수로 제공!<br>" +
                    "gender[Character] : 유저의 성별, 남자면 \"M\", 여자면 \"F\", 선택없음이면 \"N\"(현재 선택없음은 구현 안됐음)<br>" +
                    "tag1[String] : 유저가 선택한 태그명 1 ex.\"차보호\"<br>" +
                    "tag2[String] : 유저가 선택한 태그명 2 ex.\"효율\"<br>" +
                    "tag3[String] : 유저가 선택한 태그명 3 ex.\"디자인 중시\"<br>")
    public RecommendDto getPreset(@RequestBody UserInfoDto userInfoDto) {
        return selectiveOptionService.recommendSelectiveOption(userInfoDto);
    }
}
