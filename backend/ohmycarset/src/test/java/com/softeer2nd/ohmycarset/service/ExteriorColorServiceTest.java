package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.dto.ExteriorColorDto;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
@ActiveProfiles("test")
@Sql(scripts = {
        "classpath:/init.sql",
        "classpath:/insert/trim.sql",
        "classpath:/insert/exterior_color.sql",
        "classpath:/insert/trim_exterior_color_map.sql"
})
@DisplayName("exterior_color Serivce 테스트")
class ExteriorColorServiceTest {

    private final ExteriorColorService exteriorColorService;

    @Autowired
    public ExteriorColorServiceTest(ExteriorColorService exteriorColorService) {
        this.exteriorColorService = exteriorColorService;
    }

    @Test
    @DisplayName("각 트림별 모든 외장색상 데이터를 반환합니다.")
    void getAllExteriorColor() {
        // Given, When
        List<ExteriorColorDto> exteriorColorDtoList = exteriorColorService.getAllExteriorColor();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(exteriorColorDtoList.size()).isEqualTo(4L);

        ExteriorColorDto exteriorColorDto = exteriorColorDtoList.get(1); // 르블랑 트림
        softAssertions.assertThat(exteriorColorDto.getTrimId()).isEqualTo(2L);
        softAssertions.assertThat(exteriorColorDto.getTrimName()).isEqualTo("Le Blanc (르블랑)");
        softAssertions.assertThat(exteriorColorDto.getEColorList().size()).isEqualTo(6L);

        softAssertions.assertAll();
    }
}