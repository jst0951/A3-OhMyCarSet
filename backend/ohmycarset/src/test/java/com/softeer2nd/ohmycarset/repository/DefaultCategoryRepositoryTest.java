package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.DefaultCategory;
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
        "classpath:/insert/default_category.sql"
})
@DisplayName("default_category Repository 테스트")
class DefaultCategoryRepositoryTest {

    private final DefaultCategoryRepository defaultCategoryRepository;

    @Autowired
    public DefaultCategoryRepositoryTest(DefaultCategoryRepository defaultCategoryRepository) {
        this.defaultCategoryRepository = defaultCategoryRepository;
    }

    @Test
    @DisplayName("모든 기본포함품목 카테고리 정보를 가져옵니다.")
    void findAll() {
        // Given, When
        List<DefaultCategory> defaultCategories = defaultCategoryRepository.findAll();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(defaultCategories).hasSize(8);
        softAssertions.assertThat(defaultCategories.get(0).getName()).isEqualTo("성능");
        softAssertions.assertThat(defaultCategories.get(1).getName()).isEqualTo("지능형 안전기술");
        softAssertions.assertThat(defaultCategories.get(2).getName()).isEqualTo("안전");
        softAssertions.assertThat(defaultCategories.get(3).getName()).isEqualTo("외관");
        softAssertions.assertThat(defaultCategories.get(4).getName()).isEqualTo("내장");
        softAssertions.assertThat(defaultCategories.get(5).getName()).isEqualTo("시트");
        softAssertions.assertThat(defaultCategories.get(6).getName()).isEqualTo("편의");
        softAssertions.assertThat(defaultCategories.get(7).getName()).isEqualTo("멀티미디어");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("ID에 해당하는 기본포함품목 카테고리 정보를 가져옵니다.")
    void findById() {
        // Given
        Long id = 1L;

        // When
        Optional<DefaultCategory> category = defaultCategoryRepository.findById(id);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(category).isPresent();
        softAssertions.assertThat(category.get().getId()).isEqualTo(id);
        softAssertions.assertThat(category.get().getName()).isEqualTo("성능");

        softAssertions.assertAll();
    }
}
