package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
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
        "classpath:/insert/interior_color.sql",
        "classpath:/insert/trim_interior_color_map.sql"
})
@DisplayName("interior_color Repository 테스트")
class InteriorColorRepositoryTest {

    private final InteriorColorRepository interiorColorRepository;

    @Autowired
    public InteriorColorRepositoryTest(InteriorColorRepository interiorColorRepository) {
        this.interiorColorRepository = interiorColorRepository;
    }

    @Test
    @DisplayName("모든 내장색상 정보를 가져옵니다.")
    void findAll() {
        // Given, When
        List<InteriorColor> interiorColors = interiorColorRepository.findAll();

        // Then
        assertThat(interiorColors).hasSize(10);
    }

    @Test
    @DisplayName("내장색상 ID 에 해당하는 정보를 가져옵니다.")
    void findById() {
        // Given
        Long trimId = 1L;

        // When
        Optional<InteriorColor> interiorColor = interiorColorRepository.findById(trimId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(interiorColor).isPresent();
        softAssertions.assertThat(interiorColor.get().getId()).isEqualTo(trimId);
        softAssertions.assertThat(interiorColor.get().getName()).isEqualTo("인조가죽(블랙)");
        softAssertions.assertThat(interiorColor.get().getImgSrc()).isEqualTo("interior_color/1.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("트림 별 내장색상 정보를 가져옵니다.")
    void findAllByTrimId() {
        // Given
        Long trimId = 2L;

        // When
        List<InteriorColor> interiorColors = interiorColorRepository.findAllByTrimId(trimId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(interiorColors).hasSize(2);
        softAssertions.assertThat(interiorColors.get(0).getName()).isEqualTo("퀼팅 천연(블랙)");
        softAssertions.assertThat(interiorColors.get(0).getImgSrc()).isEqualTo("interior_color/2.png");
        softAssertions.assertThat(interiorColors.get(1).getName()).isEqualTo("쿨그레이");
        softAssertions.assertThat(interiorColors.get(1).getImgSrc()).isEqualTo("interior_color/3.png");

        softAssertions.assertAll();
    }
}
