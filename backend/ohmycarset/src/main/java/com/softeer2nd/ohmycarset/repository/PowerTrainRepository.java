package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PowerTrainOption;

import java.util.List;

public interface PowerTrainRepository {
    List<PowerTrainOption> findAll();
}
