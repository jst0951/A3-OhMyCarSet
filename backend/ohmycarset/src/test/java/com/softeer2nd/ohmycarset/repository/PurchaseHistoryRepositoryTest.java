package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
@Transactional
@ActiveProfiles("test")
@Sql(scripts = {
        "classpath:/init.sql",
        "classpath:/insert/purchase_history.sql"
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
        softAssertions.assertThat(purchaseHistory.getEColorId()).isEqualTo(2L);
        softAssertions.assertThat(purchaseHistory.getIColorId()).isEqualTo(2L);
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
    @DisplayName("트림ID에 해당하는 모든 구매내역의 개수를 구합니다.")
    void countByTrimId() {
        // Given
        Long trimId = 2L;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByTrimId(trimId);

        // Then
        assertThat(purchaseCount).isEqualTo(10L);
    }

    @Test
    @DisplayName("태그ID에 해당하는 태그를 가진 모든 구매내역을 가져옵니다.")
    void findAllByTagId() {
        // Given
        Long tagId = 1L;

        // When
        List<PurchaseHistory> purchaseHistoryList = purchaseHistoryRepository.findAllByTagId(tagId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(purchaseHistoryList.size()).isEqualTo(2L);

        PurchaseHistory purchaseHistory = purchaseHistoryList.get(0);
        softAssertions.assertThat(Objects.equals(purchaseHistory.getTag1Id(), tagId)
                || Objects.equals(purchaseHistory.getTag2Id(), tagId)
                || Objects.equals(purchaseHistory.getTag3Id(), tagId)).isTrue();

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
    @DisplayName("카테고리명[필수옵션]과 옵션ID에 해당하는 모든 구매내역을 가져옵니다.")
    void findAllByRequiredOptionCategoryNameAndOptionId() {
        // Given
        String categoryName = "powertrain";
        Long optionId = 1L;

        // When
        List<PurchaseHistory> purchaseHistoryList = purchaseHistoryRepository.findAllByOptionNameAndOptionId(categoryName, optionId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(purchaseHistoryList.size()).isEqualTo(7L);

        PurchaseHistory purchaseHistory = purchaseHistoryList.get(0);
        softAssertions.assertThat(purchaseHistory.getPowertrainId()).isEqualTo(1L);

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("카테고리명[필수옵션]과 옵션 ID에 해당하는 모든 구매내역의 수를 구합니다.")
    void countByOptionNameAndOptionId() {
        // Given
        String categoryName = "powertrain";
        Long optionId = 1L;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(categoryName, optionId);

        // Then
        assertThat(purchaseCount).isEqualTo(7L);
    }

    @Test
    @DisplayName("카테고리명[옵션패키지]과 옵션ID에 해당하는 모든 구매내역을 가져옵니다.")
    void findAllByPackageNameAndOptionId() {
        // Given
        String categoryName = "system";
        Long optionId = 2L;

        // When
        List<PurchaseHistory> purchaseHistoryList = purchaseHistoryRepository.findAllByPackageNameAndOptionId(categoryName, optionId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(purchaseHistoryList.size()).isEqualTo(1L); // purchase_system_map id 1

        PurchaseHistory purchaseHistory = purchaseHistoryList.get(0);
        softAssertions.assertThat(purchaseHistory.getId()).isEqualTo(6);

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("카테고리명[옵션패키지]과 옵션 ID에 해당하는 모든 구매내역의 수를 구합니다.")
    void countByPackageNameAndOptionId() {
        // Given
        String categoryName = "system";
        Long optionId = 2L;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByPackageNameAndOptionId(categoryName, optionId);

        // Then
        assertThat(purchaseCount).isEqualTo(1L);
    }

    @Test
    @DisplayName("태그ID와 카테고리명[옵션패키지]과 옵션ID에 해당하는 모든 구매내역의 수를 구합니다.")
    void countByTagIdAndOptionNameAndOptionId() {
        // Given
        Long tagId = 1L;
        String categoryName = "powertrain";
        Long optionId = 1L;

        // When
        Long purchaseCount = purchaseHistoryRepository.countByTagIdAndOptionNameAndOptionId(tagId, categoryName, optionId);

        // Then
        assertThat(purchaseCount).isEqualTo(1L); // purchase_history id 4
    }

    @Test
    void countByTagIdAndPackageNameAndOptionId() {
        // Given
    }

    @Test
    void countByCategoryNameAndGenderAndAge() {
    }

    @Test
    void countByCategoryNameAndExteriorColorId() {
    }
}