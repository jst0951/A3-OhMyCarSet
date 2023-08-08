package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.CoreOption;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CoreOptionRepositoryImpl implements CoreOptionRepository{
    private final JdbcTemplate jdbcTemplate;

    public CoreOptionRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<CoreOption> findAll() {
        return jdbcTemplate.query("SELECT * FROM core_option", coreOptionRowMapper());
    }

    @Override
    public Optional<CoreOption> findById(Long id) {
        List<CoreOption> coreOptionList = jdbcTemplate.query("SELECT * FROM core_option WHERE id=?", coreOptionRowMapper(), id);
        return coreOptionList.stream().findAny();
    }

    @Override
    public List<CoreOption> findByTrimId(Long trimId) {
        List<CoreOption> coreOptionList = jdbcTemplate.query("SELECT * FROM core_option WHERE trim_id=?", coreOptionRowMapper(), trimId);
        return coreOptionList;
    }

    private RowMapper<CoreOption> coreOptionRowMapper() {
        return ((rs, rowNum) -> {
            CoreOption coreOption = new CoreOption();
            coreOption.setId(rs.getLong("id"));
            coreOption.setName(rs.getString("name"));
            coreOption.setTrimId(rs.getLong("trim_id"));
            coreOption.setImgSrc(rs.getString("img_src"));
            return coreOption;
        });
    }
}
