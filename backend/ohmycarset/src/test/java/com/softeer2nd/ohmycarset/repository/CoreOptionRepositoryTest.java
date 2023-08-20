package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.CoreOption;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
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
        "classpath:/insert/core_option.sql"
})
@DisplayName("core_option Repository 테스트")
class CoreOptionRepositoryTest {

    private final CoreOptionRepository coreOptionRepository;
    @Autowired
    public CoreOptionRepositoryTest(CoreOptionRepository coreOptionRepository) {
        this.coreOptionRepository = coreOptionRepository;
    }

    @Test
    @DisplayName("모든 핵심옵션 정보를 가져옵니다.")
    void findAll() {
        // Given, When
        List<CoreOption> coreOptions = coreOptionRepository.findAll();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(coreOptions).hasSize(12);

        CoreOption coreOption = coreOptions.get(0);
        softAssertions.assertThat(coreOption.getTrimId()).isEqualTo(1L);
        softAssertions.assertThat(coreOption.getName()).isEqualTo("12.3인치 내비게이션");
        softAssertions.assertThat(coreOption.getImgSrc()).isEqualTo("core_option/1.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("ID에 해당하는 핵심옵션 정보를 가져옵니다.")
    void findById() {
        // Given
        Long id = 24L;

        // When
        Optional<CoreOption> coreOption = coreOptionRepository.findById(id);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(coreOption).isPresent();
        softAssertions.assertThat(coreOption.get().getId()).isEqualTo(id);
        softAssertions.assertThat(coreOption.get().getName()).isEqualTo("캘리그라피 전용 디자인");
        softAssertions.assertThat(coreOption.get().getTrimId()).isEqualTo(4L);
        softAssertions.assertThat(coreOption.get().getImgSrc()).isEqualTo("core_option/12.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("트림 별 핵심옵션 정보를 가져옵니다.")
    void findByTrimId() {
        // Given
        Long trimId = 2L;

        // When
        List<CoreOption> coreOptions = coreOptionRepository.findByTrimId(trimId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();
        softAssertions.assertThat(coreOptions).hasSize(3);
        softAssertions.assertThat(coreOptions.get(0).getId()).isEqualTo(16L);
        softAssertions.assertThat(coreOptions.get(0).getName()).isEqualTo("20인치 알로이 휠");
        softAssertions.assertThat(coreOptions.get(0).getTrimId()).isEqualTo(trimId);
        softAssertions.assertThat(coreOptions.get(0).getImgSrc()).isEqualTo("core_option/4.png");

        softAssertions.assertAll();
    }
}
