package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.dto.CoreOptionDto;
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
        "classpath:/insert/core_option.sql"
})
@DisplayName("core_option Serivce 테스트")
class CoreOptionServiceTest {

    private final CoreOptionService coreOptionService;

    @Autowired
    public CoreOptionServiceTest(CoreOptionService coreOptionService) {
        this.coreOptionService = coreOptionService;
    }

    @Test
    @DisplayName("각 트림별 모든 핵심옵션 데이터를 반환합니다.")
    void getAllCoreOption() {
        // Given, When
        List<CoreOptionDto> coreOptionDtoList = coreOptionService.getAllCoreOption();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(coreOptionDtoList.size()).isEqualTo(4L);

        CoreOptionDto coreOptionDto = coreOptionDtoList.get(1); // 르블랑 트림
        softAssertions.assertThat(coreOptionDto.getTrimId()).isEqualTo(2L);
        softAssertions.assertThat(coreOptionDto.getTrimName()).isEqualTo("Le Blanc (르블랑)");
        softAssertions.assertThat(coreOptionDto.getCoreOptionList().size()).isEqualTo(3L);

        softAssertions.assertAll();
    }
}