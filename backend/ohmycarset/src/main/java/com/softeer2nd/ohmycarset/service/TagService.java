package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.domain.selectiveOption.PowerTrainOption;
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

    public List<SelectiveOptionTagDto> getPurchaseTagPowerTrain() {
        // 각 카운트 조회
        Map<PowerTrainOption, Integer> purchaseCountMap = new HashMap<>();

        List<PowerTrainOption> powerTrainOptionList = selectiveOptionRepository.findAllPowerTrain();
        for(PowerTrainOption powerTrainOption: powerTrainOptionList) {
            List<PurchaseHistory> purchaseHistoryList = purchaseHistoryRepository.findAllByPowerTrainOptionId(powerTrainOption.getId());
            purchaseCountMap.put(powerTrainOption, purchaseHistoryList.size());
        }

        // 확률 계산 및 태그로 전송
        List<SelectiveOptionTagDto> selectiveOptionTagDtoList = new ArrayList<>();

        Double purchaseCountSum = (double) purchaseCountMap.values().stream().mapToInt(Integer::intValue).sum();
        for(PowerTrainOption powerTrainOption: powerTrainOptionList) {
            Double purchasePercentage = Float.valueOf(purchaseCountMap.get(powerTrainOption)) / purchaseCountSum * 100;
            selectiveOptionTagDtoList.add(new SelectiveOptionTagDto(powerTrainOption, purchasePercentage));
        }

        return selectiveOptionTagDtoList;
    }
}
