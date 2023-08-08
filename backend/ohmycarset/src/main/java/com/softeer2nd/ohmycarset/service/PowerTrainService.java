package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.PowerTrainOption;
import com.softeer2nd.ohmycarset.repository.PowerTrainRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PowerTrainService implements PowerTrainRepository {

    private final JdbcTemplate jdbcTemplate;
    public PowerTrainService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<PowerTrainOption> findAll() {
        return jdbcTemplate.query("SELECT * FROM powertrain_option", powerTrainOptionRowMapper());
    }

    private RowMapper<PowerTrainOption> powerTrainOptionRowMapper() {
        return ((rs, rowNum) -> {
            PowerTrainOption powerTrainOption = new PowerTrainOption();
            powerTrainOption.setId(rs.getLong("id"));
            powerTrainOption.setName(rs.getString("name"));
            powerTrainOption.setMainDescription(rs.getString("main_description"));
            powerTrainOption.setSubDescription(rs.getString("sub_description"));
            powerTrainOption.setMainFeedback(rs.getString("main_feedback"));
            powerTrainOption.setSubFeedback(rs.getString("sub_feedback"));
            powerTrainOption.setPrice(rs.getInt("price"));
            powerTrainOption.setImgSrc(rs.getString("img_src"));
            return powerTrainOption;
        });
    }
}
