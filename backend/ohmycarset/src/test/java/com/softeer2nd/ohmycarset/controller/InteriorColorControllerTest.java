package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import com.softeer2nd.ohmycarset.dto.InteriorColorDto;
import com.softeer2nd.ohmycarset.service.InteriorColorService;
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

import static org.mockito.BDDMockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@DisplayName("InteriorColorController 테스트")
@SpringBootTest
@AutoConfigureMockMvc
class InteriorColorControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    InteriorColorService interiorColorService;

    List<InteriorColorDto> interiorColorDtoList;

    @BeforeEach
    void setup() {
        interiorColorDtoList = new ArrayList<>();

        interiorColorDtoList.add(
                new InteriorColorDto(
                        1L,
                        "Exclusive",
                        List.of(
                                new InteriorColor(
                                        1L,
                                        "인조가죽(블랙)",
                                        "interior_color/1.png"
                                )
                        )
                )
        );

        interiorColorDtoList.add(
                new InteriorColorDto(
                        2L,
                        "Le Blanc (르블랑)",
                        List.of(
                                new InteriorColor(
                                        2L,
                                        "퀼팅 천연(블랙)",
                                        "interior_color/2.png"
                                ),
                                new InteriorColor(
                                        3L,
                                        "쿨그레이",
                                        "interior_color/3.png"
                                )
                        )
                )
        );
    }

    @DisplayName("모든 내장색상 정보를 가져옵니다.")
    @Test
    void getAllInteriorColor() throws Exception {

        given(interiorColorService.getAllInteriorColor()).willReturn(interiorColorDtoList);

        mockMvc.perform(
                        get("/interior_color")
                                .accept(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andExpectAll(
                        jsonPath("$[0].trimId").value(1L),
                        jsonPath("$[0].trimName").value("Exclusive"),
                        jsonPath("$[0].icolorList[0].name").value("인조가죽(블랙)"),
                        jsonPath("$[1].trimId").value(2L),
                        jsonPath("$[1].trimName").value("Le Blanc (르블랑)"),
                        jsonPath("$[1].icolorList[0].name").value("퀼팅 천연(블랙)"),
                        jsonPath("$[1].icolorList[1].imgSrc").value("interior_color/3.png")
                );

    }
}
