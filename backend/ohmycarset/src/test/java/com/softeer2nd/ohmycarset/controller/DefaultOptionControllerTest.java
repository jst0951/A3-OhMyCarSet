package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.DefaultOptionCategoryDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDetailDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDto;
import com.softeer2nd.ohmycarset.service.DefaultOptionService;
import org.hamcrest.Matcher;
import org.hamcrest.Matchers;
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
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@DisplayName("DefaultOptionController 테스트")
@SpringBootTest
@AutoConfigureMockMvc
class DefaultOptionControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DefaultOptionService defaultOptionService;

    List<DefaultOptionDto> defaultOptionDtoList;

    @BeforeEach
    void setup() {
        defaultOptionDtoList = new ArrayList<>();

        defaultOptionDtoList.add(
                new DefaultOptionDto(
                        1L,
                        "Exclusive",
                        List.of(
                                new DefaultOptionCategoryDto(
                                        "성능",
                                        Arrays.asList(
                                                new DefaultOptionDetailDto(
                                                        1L,
                                                        "8단 자동변속기",
                                                        "전달 효율 증대로 전 엔진 동급 최고의 연비를 구현함은 물론, 최적의 변속 성능으로 드라이빙 감성까지 향상시켜줍니다.",
                                                        "default_option/1_1.png"
                                                ),
                                                new DefaultOptionDetailDto(
                                                        2L,
                                                        "ISG 시스템",
                                                        "신호 대기 상황이거나 정차 중일 때 차의 엔진을 일시 정지하여 연비를 향상시키고, 배출가스 발생을 억제하는 시스템입니다.",
                                                        "default_option/1_2.png"
                                                ),
                                                new DefaultOptionDetailDto(
                                                        3L,
                                                        "통합주행모드",
                                                        "COMFORT, ECO, SPORT, SMART 4가지 드라이브 모드를 지원하여 운전자의 니즈에 따른 다양한 주행 모드를 선택할 수 있습니다. 각 주행모드의 상태는 클러스터와 AVN을 통해 확인 가능합니다.",
                                                        "default_option/1_3.png"
                                                ),
                                                new DefaultOptionDetailDto(
                                                        4L,
                                                        "랙구동형 전동식 파워 스티어링(R-MDPS)",
                                                        "조향 시 운전자의 힘을 유압대신 모터가 바퀴로 전달하는 기술로 모터가 차량 하체에 장착되어 타이어를 제어합니다.",
                                                        "default_option/1_4.png"
                                                ),
                                                new DefaultOptionDetailDto(
                                                        5L,
                                                        "전자식 변속버튼",
                                                        "전자식 변속 버튼을 적용하여 조작 편의성을 높이는 동시에 하이테크적인 이미지를 연출했습니다.",
                                                        "default_option/1_5.png"
                                                )
                                        )
                                )
                        )
                )
        );
    }

    @Test
    @DisplayName("성능 카테고리에 해당하는 기본포함품목 정보를 가져온다.")
    void getDefaultOption() throws Exception {

        given(defaultOptionService.getAllDefaultOption()).willReturn(defaultOptionDtoList);

        mockMvc.perform(
                        get("/default_option")
                                .accept(MediaType.APPLICATION_JSON)
                )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].trimId").value(1L))
                .andExpect(jsonPath("$[0].trimName").value("Exclusive"))
                .andExpect(jsonPath("$[0].defaultOptionCategoryDtoList[0].categoryName").value("성능"))
                .andExpect(jsonPath("$[0].defaultOptionCategoryDtoList[0].defaultOptionDetailDtoList[0].optionId").value(1L))
                .andExpect(jsonPath("$[0].defaultOptionCategoryDtoList[0].defaultOptionDetailDtoList[1].optionName").value("ISG 시스템"))
                .andExpect(jsonPath("$[0].defaultOptionCategoryDtoList[0].defaultOptionDetailDtoList[2].description", startsWith("COMFORT, ECO")));
    }
}
