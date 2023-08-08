package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.DefaultOption;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface DefaultOptionRepository {
    public List<DefaultOption> findAll();
    public Optional<DefaultOption> findById(Long id);
    public List<DefaultOption> findByTrimIdAndDefCategoryId(Long trimId, Long defCategoryId);
}
