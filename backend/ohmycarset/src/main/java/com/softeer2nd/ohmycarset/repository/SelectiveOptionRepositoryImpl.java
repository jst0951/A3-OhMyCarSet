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
    private final RowMapper<PowerTrainOption> powerTrainRowMapper = BeanPropertyRowMapper.newInstance(PowerTrainOption.class);;
    private final RowMapper<WDOption> wdRowMapper = BeanPropertyRowMapper.newInstance(WDOption.class);;
    private final RowMapper<BodyOption> bodyRowMapper = BeanPropertyRowMapper.newInstance(BodyOption.class);;
    private final RowMapper<ExteriorColorOption> eColorRowMapper = BeanPropertyRowMapper.newInstance(ExteriorColorOption.class);;
    private final RowMapper<InteriorColorOption> iColorRowMapper = BeanPropertyRowMapper.newInstance(InteriorColorOption.class);;
    private final RowMapper<WheelOption> wheelRowMapper = BeanPropertyRowMapper.newInstance(WheelOption.class);;
    private final RowMapper<SystemOption> systemRowMapper = BeanPropertyRowMapper.newInstance(SystemOption.class);;
    private final RowMapper<SystemOptionComponent> systemComponentRowMapper = BeanPropertyRowMapper.newInstance(SystemOptionComponent.class);;
    private final RowMapper<TemperatureOption> temperatureRowMapper = BeanPropertyRowMapper.newInstance(TemperatureOption.class);;
    private final RowMapper<TemperatureOptionComponent> temperatureComponentRowMapper = BeanPropertyRowMapper.newInstance(TemperatureOptionComponent.class);;
    private final RowMapper<ExternalDeviceOption> eDeviceRowMapper = BeanPropertyRowMapper.newInstance(ExternalDeviceOption.class);;
    private final RowMapper<ExternalDeviceOptionComponent> eDeviceComponentRowMapper = BeanPropertyRowMapper.newInstance(ExternalDeviceOptionComponent.class);;
    private final RowMapper<InternalDeviceOption> iDeviceRowMapper = BeanPropertyRowMapper.newInstance(InternalDeviceOption.class);;
    private final RowMapper<InternalDeviceOptionComponent> iDeviceComponentRowMapper = BeanPropertyRowMapper.newInstance(InternalDeviceOptionComponent.class);;

    public SelectiveOptionRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
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
    public List<TemperatureOptionComponent> findAllTemperatureComponentByTemperatureOptionId(Long tOptionId) {
        String sql = "SELECT * FROM temperature_option_component AS C WHERE C.t_option_id=?";
        return jdbcTemplate.query(sql, temperatureComponentRowMapper, tOptionId);
    }

    @Override
    public List<ExternalDeviceOption> findAllExternalDevice() {
        return jdbcTemplate.query("SELECT * FROM external_device_option", eDeviceRowMapper);
    }

    @Override
    public List<ExternalDeviceOptionComponent> findAllExternalDeviceComponentByExternalDeviceOptionId(Long edOptionId) {
        String sql = "SELECT * FROM external_device_option_component AS C WHERE C.e_d_option_id=?";
        return jdbcTemplate.query(sql, eDeviceComponentRowMapper, edOptionId);
    }

    @Override
    public List<InternalDeviceOption> findAllInternalDevice() {
        return jdbcTemplate.query("SELECT * FROM internal_device_option", iDeviceRowMapper);
    }

    @Override
    public List<InternalDeviceOptionComponent> findAllInternalDeviceComponentByInternalDeviceOptionId(Long idOptionId) {
        String sql = "SELECT * FROM internal_device_option_component AS C WHERE C.i_d_option_id=?";
        return jdbcTemplate.query(sql, iDeviceComponentRowMapper, idOptionId);
    }
}
