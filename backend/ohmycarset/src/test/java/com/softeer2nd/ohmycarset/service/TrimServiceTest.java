package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.dto.TrimDto;
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
        "classpath:/insert/exterior_color.sql"
})
@DisplayName("trim Serivce 테스트")
class TrimServiceTest {

    private final TrimService trimService;

    @Autowired
    public TrimServiceTest(TrimService trimService) {
        this.trimService = trimService;
    }

    @Test
    @DisplayName("각 트림의 기본 정보를 반환합니다.")
    void getAllTrim() {
        // Given, When
        List<TrimDto> trimDtoList = trimService.getAllTrim();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(trimDtoList.size()).isEqualTo(4L);

        TrimDto trimDto = trimDtoList.get(1); // 르블랑 트림
        softAssertions.assertThat(trimDto.getId()).isEqualTo(2L);
        softAssertions.assertThat(trimDto.getName()).isEqualTo("Le Blanc (르블랑)");
        softAssertions.assertThat(trimDto.getBest()).isTrue();

        softAssertions.assertAll();
    }
}