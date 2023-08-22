package com.softeer2nd.ohmycarset.controller;


import com.softeer2nd.ohmycarset.domain.CoreOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.CoreOptionDto;
import com.softeer2nd.ohmycarset.service.CoreOptionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@DisplayName("CoreOptionController 테스트")
@SpringBootTest
@AutoConfigureMockMvc
class CoreOptionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CoreOptionService coreOptionService;

    List<CoreOptionDto> coreOptionDtoList;

    @BeforeEach
    void setup() {
        coreOptionDtoList = new ArrayList<>();

        coreOptionDtoList.add(
                new CoreOptionDto(
                        1L,
                        "Exclusive",
                        Arrays.asList(
                                new CoreOption(13L, "12.3인치 내비게이션", 1L, "core_option/1.png"),
                                new CoreOption(14L, "내비게이션 기반 스마트 크루즈 컨트롤", 1L, "core_option/2.png"),
                                new CoreOption(15L, "12.3인치 내비게이션", 1L, "core_option/3.png")
                        )
                ));
        coreOptionDtoList.add(
                new CoreOptionDto(
                        2L,
                        "Le Blanc (르블랑)",
                        Arrays.asList(
                                new CoreOption(13L, "12.3인치 내비게이션", 1L, "core_option/1.png"),
                                new CoreOption(14L, "내비게이션 기반 스마트 크루즈 컨트롤", 1L, "core_option/2.png"),
                                new CoreOption(15L, "12.3인치 내비게이션", 1L, "core_option/3.png")
                        )
                ));
        coreOptionDtoList.add(
                new CoreOptionDto(
                        3L,
                        "Prestige",
                        Arrays.asList(
                                new CoreOption(13L, "12.3인치 내비게이션", 1L, "core_option/1.png"),
                                new CoreOption(14L, "내비게이션 기반 스마트 크루즈 컨트롤", 1L, "core_option/2.png"),
                                new CoreOption(15L, "12.3인치 내비게이션", 1L, "core_option/3.png")
                        )
                ));
        coreOptionDtoList.add(
                new CoreOptionDto(
                        4L,
                        "Calligraphy",
                        Arrays.asList(
                                new CoreOption(13L, "12.3인치 내비게이션", 1L, "core_option/1.png"),
                                new CoreOption(14L, "내비게이션 기반 스마트 크루즈 컨트롤", 1L, "core_option/2.png"),
                                new CoreOption(15L, "12.3인치 내비게이션", 1L, "core_option/3.png")
                        )
                ));
    }

    @Test
    @DisplayName("모든 핵심옵션정보를 가져온다.")
    void getAllCoreOption() throws Exception {

        given(coreOptionService.getAllCoreOption()).willReturn(coreOptionDtoList);

        mockMvc.perform(
                        get("/core_option")
                                .accept(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andExpectAll(
                        jsonPath("$[0].trimId").value(1)
                );
    }
}
