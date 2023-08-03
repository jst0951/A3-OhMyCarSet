package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.CoreOption;

import java.util.List;
import java.util.Optional;

public interface CoreOptionRepository {
    public List<CoreOption> findAll();

    public Optional<CoreOption> findById(Long id);

    public List<CoreOption> findByTrimId(Long trimId);
}
