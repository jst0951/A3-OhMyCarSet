package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@JdbcTest
@ActiveProfiles("test")
@Sql(scripts = {
        "classpath:/insert/insert_exterior_color.sql",
        "classpath:/insert/insert_trim.sql",
        "classpath:/insert/insert_interior_color.sql",
        "classpath:/insert/insert_trim_interior_color_map.sql"
})
class InteriorColorRepositoryTest {

    private final InteriorColorRepository interiorColorRepository;

    @Autowired
    public InteriorColorRepositoryTest(JdbcTemplate jdbcTemplate) {
        this.interiorColorRepository = new InteriorColorRepositoryImpl(jdbcTemplate);
    }

    @Test
    @DisplayName("모든 내장색상 정보를 가져옵니다.")
    void findAll() {
        List<InteriorColor> interiorColors = interiorColorRepository.findAll();
        assertThat(interiorColors).hasSize(10);
    }

    @Test
    @DisplayName("내장색상 ID 에 해당하는 정보를 가져옵니다.")
    void findById() {
        Long trimId = 1L;
        Optional<InteriorColor> interiorColor = interiorColorRepository.findById(trimId);
        assertThat(interiorColor).isPresent();
        assertThat(interiorColor.get().getId()).isEqualTo(trimId);
        assertThat(interiorColor.get().getName()).isEqualTo("인조가죽(블랙)");
        assertThat(interiorColor.get().getImgSrc()).isEqualTo("interior_color/1.png");
    }

    @Test
    @DisplayName("트림 별 내장색상 정보를 가져옵니다.")
    void findAllByTrimId() {
        Long trimId = 2L;

        List<InteriorColor> interiorColors = interiorColorRepository.findAllByTrimId(trimId);
        assertThat(interiorColors).hasSize(2);
        assertThat(interiorColors.get(0).getName()).isEqualTo("퀼팅 천연(블랙)");
        assertThat(interiorColors.get(0).getImgSrc()).isEqualTo("interior_color/2.png");
        assertThat(interiorColors.get(1).getName()).isEqualTo("쿨그레이");
        assertThat(interiorColors.get(1).getImgSrc()).isEqualTo("interior_color/3.png");
    }
}
