package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.CarDict;
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
        "classpath:/insert/car_dict.sql"
})
@DisplayName("car_dict Repository 테스트")
class CarDictRepositoryTest {

    private final CarDictRepository carDictRepository;

    @Autowired
    public CarDictRepositoryTest(CarDictRepository carDictRepository) {
        this.carDictRepository = carDictRepository;
    }

    @Test
    @DisplayName("모든 백카사전 정보를 가져옵니다.")
    void findAll() {
        // Given, When
        List<CarDict> carDictList = carDictRepository.findAll();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(carDictList.size()).isEqualTo(29);

        CarDict carDict = carDictList.get(0);
        softAssertions.assertThat(carDict.getId()).isEqualTo(1L);
        softAssertions.assertThat(carDict.getKeyword()).isEqualTo("트림");
        softAssertions.assertThat(carDict.getDescription()).contains("트림(trim)이란,");
        softAssertions.assertThat(carDict.getImgSrc()).isNull();

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("ID에 해당하는 백카사전 정보를 가져옵니다.")
    void findById() {
        // Given
        Long id = 2L;

        // When
        Optional<CarDict> carDict = carDictRepository.findById(id);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        assertThat(carDict).isPresent();
        softAssertions.assertThat(carDict.get().getId()).isEqualTo(2L);
        softAssertions.assertThat(carDict.get().getKeyword()).isEqualTo("클러스터");
        softAssertions.assertThat(carDict.get().getDescription()).contains("클러스터란,");
        softAssertions.assertThat(carDict.get().getImgSrc()).isEqualTo("car_dict/1.png");

        softAssertions.assertAll();
    }
}