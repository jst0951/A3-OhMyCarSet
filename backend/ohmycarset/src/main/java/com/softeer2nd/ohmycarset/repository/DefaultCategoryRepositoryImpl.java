package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.DefaultCategory;
import com.softeer2nd.ohmycarset.repository.mapper.SingletonBeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class DefaultCategoryRepositoryImpl implements DefaultCategoryRepository {
    private final JdbcTemplate jdbcTemplate;
    private final SingletonBeanPropertyRowMapper<DefaultCategory> defaultCategoryRowMapper;
    public DefaultCategoryRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.defaultCategoryRowMapper = SingletonBeanPropertyRowMapper.getInstance(DefaultCategory.class);
    }

    @Override
    public List<DefaultCategory> findAll() {
        return jdbcTemplate.query("SELECT * FROM default_category", defaultCategoryRowMapper);
    }

    @Override
    public Optional<DefaultCategory> findById(Long id) {
        String sql = "SELECT * FROM default_category WHERE id=?";
        List<DefaultCategory> defaultCategoryList = jdbcTemplate.query(sql, defaultCategoryRowMapper, id);
        return defaultCategoryList.stream().findAny();
    }
}
