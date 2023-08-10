package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;

import java.util.List;
import java.util.Optional;

public interface PurchaseHistoryRepository {
    List<PurchaseHistory> findAll();

    Long count();

    Optional<PurchaseHistory> findById(Long id);

    List<PurchaseHistory> findAllByTrimId(Long trimId);

    Long countByTrimId(Long trimId);

    List<PurchaseHistory> findAllByPowerTrainOptionId(Long powerTrainOptionId);

    Long countByPowerTrainOptionId(Long powerTrainOptionId);

    List<PurchaseHistory> findAllByWdOptionId(Long wdOptionId);

    Long countByWdOptionId(Long wdOptionId);

    List<PurchaseHistory> findAllByBodyOptionId(Long bodyOptionId);

    Long countByBodyOptionId(Long bodyOptionId);

    List<PurchaseHistory> findAllByExternalColorOptionId(Long externalColorOptionId);

    Long countByExternalColorOptionId(Long externalColorOptionId);

    List<PurchaseHistory> findAllByInternalColorOptionId(Long internalColorOptionId);

    Long countByInternalColorOptionId(Long internalColorOptionId);

    List<PurchaseHistory> findAllByWheelOptionId(Long wheelOptionId);

    Long countByWheelOptionId(Long wheelOptionId);

    List<PurchaseHistory> findAllBySystemOptionId(Long systemOptionId);

    Long countBySystemOptionId(Long systemOptionId);

    List<PurchaseHistory> findAllByTemperatureOptionId(Long temperatureOptionId);

    Long countByTemperatureOptionId(Long temperatureOptionId);

    List<PurchaseHistory> findAllByExternalDeviceOptionId(Long externalDeviceOptionId);

    Long countByExternalDeviceOptionId(Long externalDeviceOptionId);

    List<PurchaseHistory> findAllByInternalDeviceOptionId(Long internalDeviceOptionId);

    Long countByInternalDeviceOptionId(Long internalDeviceOptionId);

    List<PurchaseHistory> findAllByAge(Integer age);

    Long countByAge(Integer age);

    List<PurchaseHistory> findAllByGender(Character gender);

    Long countByGender(Character gender);
}
