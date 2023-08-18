package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.Tag;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public class TagRepositoryImpl implements TagRepository {
    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedTemplate;
    private final RowMapper<Tag> tagRowMapper = BeanPropertyRowMapper.newInstance(Tag.class);

    public TagRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public List<Tag> findAll() {
        return jdbcTemplate.query("SELECT * FROM tag", tagRowMapper);
    }

    @Override
    public Optional<Tag> findById(Long id) {
        List<Tag> tagList = jdbcTemplate.query("SELECT * FROM tag WHERE id=?", tagRowMapper, id);
        return tagList.stream().findAny();
    }

    public Optional<Tag> findByName(String name) {
        List<Tag> tagList = jdbcTemplate.query("SELECT * FROM tag WHERE name=?", tagRowMapper, name);
        return tagList.stream().findAny();
    }

    @Override
    public List<Tag> findAllByCategoryNameAndOptionId(String categoryName, Long optionId) {
        String table = "tag_" + categoryName + "_map";
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN " + table +" AS M ON A.id=M.tag_id\n" +
                "WHERE M.option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, optionId);
    }

    @Override
    public List<Tag> findAllByCategoryNameAndPackageId(String categoryName, Long packageId) {
        String table = "tag_" + categoryName + "_map";
        String sql = "SELECT A.* FROM tag AS A\n" +
                "INNER JOIN " + table +" AS M ON A.id=M.tag_id\n" +
                "WHERE M.option_id=?";
        return jdbcTemplate.query(sql, tagRowMapper, packageId);
    }
}