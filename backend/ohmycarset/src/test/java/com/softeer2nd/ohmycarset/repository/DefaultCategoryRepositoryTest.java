package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.DefaultCategory;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@JdbcTest
@ActiveProfiles("test")
@Sql(scripts = {"classpath:/insert/insert_default_category.sql"})
class DefaultCategoryRepositoryTest {

    private final DefaultCategoryRepository defaultCategoryRepository;

    @Autowired
    public DefaultCategoryRepositoryTest(JdbcTemplate jdbcTemplate) {
        this.defaultCategoryRepository = new DefaultCategoryRepositoryImpl(jdbcTemplate);
    }

    @Test
    @DisplayName("모든 기본포함품목 카테고리 정보를 가져옵니다.")
    void findAll() {
        List<DefaultCategory> defaultCategories = defaultCategoryRepository.findAll();
        assertThat(defaultCategories).hasSize(8);
        assertThat(defaultCategories.get(0).getName()).isEqualTo("성능");
        assertThat(defaultCategories.get(1).getName()).isEqualTo("지능형 안전기술");
        assertThat(defaultCategories.get(2).getName()).isEqualTo("안전");
        assertThat(defaultCategories.get(3).getName()).isEqualTo("외관");
        assertThat(defaultCategories.get(4).getName()).isEqualTo("내장");
        assertThat(defaultCategories.get(5).getName()).isEqualTo("시트");
        assertThat(defaultCategories.get(6).getName()).isEqualTo("편의");
        assertThat(defaultCategories.get(7).getName()).isEqualTo("멀티미디어");
    }

    @Test
    @DisplayName("ID에 해당하는 기본포함품목 카테고리 정보를 가져옵니다.")
    void findById() {
        Long id = 1L;
        Optional<DefaultCategory> category = defaultCategoryRepository.findById(id);
        assertThat(category).isPresent();
        assertThat(category.get().getId()).isEqualTo(id);
        assertThat(category.get().getName()).isEqualTo("성능");
    }
}
