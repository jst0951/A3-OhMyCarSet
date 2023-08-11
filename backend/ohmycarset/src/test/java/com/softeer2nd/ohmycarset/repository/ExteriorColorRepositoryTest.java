package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.InteriorColor;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.boot.test.context.SpringBootTest;
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
        "classpath:/insert/insert_trim_exterior_color_map.sql"
})
class ExteriorColorRepositoryTest {

    private final ExteriorColorRepository exteriorColorRepository;

    @Autowired
    public ExteriorColorRepositoryTest(JdbcTemplate jdbcTemplate) {
        this.exteriorColorRepository = new ExteriorColorRepositoryImpl(jdbcTemplate);
    }

    @Test
    @DisplayName("모든 외장색상 정보를 가져옵니다.")
    void findAll() {
        List<ExteriorColor> exteriorColors = exteriorColorRepository.findAll();
        assertThat(exteriorColors).hasSize(7);
        assertThat(exteriorColors.get(0).getName()).isEqualTo("크리미 화이트 펄");
    }

    @Test
    @DisplayName("외장색상 ID 에 해당하는 정보를 가져옵니다.")
    void findById() {
        Long trimId = 1L;
        Optional<ExteriorColor> exteriorColor = exteriorColorRepository.findById(trimId);
        assertThat(exteriorColor).isPresent();
        assertThat(exteriorColor.get().getId()).isEqualTo(trimId);
        assertThat(exteriorColor.get().getName()).isEqualTo("크리미 화이트 펄");
        assertThat(exteriorColor.get().getColorCode()).isEqualTo("#FAFAFA");
        assertThat(exteriorColor.get().getImgSrc()).isEqualTo("exterior_color/1.png");
    }

    @Test
    @DisplayName("트림 별 외장색상 정보를 가져옵니다.")
    void findAllByTrimId() {
        Long trimId = 2L;

        List<ExteriorColor> exteriorColors = exteriorColorRepository.findAllByTrimId(trimId);
        assertThat(exteriorColors).hasSize(6);

        assertThat(exteriorColors.get(0).getName()).isEqualTo("크리미 화이트 펄");
        assertThat(exteriorColors.get(0).getImgSrc()).isEqualTo("exterior_color/1.png");
        assertThat(exteriorColors.get(0).getColorCode()).isEqualTo("#FAFAFA");


        assertThat(exteriorColors.get(1).getName()).isEqualTo("어비스 블랙펄");
        assertThat(exteriorColors.get(1).getImgSrc()).isEqualTo(null);
        assertThat(exteriorColors.get(1).getColorCode()).isEqualTo("#111111");
    }
}

