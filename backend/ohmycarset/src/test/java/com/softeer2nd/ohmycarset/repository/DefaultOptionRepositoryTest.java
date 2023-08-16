package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.DefaultOption;
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
@Sql(scripts = {
        "classpath:/insert/insert_exterior_color.sql",
        "classpath:/insert/insert_trim.sql",
        "classpath:/insert/insert_default_category.sql",
        "classpath:/insert/insert_default_option.sql",
        "classpath:/insert/insert_trim_default_option_map.sql"
})
class DefaultOptionRepositoryTest {

    private final DefaultOptionRepository defaultOptionRepository;

    @Autowired
    public DefaultOptionRepositoryTest(JdbcTemplate jdbcTemplate) {
        this.defaultOptionRepository = new DefaultOptionRepositoryImpl(jdbcTemplate);
    }

    @Test
    @DisplayName("모든 기본포함품목 정보를 가져옵니다.")
    void findAll() {
        List<DefaultOption> defaultOptions = defaultOptionRepository.findAll();
        DefaultOption option = defaultOptions.get(0);

        assertThat(defaultOptions).hasSize(123);
        assertThat(option.getName()).isEqualTo("8단 자동변속기");
        assertThat(option.getDefCategoryId()).isEqualTo(1);
        assertThat(option.getImgSrc()).isEqualTo("default_option/1_1.png");
    }

    @Test
    @DisplayName("ID에 해당하는 기본포함품목 정보를 가져옵니다.")
    void findById() {
        Long id = 1L;
        Optional<DefaultOption> option = defaultOptionRepository.findById(id);
        assertThat(option).isPresent();
        assertThat(option.get().getId()).isEqualTo(id);
        assertThat(option.get().getName()).isEqualTo("8단 자동변속기");
        assertThat(option.get().getImgSrc()).isEqualTo("default_option/1_1.png");
        assertThat(option.get().getDefCategoryId()).isEqualTo(1);
    }

    @Test
    @DisplayName("트림과 카테고리에 해당하는 기본포함품목 정보를 가져옵니다.")
    void findByTrimIdAndDefCategoryId() {
        Long trimId = 2L; // Le Blanc
        Long defCategoryId = 1L; // 성능

        List<DefaultOption> defaultOptions = defaultOptionRepository.findByTrimIdAndDefCategoryId(trimId, defCategoryId);
        DefaultOption option = defaultOptions.get(0); // 8단 자동 변속기
        assertThat(option.getName()).isEqualTo("8단 자동변속기");
        assertThat(option.getDefCategoryId()).isEqualTo(1L);
        assertThat(option.getImgSrc()).isEqualTo("default_option/1_1.png");
    }
}
