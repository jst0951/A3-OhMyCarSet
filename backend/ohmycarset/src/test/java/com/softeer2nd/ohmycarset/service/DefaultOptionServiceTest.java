package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.dto.DefaultOptionCategoryDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDetailDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDto;
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
        "classpath:/insert/default_category.sql",
        "classpath:/insert/default_option.sql",
        "classpath:/insert/trim_default_option_map.sql"
})
@DisplayName("default_option Serivce 테스트")
class DefaultOptionServiceTest {

    private final DefaultOptionService defaultOptionService;

    @Autowired
    public DefaultOptionServiceTest(DefaultOptionService defaultOptionService) {
        this.defaultOptionService = defaultOptionService;
    }

    @Test
    @DisplayName("각 트림별 모든 기본옵션 데이터를 반환합니다.")
    void getAllDefaultOption() {
        // Given, When
        List<DefaultOptionDto> defaultOptionDtoList = defaultOptionService.getAllDefaultOption();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(defaultOptionDtoList.size()).isEqualTo(4L);

        DefaultOptionDto defaultOptionDto = defaultOptionDtoList.get(1); // 르블랑
        softAssertions.assertThat(defaultOptionDto.getTrimId()).isEqualTo(2L);
        softAssertions.assertThat(defaultOptionDto.getTrimName()).isEqualTo("Le Blanc (르블랑)");
        softAssertions.assertThat(defaultOptionDto.getDefaultOptionCategoryDtoList().size()).isEqualTo(8L);

        DefaultOptionCategoryDto defaultOptionCategoryDto = defaultOptionDto.getDefaultOptionCategoryDtoList().get(0);
        softAssertions.assertThat(defaultOptionCategoryDto.getCategoryName()).isEqualTo("성능");
        softAssertions.assertThat(defaultOptionCategoryDto.getDefaultOptionDetailDtoList().size()).isEqualTo(5L);

        DefaultOptionDetailDto defaultOptionDetailDto = defaultOptionCategoryDto.getDefaultOptionDetailDtoList().get(0);
        softAssertions.assertThat(defaultOptionDetailDto.getOptionId()).isEqualTo(1L);
        softAssertions.assertThat(defaultOptionDetailDto.getOptionName()).isEqualTo("8단 자동변속기");
        softAssertions.assertThat(defaultOptionDetailDto.getImgSrc()).isEqualTo("default_option/1_1.png");

        softAssertions.assertAll();
    }
}