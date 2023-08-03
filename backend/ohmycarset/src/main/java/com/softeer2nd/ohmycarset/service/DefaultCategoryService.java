package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.DefaultCategory;
import com.softeer2nd.ohmycarset.domain.DefaultOption;
import com.softeer2nd.ohmycarset.repository.DefaultCategoryRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DefaultCategoryService implements DefaultCategoryRepository {
    private final JdbcTemplate jdbcTemplate;
    public DefaultCategoryService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<DefaultCategory> findAll() {
        return jdbcTemplate.query("SELECT * FROM default_category", defaultCategoryRowMapper());
    }

    @Override
    public Optional<DefaultCategory> findById(Long id) {
        String sql = "SELECT * FROM default_category WHERE id=?";
        List<DefaultCategory> defaultCategoryList = jdbcTemplate.query(sql, defaultCategoryRowMapper(), id);
        return defaultCategoryList.stream().findAny();
    }

    private RowMapper<DefaultCategory> defaultCategoryRowMapper() {
        return ((rs, rowNum) -> {
            DefaultCategory defaultCategory = new DefaultCategory();
            defaultCategory.setId(rs.getLong("id"));
            defaultCategory.setName(rs.getString("name"));
            return defaultCategory;
        });
    }
}
