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
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.externalDeviceOption.ExternalDeviceOptionComponentDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.externalDeviceOption.ExternalDeviceOptionDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.internalDeviceOption.InternalDeviceOptionComponentDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.internalDeviceOption.InternalDeviceOptionDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.systemOption.SystemOptionComponentDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.systemOption.SystemOptionDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.temperatureOption.TemperatureOptionDto;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.temperatureOption.TemperatureOptionComponentDto;
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

    public List<SelectiveOptionDto> getAllPowerTrainOption() {
        List<SelectiveOptionDto> powerTrainDtoList = new ArrayList<>();

        List<PowerTrainOption> powerTrainList = selectiveOptionRepository.findAllPowerTrain();

        for (PowerTrainOption powerTrain : powerTrainList) {
            powerTrainDtoList.add(new SelectiveOptionDto(powerTrain));
        }

        return powerTrainDtoList;
    }

    public List<SelectiveOptionDto> getAllWDOption() {
        List<SelectiveOptionDto> wdDtoList = new ArrayList<>();

        List<WDOption> wdList = selectiveOptionRepository.findAllWD();

        for (WDOption wd : wdList) {
            wdDtoList.add(new SelectiveOptionDto(wd));
        }

        return wdDtoList;

    }

    public List<SelectiveOptionDto> getAllBodyOption() {
        List<SelectiveOptionDto> bodyDtoList = new ArrayList<>();

        List<BodyOption> bodyList = selectiveOptionRepository.findAllBody();

        for (BodyOption body : bodyList) {
            bodyDtoList.add(new SelectiveOptionDto(body));
        }

        return bodyDtoList;
    }

    public List<SelectiveOptionDto> getAllExteriorColorOption() {
        List<SelectiveOptionDto> exteriorColorOptionDtoList = new ArrayList<>();

        List<ExteriorColorOption> exteriorColorList = selectiveOptionRepository.findAllExteriorColor();

        for (ExteriorColorOption exteriorColor : exteriorColorList) {
            exteriorColorOptionDtoList.add(new SelectiveOptionDto(exteriorColor));
        }

        return exteriorColorOptionDtoList;
    }

    public List<SelectiveOptionDto> getAllInteriorColorOption() {
        List<SelectiveOptionDto> interiorColorOptionDtoList = new ArrayList<>();

        List<InteriorColorOption> interiorColorList = selectiveOptionRepository.findAllInteriorColor();

        for (InteriorColorOption interiorColor : interiorColorList) {
            interiorColorOptionDtoList.add(new SelectiveOptionDto(interiorColor));
        }

        return interiorColorOptionDtoList;
    }

    public List<SelectiveOptionDto> getAllWheelOption() {
        List<SelectiveOptionDto> wheelOptionDtoList = new ArrayList<>();

        List<WheelOption> wheelList = selectiveOptionRepository.findAllWheel();

        for (WheelOption wheel : wheelList) {
            wheelOptionDtoList.add(new SelectiveOptionDto(wheel));
        }

        return wheelOptionDtoList;
    }

    public List<SystemOptionDto> getAllSystemOption() {
        List<SystemOptionDto> systemOptionDtoList = new ArrayList<>();

        List<SystemOption> systemList = selectiveOptionRepository.findAllSystem();

        for (SystemOption system : systemList) {
            List<SystemOptionComponentDto> systemComponentDtoList = new ArrayList<>();
            List<SystemOptionComponent> systemComponentList = selectiveOptionRepository.findAllSystemComponentBySystemOptionId(system.getId());

            for (SystemOptionComponent systemComponent : systemComponentList) {
                systemComponentDtoList.add(new SystemOptionComponentDto(systemComponent));
            }

            systemOptionDtoList.add(new SystemOptionDto(system, systemComponentDtoList));
        }

        return systemOptionDtoList;
    }

    public List<TemperatureOptionDto> getAllTemperatureOption() {
        List<TemperatureOptionDto> temperaturOptionDtoList = new ArrayList<>();

        List<TemperatureOption> temperatureList = selectiveOptionRepository.findAllTemperature();

        for (TemperatureOption temperature : temperatureList) {
            List<TemperatureOptionComponentDto> temperatureComponentDtoList = new ArrayList<>();
            List<TemperatureOptionComponent> temperatureComponentList = selectiveOptionRepository.findAllTemperatureComponentBySystemOptionId(temperature.getId());

            for (TemperatureOptionComponent temperatureComponent : temperatureComponentList) {
                temperatureComponentDtoList.add(new TemperatureOptionComponentDto(temperatureComponent));
            }

            temperaturOptionDtoList.add(new TemperatureOptionDto(temperature, temperatureComponentDtoList));
        }

        return temperaturOptionDtoList;
    }

    public List<ExternalDeviceOptionDto> getAllExternalDeviceOption() {
        List<ExternalDeviceOptionDto> externalDeviceOptionDtoList = new ArrayList<>();

        List<ExternalDeviceOption> externalDeviceList = selectiveOptionRepository.findAllExternalDevice();

        for (ExternalDeviceOption externalDevice : externalDeviceList) {
            List<ExternalDeviceOptionComponentDto> externalDeviceComponentDtoList = new ArrayList<>();
            List<ExternalDeviceOptionComponent> externalDeviceComponentList = selectiveOptionRepository.findAllExternalDeviceComponentBySystemOptionId(externalDevice.getId());

            for (ExternalDeviceOptionComponent externalDeviceComponent : externalDeviceComponentList) {
                externalDeviceComponentDtoList.add(new ExternalDeviceOptionComponentDto(externalDeviceComponent));
            }

            externalDeviceOptionDtoList.add(new ExternalDeviceOptionDto(externalDevice, externalDeviceComponentDtoList));
        }

        return externalDeviceOptionDtoList;
    }

    public List<InternalDeviceOptionDto> getAllInternalDeviceOption() {
        List<InternalDeviceOptionDto> internalDeviceOptionDtoList = new ArrayList<>();

        List<InternalDeviceOption> internalDeviceList = selectiveOptionRepository.findAllInternalDevice();

        for (InternalDeviceOption internalDevice : internalDeviceList) {
            List<InternalDeviceOptionComponentDto> internalDeviceComponentDtoList = new ArrayList<>();
            List<InternalDeviceOptionComponent> internalDeviceComponentList = selectiveOptionRepository.findAllInternalDeviceComponentBySystemOptionId(internalDevice.getId());

            for (InternalDeviceOptionComponent internalDeviceComponent : internalDeviceComponentList) {
                internalDeviceComponentDtoList.add(new InternalDeviceOptionComponentDto(internalDeviceComponent));
            }

            internalDeviceOptionDtoList.add(new InternalDeviceOptionDto(internalDevice, internalDeviceComponentDtoList));
        }

        return internalDeviceOptionDtoList;
    }
}
