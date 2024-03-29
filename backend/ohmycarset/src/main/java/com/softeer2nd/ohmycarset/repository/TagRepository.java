package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.Tag;

import java.util.List;
import java.util.Optional;

public interface TagRepository {
    List<Tag> findAll();

    Optional<Tag> findById(Long id);

    Optional<Tag> findByName(String name);

    List<Tag> findAllByCategoryNameAndOptionId(String categoryName, Long optionId);

    List<Tag> findAllByCategoryNameAndPackageId(String categoryName, Long packageId);
}
