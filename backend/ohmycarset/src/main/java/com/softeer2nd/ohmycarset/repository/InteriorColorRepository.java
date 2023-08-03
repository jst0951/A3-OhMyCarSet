package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface InteriorColorRepository {

    List<InteriorColor> findAll();

    Optional<InteriorColor> findById();

    List<InteriorColor> findAllByTrimId(Long trimId);
}
