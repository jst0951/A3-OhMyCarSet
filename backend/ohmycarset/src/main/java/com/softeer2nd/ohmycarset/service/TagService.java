package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
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
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();

        List<RequiredOption> powerTrainOptionList = selectiveOptionRepository.findOptionByName("powertrain");
        for(RequiredOption powerTrainOption: powerTrainOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByPowerTrainOptionId(powerTrainOption.getId());
            purchaseCountMap.put(powerTrainOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(RequiredOption powerTrainOption: powerTrainOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(powerTrainOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(powerTrainOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagWDOption() {
        // 각 카운트 조회
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();

        List<RequiredOption> wdOptionList = selectiveOptionRepository.findOptionByName("wd");
        for(RequiredOption wdOption: wdOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByWdOptionId(wdOption.getId());
            purchaseCountMap.put(wdOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(RequiredOption wdOption: wdOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(wdOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(wdOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagBodyOption() {
        // 각 카운트 조회
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();

        List<RequiredOption> bodyOptionList = selectiveOptionRepository.findOptionByName("body");
        for(RequiredOption bodyOption: bodyOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByBodyOptionId(bodyOption.getId());
            purchaseCountMap.put(bodyOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(RequiredOption bodyOption: bodyOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(bodyOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(bodyOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagExteriorColorOption() {
        // 각 카운트 조회
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();

        List<RequiredOption> exteriorColorOptionList = selectiveOptionRepository.findOptionByName("exterior_color");
        for(RequiredOption exteriorColorOption: exteriorColorOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByExteriorColorOptionId(exteriorColorOption.getId());
            purchaseCountMap.put(exteriorColorOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(RequiredOption exteriorColorOption: exteriorColorOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(exteriorColorOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(exteriorColorOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagInteriorColorOption() {
        // 각 카운트 조회
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();

        List<RequiredOption> interiorColorOptionList = selectiveOptionRepository.findOptionByName("interior_color");
        for(RequiredOption interiorColorOption: interiorColorOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByInteriorColorOptionId(interiorColorOption.getId());
            purchaseCountMap.put(interiorColorOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(RequiredOption interiorColorOption: interiorColorOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(interiorColorOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(interiorColorOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagWheelOption() {
        // 각 카운트 조회
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();

        List<RequiredOption> wheelOptionList = selectiveOptionRepository.findOptionByName("wheel");
        for(RequiredOption wheelOption: wheelOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByWheelOptionId(wheelOption.getId());
            purchaseCountMap.put(wheelOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCountSum = purchaseCountMap.values().stream().mapToLong(Long::longValue).sum();
        for(RequiredOption wheelOption: wheelOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(wheelOption) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(wheelOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagSystemOption() {
        // 각 카운트 조회
        Map<OptionPackage, Long> purchaseCountMap = new HashMap<>();

        List<OptionPackage> systemOptionList = selectiveOptionRepository.findPackageByName("system");
        for(OptionPackage systemOption: systemOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countBySystemOptionId(systemOption.getId());
            purchaseCountMap.put(systemOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCount = purchaseHistoryRepository.count();
        for(OptionPackage systemOption: systemOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(systemOption) / purchaseCount * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(systemOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagTemperatureOption() {
        // 각 카운트 조회
        Map<OptionPackage, Long> purchaseCountMap = new HashMap<>();

        List<OptionPackage> temperatureOptionList = selectiveOptionRepository.findPackageByName("temperature");
        for(OptionPackage temperatureOption: temperatureOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByTemperatureOptionId(temperatureOption.getId());
            purchaseCountMap.put(temperatureOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCount = purchaseHistoryRepository.count();
        for(OptionPackage temperatureOption: temperatureOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(temperatureOption) / purchaseCount * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(temperatureOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagExternalDeviceOption() {
        // 각 카운트 조회
        Map<OptionPackage, Long> purchaseCountMap = new HashMap<>();

        List<OptionPackage> externalDeviceOptionList = selectiveOptionRepository.findPackageByName("external_device");
        for(OptionPackage externalDeviceOption: externalDeviceOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByExternalDeviceOptionId(externalDeviceOption.getId());
            purchaseCountMap.put(externalDeviceOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCount = purchaseHistoryRepository.count();
        for(OptionPackage externalDeviceOption: externalDeviceOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(externalDeviceOption) / purchaseCount * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(externalDeviceOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }

    public List<SelectiveOptionTagDto> getPurchaseTagInternalDeviceOption() {
        // 각 카운트 조회
        Map<OptionPackage, Long> purchaseCountMap = new HashMap<>();

        List<OptionPackage> internalDeviceOptionList = selectiveOptionRepository.findPackageByName("internal_device");
        for(OptionPackage internalDeviceOption: internalDeviceOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByInternalDeviceOptionId(internalDeviceOption.getId());
            purchaseCountMap.put(internalDeviceOption, purchaseCount);
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Long purchaseCount = purchaseHistoryRepository.count();
        for(OptionPackage internalDeviceOption: internalDeviceOptionList) {
            Double purchasePercentage = (double) purchaseCountMap.get(internalDeviceOption) / purchaseCount * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(internalDeviceOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }
}
