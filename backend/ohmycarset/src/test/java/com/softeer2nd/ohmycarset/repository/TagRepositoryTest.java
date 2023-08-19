package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.Tag;
import org.assertj.core.api.SoftAssertions;
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
        "classpath:/insert/tag.sql",
        "classpath:/insert/powertrain_option.sql",
        "classpath:/insert/tag_powertrain_map.sql",
        "classpath:/insert/system_option.sql",
        "classpath:/insert/tag_system_map.sql"
})
@DisplayName("tag Repository 테스트")
class TagRepositoryTest {

    private final TagRepository tagRepository;

    @Autowired
    public TagRepositoryTest(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    @Test
    @DisplayName("모든 태그 정보를 가져옵니다.")
    void findAll() {
        // Given, When
        List<Tag> tagList = tagRepository.findAll();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(tagList.size()).isEqualTo(13);

        Tag tag = tagList.get(0);
        softAssertions.assertThat(tag.getId()).isEqualTo(1);
        softAssertions.assertThat(tag.getName()).isEqualTo("디자인 중시");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("ID에 해당하는 태그 정보를 가져옵니다.")
    void findById() {
        // Given
        Long id = 2L;

        // When
        Optional<Tag> tag = tagRepository.findById(id);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(tag).isPresent();
        softAssertions.assertThat(tag.get().getId()).isEqualTo(2L);
        softAssertions.assertThat(tag.get().getName()).isEqualTo("차박 매니아");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("이름에 해당하는 태그 정보를 가져옵니다.")
    void findByName() {
        // Given
        String name = "편의성";

        // When
        Optional<Tag> tag = tagRepository.findByName(name);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(tag).isPresent();
        softAssertions.assertThat(tag.get().getId()).isEqualTo(3L);
        softAssertions.assertThat(tag.get().getName()).isEqualTo("편의성");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("카테고리명[필수옵션]과 옵션ID에 해당하는 모든 태그 정보를 가져옵니다.")
    void findAllByRequiredOptionCategoryNameAndOptionId() {
        // Given
        String categoryName = "powertrain";
        Long optionId = 1L;

        // When
        List<Tag> tagList = tagRepository.findAllByOptionNameAndOptionId(categoryName, optionId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(tagList.size()).isEqualTo(2);

        Tag tag1 = tagList.get(0);
        softAssertions.assertThat(tag1.getId()).isEqualTo(7L);
        softAssertions.assertThat(tag1.getName()).isEqualTo("효율");
        Tag tag2 = tagList.get(1);
        softAssertions.assertThat(tag2.getId()).isEqualTo(12L);
        softAssertions.assertThat(tag2.getName()).isEqualTo("파워");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("카테고리명[옵션패키지]과 옵션ID에 해당하는 모든 태그 정보를 가져옵니다.")
    void findAllByOptionPackageCategoryNameAndOptionId() {
        // Given
        String categoryName = "system";
        Long optionId = 1L;

        // When
        List<Tag> tagList = tagRepository.findAllByOptionNameAndOptionId(categoryName, optionId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(tagList.size()).isEqualTo(3);
        Tag tag1 = tagList.get(0);
        softAssertions.assertThat(tag1.getId()).isEqualTo(8L);
        softAssertions.assertThat(tag1.getName()).isEqualTo("안전성");
        Tag tag2 = tagList.get(1);
        softAssertions.assertThat(tag2.getId()).isEqualTo(11L);
        softAssertions.assertThat(tag2.getName()).isEqualTo("신기술");
        Tag tag3 = tagList.get(2);
        softAssertions.assertThat(tag3.getId()).isEqualTo(10L);
        softAssertions.assertThat(tag3.getName()).isEqualTo("주행");

        softAssertions.assertAll();
    }
}