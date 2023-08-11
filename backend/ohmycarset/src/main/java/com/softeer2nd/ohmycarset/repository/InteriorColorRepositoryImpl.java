package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import com.softeer2nd.ohmycarset.domain.selectiveOption.InternalDeviceOption.InternalDeviceOptionComponent;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class InteriorColorRepositoryImpl implements InteriorColorRepository {
    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<InteriorColor> interiorColorRowMapper = BeanPropertyRowMapper.newInstance(InteriorColor.class);


    public InteriorColorRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<InteriorColor> findAll() {
        return jdbcTemplate.query("SELECT * FROM interior_color", interiorColorRowMapper);
    }

    @Override
    public Optional<InteriorColor> findById(Long id) {
        List<InteriorColor> interiorColorList = jdbcTemplate.query("SELECT * FROM interior_color WHERE id=?", interiorColorRowMapper, id);
        return interiorColorList.stream().findAny();
    }

    @Override
    public List<InteriorColor> findAllByTrimId(Long trimId) {
        String sql =
                "SELECT A.* FROM interior_color AS A\n" +
                        "INNER JOIN trim_interior_color_map as M\n" +
                        "ON A.id = M.i_color_id\n" +
                        "WHERE M.trim_id = ?";
        return jdbcTemplate.query(sql, interiorColorRowMapper, trimId);
    }
}
