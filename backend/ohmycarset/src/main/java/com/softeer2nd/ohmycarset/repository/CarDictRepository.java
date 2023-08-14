package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.CarDict;

import java.util.List;
import java.util.Optional;

public interface CarDictRepository {
    List<CarDict> findAll();

    Optional<CarDict> findById(Long id);
}
