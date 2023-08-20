package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.DefaultOption;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@Transactional
@ActiveProfiles("test")
@Sql(scripts = {
        "classpath:/init.sql",
        "classpath:/insert/exterior_color.sql",
        "classpath:/insert/trim.sql",
        "classpath:/insert/default_category.sql",
        "classpath:/insert/default_option.sql",
        "classpath:/insert/trim_default_option_map.sql"
})
@DisplayName("default_option Repository 테스트")
class DefaultOptionRepositoryTest {

    private final DefaultOptionRepository defaultOptionRepository;

    @Autowired
    public DefaultOptionRepositoryTest(DefaultOptionRepository defaultOptionRepository) {
        this.defaultOptionRepository = defaultOptionRepository;
    }

    @Test
    @DisplayName("모든 기본포함품목 정보를 가져옵니다.")
    void findAll() {
        // Given, When
        List<DefaultOption> defaultOptions = defaultOptionRepository.findAll();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        DefaultOption option = defaultOptions.get(0);
        softAssertions.assertThat(defaultOptions).hasSize(123);
        softAssertions.assertThat(option.getName()).isEqualTo("8단 자동변속기");
        softAssertions.assertThat(option.getDefCategoryId()).isEqualTo(1);
        softAssertions.assertThat(option.getImgSrc()).isEqualTo("default_option/1_1.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("ID에 해당하는 기본포함품목 정보를 가져옵니다.")
    void findById() {
        // Given
        Long id = 1L;

        // When
        Optional<DefaultOption> option = defaultOptionRepository.findById(id);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(option).isPresent();
        softAssertions.assertThat(option.get().getId()).isEqualTo(id);
        softAssertions.assertThat(option.get().getName()).isEqualTo("8단 자동변속기");
        softAssertions.assertThat(option.get().getImgSrc()).isEqualTo("default_option/1_1.png");
        softAssertions.assertThat(option.get().getDefCategoryId()).isEqualTo(1);

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("트림과 카테고리에 해당하는 기본포함품목 정보를 가져옵니다.")
    void findByTrimIdAndDefCategoryId() {
        // Given
        Long trimId = 2L; // Le Blanc
        Long defCategoryId = 1L; // 성능

        // When
        List<DefaultOption> defaultOptions = defaultOptionRepository.findByTrimIdAndDefCategoryId(trimId, defCategoryId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        DefaultOption option = defaultOptions.get(0); // 8단 자동 변속기
        softAssertions.assertThat(option.getName()).isEqualTo("8단 자동변속기");
        softAssertions.assertThat(option.getDefCategoryId()).isEqualTo(1L);
        softAssertions.assertThat(option.getImgSrc()).isEqualTo("default_option/1_1.png");

        softAssertions.assertAll();
    }
}
