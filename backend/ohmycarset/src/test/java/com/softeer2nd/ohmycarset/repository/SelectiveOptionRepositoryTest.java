package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

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
})
@DisplayName("선택옵션(필수옵션,옵션패키지) Repository 테스트")
class SelectiveOptionRepositoryTest {

    private final SelectiveOptionRepository selectiveOptionRepository;

    @Autowired
    public SelectiveOptionRepositoryTest(SelectiveOptionRepository selectiveOptionRepository) {
        this.selectiveOptionRepository = selectiveOptionRepository;
    }

    @Test
    @DisplayName("모든 파워트레인 옵션 정보를 가져옵니다.")
    void findAllPowerTrain() {
        // Given, When
        List<RequiredOption> powerTrains = selectiveOptionRepository.findAllOptionByOptionName("powertrain");

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(powerTrains).hasSize(2);

        RequiredOption powerTrainOption = powerTrains.get(0);
        softAssertions.assertThat(powerTrainOption.getId()).isEqualTo(1L);
        softAssertions.assertThat(powerTrainOption.getName()).isEqualTo("디젤 2.2");
        softAssertions.assertThat(powerTrainOption.getImgSrc()).isEqualTo("selective_option/1_1.png");
        softAssertions.assertThat(powerTrainOption.getPrice()).isEqualTo(1480000);
        softAssertions.assertThat(powerTrainOption.getMainDescription()).contains("높은 토크로 파워풀한 드라이빙이 가능하며,");
        softAssertions.assertThat(powerTrainOption.getSubDescription()).contains("최고출력 202 ps / 3,800 rpm");
        softAssertions.assertThat(powerTrainOption.getMainFeedback()).contains("디젤 엔진은 효율이 좋아요!");
        softAssertions.assertThat(powerTrainOption.getSubFeedback()).contains("효율을 중시한다면, 탁월한 선택입니다.");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 구동방식 옵션 정보를 가져옵니다.")
    void findAllWD() {
        // Given
        String categoryName = "wd";

        // When
        List<RequiredOption> wds = selectiveOptionRepository.findAllOptionByOptionName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(wds).hasSize(2);

        RequiredOption wdOption = wds.get(0);
        softAssertions.assertThat(wdOption.getId()).isEqualTo(1L);
        softAssertions.assertThat(wdOption.getName()).isEqualTo("2WD");
        softAssertions.assertThat(wdOption.getPrice()).isZero();
        softAssertions.assertThat(wdOption.getMainDescription()).contains("엔진에서 전달되는 동력이");
        softAssertions.assertThat(wdOption.getMainFeedback()).contains("2WD는 효율이 좋아요!");
        softAssertions.assertThat(wdOption.getSubFeedback()).contains("효율을 중시한다면, 탁월한 선택입니다.");
        softAssertions.assertThat(wdOption.getImgSrc()).isEqualTo("selective_option/2_1.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 바디타입 옵션 정보를 가져옵니다.")
    void findAllBody() {
        // Given
        String categoryName = "body";

        // When
        List<RequiredOption> bodies = selectiveOptionRepository.findAllOptionByOptionName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(bodies).hasSize(2);

        RequiredOption bodyOption = bodies.get(0);
        softAssertions.assertThat(bodyOption.getId()).isEqualTo(1L);
        softAssertions.assertThat(bodyOption.getName()).isEqualTo("7인승");
        softAssertions.assertThat(bodyOption.getPrice()).isZero();
        softAssertions.assertThat(bodyOption.getMainDescription()).contains("기존 8인승 시트(1열 2명, 2열 3명, 3열 3명)에서");
        softAssertions.assertThat(bodyOption.getMainFeedback()).contains("통로가 있어 쾌적해요!");
        softAssertions.assertThat(bodyOption.getSubFeedback()).contains("쾌적함을 원하신다면, 탁월한 선택입니다.");
        softAssertions.assertThat(bodyOption.getImgSrc()).isEqualTo("selective_option/3_1.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 외장색상 옵션 정보를 가져옵니다.")
    void findAllExteriorColor() {
        // Given
        String categoryName = "exterior_color";

        // When
        List<RequiredOption> exteriorColors = selectiveOptionRepository.findAllOptionByOptionName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(exteriorColors).hasSize(6);

        RequiredOption exteriorColorOption = exteriorColors.get(0);
        softAssertions.assertThat(exteriorColorOption.getId()).isEqualTo(1L);
        softAssertions.assertThat(exteriorColorOption.getName()).isEqualTo("크리미 화이트 펄");
        softAssertions.assertThat(exteriorColorOption.getPrice()).isEqualTo(100000);
        softAssertions.assertThat(exteriorColorOption.getMainFeedback()).isEmpty();
        softAssertions.assertThat(exteriorColorOption.getSubFeedback()).isEmpty();
        softAssertions.assertThat(exteriorColorOption.getImgSrc()).isEqualTo("selective_option/4_1.png");
        softAssertions.assertThat(exteriorColorOption.getIconSrc()).isEqualTo("exterior_color/1_color.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 내장색상 옵션 정보를 가져옵니다.")
    void findAllInteriorColor() {
        // Given
        String categoryName = "interior_color";

        // When
        List<RequiredOption> interiorColors = selectiveOptionRepository.findAllOptionByOptionName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(interiorColors).hasSize(2);

        RequiredOption interiorColorOption = interiorColors.get(0);
        softAssertions.assertThat(interiorColorOption.getId()).isEqualTo(1L);
        softAssertions.assertThat(interiorColorOption.getName()).isEqualTo("퀼팅 천연(블랙)");
        softAssertions.assertThat(interiorColorOption.getPrice()).isZero();
        softAssertions.assertThat(interiorColorOption.getMainFeedback()).contains("블랙 컬러는 클래식한 분위기에요!");
        softAssertions.assertThat(interiorColorOption.getSubFeedback()).contains("클래식한 분위기를 원하신다면,");
        softAssertions.assertThat(interiorColorOption.getImgSrc()).isEqualTo("selective_option/5_1.png");
        softAssertions.assertThat(interiorColorOption.getIconSrc()).isEqualTo("interior_color/2.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 휠 옵션 정보를 가져옵니다.")
    void findAllWheel() {
        // Given
        String categoryName = "wheel";

        // When
        List<RequiredOption> wheels = selectiveOptionRepository.findAllOptionByOptionName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(wheels).hasSize(4);

        RequiredOption wheelOption = wheels.get(0);
        softAssertions.assertThat(wheelOption.getId()).isEqualTo(1L);
        softAssertions.assertThat(wheelOption.getName()).isEqualTo("20인치 알로이 휠 & 타이어");
        softAssertions.assertThat(wheelOption.getPrice()).isZero();
        softAssertions.assertThat(wheelOption.getMainFeedback()).contains("20인치 알로이 휠은 충격흡수가 잘돼요!");
        softAssertions.assertThat(wheelOption.getSubFeedback()).contains("뛰어난 승차감을 원하신다면,");
        softAssertions.assertThat(wheelOption.getImgSrc()).isEqualTo("selective_option/6_1.png");
        softAssertions.assertThat(wheelOption.getIconSrc()).isEqualTo("selective_option/nperformance.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 시스템옵션 패키지 정보를 가져옵니다.")
    void findAllSystem() {
        // Given
        String categoryName = "system";

        // When
        List<OptionPackage> systems = selectiveOptionRepository.findAllPackageByPackageName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(systems).hasSize(3);

        OptionPackage systemOption = systems.get(0);
        softAssertions.assertThat(systemOption.getId()).isEqualTo(1L);
        softAssertions.assertThat(systemOption.getName()).isEqualTo("현대스마트센스 1");
        softAssertions.assertThat(systemOption.getPrice()).isEqualTo(790000);
        softAssertions.assertThat(systemOption.getIconSrc()).isNull();

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("시스템옵션 패키지 ID로 해당 패키지의 구성요소 정보를 가져옵니다.")
    void findAllSystemComponentBySystemOptionId() {
        // Given
        String categoryName = "system";
        Long systemOptionId = 1L;

        // When
        List<PackageComponent> systemOptionComponents = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId(categoryName, systemOptionId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(systemOptionComponents).hasSize(3);

        PackageComponent component = systemOptionComponents.get(0);
        softAssertions.assertThat(component.getId()).isEqualTo(1L);
        softAssertions.assertThat(component.getPackageId()).isEqualTo(systemOptionId);
        softAssertions.assertThat(component.getName()).isEqualTo("전방 충돌방지 보조");
        softAssertions.assertThat(component.getDescription()).contains("선행 차량이 갑자기 속도를 줄이거나,");
        softAssertions.assertThat(component.getImgSrc()).isEqualTo("selective_option/system_option/1.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 온도관리옵션 패키지 정보를 가져옵니다.")
    void findAllTemperature() {
        // Given
        String categoryName = "temperature";

        // When
        List<OptionPackage> temperatures = selectiveOptionRepository.findAllPackageByPackageName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(temperatures).hasSize(2);

        OptionPackage temperatureOption = temperatures.get(1);
        softAssertions.assertThat(temperatureOption.getId()).isEqualTo(2L);
        softAssertions.assertThat(temperatureOption.getName()).isEqualTo("적외선 무릎워머");
        softAssertions.assertThat(temperatureOption.getPrice()).isEqualTo(300000);
        softAssertions.assertThat(temperatureOption.getIconSrc()).isEqualTo("selective_option/HGenuineAccessories.svg");
    }

    @Test
    @DisplayName("온도관리옵션 패키지 ID로 해당 패키지의 구성요소 정보를 가져옵니다.")
    void findAllTemperatureComponentBySystemOptionId() {
        // Given
        String categoryName = "temperature";
        Long temperatureOptionId = 1L;

        // When
        List<PackageComponent> temperatureOptionComponents = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId(categoryName, temperatureOptionId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(temperatureOptionComponents).hasSize(1);

        PackageComponent component = temperatureOptionComponents.get(0);
        softAssertions.assertThat(component.getId()).isEqualTo(1L);
        softAssertions.assertThat(component.getPackageId()).isEqualTo(temperatureOptionId);
        softAssertions.assertThat(component.getName()).isNull();
        softAssertions.assertThat(component.getDescription()).contains("시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면");
        softAssertions.assertThat(component.getImgSrc()).isEqualTo("selective_option/temperature_option/1.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 외부장치옵션 패키지 정보를 가져옵니다.")
    void findAllExternalDevice() {
        // Given
        String categoryName = "external_device";

        // When
        List<OptionPackage> externalDevices = selectiveOptionRepository.findAllPackageByPackageName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(externalDevices).hasSize(3);

        OptionPackage externalDeviceOption = externalDevices.get(0);
        softAssertions.assertThat(externalDeviceOption.getId()).isEqualTo(1L);
        softAssertions.assertThat(externalDeviceOption.getName()).isEqualTo("차량 보호 필름");
        softAssertions.assertThat(externalDeviceOption.getPrice()).isEqualTo(490000);
        softAssertions.assertThat(externalDeviceOption.getIconSrc()).isEqualTo("selective_option/hgenuine.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("외부장치옵션 패키지 ID로 해당 패키지의 구성요소 정보를 가져옵니다.")
    void findAllExternalDeviceComponentBySystemOptionId() {
        // Given
        String categoryName = "external_device";
        Long externalDeviceOptionId = 1L;

        // When
        List<PackageComponent> eDeviceOptionComponents = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId(categoryName, externalDeviceOptionId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(eDeviceOptionComponents).hasSize(1);

        PackageComponent component = eDeviceOptionComponents.get(0);
        softAssertions.assertThat(component.getId()).isEqualTo(1L);
        softAssertions.assertThat(component.getPackageId()).isEqualTo(externalDeviceOptionId);
        softAssertions.assertThat(component.getName()).isNull();
        softAssertions.assertThat(component.getDescription()).isNull();
        softAssertions.assertThat(component.getImgSrc()).isEqualTo("selective_option/external_device_option/1.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("모든 내부장치옵션 패키지 정보를 가져옵니다.")
    void findAllInternalDevice() {
        // Given
        String categoryName = "internal_device";

        // When
        List<OptionPackage> internalDevices = selectiveOptionRepository.findAllPackageByPackageName(categoryName);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(internalDevices).hasSize(4);

        OptionPackage internalDeviceOption = internalDevices.get(1);
        softAssertions.assertThat(internalDeviceOption.getId()).isEqualTo(2L);
        softAssertions.assertThat(internalDeviceOption.getName()).isEqualTo("프로텍션 매트 패키지 1");
        softAssertions.assertThat(internalDeviceOption.getPrice()).isEqualTo(250000);
        softAssertions.assertThat(internalDeviceOption.getIconSrc()).isEqualTo("selective_option/hgenuine.png");

        softAssertions.assertAll();
    }

    @Test
    @DisplayName("내부장치옵션 패키지 ID로 해당 패키지의 구성요소 정보를 가져옵니다.")
    void findAllInternalDeviceComponentBySystemOptionId() {
        // Given
        String categoryName = "internal_device";
        Long internalDeviceOptionId = 1L;

        // When
        List<PackageComponent> iDeviceOptionComponents = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId(categoryName, internalDeviceOptionId);

        // Then
        SoftAssertions softAssertions = new SoftAssertions();

        softAssertions.assertThat(iDeviceOptionComponents).hasSize(1);

        PackageComponent component = iDeviceOptionComponents.get(0);
        softAssertions.assertThat(component.getId()).isEqualTo(1L);
        softAssertions.assertThat(component.getPackageId()).isEqualTo(internalDeviceOptionId);
        softAssertions.assertThat(component.getName()).isNull();
        softAssertions.assertThat(component.getDescription()).contains("후석에 고정 글라스를 적용한");
        softAssertions.assertThat(component.getImgSrc()).isEqualTo("selective_option/internal_device_option/1.png");

        softAssertions.assertAll();
    }
}