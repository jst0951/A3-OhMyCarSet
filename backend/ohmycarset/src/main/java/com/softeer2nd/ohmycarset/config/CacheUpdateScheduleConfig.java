package com.softeer2nd.ohmycarset.config;

import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.repository.PurchaseHistoryRepository;
import com.softeer2nd.ohmycarset.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CacheUpdateScheduleConfig {

    private final CacheUpdateConfig cacheUpdateConfig;
    private final TagRepository tagRepository;
    private final PurchaseHistoryRepository purchaseHistoryRepository;

    private final ExecutorService executorService = Executors.newFixedThreadPool(300);

    @Scheduled(fixedRate = 10 * 1000)
    public void updateCount() {
        Runnable runnable = () -> {
            cacheUpdateConfig.count();
        };
        executorService.submit(runnable);
    }

    @Scheduled(fixedRate = 10 * 1000)
    public void updateCountByTagId() {
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
}
