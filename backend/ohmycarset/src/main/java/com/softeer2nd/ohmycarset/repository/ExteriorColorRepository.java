package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;

import java.util.List;
import java.util.Optional;

public interface ExteriorColorRepository {

    public List<ExteriorColor> findAll();

    public Optional<ExteriorColor> findById(Long id);

    public List<ExteriorColor> findAllByTrimId(Long trimId);
}
