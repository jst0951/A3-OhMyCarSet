package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import com.softeer2nd.ohmycarset.dto.PurchaseCountDto;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@Transactional
@ActiveProfiles("test")
@Sql(scripts = {
        "classpath:/init.sql",
        "classpath:/insert/purchase_history.sql",
        "classpath:/insert/purchase_system_map.sql"
})
@DisplayName("purchase_history Repository 테스트")
class PurchaseHistoryRepositoryTest {

    private final PurchaseHistoryRepository purchaseHistoryRepository;

    @Autowired
    public PurchaseHistoryRepositoryTest(PurchaseHistoryRepository purchaseHistoryRepository) {
        this.purchaseHistoryRepository = purchaseHistoryRepository;
    }

    @Test
    @DisplayName("모든 구매내역 정보를 가져옵니다.")
    void findAll() {
        // Given, When
        List<PurchaseHistory> purchaseHistoryList = purchaseHistoryRepository.findAll();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(purchaseHistoryList.size()).isEqualTo(10);
        PurchaseHistory purchaseHistory = purchaseHistoryList.get(0);
        softAssertions.assertThat(purchaseHistory.getId()).isEqualTo(1L);
        softAssertions.assertThat(purchaseHistory.getTrimId()).isEqualTo(2L);
        softAssertions.assertThat(purchaseHistory.getPowertrainId()).isEqualTo(2L);
        softAssertions.assertThat(purchaseHistory.getWdId()).isEqualTo(1L);
        softAssertions.assertThat(purchaseHistory.getBodyId()).isEqualTo(1L);
        softAssertions.assertThat(purchaseHistory.getExteriorColorId()).isEqualTo(2L);
        softAssertions.assertThat(purchaseHistory.getInteriorColorId()).isEqualTo(2L);
        softAssertions.assertThat(purchaseHistory.getWheelId()).isEqualTo(1L);
        softAssertions.assertThat(purchaseHistory.getAge()).isEqualTo(31);
        softAssertions.assertThat(purchaseHistory.getGender()).isEqualTo('F');
        softAssertions.assertThat(purchaseHistory.getTag1Id()).isEqualTo(13L);
        softAssertions.assertThat(purchaseHistory.getTag2Id()).isEqualTo(8L);
        softAssertions.assertThat(purchaseHistory.getTag3Id()).isEqualTo(1L);

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 구매내역의 개수를 구합니다.")
    void count() {
        // Given, When
        Long purchaseCount = purchaseHistoryRepository.count();

        // Then
        assertThat(purchaseCount).isEqualTo(10L);
    }

    @Test
    @DisplayName("ID에 해당하는 구매내역을 가져옵니다.")
    void findById() {
        // Given
        Long id = 1L;

        // When
        Optional<PurchaseHistory> purchaseHistory = purchaseHistoryRepository.findById(id);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(purchaseHistory).isPresent();
        softAssertions.assertThat(purchaseHistory.get().getId()).isEqualTo(1L);

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("트림ID에 해당하는 구매내역을 가져옵니다.")
    void findAllByTrimId() {
        // Given
        Long trimId = 2L;

        // When
        List<PurchaseHistory> purchaseHistoryList = purchaseHistoryRepository.findAllByTrimId(trimId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(purchaseHistoryList.size()).isEqualTo(10);
        PurchaseHistory purchaseHistory = purchaseHistoryList.get(0);
        softAssertions.assertThat(purchaseHistory.getTrimId()).isEqualTo(2L);

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("태그ID에 해당하는 태그를 가진 모든 구매내역의 수를 구합니다.")
    void countByTagId() {
        // Given
        Long tagId = 1L;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByTagId(tagId);

        // Then
        assertThat(purchaseCount).isEqualTo(2L);
    }

    @Test
    @DisplayName("카테고리명[필수옵션]과 옵션 ID에 해당하는 모든 구매내역의 수를 구합니다.")
    void countByOptionNameAndOptionId() {
        // Given
        String categoryName = "powertrain";
        Long optionId = 1L;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByCategoryNameAndOptionId(categoryName, optionId);

        // Then
        assertThat(purchaseCount).isEqualTo(7L);
    }

    @Test
    @DisplayName("카테고리명[옵션패키지]과 패키지 ID에 해당하는 모든 구매내역의 수를 구합니다.")
    void countByPackageNameAndOptionId() {
        // Given
        String categoryName = "system";
        Long packageId = 2L;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByCategoryNameAndPackageId(categoryName, packageId);

        // Then
        assertThat(purchaseCount).isEqualTo(1L); // purchase_history id 6
    }

    @Test
    @DisplayName("태그ID와 카테고리명[필수옵션]과 옵션ID에 해당하는 모든 구매내역의 수를 구합니다.")
    void countByTagIdAndOptionNameAndOptionId() {
        // Given
        Long tagId = 1L;
        String categoryName = "powertrain";
        Long optionId = 1L;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByTagIdAndCategoryNameAndOptionId(tagId, categoryName, optionId);

        // Then
        assertThat(purchaseCount).isEqualTo(1L); // purchase_history id 4
    }

    @Test
    @DisplayName("태그ID와 카테고리명[옵션패키지]과 패키지 ID에 해당하는 모든 구매내역의 수를 구합니다.")
    void countByTagIdAndPackageNameAndPackageId() {
        // Given
        Long tagId = 6L;
        String categoryName = "system";
        Long packageId = 2L;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByTagIdAndCategoryNameAndPackageId(tagId, categoryName, packageId);

        // Then
        assertThat(purchaseCount).isEqualTo(1L); // purchase_history id 6
    }

    @Test
    @DisplayName("주어진 나이대와 성별에 해당하는 구매내역 중 카테고리명[필수옵션]의 옵션 각각의 구매횟수를 담은 DTO를 반환합니다.")
    void countByCategoryNameAndGenderAndAge() {
        // Given
        String categoryName = "powertrain";
        Character gender = 'M';
        Integer age = 30;

        // When
        List<PurchaseCountDto> purchaseCountDtoList = purchaseHistoryRepository.countByCategoryNameAndGenderAndAge(categoryName, gender, age);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(purchaseCountDtoList.size()).isEqualTo(1L);

        PurchaseCountDto purchaseCountDto = purchaseCountDtoList.get(0);
        softAssertions.assertThat(purchaseCountDto.getOptionId()).isEqualTo(1L);
        softAssertions.assertThat(purchaseCountDto.getCount()).isEqualTo(1L); // purchase_history id 4

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("주어진 외장색상에 해당하는 구매내역 중 카테고리명[필수옵션]의 옵션 각각의 구매횟수를 담은 DTO를 반환합니다.")
    void countByCategoryNameAndExteriorColorId() {
        // Given
        String categoryName = "powertrain";
        Long exteriorColorId = 1L;

        // When
        List<PurchaseCountDto> purchaseCountDtoList = purchaseHistoryRepository.countByCategoryNameAndExteriorColorId(categoryName, exteriorColorId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(purchaseCountDtoList.size()).isEqualTo(2L);

        PurchaseCountDto purchaseCountDto = purchaseCountDtoList.get(0);
        softAssertions.assertThat(purchaseCountDto.getOptionId()).isEqualTo(1L);
        softAssertions.assertThat(purchaseCountDto.getCount()).isEqualTo(5L); // purchase_history id 2,3,5,7,8,10

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("주어진 카테고리명[필수옵션], 옵션 ID, 성별, 나이, 태그목록에 모두 해당하는 구매횟수를 구합니다.")
    void countByCategoryNameAndOptionIdAndGenderAndAgeAndTags() {
        // Given
        String categoryName = "powertrain";
        Long optionId = 1L;
        Character gender = 'F';
        Integer age = 20;
        List<Long> tagIds = new ArrayList<Long>(List.of(8L, 7L, 10L));

        // When
        Long purchaseCount = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndGenderAndAgeAndTags(categoryName, optionId, gender, age, tagIds);

        // Then
        assertThat(purchaseCount).isEqualTo(1L); // purchase_history id 2
    }

    @Test
    @DisplayName("주어진 성별과 나이에 해당하는 구매내역의 수를 구합니다.")
    void countByGenderAndAgeAndTags() {
        // Given
        Character gender = 'F';
        Integer age = 20;
        List<Long> tagIds = new ArrayList<Long>(List.of(8L, 7L, 10L));

        // When
        Long purchaseCount = purchaseHistoryRepository.countByGenderAndAgeAndTags(gender, age, tagIds);

        // Then
        assertThat(purchaseCount).isEqualTo(1L); // purchase_history id 2
    }

    @Test
    @DisplayName("주어진 카테고리명[필수옵션]과 옵션 ID와 성별에 해당하는 구매내역의 수를 구합니다.")
    void countByCategoryNameAndOptionIdAndGender() {
        // Given
        String categoryName = "powertrain";
        Long optionId = 1L;
        Character gender = 'F';

        // When
        Long purchaseCount = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndGender(categoryName, optionId, gender);

        // Then
        assertThat(purchaseCount).isEqualTo(3L); // purchase_history id 2,3,8
    }

    @Test
    @DisplayName("주어진 카테고리명[필수옵션]과 옵션 ID와 나이대에 해당하는 구매내역의 수를 구합니다.")
    void countByCategoryNameAndOptionIdAndAge() {
        // Given
        String categoryName = "powertrain";
        Long optionId = 1L;
        Integer age = 40;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndAge(categoryName, optionId, age);

        // Then
        assertThat(purchaseCount).isEqualTo(3L); // purchase_history id 3,6,8
    }

    @Test
    @DisplayName("주어진 카테고리명[필수옵션]과 옵션 ID와 성별, 나이대에 해당하는 구매내역의 수를 구합니다.")
    void countByCategoryNameAndOptionIdAndGenderAndAge() {
        // Given
        String categoryName = "powertrain";
        Long optionId = 1L;
        Character gender = 'F';
        Integer age = 40;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByCategoryNameAndOptionIdAndGenderAndAge(categoryName, optionId, gender, age);

        // Then
        assertThat(purchaseCount).isEqualTo(2L); // purchase_history id 3,8
    }

    @Test
    @DisplayName("주어진 성별과 나이대에 해당하는 구매내역의 수를 구합니다.")
    void countByGenderAndAge() {
        // Given
        Character gender = 'F';
        Integer age = 40;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByGenderAndAge(gender, age);

        // Then
        assertThat(purchaseCount).isEqualTo(3L); // purchase_history id 3,5,8
    }

    @Test
    @DisplayName("주어진 성별의 구매내역의 수를 구합니다.")
    void countByGender() {
        // Given
        Character gender = 'F';

        // When
        Long purchaseCount = purchaseHistoryRepository.countByGender(gender);

        // Then
        assertThat(purchaseCount).isEqualTo(6L); // purchase_history id 1,2,3,5,8,9
    }

    @Test
    @DisplayName("주어진 나이대의 구매내역의 수를 구합니다.")
    void countByAge() {
        // Given
        Integer age = 40;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByAge(age);

        // Then
        assertThat(purchaseCount).isEqualTo(4L); // purchase_history id 3,5,6,8
    }

    @Test
    @DisplayName("주어진 카테고리[옵션 패키지]명과 패키지 ID와 성별과 나이와 태그들에 해당하는 구매내역의 수를 구합니다.")
    void countByCategoryNameAndPackageIdAndGenderAndAgeAndTags() {
        // Given
        String categoryName = "system";
        Long packageId = 2L;
        Character gender = 'M';
        Integer age = 40;
        List<Long> tagIds = new ArrayList<>(List.of(6L, 9L, 10L));

        // When
        Long purchaseCount = purchaseHistoryRepository.countByCategoryNameAndPackageIdAndGenderAndAgeAndTags(categoryName, packageId, gender, age, tagIds);

        // Then
        assertThat(purchaseCount).isEqualTo(1L); // purchase_history id 6
    }
}