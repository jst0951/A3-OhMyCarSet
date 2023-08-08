package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.DefaultCategory;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface DefaultCategoryRepository {
    public List<DefaultCategory> findAll();
    public Optional<DefaultCategory> findById(Long id);
}
