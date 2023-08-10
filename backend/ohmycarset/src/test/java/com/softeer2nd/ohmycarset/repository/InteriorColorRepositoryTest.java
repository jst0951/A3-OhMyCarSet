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

import java.util.List;

import static org.assertj.core.api.Assertions.*;

@JdbcTest
@ActiveProfiles("test")
@Sql(scripts = {"classpath:/insert/insert_interior_color.sql"})
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
}
