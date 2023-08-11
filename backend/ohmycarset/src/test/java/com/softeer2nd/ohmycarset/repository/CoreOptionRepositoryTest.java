package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.CoreOption;
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
        "classpath:/insert/insert_core_option.sql"
})
class CoreOptionRepositoryTest {

    private final CoreOptionRepository coreOptionRepository;

    @Autowired
    public CoreOptionRepositoryTest(JdbcTemplate jdbcTemplate) {
        this.coreOptionRepository = new CoreOptionRepositoryImpl(jdbcTemplate);
    }

    @Test
    @DisplayName("모든 핵심옵션 정보를 가져옵니다.")
    void findAll() {
        List<CoreOption> coreOptions = coreOptionRepository.findAll();
        CoreOption coreOption = coreOptions.get(0);
        assertThat(coreOptions).hasSize(12);
        assertThat(coreOption.getName()).isEqualTo("12.3인치 내비게이션");
        assertThat(coreOption.getImgSrc()).isEqualTo("core_option/1.png");
        assertThat(coreOption.getTrimId()).isEqualTo(1L);
    }

    @Test
    @DisplayName("ID에 해당하는 핵심옵션 정보를 가져옵니다.")
    void findById() {
        Long id = 12L;
        Optional<CoreOption> coreOption = coreOptionRepository.findById(id);
        assertThat(coreOption).isPresent();
        assertThat(coreOption.get().getId()).isEqualTo(id);
        assertThat(coreOption.get().getName()).isEqualTo("캘리그라피 전용 디자인");
        assertThat(coreOption.get().getTrimId()).isEqualTo(4L);
        assertThat(coreOption.get().getImgSrc()).isEqualTo("core_option/12.png");
    }

    @Test
    @DisplayName("트림 별 핵심옵션 정보를 가져옵니다.")
    void findByTrimId() {
        Long trimId = 2L;
        List<CoreOption> coreOptions = coreOptionRepository.findByTrimId(trimId);
        assertThat(coreOptions).hasSize(3);
        assertThat(coreOptions.get(0).getId()).isEqualTo(4L);
        assertThat(coreOptions.get(0).getName()).isEqualTo("20인치 알로이 휠");
        assertThat(coreOptions.get(0).getTrimId()).isEqualTo(trimId);
    }
}
