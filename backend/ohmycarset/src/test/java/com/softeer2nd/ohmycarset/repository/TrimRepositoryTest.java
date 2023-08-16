package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.Trim;
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
})
class TrimRepositoryTest {

    private final TrimRepository trimRepository;

    @Autowired
    public TrimRepositoryTest(JdbcTemplate jdbcTemplate) {
        this.trimRepository = new TrimRepositoryImpl(jdbcTemplate);
    }

    @Test
    @DisplayName("모든 트림 정보를 가져옵니다.")
    void findAll() {
        List<Trim> trims = trimRepository.findAll();
        assertThat(trims).hasSize(4);
        Trim leBlanc = trims.get(1);
        assertThat(leBlanc.getId()).isEqualTo(2L);
        assertThat(leBlanc.getName()).isEqualTo("Le Blanc(르블랑)");
        assertThat(leBlanc.getDescription()).isEqualTo("모두가 선택한 베스트셀러");
        assertThat(leBlanc.getRepColorId()).isEqualTo(3L);
        assertThat(leBlanc.getDefaultPrice()).isEqualTo(41980000);
    }

    @Test
    @DisplayName("ID에 해당하는 트림 정보를 가져옵니다.")
    void findById() {
        Long id = 4L;
        Optional<Trim> trim = trimRepository.findById(id);
        assertThat(trim).isPresent();
        assertThat(trim.get().getId()).isEqualTo(id);
        assertThat(trim.get().getName()).isEqualTo("Calligraphy");
        assertThat(trim.get().getDescription()).isEqualTo("최고를 원한다면");
        assertThat(trim.get().getRepColorId()).isEqualTo(6L);
        assertThat(trim.get().getDefaultPrice()).isEqualTo(51060000);
    }
}
