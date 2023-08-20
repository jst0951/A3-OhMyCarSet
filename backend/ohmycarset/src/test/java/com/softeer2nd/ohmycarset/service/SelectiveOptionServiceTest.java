package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.dto.RecommendDto;
import com.softeer2nd.ohmycarset.dto.UserInfoDto;
import com.softeer2nd.ohmycarset.dto.UserWithPresetDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.OptionPackageDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.PackageComponentDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.RequiredOptionDto;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.withPrecision;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
@ActiveProfiles("test")
@Sql(scripts = {
        "classpath:/init.sql",

        "classpath:/insert/powertrain_option.sql",
        "classpath:/insert/wd_option.sql",
        "classpath:/insert/body_option.sql",
        "classpath:/insert/exterior_color_option.sql",
        "classpath:/insert/interior_color_option.sql",
        "classpath:/insert/wheel_option.sql",
        "classpath:/insert/system_option.sql",
        "classpath:/insert/system_option_component.sql",
        "classpath:/insert/temperature_option.sql",
        "classpath:/insert/temperature_option_component.sql",
        "classpath:/insert/external_device_option.sql",
        "classpath:/insert/external_device_option_component.sql",
        "classpath:/insert/internal_device_option.sql",
        "classpath:/insert/internal_device_option_component.sql",

        "classpath:/insert/purchase_history.sql",
        "classpath:/insert/purchase_system_map.sql",
        "classpath:/insert/purchase_temperature_map.sql",
        "classpath:/insert/purchase_external_device_map.sql",
        "classpath:/insert/purchase_internal_device_map.sql",

        "classpath:/insert/tag.sql",
        "classpath:/insert/tag_powertrain_map.sql",
        "classpath:/insert/tag_wd_map.sql",
        "classpath:/insert/tag_body_map.sql",
        "classpath:/insert/tag_wheel_map.sql",
        "classpath:/insert/tag_system_map.sql",
        "classpath:/insert/tag_temperature_map.sql",
        "classpath:/insert/tag_external_device_map.sql",
        "classpath:/insert/tag_internal_device_map.sql"
})
@DisplayName("선택옵션(필수옵션,옵션패키지) Service 테스트")
class SelectiveOptionServiceTest {

    private final SelectiveOptionService selectiveOptionService;

    @Autowired
    public SelectiveOptionServiceTest(SelectiveOptionService selectiveOptionService) {
        this.selectiveOptionService = selectiveOptionService;
    }

    @Test
    @DisplayName("카테고리[필수옵션]별 모든 옵션을 반환합니다.")
    void getAllOptionByCategoryName() {
        // Given
        String categoryName = "powertrain";

        // When
        List<RequiredOptionDto> requiredOptionDtoList = selectiveOptionService.getAllOptionByCategoryName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(requiredOptionDtoList.size()).isEqualTo(2L);

        RequiredOptionDto requiredOptionDto = requiredOptionDtoList.get(0); // 디젤
        softAssertions.assertThat(requiredOptionDto.getId()).isEqualTo(1L);
        softAssertions.assertThat(requiredOptionDto.getName()).isEqualTo("디젤 2.2");
        softAssertions.assertThat(requiredOptionDto.getPurchaseRate()).isEqualTo(70, withPrecision(1d)); // 7/10 = 70%
        softAssertions.assertThat(requiredOptionDto.getTags()).isNull();

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("카테고리[옵션 패키지]별 모든 옵션을 반환합니다.")
    void getAllPackageByCategoryName() {
        // Given
        String categoryName = "system";

        // When
        List<OptionPackageDto> optionPackageDtoList = selectiveOptionService.getAllPackageByCategoryName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(optionPackageDtoList.size()).isEqualTo(3L);

        OptionPackageDto optionPackageDto = optionPackageDtoList.get(1); // 주차보조 시스템 2
        softAssertions.assertThat(optionPackageDto.getId()).isEqualTo(2L);
        softAssertions.assertThat(optionPackageDto.getName()).isEqualTo("주차보조 시스템 2");
        softAssertions.assertThat(optionPackageDto.getIconSrc()).isNull();
        softAssertions.assertThat(optionPackageDto.getPurchaseRate()).isEqualTo(10, withPrecision(1d)); // 1/10 = 10%
        softAssertions.assertThat(optionPackageDto.getTags()).isNull();
        softAssertions.assertThat(optionPackageDto.getComponents().size()).isEqualTo(2L);

        PackageComponentDto packageComponentDto = optionPackageDto.getComponents().get(0);
        softAssertions.assertThat(packageComponentDto.getId()).isEqualTo(4L);
        softAssertions.assertThat(packageComponentDto.getName()).isEqualTo("후방 주차 충돌방지 보조");

        softAssertions.assertAll();
    }

    @Test
    void getAllOptionByCategory() {
    }

    @Test
    void getAllPackageByCategory() {
    }

    @Test
    @DisplayName("유저가 입력한 정보에 따라 프리셋을 추천해줍니다.")
    void recommendSelectiveOption() {
        // Given
        Integer age = 20;
        Character gender = 'M';
        String tag1 = "차보호";
        String tag2 = "효율";
        String tag3 = "디자인 중시";
        UserInfoDto userInfoDto = new UserInfoDto(age, gender, tag1, tag2, tag3);

        // When
        RecommendDto recommendDto = selectiveOptionService.recommendSelectiveOption(userInfoDto);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(recommendDto.getPowertrain().getName()).isEqualTo("디젤 2.2");
        softAssertions.assertThat(recommendDto.getWd().getName()).isEqualTo("2WD");
        softAssertions.assertThat(recommendDto.getBody().getName()).isEqualTo("7인승");
        softAssertions.assertThat(recommendDto.getExteriorColor().getName()).isEqualTo("크리미 화이트 펄");
        softAssertions.assertThat(recommendDto.getInteriorColor().getName()).isEqualTo("퀼팅 천연(블랙)");
        softAssertions.assertThat(recommendDto.getWheel().getName()).isEqualTo("20인치 알로이 휠 & 타이어");

        List<OptionPackageDto> systemPackageDtoList = recommendDto.getSystem();
        softAssertions.assertThat(systemPackageDtoList.size()).isEqualTo(1L);
        softAssertions.assertThat(systemPackageDtoList.get(0).getName()).isEqualTo("컴포트 2");

        List<OptionPackageDto> temperaturePackageDtoList = recommendDto.getTemperature();
        softAssertions.assertThat(temperaturePackageDtoList.size()).isEqualTo(0L);

        List<OptionPackageDto> externalDevicePackageDtoList = recommendDto.getExternalDevice();
        softAssertions.assertThat(externalDevicePackageDtoList.size()).isEqualTo(3L);
        softAssertions.assertThat(externalDevicePackageDtoList.get(0).getName()).isEqualTo("차량 보호 필름");
        softAssertions.assertThat(externalDevicePackageDtoList.get(1).getName()).isEqualTo("사이드 스텝");
        softAssertions.assertThat(externalDevicePackageDtoList.get(2).getName()).isEqualTo("듀얼 머플러 패키지");

        List<OptionPackageDto> internalDevicePackageDtoList = recommendDto.getInternalDevice();
        softAssertions.assertThat(internalDevicePackageDtoList.size()).isEqualTo(2L);
        softAssertions.assertThat(internalDevicePackageDtoList.get(0).getName()).isEqualTo("듀얼 와이드 선루프");
        softAssertions.assertThat(internalDevicePackageDtoList.get(1).getName()).isEqualTo("프로텍션 매트 패키지 1");

        softAssertions.assertAll();
    }
}