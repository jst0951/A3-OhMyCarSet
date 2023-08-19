package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.dto.InteriorColorDto;
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
        "classpath:/insert/interior_color.sql",
        "classpath:/insert/trim_interior_color_map.sql"
})
@DisplayName("interior_color Serivce 테스트")
class InteriorColorServiceTest {

    private final InteriorColorService interiorColorService;

    @Autowired
    public InteriorColorServiceTest(InteriorColorService interiorColorService) {
        this.interiorColorService = interiorColorService;
    }

    @Test
    @DisplayName("각 트림별 모든 내장색상 데이터를 반환합니다.")
    void getAllInteriorColor() {
        // Given, When
        List<InteriorColorDto> interiorColorDtoList = interiorColorService.getAllInteriorColor();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(interiorColorDtoList.size()).isEqualTo(4L);

        InteriorColorDto interiorColorDto = interiorColorDtoList.get(1); // 르블랑 트림
        softAssertions.assertThat(interiorColorDto.getTrimId()).isEqualTo(2L);
        softAssertions.assertThat(interiorColorDto.getTrimName()).isEqualTo("Le Blanc (르블랑)");
        softAssertions.assertThat(interiorColorDto.getIColorList().size()).isEqualTo(2L);

        softAssertions.assertAll();
    }
}