package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.selectiveOption.*;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOptionComponent;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.*;
import com.softeer2nd.ohmycarset.repository.SelectiveOptionRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SelectiveOptionService {

    private final SelectiveOptionRepository selectiveOptionRepository;

    public SelectiveOptionService(SelectiveOptionRepository selectiveOptionRepository) {
        this.selectiveOptionRepository = selectiveOptionRepository;
    }

    public List<SelectiveOptionDefaultDto> getAllPowerTrainOption() {
        List<SelectiveOptionDefaultDto> powerTrainDtoList = new ArrayList<>();

        List<PowerTrainOption> powerTrainList = selectiveOptionRepository.findAllPowerTrain();

        for (PowerTrainOption powerTrain : powerTrainList) {
            powerTrainDtoList.add(new SelectiveOptionDefaultDto(powerTrain));
        }

        return powerTrainDtoList;
    }

    public List<SelectiveOptionDefaultDto> getAllWDOption() {
        List<SelectiveOptionDefaultDto> wdDtoList = new ArrayList<>();

        List<WDOption> wdList = selectiveOptionRepository.findAllWD();

        for (WDOption wd : wdList) {
            wdDtoList.add(new SelectiveOptionDefaultDto(wd));
        }

        return wdDtoList;

    }

    public List<SelectiveOptionDefaultDto> getAllBodyOption() {
        List<SelectiveOptionDefaultDto> bodyDtoList = new ArrayList<>();

        List<BodyOption> bodyList = selectiveOptionRepository.findAllBody();

        for (BodyOption body : bodyList) {
            bodyDtoList.add(new SelectiveOptionDefaultDto(body));
        }

        return bodyDtoList;
    }

    public List<SelectiveOptionDefaultDto> getAllExteriorColorOption() {
        List<SelectiveOptionDefaultDto> exteriorColorOptionDtoList = new ArrayList<>();

        List<ExteriorColorOption> exteriorColorList = selectiveOptionRepository.findAllExteriorColor();

        for (ExteriorColorOption exteriorColor : exteriorColorList) {
            exteriorColorOptionDtoList.add(new SelectiveOptionDefaultDto(exteriorColor));
        }

        return exteriorColorOptionDtoList;
    }

    public List<SelectiveOptionDefaultDto> getAllInteriorColorOption() {
        List<SelectiveOptionDefaultDto> interiorColorOptionDtoList = new ArrayList<>();

        List<InteriorColorOption> interiorColorList = selectiveOptionRepository.findAllInteriorColor();

        for (InteriorColorOption interiorColor : interiorColorList) {
            interiorColorOptionDtoList.add(new SelectiveOptionDefaultDto(interiorColor));
        }

        return interiorColorOptionDtoList;
    }

    public List<SelectiveOptionDefaultDto> getAllWheelOption() {
        List<SelectiveOptionDefaultDto> wheelOptionDtoList = new ArrayList<>();

        List<WheelOption> wheelList = selectiveOptionRepository.findAllWheel();

        for (WheelOption wheel : wheelList) {
            wheelOptionDtoList.add(new SelectiveOptionDefaultDto(wheel));
        }

        return wheelOptionDtoList;
    }

    public List<SelectiveOptionAdditionalDto> getAllSystemOption() {
        List<SelectiveOptionAdditionalDto> selectiveOptionAdditionalDtoList = new ArrayList<>();

        List<SystemOption> systemList = selectiveOptionRepository.findAllSystem();

        for (SystemOption system : systemList) {
            List<SystemOptionComponent> systemComponentList = selectiveOptionRepository.findAllSystemComponentBySystemOptionId(system.getId());

            selectiveOptionAdditionalDtoList.add(new SelectiveOptionAdditionalDto(system, systemComponentList));
        }

        return selectiveOptionAdditionalDtoList;
    }

    public List<SelectiveOptionAdditionalDto> getAllTemperatureOption() {
        List<SelectiveOptionAdditionalDto> selectiveOptionAdditionalDtoList = new ArrayList<>();

        List<TemperatureOption> temperatureList = selectiveOptionRepository.findAllTemperature();

        for (TemperatureOption temperature : temperatureList) {
            List<TemperatureOptionComponent> temperatureOptionComponentList = selectiveOptionRepository.findAllTemperatureComponentByTemperatureOptionId(temperature.getId());

            selectiveOptionAdditionalDtoList.add(new SelectiveOptionAdditionalDto(temperature, temperatureOptionComponentList));
        }

        return selectiveOptionAdditionalDtoList;
    }

    public List<SelectiveOptionAdditionalDto> getAllExternalDeviceOption() {
        List<SelectiveOptionAdditionalDto> selectiveOptionAdditionalDtoList = new ArrayList<>();

        List<ExternalDeviceOption> externalDeviceList = selectiveOptionRepository.findAllExternalDevice();

        for (ExternalDeviceOption externalDevice : externalDeviceList) {
            List<ExternalDeviceOptionComponent> externalDeviceOptionComponentList = selectiveOptionRepository.findAllExternalDeviceComponentByExternalDeviceOptionId(externalDevice.getId());

            selectiveOptionAdditionalDtoList.add(new SelectiveOptionAdditionalDto(externalDevice, externalDeviceOptionComponentList));
        }

        return selectiveOptionAdditionalDtoList;
    }

    public List<SelectiveOptionAdditionalDto> getAllInternalDeviceOption() {
        List<SelectiveOptionAdditionalDto> selectiveOptionAdditionalDtoList = new ArrayList<>();

        List<InternalDeviceOption> internalDeviceList = selectiveOptionRepository.findAllInternalDevice();

        for (InternalDeviceOption internalDevice : internalDeviceList) {
            List<InternalDeviceOptionComponent> internalDeviceOptionComponentList = selectiveOptionRepository.findAllInternalDeviceComponentByInternalDeviceOptionId(internalDevice.getId());

            selectiveOptionAdditionalDtoList.add(new SelectiveOptionAdditionalDto(internalDevice, internalDeviceOptionComponentList));
        }

        return selectiveOptionAdditionalDtoList;
    }
}
