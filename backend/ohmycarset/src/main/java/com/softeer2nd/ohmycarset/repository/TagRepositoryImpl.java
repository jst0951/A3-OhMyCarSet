package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.Tag;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class TagRepositoryImpl implements TagRepository {
    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<Tag> tagRowMapper = BeanPropertyRowMapper.newInstance(Tag.class);

    public TagRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Tag> findAll() {
        return jdbcTemplate.query("SELECT * FROM tag", tagRowMapper);
    }

    @Override
    public Optional<Tag> findById(Long id) {
        List<Tag> tagList = jdbcTemplate.query("SELECT * FROM tag WHERE id=?", tagRowMapper, id);
        return tagList.stream().findAny();
    }

    public Optional<Tag> findByName(String name) {
        List<Tag> tagList = jdbcTemplate.query("SELECT * FROM tag WHERE name=?", tagRowMapper, name);
        return tagList.stream().findAny();
    }

    @Override
    public List<Tag> findAllByPowerTrainOptionId(Long powerTrainOptionId) {
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN tag_powertrain_map AS M ON A.id=M.tag_id\n" +
                "WHERE M.p_option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, powerTrainOptionId);
    }

    @Override
    public List<Tag> findAllByWdOptionId(Long wdOptionId) {
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN tag_wd_map AS M ON A.id=M.tag_id\n" +
                "WHERE M.wd_option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, wdOptionId);
    }

    @Override
    public List<Tag> findAllByBodyOptionId(Long bodyOptionId) {
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN tag_body_map AS M ON A.id=M.tag_id\n" +
                "WHERE M.b_option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, bodyOptionId);
    }

    @Override
    public List<Tag> findAllByWheelOptionId(Long wheelOptionId) {
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN tag_wheel_map AS M ON A.id=M.tag_id\n" +
                "WHERE M.w_option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, wheelOptionId);
    }

    @Override
    public List<Tag> findAllBySystemOptionId(Long systemOptionId) {
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN tag_system_map AS M ON A.id=M.tag_id\n" +
                "WHERE M.s_option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, systemOptionId);
    }

    @Override
    public List<Tag> findAllByTemperatureOptionId(Long temperatureOptionId) {
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN tag_temperature_map AS M ON A.id=M.tag_id\n" +
                "WHERE M.t_option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, temperatureOptionId);
    }

    @Override
    public List<Tag> findAllByExternalDeviceOptionId(Long externalDeviceOptionId) {
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN tag_external_device_map AS M ON A.id=M.tag_id\n" +
                "WHERE M.e_d_option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, externalDeviceOptionId);
    }

    @Override
    public List<Tag> findAllByInternalDeviceOptionId(Long internalDeviceOptionId) {
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN tag_internal_device_map AS M ON A.id=M.tag_id\n" +
                "WHERE M.i_d_option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, internalDeviceOptionId);
    }
}
