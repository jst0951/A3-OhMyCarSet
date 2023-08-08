package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class InteriorColorRepositoryImpl implements InteriorColorRepository {
    private final JdbcTemplate jdbcTemplate;
    public InteriorColorRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<InteriorColor> findAll() {
        return jdbcTemplate.query("SELECT * FROM interior_color", interiorColorRowMapper());
    }

    @Override
    public Optional<InteriorColor> findById() {
        List<InteriorColor> interiorColorList = jdbcTemplate.query("SELECT * FROM interior_color WHERE id=?", interiorColorRowMapper());
        return interiorColorList.stream().findAny();
    }

    @Override
    public List<InteriorColor> findAllByTrimId(Long trimId) {
        String sql =
                "SELECT A.* FROM interior_color AS A\n" +
                        "INNER JOIN trim_interior_color_map as M\n" +
                        "ON A.id = M.i_color_id\n" +
                        "WHERE M.trim_id = ?";
        return jdbcTemplate.query(sql, interiorColorRowMapper(), trimId);
    }

    private RowMapper<InteriorColor> interiorColorRowMapper() {
        return ((rs, rowNum) -> {
            InteriorColor interiorColor = new InteriorColor();
            interiorColor.setId(rs.getLong("id"));
            interiorColor.setName(rs.getString("name"));
            interiorColor.setImgSrc(rs.getString("img_src"));
            return interiorColor;
        });
    }
}
