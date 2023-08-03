package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;

import java.util.List;
import java.util.Optional;

public interface ExteriorColorRepository {

    List<ExteriorColor> findAll();

    Optional<ExteriorColor> findById(Long id);

    List<ExteriorColor> findAllByTrimId(Long trimId);
}
