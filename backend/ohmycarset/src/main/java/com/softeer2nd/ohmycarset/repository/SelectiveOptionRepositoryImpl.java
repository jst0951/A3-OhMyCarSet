package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class SelectiveOptionRepositoryImpl implements SelectiveOptionRepository {
    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedTemplate;
    private final RowMapper<RequiredOption> requiredOptionRowMapper = BeanPropertyRowMapper.newInstance(RequiredOption.class);
    private final RowMapper<OptionPackage> optionPackageRowMapper = BeanPropertyRowMapper.newInstance(OptionPackage.class);
    private final RowMapper<PackageComponent> packageComponentRowMapper = BeanPropertyRowMapper.newInstance(PackageComponent.class);
    public SelectiveOptionRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public List<RequiredOption> findAllOptionByOptionName(String optionName) {
        String table = optionName + "_option";
        return jdbcTemplate.query("SELECT * FROM " + table, requiredOptionRowMapper);
    }

    @Override
    public List<OptionPackage> findAllPackageByPackageName(String packageName) {
        String table = packageName + "_option";
        return jdbcTemplate.query("SELECT * FROM " + table, optionPackageRowMapper);
    }

    @Override
    public List<PackageComponent> findAllComponentByPackageNameAndPackageId(String packageName, Long packageId) {
        String table = packageName + "_option_component";
        return jdbcTemplate.query("SELECT * FROM " + table + " AS C WHERE C.package_id=?", packageComponentRowMapper, packageId);
    }

    @Override
    public RequiredOption findOptionByOptionIdAndOptionName(Long optionId, String optionName) {
        String table = optionName + "_option";
        String query = "SELECT * FROM " + table + " WHERE id=?";
        return jdbcTemplate.queryForObject(query, requiredOptionRowMapper, optionId);
    }

    @Override
    public OptionPackage findPackageByPackageIdAndPackageName(Long packageId, String categoryName) {
        String table = categoryName + "_option";
        String query = "SELECT * FROM " + table + " WHERE id=?";
        return jdbcTemplate.queryForObject(query, optionPackageRowMapper, packageId);
    }

    @Override
    public List<RequiredOption> findOptionsByOptionIdsAndCategoryName(List<Long> optionIds, String categoryName) {
        String table = categoryName + "_option";
        String query = "SELECT * FROM " + table + " WHERE id IN (:optionIds) ORDER BY FIELD(id, :optionIds)";

        MapSqlParameterSource parameters = new MapSqlParameterSource("optionIds", optionIds);

        return namedTemplate.query(query, parameters, requiredOptionRowMapper);
    }
}
