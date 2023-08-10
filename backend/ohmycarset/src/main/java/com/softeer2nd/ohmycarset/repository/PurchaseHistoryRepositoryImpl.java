package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class PurchaseHistoryRepositoryImpl implements PurchaseHistoryRepository {
    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<PurchaseHistory> purchaseHistoryRowMapper = BeanPropertyRowMapper.newInstance(PurchaseHistory.class);
    public PurchaseHistoryRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<PurchaseHistory> findAll() {
        return jdbcTemplate.query("SELECT * FROM purchase_history", purchaseHistoryRowMapper);
    }

    @Override
    public Long count() {
        return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM purchase_history", Long.class);
    }

    @Override
    public Optional<PurchaseHistory> findById(Long id) {
        List<PurchaseHistory> purchaseHistoryList = jdbcTemplate.query("SELECT * FROM purchase_history WHERE id=?", purchaseHistoryRowMapper, id);
        return purchaseHistoryList.stream().findAny();
    }

    @Override
    public List<PurchaseHistory> findAllByTrimId(Long trimId) {
        String sql = "SELECT * FROM purchase_history\n" +
                    "WHERE trim_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, trimId);
    }

    @Override
    public Long countByTrimId(Long trimId) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                    "WHERE trim_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, trimId);
    }

    @Override
    public List<PurchaseHistory> findAllByPowerTrainOptionId(Long powerTrainOptionId) {
        String sql = "SELECT * FROM purchase_history\n" +
                "WHERE powertrain_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, powerTrainOptionId);
    }

    @Override
    public Long countByPowerTrainOptionId(Long powerTrainOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE powertrain_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, powerTrainOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllByWdOptionId(Long wdOptionId) {
        String sql = "SELECT * FROM purchase_history\n" +
                "WHERE wd_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, wdOptionId);
    }

    @Override
    public Long countByWdOptionId(Long wdOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE wd_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, wdOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllByBodyOptionId(Long bodyOptionId) {
        String sql = "SELECT * FROM purchase_history\n" +
                "WHERE body_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, bodyOptionId);
    }

    @Override
    public Long countByBodyOptionId(Long bodyOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE body_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, bodyOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllByExternalColorOptionId(Long externalColorOptionId) {
        String sql = "SELECT * FROM purchase_history\n" +
                "WHERE e_color_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, externalColorOptionId);
    }

    @Override
    public Long countByExternalColorOptionId(Long externalColorOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE e_color_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, externalColorOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllByInternalColorOptionId(Long internalColorOptionId) {
        String sql = "SELECT * FROM purchase_history\n" +
                "WHERE i_color_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, internalColorOptionId);
    }

    @Override
    public Long countByInternalColorOptionId(Long internalColorOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE i_color_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, internalColorOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllByWheelOptionId(Long wheelOptionId) {
        String sql = "SELECT * FROM purchase_history\n" +
                "WHERE wheel_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, wheelOptionId);
    }

    @Override
    public Long countByWheelOptionId(Long wheelOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE wheel_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, wheelOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllBySystemOptionId(Long systemOptionId) {
        String sql = "SELECT A.* FROM purchase_history AS A\n" +
                "INNER JOIN purchase_system_map AS M ON A.id=M.purchase_id\n" +
                "WHERE M.s_option_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, systemOptionId);
    }

    @Override
    public Long countBySystemOptionId(Long systemOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history AS A\n" +
                "INNER JOIN purchase_system_map AS M ON A.id=M.purchase_id\n" +
                "WHERE M.s_option_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, systemOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllByTemperatureOptionId(Long temperatureOptionId) {
        String sql = "SELECT A.* FROM purchase_history AS A\n" +
                "INNER JOIN purchase_temperature_map AS M ON A.id=M.purchase_id\n" +
                "WHERE M.t_option_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, temperatureOptionId);
    }

    @Override
    public Long countByTemperatureOptionId(Long temperatureOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history AS A\n" +
                "INNER JOIN purchase_temperature_map AS M ON A.id=M.purchase_id\n" +
                "WHERE M.t_option_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, temperatureOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllByExternalDeviceOptionId(Long externalDeviceOptionId) {
        String sql = "SELECT A.* FROM purchase_history AS A\n" +
                "INNER JOIN purchase_external_device_map AS M ON A.id=M.purchase_id\n" +
                "WHERE M.e_d_option_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, externalDeviceOptionId);
    }

    @Override
    public Long countByExternalDeviceOptionId(Long externalDeviceOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history AS A\n" +
                "INNER JOIN purchase_external_device_map AS M ON A.id=M.purchase_id\n" +
                "WHERE M.e_d_option_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, externalDeviceOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllByInternalDeviceOptionId(Long internalDeviceOptionId) {
        String sql = "SELECT A.* FROM purchase_history AS A\n" +
                "INNER JOIN purchase_internal_device_map AS M ON A.id=M.purchase_id\n" +
                "WHERE M.i_d_option_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, internalDeviceOptionId);
    }

    @Override
    public Long countByInternalDeviceOptionId(Long internalDeviceOptionId) {
        String sql = "SELECT COUNT(*) FROM purchase_history AS A\n" +
                "INNER JOIN purchase_internal_device_map AS M ON A.id=M.purchase_id\n" +
                "WHERE M.i_d_option_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, internalDeviceOptionId);
    }

    @Override
    public List<PurchaseHistory> findAllByAge(Integer age) {
        String sql = "SELECT * FROM purchase_history\n" +
                "WHERE age=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, age);
    }

    @Override
    public Long countByAge(Integer age) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE age=?";
        return jdbcTemplate.queryForObject(sql, Long.class, age);
    }

    @Override
    public List<PurchaseHistory> findAllByGender(Character gender) {
        String sql = "SELECT * FROM purchase_history\n" +
                "WHERE gender=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, gender);
    }

    @Override
    public Long countByGender(Character gender) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE gender=?";
        return jdbcTemplate.queryForObject(sql, Long.class, gender);
    }
}
