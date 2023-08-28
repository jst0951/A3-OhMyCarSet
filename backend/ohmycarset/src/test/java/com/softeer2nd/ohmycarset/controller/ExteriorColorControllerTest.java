package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.dto.ExteriorColorDto;
import com.softeer2nd.ohmycarset.service.ExteriorColorService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.BDDMockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@DisplayName("ExteriorColorController 테스트")
@SpringBootTest
@AutoConfigureMockMvc
class ExteriorColorControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    ExteriorColorService exteriorColorService;

    List<ExteriorColorDto> exteriorColorDtoList;

    @BeforeEach
    void setup() {
        exteriorColorDtoList = new ArrayList<>();
        exteriorColorDtoList.add(
                new ExteriorColorDto(
                        1L,
                        "Exclusive",
                        List.of(
                                new ExteriorColor(
                                        1L,
                                        "크리미 화이트 펄",
                                        "#FAFAFA",
                                        "exterior_color/1.png"
                                ),
                                new ExteriorColor(
                                        2L,
                                        "어비스 블랙펄",
                                        "#111111",
                                        null
                                ),
                                new ExteriorColor(
                                        3L,
                                        "쉬머링 실버 메탈릭",
                                        "#9C9D9C",
                                        "exterior_color/3.png"
                                ),
                                new ExteriorColor(
                                        4L,
                                        "그라파이트 그레이 메탈릭",
                                        "#2D2926",
                                        null
                                ),
                                new ExteriorColor(
                                        5L,
                                        "문라이트 블루 펄",
                                        "#1C2234",
                                        "exterior_color/5.png"
                                ),
                                new ExteriorColor(
                                        6L,
                                        "가이아 브라운 펄",
                                        "#333635",
                                        "exterior_color/6.png"
                                )
                        )
                )
        );
    }

    @DisplayName("모든 외장색상 정보를 가져옵니다.")
    @Test
    void getAllExteriorColor() throws Exception {

        given(exteriorColorService.getAllExteriorColor()).willReturn(exteriorColorDtoList);

        mockMvc.perform(
                        get("/exterior_color")
                                .accept(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andExpectAll(
                        jsonPath("$[0].trimId").value(1L),
                        jsonPath("$[0].trimName").value("Exclusive"),
                        jsonPath("$[0].ecolorList[0].id").value(1L),
                        jsonPath("$[0].ecolorList[1].name").value("어비스 블랙펄"),
                        jsonPath("$[0].ecolorList[4].colorCode").value("#1C2234"),
                        jsonPath("$[0].ecolorList[5].imgSrc").value("exterior_color/6.png")
                );
    }
}
