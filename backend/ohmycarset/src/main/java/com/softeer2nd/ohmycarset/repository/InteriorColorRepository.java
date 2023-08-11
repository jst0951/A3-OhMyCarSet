package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface InteriorColorRepository {

    List<InteriorColor> findAll();

    Optional<InteriorColor> findById(Long id);

    List<InteriorColor> findAllByTrimId(Long trimId);
}
