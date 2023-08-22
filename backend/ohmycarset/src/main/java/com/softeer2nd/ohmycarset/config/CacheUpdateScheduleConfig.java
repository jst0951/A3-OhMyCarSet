package com.softeer2nd.ohmycarset.config;

import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import com.softeer2nd.ohmycarset.repository.PurchaseHistoryRepository;
import com.softeer2nd.ohmycarset.repository.SelectiveOptionRepository;
import com.softeer2nd.ohmycarset.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CacheUpdateScheduleConfig {

    private final CacheUpdateConfig cacheUpdateConfig;
    private final ExecutorService executorService = Executors.newWorkStealingPool();
    private final long refreshPeriod = 1 * 60 * 60 * 1000; // ms 단위

    private final TagRepository tagRepository;
    private final PurchaseHistoryRepository purchaseHistoryRepository;
    private final SelectiveOptionRepository selectiveOptionRepository;

    private final List<String> requiredOptionCategoryNameList =
            new ArrayList<>(List.of("powertrain", "wd", "body", "exterior_color", "interior_color", "wheel"));
    private final List<String> optionPackageCategoryNameList =
            new ArrayList<>(List.of("system", "temperature", "external_device", "internal_device"));
    private final List<Character> genderList = new ArrayList<>(List.of('F', 'M', 'N'));
    private final List<Integer> ageList = new ArrayList<>(List.of(20, 30, 40, 50, 60, 70));

    @Scheduled(fixedRate = refreshPeriod)
    public void count() {
        Runnable runnable = () -> {
            cacheUpdateConfig.count();
        };
        executorService.submit(runnable);
    }

    @Scheduled(fixedRate = refreshPeriod)
    public void countByTagId() {
        // 모든 태그 목록을 불러옵니다.
        List<Long> tagIds = tagRepository.findAll().stream()
                .map(Tag::getId)
                .collect(Collectors.toList());

        // 각 태그에 대해 캐시 갱신을 진행합니다.
        for(Long tagId: tagIds) {
            Runnable runnable = () -> {
                cacheUpdateConfig.countByTagId(tagId);
            };
            executorService.submit(runnable);
        }
    }

    @Scheduled(fixedRate = refreshPeriod)
    public void countByCategoryNameAndOptionId() {
        for(String categoryName: requiredOptionCategoryNameList) {
            List<RequiredOption> requiredOptionList = selectiveOptionRepository.findAllOptionByCategoryName(categoryName);
            for(RequiredOption requiredOption: requiredOptionList) {
                Runnable runnable = () -> {
                    cacheUpdateConfig.countByCategoryNameAndOptionId(categoryName, requiredOption.getId());
                };
                executorService.submit(runnable);
            }
        }
    }

    @Scheduled(fixedRate = refreshPeriod)
    public void countByCategoryNameAndPackageId() {
        for(String categoryName: optionPackageCategoryNameList) {
            List<OptionPackage> optionPackageList = selectiveOptionRepository.findAllPackageByCategoryName(categoryName);
            for(OptionPackage optionPackage: optionPackageList) {
                Runnable runnable = () -> {
                    cacheUpdateConfig.countByCategoryNameAndPackageId(categoryName, optionPackage.getId());
                };
                executorService.submit(runnable);
            }
        }
    }

    @Scheduled(fixedRate = refreshPeriod)
    public void countByTagIdAndCategoryNameAndOptionId() {
        List<Long> tagIds = tagRepository.findAll().stream()
                .map(Tag::getId)
                .collect(Collectors.toList());

        for(Long tagId: tagIds) {
            for(String categoryName: requiredOptionCategoryNameList) {
                List<RequiredOption> requiredOptionList = selectiveOptionRepository.findAllOptionByCategoryName(categoryName);
                for(RequiredOption requiredOption: requiredOptionList) {
                    Runnable runnable = () -> {
                        cacheUpdateConfig.countByTagIdAndCategoryNameAndOptionId(tagId, categoryName, requiredOption.getId());
                    };
                    executorService.submit(runnable);
                }
            }
        }
    }

    @Scheduled(fixedRate = refreshPeriod)
    public void countByCategoryNameAndGenderAndAge() {
        for(String categoryName: requiredOptionCategoryNameList) {
            for(Character gender: genderList) {
                for(Integer age: ageList) {
                    Runnable runnable = () -> {
                        cacheUpdateConfig.countByCategoryNameAndGenderAndAge(categoryName, gender, age);
                    };
                    executorService.submit(runnable);
                }
            }
        }
    }

    @Scheduled(fixedRate = refreshPeriod)
    public void countByCategoryNameAndExteriorColorId() {
        for(String categoryName: requiredOptionCategoryNameList) {
            List<RequiredOption> optionList = selectiveOptionRepository.findAllOptionByCategoryName("exterior_color");
            for(RequiredOption option: optionList) {
                Runnable runnable = () -> {
                    cacheUpdateConfig.countByCategoryNameAndExteriorColorId(categoryName, option.getId());
                };
                executorService.submit(runnable);
            }
        }
    }
}
