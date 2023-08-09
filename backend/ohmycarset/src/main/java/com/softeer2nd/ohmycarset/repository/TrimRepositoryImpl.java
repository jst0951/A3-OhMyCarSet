package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.Trim;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class TrimRepositoryImpl implements TrimRepository {
    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<Trim> trimRowMapper = BeanPropertyRowMapper.newInstance(Trim.class);

    public TrimRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Trim> findAll() {
        return jdbcTemplate.query("SELECT * FROM trim", trimRowMapper);
    }

    @Override
    public Optional<Trim> findById(Long id) {
        List<Trim> trimList = jdbcTemplate.query("SELECT * FROM trim WHERE id=?", trimRowMapper);
        return trimList.stream().findAny();
    }
}
