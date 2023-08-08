package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.selectiveOption.*;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.externalDeviceOption.ExternalDeviceOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.systemOption.SystemOptionComponent;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOption;
import com.softeer2nd.ohmycarset.domain.selectiveOption.temperatureOption.TemperatureOptionComponent;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class SelectiveOptionRepositoryImpl implements SelectiveOptionRepository {
    private final JdbcTemplate jdbcTemplate;

    public SelectiveOptionRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<PowerTrainOption> findAllPowerTrain() {
        return jdbcTemplate.query("SELECT * FROM powertrain_option", BeanPropertyRowMapper.newInstance(PowerTrainOption.class));
    }

    @Override
    public List<WDOption> findAllWD() {
        return jdbcTemplate.query("SELECT * FROM wd_option", BeanPropertyRowMapper.newInstance(WDOption.class));
    }

    @Override
    public List<BodyOption> findAllBody() {
        return jdbcTemplate.query("SELECT * FROM body_option", BeanPropertyRowMapper.newInstance(BodyOption.class));
    }

    @Override
    public List<ExteriorColorOption> findAllExteriorColor() {
        return jdbcTemplate.query("SELECT * FROM exterior_color_option", BeanPropertyRowMapper.newInstance(ExteriorColorOption.class));
    }

    @Override
    public List<InteriorColorOption> findAllInteriorColor() {
        return jdbcTemplate.query("SELECT * FROM interior_color_option", BeanPropertyRowMapper.newInstance(InteriorColorOption.class));
    }

    @Override
    public List<WheelOption> findAllWheel() {
        return jdbcTemplate.query("SELECT * FROM wheel_option", BeanPropertyRowMapper.newInstance(WheelOption.class));
    }

    @Override
    public List<SystemOption> findAllSystem() {
        return jdbcTemplate.query("SELECT * FROM system_option", BeanPropertyRowMapper.newInstance(SystemOption.class));
    }

    @Override
    public List<SystemOptionComponent> findAllSystemComponentBySystemOptionId(Long sOptionId) {
        String sql = "SELECT * FROM system_option_component AS C WHERE C.s_option_id=?";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(SystemOptionComponent.class), sOptionId);
    }

    @Override
    public List<TemperatureOption> findAllTemperature() {
        return jdbcTemplate.query("SELECT * FROM temperature_option", BeanPropertyRowMapper.newInstance(TemperatureOption.class));
    }

    @Override
    public List<TemperatureOptionComponent> findAllTemperatureComponentBySystemOptionId(Long tOptionId) {
        String sql = "SELECT * FROM temperature_option_component AS C WHERE C.t_option_id=?";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(TemperatureOptionComponent.class), tOptionId);
    }

    @Override
    public List<ExternalDeviceOption> findAllExternalDevice() {
        return jdbcTemplate.query("SELECT * FROM external_device_option", BeanPropertyRowMapper.newInstance(ExternalDeviceOption.class));
    }

    @Override
    public List<ExternalDeviceOptionComponent> findAllExternalDeviceComponentBySystemOptionId(Long edOptionId) {
        String sql = "SELECT * FROM external_device_option_component AS C WHERE C.e_d_option_id=?";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(ExternalDeviceOptionComponent.class), edOptionId);
    }

    @Override
    public List<InternalDeviceOption> findAllInternalDevice() {
        return jdbcTemplate.query("SELECT * FROM internal_device_option", BeanPropertyRowMapper.newInstance(InternalDeviceOption.class));
    }

    @Override
    public List<InternalDeviceOptionComponent> findAllInternalDeviceComponentBySystemOptionId(Long idOptionId) {
        String sql = "SELECT * FROM internal_device_option_component AS C WHERE C.i_d_option_id=?";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(InternalDeviceOptionComponent.class), idOptionId);
    }
}
