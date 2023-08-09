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
    private final RowMapper<PowerTrainOption> powerTrainRowMapper;
    private final RowMapper<WDOption> wdRowMapper;
    private final RowMapper<BodyOption> bodyRowMapper;
    private final RowMapper<ExteriorColorOption> eColorRowMapper;
    private final RowMapper<InteriorColorOption> iColorRowMapper;
    private final RowMapper<WheelOption> wheelRowMapper;
    private final RowMapper<SystemOption> systemRowMapper;
    private final RowMapper<SystemOptionComponent> systemComponentRowMapper;
    private final RowMapper<TemperatureOption> temperatureRowMapper;
    private final RowMapper<TemperatureOptionComponent> temperatureComponentRowMapper;
    private final RowMapper<ExternalDeviceOption> eDeviceRowMapper;
    private final RowMapper<ExternalDeviceOptionComponent> eDeviceComponentRowMapper;
    private final RowMapper<InternalDeviceOption> iDeviceRowMapper;
    private final RowMapper<InternalDeviceOptionComponent> iDeviceComponentRowMapper;

    public SelectiveOptionRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.powerTrainRowMapper = BeanPropertyRowMapper.newInstance(PowerTrainOption.class);
        this.wdRowMapper = BeanPropertyRowMapper.newInstance(WDOption.class);
        this.bodyRowMapper = BeanPropertyRowMapper.newInstance(BodyOption.class);
        this.eColorRowMapper = BeanPropertyRowMapper.newInstance(ExteriorColorOption.class);
        this.iColorRowMapper = BeanPropertyRowMapper.newInstance(InteriorColorOption.class);
        this.wheelRowMapper = BeanPropertyRowMapper.newInstance(WheelOption.class);
        this.systemRowMapper = BeanPropertyRowMapper.newInstance(SystemOption.class);
        this.systemComponentRowMapper = BeanPropertyRowMapper.newInstance(SystemOptionComponent.class);
        this.temperatureRowMapper = BeanPropertyRowMapper.newInstance(TemperatureOption.class);
        this.temperatureComponentRowMapper = BeanPropertyRowMapper.newInstance(TemperatureOptionComponent.class);
        this.eDeviceRowMapper = BeanPropertyRowMapper.newInstance(ExternalDeviceOption.class);
        this.eDeviceComponentRowMapper = BeanPropertyRowMapper.newInstance(ExternalDeviceOptionComponent.class);
        this.iDeviceRowMapper = BeanPropertyRowMapper.newInstance(InternalDeviceOption.class);
        this.iDeviceComponentRowMapper = BeanPropertyRowMapper.newInstance(InternalDeviceOptionComponent.class);
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
