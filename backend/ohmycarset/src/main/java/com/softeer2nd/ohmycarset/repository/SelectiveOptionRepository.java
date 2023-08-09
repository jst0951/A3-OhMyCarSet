package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.selectiveOption.*;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOptionComponent;

import java.util.List;

public interface SelectiveOptionRepository {
    List<PowerTrainOption> findAllPowerTrain();
    List<WDOption> findAllWD();
    List<BodyOption> findAllBody();
    List<ExteriorColorOption> findAllExteriorColor();
    List<InteriorColorOption> findAllInteriorColor();
    List<WheelOption> findAllWheel();
    List<SystemOption> findAllSystem();
    List<SystemOptionComponent> findAllSystemComponentBySystemOptionId(Long sOptionId);
    List<TemperatureOption> findAllTemperature();
    List<TemperatureOptionComponent> findAllTemperatureComponentBySystemOptionId(Long tOptionId);
    List<ExternalDeviceOption> findAllExternalDevice();
    List<ExternalDeviceOptionComponent> findAllExternalDeviceComponentBySystemOptionId(Long edOptionId);
    List<InternalDeviceOption> findAllInternalDevice();
    List<InternalDeviceOptionComponent> findAllInternalDeviceComponentBySystemOptionId(Long idOptionId);
}
