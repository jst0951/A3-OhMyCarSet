package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.repository.TrimRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrimService implements TrimRepository {

    private final JdbcTemplate jdbcTemplate;
    public TrimService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Trim> findAll() {
        return jdbcTemplate.query("SELECT * FROM trim", trimRowMapper());
    }

    @Override
    public Optional<Trim> findById(Long id) {
        List<Trim> trimList = jdbcTemplate.query("SELECT * FROM trim WHERE id=?", trimRowMapper());
        return trimList.stream().findAny();
    }

    private RowMapper<Trim> trimRowMapper() {
        return ((rs, rowNum) -> {
            Trim trim = new Trim();
            trim.setId(rs.getLong("id"));
            trim.setName(rs.getString("name"));
            trim.setDescription(rs.getString("description"));
            trim.setDefaultPrice(rs.getInt("default_price"));
            trim.setRepColorId(rs.getLong("rep_color_id"));
            trim.setIsBest(rs.getBoolean("isBest"));
            return trim;
        });
    }
}
