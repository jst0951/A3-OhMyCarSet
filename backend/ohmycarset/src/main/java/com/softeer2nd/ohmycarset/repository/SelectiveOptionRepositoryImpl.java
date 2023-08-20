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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
    public List<RequiredOption> findAllOptionByCategoryName(String optionName) {
        String table = optionName + "_option";
        return jdbcTemplate.query("SELECT * FROM " + table, requiredOptionRowMapper);
    }

    @Override
    public List<OptionPackage> findAllPackageByCategoryName(String packageName) {
        String table = packageName + "_option";
        return jdbcTemplate.query("SELECT * FROM " + table, optionPackageRowMapper);
    }

    @Override
    public List<PackageComponent> findAllComponentByPackageNameAndPackageId(String packageName, Long packageId) {
        String table = packageName + "_option_component";
        return jdbcTemplate.query("SELECT * FROM " + table + " AS C WHERE C.package_id=?", packageComponentRowMapper, packageId);
    }

    @Override
    public Optional<RequiredOption> findOptionByCategoryNameAndOptionId(String categoryName, Long optionId) {
        String table = categoryName + "_option";
        List<RequiredOption> requiredOptionList =  jdbcTemplate.query("SELECT * FROM " + table + " AS C WHERE C.id=?", requiredOptionRowMapper, optionId);
        return requiredOptionList.stream().findAny();
    }

    @Override
    public List<RequiredOption> findRemainOptionByCategoryNameAndOptionId(String categoryName, Long optionId) {
        String table = categoryName + "_option";
        return jdbcTemplate.query("SELECT * FROM " + table + " WHERE id!=?", requiredOptionRowMapper, optionId);
    }

    @Override
    public List<OptionPackage> findAllPackageByCategoryNameAndPackageId(String categoryName, List<Long> recommendOptionIds) {
        String table = categoryName + "_option";
        String query = "SELECT * FROM " + table + " WHERE id in (:ids)";

        Map<String, Object> params = new HashMap<>();
        params.put("ids", recommendOptionIds);

        return namedTemplate.query(query, params, optionPackageRowMapper);
    }

    @Override
    public List<OptionPackage> findAllRemainPackageByCategoryNameAndPackageId(String categoryName, List<Long> recommendOptionIds) {
        String table = categoryName + "_option";
        if(recommendOptionIds.isEmpty()) {
            String query = "SELECT * FROM " + table;
            return namedTemplate.query(query, optionPackageRowMapper);
        } else {
            String query = "SELECT * FROM " + table + " WHERE id NOT IN (:ids)";
            Map<String, Object> params = new HashMap<>();
            params.put("ids", recommendOptionIds);

            return namedTemplate.query(query, params, optionPackageRowMapper);
        }


    }
}
