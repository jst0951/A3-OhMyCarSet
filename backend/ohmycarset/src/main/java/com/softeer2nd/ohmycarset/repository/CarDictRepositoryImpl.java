package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.CarDict;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CarDictRepositoryImpl implements CarDictRepository {
    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<CarDict> carDictRowMapper = BeanPropertyRowMapper.newInstance(CarDict.class);

    public CarDictRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<CarDict> findAll() {
        return jdbcTemplate.query("SELECT * FROM car_dict", carDictRowMapper);
    }

    @Override
    public Optional<CarDict> findById(Long id) {
        List<CarDict> carDictList = jdbcTemplate.query("SELECT * FROM car_dict WHERE id=?", carDictRowMapper, id);
        return carDictList.stream().findAny();
    }
}
