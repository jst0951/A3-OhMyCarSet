package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.Trim;
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
        "classpath:/insert/trim.sql",
})
@DisplayName("trim Repository 테스트")
class TrimRepositoryTest {

    private final TrimRepository trimRepository;

    @Autowired
    public TrimRepositoryTest(TrimRepository trimRepository) {
        this.trimRepository = trimRepository;
    }

    @Test
    @DisplayName("모든 트림 정보를 가져옵니다.")
    void findAll() {
        // Given, When
        List<Trim> trims = trimRepository.findAll();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(trims).hasSize(4);

        Trim leBlanc = trims.get(1);
        softAssertions.assertThat(leBlanc.getId()).isEqualTo(2L);
        softAssertions.assertThat(leBlanc.getName()).isEqualTo("Le Blanc (르블랑)");
        softAssertions.assertThat(leBlanc.getDescription()).isEqualTo("모두가 선택한 베스트셀러");
        softAssertions.assertThat(leBlanc.getRepColorId()).isEqualTo(3L);
        softAssertions.assertThat(leBlanc.getDefaultPrice()).isEqualTo(41980000);

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("ID에 해당하는 트림 정보를 가져옵니다.")
    void findById() {
        // Given
        Long id = 4L;

        // When
        Optional<Trim> trim = trimRepository.findById(id);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(trim).isPresent();
        softAssertions.assertThat(trim.get().getId()).isEqualTo(id);
        softAssertions.assertThat(trim.get().getName()).isEqualTo("Calligraphy");
        softAssertions.assertThat(trim.get().getDescription()).isEqualTo("최고를 원한다면");
        softAssertions.assertThat(trim.get().getRepColorId()).isEqualTo(6L);
        softAssertions.assertThat(trim.get().getDefaultPrice()).isEqualTo(51060000);

        softAssertions.assertAll();
    }
}
