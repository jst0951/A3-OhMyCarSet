package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;

import javax.sql.DataSource;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

@JdbcTest
@ActiveProfiles("test")
@Sql(scripts = {
        "classpath:/insert/selective/insert_powertrain_option.sql",
        "classpath:/insert/selective/insert_wd_option.sql",
        "classpath:/insert/selective/insert_body_option.sql",
        "classpath:/insert/selective/insert_exterior_color_option.sql",
        "classpath:/insert/selective/insert_interior_color_option.sql",
        "classpath:/insert/selective/insert_wheel_option.sql",
        "classpath:/insert/selective/insert_system_option.sql",
        "classpath:/insert/selective/insert_system_option_component.sql",
        "classpath:/insert/selective/insert_temperature_option.sql",
        "classpath:/insert/selective/insert_temperature_option_component.sql",
        "classpath:/insert/selective/insert_external_device_option.sql",
        "classpath:/insert/selective/insert_external_device_option_component.sql",
        "classpath:/insert/selective/insert_internal_device_option.sql",
        "classpath:/insert/selective/insert_internal_device_option_component.sql",
})
class SelectiveOptionRepositoryTest {

    private final SelectiveOptionRepository selectiveOptionRepository;

    @Autowired
    public SelectiveOptionRepositoryTest(DataSource dataSource) {
        this.selectiveOptionRepository = new SelectiveOptionRepositoryImpl(dataSource);
    }

    @Test
    @DisplayName("모든 파워트레인 옵션 정보를 가져옵니다.")
    void findAllPowerTrain() {
        List<RequiredOption> powerTrains = selectiveOptionRepository.findAllOptionByOptionName("powertrain");
        assertThat(powerTrains).hasSize(2);

        RequiredOption powerTrainOption = powerTrains.get(0);
        assertThat(powerTrainOption.getId()).isEqualTo(1L);
        assertThat(powerTrainOption.getName()).isEqualTo("디젤 2.2");
        assertThat(powerTrainOption.getImgSrc()).isEqualTo("selective_option/1_1.png");
        assertThat(powerTrainOption.getPrice()).isEqualTo(1480000);
        assertThat(powerTrainOption.getMainDescription()).contains("높은 토크로 파워풀한 드라이빙이 가능하며,");
        assertThat(powerTrainOption.getSubDescription()).contains("최고출력 202 ps / 3,800 rpm");
        assertThat(powerTrainOption.getMainFeedback()).contains("디젤 엔진은 효율이 좋아요!");
        assertThat(powerTrainOption.getSubFeedback()).contains("효율을 중시한다면, 탁월한 선택입니다.");
    }

    @Test
    @DisplayName("모든 구동방식 옵션 정보를 가져옵니다.")
    void findAllWD() {
        List<RequiredOption> wds = selectiveOptionRepository.findAllOptionByOptionName("wd");
        assertThat(wds).hasSize(2);

        RequiredOption wdOption = wds.get(0);
        assertThat(wdOption.getId()).isEqualTo(1L);
        assertThat(wdOption.getName()).isEqualTo("2WD");
        assertThat(wdOption.getPrice()).isZero();
        assertThat(wdOption.getMainDescription()).contains("엔진에서 전달되는 동력이");
        assertThat(wdOption.getMainFeedback()).contains("2WD는 효율이 좋아요!");
        assertThat(wdOption.getSubFeedback()).contains("효율을 중시한다면, 탁월한 선택입니다.");
        assertThat(wdOption.getImgSrc()).isEqualTo("selective_option/2_1.png");
    }

    @Test
    @DisplayName("모든 바디타입 옵션 정보를 가져옵니다.")
    void findAllBody() {
        List<RequiredOption> bodies = selectiveOptionRepository.findAllOptionByOptionName("body");
        assertThat(bodies).hasSize(2);

        RequiredOption bodyOption = bodies.get(0);
        assertThat(bodyOption.getId()).isEqualTo(1L);
        assertThat(bodyOption.getName()).isEqualTo("7인승");
        assertThat(bodyOption.getPrice()).isZero();
        assertThat(bodyOption.getMainDescription()).contains("기존 8인승 시트(1열 2명, 2열 3명, 3열 3명)에서");
        assertThat(bodyOption.getMainFeedback()).contains("통로가 있어 쾌적해요!");
        assertThat(bodyOption.getSubFeedback()).contains("쾌적함을 원하신다면, 탁월한 선택입니다.");
        assertThat(bodyOption.getImgSrc()).isEqualTo("selective_option/3_1.png");
    }

    @Test
    @DisplayName("모든 외장색상 옵션 정보를 가져옵니다.")
    void findAllExteriorColor() {
        List<RequiredOption> exteriorColors = selectiveOptionRepository.findAllOptionByOptionName("exterior_color");
        assertThat(exteriorColors).hasSize(6);

        RequiredOption exteriorColorOption = exteriorColors.get(0);
        assertThat(exteriorColorOption.getId()).isEqualTo(1L);
        assertThat(exteriorColorOption.getName()).isEqualTo("크리미 화이트 펄");
        assertThat(exteriorColorOption.getPrice()).isEqualTo(100000);
        assertThat(exteriorColorOption.getMainFeedback()).isEmpty();
        assertThat(exteriorColorOption.getSubFeedback()).isEmpty();
        assertThat(exteriorColorOption.getImgSrc()).isEqualTo("selective_option/4_1.png");
        assertThat(exteriorColorOption.getIconSrc()).isEmpty();
    }

    @Test
    @DisplayName("모든 내장색상 옵션 정보를 가져옵니다.")
    void findAllInteriorColor() {
        List<RequiredOption> interiorColors = selectiveOptionRepository.findAllOptionByOptionName("interior_color");
        assertThat(interiorColors).hasSize(2);

        RequiredOption interiorColorOption = interiorColors.get(0);
        assertThat(interiorColorOption.getId()).isEqualTo(1L);
        assertThat(interiorColorOption.getName()).isEqualTo("퀼팅 천연(블랙)");
        assertThat(interiorColorOption.getPrice()).isZero();
        assertThat(interiorColorOption.getMainFeedback()).contains("블랙 컬러는 클래식한 분위기에요!");
        assertThat(interiorColorOption.getSubFeedback()).contains("클래식한 분위기를 원하신다면,");
        assertThat(interiorColorOption.getImgSrc()).isEqualTo("selective_option/5_1.png");
        assertThat(interiorColorOption.getIconSrc()).isEmpty();
    }

    @Test
    @DisplayName("모든 휠 옵션 정보를 가져옵니다.")
    void findAllWheel() {
        List<RequiredOption> wheels = selectiveOptionRepository.findAllOptionByOptionName("wheel");
        assertThat(wheels).hasSize(4);

        RequiredOption wheelOption = wheels.get(0);
        assertThat(wheelOption.getId()).isEqualTo(1L);
        assertThat(wheelOption.getName()).isEqualTo("20인치 알로이 휠 & 타이어");
        assertThat(wheelOption.getPrice()).isZero();
        assertThat(wheelOption.getMainFeedback()).contains("20인치 알로이 휠은 충격흡수가 잘돼요!");
        assertThat(wheelOption.getSubFeedback()).contains("뛰어난 승차감을 원하신다면,");
        assertThat(wheelOption.getImgSrc()).isEqualTo("selective_option/6_1.png");
        assertThat(wheelOption.getIconSrc()).isEqualTo("selective_option/NPerformance.svg");
    }

    @Test
    @DisplayName("모든 시스템옵션 패키지 정보를 가져옵니다.")
    void findAllSystem() {
        List<OptionPackage> systems = selectiveOptionRepository.findAllPackageByCategoryName("system");
        assertThat(systems).hasSize(3);

        OptionPackage systemOption = systems.get(0);
        assertThat(systemOption.getId()).isEqualTo(1L);
        assertThat(systemOption.getName()).isEqualTo("현대스마트센스 1");
        assertThat(systemOption.getPrice()).isEqualTo(790000);
        assertThat(systemOption.getIconSrc()).isNull();
    }

    @Test
    @DisplayName("시스템옵션 패키지 ID로 해당 패키지의 구성요소 정보를 가져옵니다.")
    void findAllSystemComponentBySystemOptionId() {
        Long systemOptionId = 1L;
        List<PackageComponent> systemOptionComponents = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId("system", systemOptionId);
        assertThat(systemOptionComponents).hasSize(3);

        PackageComponent component = systemOptionComponents.get(0);
        assertThat(component.getId()).isEqualTo(1L);
        assertThat(component.getPackageId()).isEqualTo(systemOptionId);
        assertThat(component.getName()).isEqualTo("전방 충돌방지 보조");
        assertThat(component.getDescription()).contains("선행 차량이 갑자기 속도를 줄이거나,");
        assertThat(component.getImgSrc()).isEqualTo("selective_option/7_1.png");
    }

    @Test
    @DisplayName("모든 온도관리옵션 패키지 정보를 가져옵니다.")
    void findAllTemperature() {
        List<OptionPackage> temperatures = selectiveOptionRepository.findAllPackageByCategoryName("temperature");
        assertThat(temperatures).hasSize(2);

        OptionPackage temperatureOption = temperatures.get(1);
        assertThat(temperatureOption.getId()).isEqualTo(2L);
        assertThat(temperatureOption.getName()).isEqualTo("적외선 무릎워머");
        assertThat(temperatureOption.getPrice()).isEqualTo(300000);
        assertThat(temperatureOption.getIconSrc()).isEqualTo("selective_option/HGenuineAccessories.svg");
    }

    @Test
    @DisplayName("온도관리옵션 패키지 ID로 해당 패키지의 구성요소 정보를 가져옵니다.")
    void findAllTemperatureComponentBySystemOptionId() {
        Long temperatureOptionId = 1L;
        List<PackageComponent> temperatureOptionComponents = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId("temperature", temperatureOptionId);
        assertThat(temperatureOptionComponents).hasSize(1);

        PackageComponent component = temperatureOptionComponents.get(0);
        assertThat(component.getId()).isEqualTo(1L);
        assertThat(component.getPackageId()).isEqualTo(temperatureOptionId);
        assertThat(component.getName()).isNull();
        assertThat(component.getDescription()).contains("시동이 걸린 상태에서 해당 좌석의 통풍 스위치를 누르면");
        assertThat(component.getImgSrc()).isEqualTo("selective_option/8_1.png");
    }

    @Test
    @DisplayName("모든 외부장치옵션 패키지 정보를 가져옵니다.")
    void findAllExternalDevice() {
        List<OptionPackage> externalDevices = selectiveOptionRepository.findAllPackageByCategoryName("external_device");
        assertThat(externalDevices).hasSize(3);

        OptionPackage externalDeviceOption = externalDevices.get(0);
        assertThat(externalDeviceOption.getId()).isEqualTo(1L);
        assertThat(externalDeviceOption.getName()).isEqualTo("차량 보호 필름");
        assertThat(externalDeviceOption.getPrice()).isEqualTo(490000);
        assertThat(externalDeviceOption.getIconSrc()).isEqualTo("selective_option/HGenuineAccessories.svg");
    }

    @Test
    @DisplayName("외부장치옵션 패키지 ID로 해당 패키지의 구성요소 정보를 가져옵니다.")
    void findAllExternalDeviceComponentBySystemOptionId() {
        Long externalDeviceOptionId = 1L;
        List<PackageComponent> eDeviceOptionComponents = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId("external_device", externalDeviceOptionId);
        assertThat(eDeviceOptionComponents).hasSize(1);

        PackageComponent component = eDeviceOptionComponents.get(0);
        assertThat(component.getId()).isEqualTo(1L);
        assertThat(component.getPackageId()).isEqualTo(externalDeviceOptionId);
        assertThat(component.getName()).isNull();
        assertThat(component.getDescription()).isNull();
        assertThat(component.getImgSrc()).isEqualTo("selective_option/9_1.png");
    }

    @Test
    @DisplayName("모든 내부장치옵션 패키지 정보를 가져옵니다.")
    void findAllInternalDevice() {
        List<OptionPackage> internalDevices = selectiveOptionRepository.findAllPackageByCategoryName("internal_device");
        assertThat(internalDevices).hasSize(4);

        OptionPackage internalDeviceOption = internalDevices.get(1);
        assertThat(internalDeviceOption.getId()).isEqualTo(2L);
        assertThat(internalDeviceOption.getName()).isEqualTo("프로텍션 매트 패키지 1");
        assertThat(internalDeviceOption.getPrice()).isEqualTo(250000);
        assertThat(internalDeviceOption.getIconSrc()).isEqualTo("selective_option/HGenuineAccessories.svg");
    }

    @Test
    @DisplayName("내부장치옵션 패키지 ID로 해당 패키지의 구성요소 정보를 가져옵니다.")
    void findAllInternalDeviceComponentBySystemOptionId() {
        Long internalDeviceOptionId = 1L;
        List<PackageComponent> iDeviceOptionComponents = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId("internal_device", internalDeviceOptionId);
        assertThat(iDeviceOptionComponents).hasSize(1);

        PackageComponent component = iDeviceOptionComponents.get(0);
        assertThat(component.getId()).isEqualTo(1L);
        assertThat(component.getPackageId()).isEqualTo(internalDeviceOptionId);
        assertThat(component.getName()).isNull();
        assertThat(component.getDescription()).contains("후석에 고정 글라스를 적용한");
        assertThat(component.getImgSrc()).isEqualTo("selective_option/10_1.png");
    }
}