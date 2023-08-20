package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.dto.CarDictDto;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
@ActiveProfiles("test")
@Sql(scripts = {
        "classpath:/init.sql",
        "classpath:/insert/car_dict.sql"
})
@DisplayName("car_dict Serivce 테스트")
class CarDictServiceTest {

    private final CarDictService carDictService;

    @Autowired
    public CarDictServiceTest(CarDictService carDictService) {
        this.carDictService = carDictService;
    }

    @Test
    @DisplayName("모든 백카사전 정보를 반환합니다.")
    void getAllCarDict() {
        // Given, When
        List<CarDictDto> carDictDtoList = carDictService.getAllCarDict();

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(carDictDtoList.size()).isEqualTo(29L);

        CarDictDto carDictDto = carDictDtoList.get(0);
        softAssertions.assertThat(carDictDto.getId()).isEqualTo(1L);
        softAssertions.assertThat(carDictDto.getKeyword()).isEqualTo("트림");
        softAssertions.assertThat(carDictDto.getDescription()).contains("트림(trim)이란,");
        softAssertions.assertThat(carDictDto.getImgSrc()).isNull();

        softAssertions.assertAll();
    }
}