package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import com.softeer2nd.ohmycarset.dto.selectiveOptionDto.*;
import com.softeer2nd.ohmycarset.repository.PurchaseHistoryRepository;
import com.softeer2nd.ohmycarset.repository.SelectiveOptionRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SelectiveOptionService {

    private final SelectiveOptionRepository selectiveOptionRepository;
    private final PurchaseHistoryRepository purchaseHistoryRepository;

    public SelectiveOptionService(SelectiveOptionRepository selectiveOptionRepository, PurchaseHistoryRepository purchaseHistoryRepository) {
        this.selectiveOptionRepository = selectiveOptionRepository;
        this.purchaseHistoryRepository = purchaseHistoryRepository;
    }

    public List<RequiredOptionDto> getAllOptionByName(String optionName) {
        // 해당 카테고리의 모든 옵션 목록을 받아옵니다.
        List<RequiredOption> requiredOptionList = selectiveOptionRepository.findAllOptionByOptionName(optionName);

        // 각 옵션에 대해 구매 건수를 조회합니다.
        Map<RequiredOption, Long> purchaseCountMap = new HashMap<>();
        for(RequiredOption eColorOption: requiredOptionList) {
            Long purchaseCount = purchaseHistoryRepository.countByOptionNameAndOptionId(optionName, eColorOption.getId());
            purchaseCountMap.put(eColorOption, purchaseCount);
        }

        // 내림차순으로 정렬합니다.
        List<RequiredOption> sortedKeys = purchaseCountMap.entrySet().stream()
                .sorted(Map.Entry.<RequiredOption, Long>comparingByValue().reversed())
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        // 외장 색상 옵션인 경우 특수 처리 필요
        if(optionName.equals("exterior_color")) {
            handleExteriorColorOption(sortedKeys);
        }

        List<RequiredOptionDto> requiredOptionDtoList = new ArrayList<>();
        for (RequiredOption requiredOption : sortedKeys) {
            requiredOptionDtoList.add(new RequiredOptionDto(requiredOption));
        }

        return requiredOptionDtoList;
    }

    private void handleExteriorColorOption(List<RequiredOption> optionList) {
        //각 순위에 따라 다르게 Feedback을 설정해줍니다.
        for(int rank = 1; rank < optionList.size() + 1; rank++) {
            RequiredOption option = optionList.get(rank - 1);
            if(rank == 1) {
                option.setMainFeedback(String.format("%s 색상은 가장 많이 판매됐어요!", option.getName()));
                option.setSubFeedback("가장 인기있는 색상을 원하신다면, 탁월한 선택입니다.");
            }
            if(2 <= rank && rank <= 3) {
                option.setMainFeedback(String.format("%s 색상은 인기가 많아요!", option.getName()));
                option.setSubFeedback("인기있는 색상을 원하신다면, 탁월한 선택입니다.");
            }
            if(4 <= rank && rank <= 6) {
                option.setMainFeedback(String.format("%s 색상은 희소성이 있어요!", option.getName()));
                option.setSubFeedback("독특한 색상을 원하신다면, 탁월한 선택입니다.");
            }
        }
    }

    public List<OptionPackageDto> getAllPackageByName(String packageName) {
        List<OptionPackageDto> optionPackageDtoList = new ArrayList<>();

        List<OptionPackage> packageList = selectiveOptionRepository.findAllPackageByPackageName(packageName);

        for (OptionPackage optionPackage : packageList) {
            List<PackageComponent> packageComponentList = selectiveOptionRepository.findAllComponentByPackageNameAndPackageId(packageName, optionPackage.getId());
            optionPackageDtoList.add(new OptionPackageDto(optionPackage, packageComponentList));
        }

        return optionPackageDtoList;
    }
}
