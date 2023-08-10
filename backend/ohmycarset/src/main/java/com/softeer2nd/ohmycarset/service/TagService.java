package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.domain.selectiveOption.*;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOption;
import com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto.SelectiveOptionTagDto;
import com.softeer2nd.ohmycarset.repository.PurchaseHistoryRepository;
import com.softeer2nd.ohmycarset.repository.SelectiveOptionRepository;
import com.softeer2nd.ohmycarset.repository.TagRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TagService {
    private final TagRepository tagRepository;
    private final SelectiveOptionRepository selectiveOptionRepository;
    private final PurchaseHistoryRepository purchaseHistoryRepository;
    public TagService(TagRepository tagRepository, SelectiveOptionRepository selectiveOptionRepository, PurchaseHistoryRepository purchaseHistoryRepository) {
        this.tagRepository = tagRepository;
        this.selectiveOptionRepository = selectiveOptionRepository;
        this.purchaseHistoryRepository = purchaseHistoryRepository;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagPowerTrainOption() {
        // 각 카운트 조회
        Map<PowerTrainOption, Long> purchaseCountMap = new HashMap<>();

        List<PowerTrainOption> powerTrainOptionList = selectiveOptionRepository.findAllPowerTrain();
        for(PowerTrainOption powerTrainOption: powerTrainOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByPowerTrainOptionId(powerTrainOption.getId());
            purchaseCountMap.put(powerTrainOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(PowerTrainOption powerTrainOption: powerTrainOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(powerTrainOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(powerTrainOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagWDOption() {
        // 각 카운트 조회
        Map<WDOption, Long> purchaseCountMap = new HashMap<>();

        List<WDOption> wdOptionList = selectiveOptionRepository.findAllWD();
        for(WDOption wdOption: wdOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByWdOptionId(wdOption.getId());
            purchaseCountMap.put(wdOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(WDOption wdOption: wdOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(wdOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(wdOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagBodyOption() {
        // 각 카운트 조회
        Map<BodyOption, Long> purchaseCountMap = new HashMap<>();

        List<BodyOption> bodyOptionList = selectiveOptionRepository.findAllBody();
        for(BodyOption bodyOption: bodyOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByBodyOptionId(bodyOption.getId());
            purchaseCountMap.put(bodyOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(BodyOption bodyOption: bodyOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(bodyOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(bodyOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagExteriorColorOption() {
        // 각 카운트 조회
        Map<ExteriorColorOption, Long> purchaseCountMap = new HashMap<>();

        List<ExteriorColorOption> exteriorColorOptionList = selectiveOptionRepository.findAllExteriorColor();
        for(ExteriorColorOption exteriorColorOption: exteriorColorOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByExteriorColorOptionId(exteriorColorOption.getId());
            purchaseCountMap.put(exteriorColorOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(ExteriorColorOption exteriorColorOption: exteriorColorOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(exteriorColorOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(exteriorColorOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagInteriorColorOption() {
        // 각 카운트 조회
        Map<InteriorColorOption, Long> purchaseCountMap = new HashMap<>();

        List<InteriorColorOption> interiorColorOptionList = selectiveOptionRepository.findAllInteriorColor();
        for(InteriorColorOption interiorColorOption: interiorColorOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByInteriorColorOptionId(interiorColorOption.getId());
            purchaseCountMap.put(interiorColorOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(InteriorColorOption interiorColorOption: interiorColorOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(interiorColorOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(interiorColorOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagWheelOption() {
        // 각 카운트 조회
        Map<WheelOption, Long> purchaseCountMap = new HashMap<>();

        List<WheelOption> wheelOptionList = selectiveOptionRepository.findAllWheel();
        for(WheelOption wheelOption: wheelOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByWheelOptionId(wheelOption.getId());
            purchaseCountMap.put(wheelOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(WheelOption wheelOption: wheelOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(wheelOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(wheelOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagSystemOption() {
        // 각 카운트 조회
        Map<SystemOption, Long> purchaseCountMap = new HashMap<>();

        List<SystemOption> systemOptionList = selectiveOptionRepository.findAllSystem();
        for(SystemOption systemOption: systemOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countBySystemOptionId(systemOption.getId());
            purchaseCountMap.put(systemOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCount = purchaseHistoryRepository.count();
        for(SystemOption systemOption: systemOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(systemOption) / purchaseCount * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(systemOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagTemperatureOption() {
        // 각 카운트 조회
        Map<TemperatureOption, Long> purchaseCountMap = new HashMap<>();

        List<TemperatureOption> temperatureOptionList = selectiveOptionRepository.findAllTemperature();
        for(TemperatureOption temperatureOption: temperatureOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByTemperatureOptionId(temperatureOption.getId());
            purchaseCountMap.put(temperatureOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCount = purchaseHistoryRepository.count();
        for(TemperatureOption temperatureOption: temperatureOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(temperatureOption) / purchaseCount * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(temperatureOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagExternalDeviceOption() {
        // 각 카운트 조회
        Map<ExternalDeviceOption, Long> purchaseCountMap = new HashMap<>();

        List<ExternalDeviceOption> externalDeviceOptionList = selectiveOptionRepository.findAllExternalDevice();
        for(ExternalDeviceOption externalDeviceOption: externalDeviceOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByExternalDeviceOptionId(externalDeviceOption.getId());
            purchaseCountMap.put(externalDeviceOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCount = purchaseHistoryRepository.count();
        for(ExternalDeviceOption externalDeviceOption: externalDeviceOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(externalDeviceOption) / purchaseCount * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(externalDeviceOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagInternalDeviceOption() {
        // 각 카운트 조회
        Map<InternalDeviceOption, Long> purchaseCountMap = new HashMap<>();

        List<InternalDeviceOption> internalDeviceOptionList = selectiveOptionRepository.findAllInternalDevice();
        for(InternalDeviceOption internalDeviceOption: internalDeviceOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByInternalDeviceOptionId(internalDeviceOption.getId());
            purchaseCountMap.put(internalDeviceOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCount = purchaseHistoryRepository.count();
        for(InternalDeviceOption internalDeviceOption: internalDeviceOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(internalDeviceOption) / purchaseCount * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(internalDeviceOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }
}
