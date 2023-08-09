package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.InteriorColor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ExteriorColorRepositoryImpl implements ExteriorColorRepository {

    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<ExteriorColor> exteriorColorRowMapper = BeanPropertyRowMapper.newInstance(ExteriorColor.class);

    public ExteriorColorRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<ExteriorColor> findAll() {
        return jdbcTemplate.query("SELECT * FROM exterior_color", exteriorColorRowMapper);
    }

    @Override
    public Optional<ExteriorColor> findById(Long id) {
        List<ExteriorColor> exteriorColorList = jdbcTemplate.query("SELECT * FROM exterior_color WHERE id=?", exteriorColorRowMapper, id);
        return exteriorColorList.stream().findAny();
    }

    @Override
    public List<ExteriorColor> findAllByTrimId(Long trimId) {
        String sql = "SELECT A.* FROM exterior_color AS A\n" +
                        "INNER JOIN trim_exterior_color_map as M\n" +
                        "ON A.id = M.e_color_id\n" +
                        "WHERE M.trim_id = ?";
        return jdbcTemplate.query(sql, exteriorColorRowMapper, trimId);
    }
}
