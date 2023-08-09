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
import com.softeer2nd.ohmycarset.repository.mapper.SingletonBeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class SelectiveOptionRepositoryImpl implements SelectiveOptionRepository {
    private final JdbcTemplate jdbcTemplate;
    private final SingletonBeanPropertyRowMapper<PowerTrainOption> powerTrainRowMapper;
    private final SingletonBeanPropertyRowMapper<WDOption> wdRowMapper;
    private final SingletonBeanPropertyRowMapper<BodyOption> bodyRowMapper;
    private final SingletonBeanPropertyRowMapper<ExteriorColorOption> eColorRowMapper;
    private final SingletonBeanPropertyRowMapper<InteriorColorOption> iColorRowMapper;
    private final SingletonBeanPropertyRowMapper<WheelOption> wheelRowMapper;
    private final SingletonBeanPropertyRowMapper<SystemOption> systemRowMapper;
    private final SingletonBeanPropertyRowMapper<SystemOptionComponent> systemComponentRowMapper;
    private final SingletonBeanPropertyRowMapper<TemperatureOption> temperatureRowMapper;
    private final SingletonBeanPropertyRowMapper<TemperatureOptionComponent> temperatureComponentRowMapper;
    private final SingletonBeanPropertyRowMapper<ExternalDeviceOption> eDeviceRowMapper;
    private final SingletonBeanPropertyRowMapper<ExternalDeviceOptionComponent> eDeviceComponentRowMapper;
    private final SingletonBeanPropertyRowMapper<InternalDeviceOption> iDeviceRowMapper;
    private final SingletonBeanPropertyRowMapper<InternalDeviceOptionComponent> iDeviceComponentRowMapper;


    public SelectiveOptionRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.powerTrainRowMapper = SingletonBeanPropertyRowMapper.getInstance(PowerTrainOption.class);
        this.wdRowMapper = SingletonBeanPropertyRowMapper.getInstance(WDOption.class);
        this.bodyRowMapper = SingletonBeanPropertyRowMapper.getInstance(BodyOption.class);
        this.eColorRowMapper = SingletonBeanPropertyRowMapper.getInstance(ExteriorColorOption.class);
        this.iColorRowMapper = SingletonBeanPropertyRowMapper.getInstance(InteriorColorOption.class);
        this.wheelRowMapper = SingletonBeanPropertyRowMapper.getInstance(WheelOption.class);
        this.systemRowMapper = SingletonBeanPropertyRowMapper.getInstance(SystemOption.class);
        this.systemComponentRowMapper = SingletonBeanPropertyRowMapper.getInstance(SystemOptionComponent.class);
        this.temperatureRowMapper = SingletonBeanPropertyRowMapper.getInstance(TemperatureOption.class);
        this.temperatureComponentRowMapper = SingletonBeanPropertyRowMapper.getInstance(TemperatureOptionComponent.class);
        this.eDeviceRowMapper = SingletonBeanPropertyRowMapper.getInstance(ExternalDeviceOption.class);
        this.eDeviceComponentRowMapper = SingletonBeanPropertyRowMapper.getInstance(ExternalDeviceOptionComponent.class);
        this.iDeviceRowMapper = SingletonBeanPropertyRowMapper.getInstance(InternalDeviceOption.class);
        this.iDeviceComponentRowMapper = SingletonBeanPropertyRowMapper.getInstance(InternalDeviceOptionComponent.class);
    }

    @Override
    public List<PowerTrainOption> findAllPowerTrain() {
        return jdbcTemplate.query("SELECT * FROM powertrain_option", powerTrainRowMapper);
    }

    @Override
    public List<WDOption> findAllWD() {
        return jdbcTemplate.query("SELECT * FROM wd_option", wdRowMapper);
    }

    @Override
    public List<BodyOption> findAllBody() {
        return jdbcTemplate.query("SELECT * FROM body_option", bodyRowMapper);
    }

    @Override
    public List<ExteriorColorOption> findAllExteriorColor() {
        return jdbcTemplate.query("SELECT * FROM exterior_color_option", eColorRowMapper);
    }

    @Override
    public List<InteriorColorOption> findAllInteriorColor() {
        return jdbcTemplate.query("SELECT * FROM interior_color_option", iColorRowMapper);
    }

    @Override
    public List<WheelOption> findAllWheel() {
        return jdbcTemplate.query("SELECT * FROM wheel_option", wheelRowMapper);
    }

    @Override
    public List<SystemOption> findAllSystem() {
        return jdbcTemplate.query("SELECT * FROM system_option", systemRowMapper);
    }

    @Override
    public List<SystemOptionComponent> findAllSystemComponentBySystemOptionId(Long sOptionId) {
        String sql = "SELECT * FROM system_option_component AS C WHERE C.s_option_id=?";
        return jdbcTemplate.query(sql, systemComponentRowMapper, sOptionId);
    }

    @Override
    public List<TemperatureOption> findAllTemperature() {
        return jdbcTemplate.query("SELECT * FROM temperature_option", temperatureRowMapper);
    }

    @Override
    public List<TemperatureOptionComponent> findAllTemperatureComponentBySystemOptionId(Long tOptionId) {
        String sql = "SELECT * FROM temperature_option_component AS C WHERE C.t_option_id=?";
        return jdbcTemplate.query(sql, temperatureComponentRowMapper, tOptionId);
    }

    @Override
    public List<ExternalDeviceOption> findAllExternalDevice() {
        return jdbcTemplate.query("SELECT * FROM external_device_option", eDeviceRowMapper);
    }

    @Override
    public List<ExternalDeviceOptionComponent> findAllExternalDeviceComponentBySystemOptionId(Long edOptionId) {
        String sql = "SELECT * FROM external_device_option_component AS C WHERE C.e_d_option_id=?";
        return jdbcTemplate.query(sql, eDeviceComponentRowMapper, edOptionId);
    }

    @Override
    public List<InternalDeviceOption> findAllInternalDevice() {
        return jdbcTemplate.query("SELECT * FROM internal_device_option", iDeviceRowMapper);
    }

    @Override
    public List<InternalDeviceOptionComponent> findAllInternalDeviceComponentBySystemOptionId(Long idOptionId) {
        String sql = "SELECT * FROM internal_device_option_component AS C WHERE C.i_d_option_id=?";
        return jdbcTemplate.query(sql, iDeviceComponentRowMapper, idOptionId);
    }
}
