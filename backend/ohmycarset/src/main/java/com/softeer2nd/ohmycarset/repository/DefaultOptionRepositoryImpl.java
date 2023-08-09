package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.DefaultOption;
import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class DefaultOptionRepositoryImpl implements DefaultOptionRepository {

    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<DefaultOption> defaultOptionRowMapper = BeanPropertyRowMapper.newInstance(DefaultOption.class);

    public DefaultOptionRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<DefaultOption> findAll() {
        return jdbcTemplate.query("SELECT * FROM default_option", defaultOptionRowMapper);
    }

    @Override
    public Optional<DefaultOption> findById(Long id) {
        List<DefaultOption> defaultOptionList = jdbcTemplate.query("SELECT * FROM default_option WHERE id=?", defaultOptionRowMapper, id);
        return defaultOptionList.stream().findAny();
    }

    @Override
    public List<DefaultOption> findByTrimIdAndDefCategoryId(Long trimId, Long defCategoryId) {
        String sql = "SELECT D.*, C.name AS cname FROM default_option AS D\n" +
                        "INNER JOIN trim_default_option_map AS M ON D.id = M.def_option_id\n" +
                        "INNER JOIN default_category AS C ON D.def_category_id = C.id\n" +
                        "WHERE M.trim_id = ? AND C.id = ?";
        return jdbcTemplate.query(sql, defaultOptionRowMapper, trimId, defCategoryId);
    }
}
