package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
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

import static org.assertj.core.api.Assertions.*;

@JdbcTest
@ActiveProfiles("test")
@Sql(scripts = {"classpath:/insert/insert_exterior_color.sql"})
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
}
