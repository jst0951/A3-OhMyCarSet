package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;

import java.util.List;
import java.util.Optional;

public interface PurchaseHistoryRepository {
    List<PurchaseHistory> findAll();

    Optional<PurchaseHistory> findById(Long id);

    List<PurchaseHistory> findAllByTrimId(Long trimId);

    List<PurchaseHistory> findAllByPowerTrainOptionId(Long powerTrainOptionId);

    List<PurchaseHistory> findAllByWdOptionId(Long wdOptionId);

    List<PurchaseHistory> findAllByBodyOptionId(Long bodyOptionId);

    List<PurchaseHistory> findAllByExternalColorOptionId(Long externalColorOptionId);

    List<PurchaseHistory> findAllByInternalColorOptionId(Long internalColorOptionId);

    List<PurchaseHistory> findAllByWheelOptionId(Long wheelOptionId);

    List<PurchaseHistory> findAllBySystemOptionId(Long systemOptionId);

    List<PurchaseHistory> findAllByTemperatureOptionId(Long temperatureOptionId);

    List<PurchaseHistory> findAllByExternalDeviceOptionId(Long externalDeviceOptionId);

    List<PurchaseHistory> findAllByInternalDeviceOptionId(Long internalDeviceOptionId);

    List<PurchaseHistory> findAllByAge(Integer age);

    List<PurchaseHistory> findAllByGender(Character gender);
}
