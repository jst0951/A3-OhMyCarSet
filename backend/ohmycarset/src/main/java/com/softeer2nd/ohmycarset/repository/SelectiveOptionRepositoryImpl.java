package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.selective.OptionPackage;
import com.softeer2nd.ohmycarset.domain.selective.PackageComponent;
import com.softeer2nd.ohmycarset.domain.selective.RequiredOption;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class SelectiveOptionRepositoryImpl implements SelectiveOptionRepository {
    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<RequiredOption> requiredOptionRowMapper = BeanPropertyRowMapper.newInstance(RequiredOption.class);
    private final RowMapper<OptionPackage> optionPackageRowMapper = BeanPropertyRowMapper.newInstance(OptionPackage.class);
    private final RowMapper<PackageComponent> packageComponentRowMapper = BeanPropertyRowMapper.newInstance(PackageComponent.class);
    public SelectiveOptionRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<RequiredOption> findOptionByName(String optionName) {
        String table = optionName + "_option";
        return jdbcTemplate.query("SELECT * FROM " + table, requiredOptionRowMapper);
    }

    @Override
    public List<OptionPackage> findPackageByName(String packageName) {
        String table = packageName + "_option";
        return jdbcTemplate.query("SELECT * FROM " + table, optionPackageRowMapper);
    }

    @Override
    public List<PackageComponent> findComponentByPackageNameAndPackageId(String packageName, Long packageId) {
        String table = packageName + "_option_component";
        return jdbcTemplate.query("SELECT * FROM " + table + " AS C WHERE C.package_id=?", packageComponentRowMapper, packageId);
    }
}
