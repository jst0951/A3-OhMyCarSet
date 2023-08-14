package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.Tag;

import java.util.List;
import java.util.Optional;

public interface TagRepository {
    List<Tag> findAll();

    Optional<Tag> findById(Long id);

    Optional<Tag> findByName(String name);

    List<Tag> findAllByPowerTrainOptionId(Long powerTrainOptionId);

    List<Tag> findAllByWdOptionId(Long wdOptionId);

    List<Tag> findAllByBodyOptionId(Long bodyOptionId);

    List<Tag> findAllByWheelOptionId(Long wheelOptionId);

    List<Tag> findAllBySystemOptionId(Long systemOptionId);

    List<Tag> findAllByTemperatureOptionId(Long temperatureOptionId);

    List<Tag> findAllByExternalDeviceOptionId(Long externalDeviceOptionId);

    List<Tag> findAllByInternalDeviceOptionId(Long internalDeviceOptionId);
}
