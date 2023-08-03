package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.Trim;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TrimRepository {

    List<Trim> findAll();

    Optional<Trim> findById(Long id);
}
