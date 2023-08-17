package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import com.softeer2nd.ohmycarset.dto.PurchaseCountDto;
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
public class PurchaseHistoryRepositoryImpl implements PurchaseHistoryRepository {
    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedTemplate;
    private final RowMapper<PurchaseHistory> purchaseHistoryRowMapper = BeanPropertyRowMapper.newInstance(PurchaseHistory.class);
    private final RowMapper<PurchaseCountDto> purchaseCountDtoRowMapper = BeanPropertyRowMapper.newInstance(PurchaseCountDto.class);
    public PurchaseHistoryRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public List<PurchaseHistory> findAll() {
        return jdbcTemplate.query("SELECT * FROM purchase_history", purchaseHistoryRowMapper);
    }

    @Override
    public Long count() {
        return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM purchase_history", Long.class);
    }

    @Override
    public Optional<PurchaseHistory> findById(Long id) {
        List<PurchaseHistory> purchaseHistoryList = jdbcTemplate.query("SELECT * FROM purchase_history WHERE id=?", purchaseHistoryRowMapper, id);
        return purchaseHistoryList.stream().findAny();
    }

    @Override
    public List<PurchaseHistory> findAllByTrimId(Long trimId) {
        String sql = "SELECT * FROM purchase_history\n" +
                    "WHERE trim_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, trimId);
    }

    @Override
    public Long countByTrimId(Long trimId) {
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                    "WHERE trim_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, trimId);
    }

    @Override
    public List<PurchaseHistory> findAllByTagId(Long tagID) {
        String sql = "SELECT * FROM purchase_history WHERE \n" +
                "tag1_id=? OR tag2_id=? OR tag3_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, tagID, tagID, tagID);
    }

    @Override
    public Long countByTagId(Long tagId) {
        String sql = "SELECT COUNT(*) FROM purchase_history WHERE \n" +
                "tag1_id=? OR tag2_id=? OR tag3_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, tagId, tagId, tagId);
    }

    @Override
    public List<PurchaseHistory> findAllByOptionNameAndOptionId(String optionName, Long optionId) {
        String column = optionName + "_id";
        String sql = "SELECT * FROM purchase_history\n" +
                "WHERE " + column + "=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, optionId);
    }

    @Override
    public Long countByOptionNameAndOptionId(String optionName, Long optionId) {
        String column = optionName + "_id";
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE " + column + "=?";
        return jdbcTemplate.queryForObject(sql, Long.class, optionId);
    }

    @Override
    public List<PurchaseHistory> findAllByPackageNameAndOptionId(String packageName, Long optionId) {
        String table = "purchase_" + packageName + "_map";
        String sql = "SELECT A.* FROM purchase_history AS A\n" +
                "INNER JOIN " + table + " AS M ON A.id=M.purchase_id\n" +
                "WHERE M.option_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, optionId);
    }

    @Override
    public Long countByPackageNameAndOptionId(String packageName, Long optionId) {
        String table = "purchase_" + packageName + "_map";
        String sql = "SELECT COUNT(*) FROM " + table + "\n" +
                "WHERE " + table + ".option_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, optionId);
    }

    @Override
    public Long countByTagIdAndOptionNameAndOptionId(Long tagId, String optionName, Long optionId) {
        String column = optionName + "_id";
        String sql = "SELECT COUNT(*) FROM purchase_history WHERE\n" +
                "(tag1_id=? OR tag2_id=? OR tag3_id=?) AND\n" +
                column + "=?";
        return jdbcTemplate.queryForObject(sql, Long.class, tagId, tagId, tagId, optionId);
    }

    @Override
    public Long countByTagIdAndPackageNameAndOptionId(Long tagId, String packageName, Long optionId) {
        String table = "purchase_" + packageName + "_map";
        String sql = "SELECT COUNT(*) FROM purchase_history AS A \n" +
                "INNER JOIN " + table + " AS M ON A.id=M.purchase_id\n" +
                "WHERE (A.tag1_id=? OR A.tag2_id=? OR A.tag3_id=?) AND M.option_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, tagId, tagId, tagId, optionId);
    }

    @Override
    public List<PurchaseCountDto> countByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age) {
        String optionId = categoryName + "_id";
        String query = "SELECT " + optionId + " AS option_id, count(*) AS count FROM purchase_history \n" +
                "WHERE gender=:gender AND age >= :age AND age <= :age+9 \n" +
                "GROUP BY " + optionId;

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());
        params.put("age", age);

        return namedTemplate.query(query, params, purchaseCountDtoRowMapper);
    }

    @Override
    public List<PurchaseCountDto> countByCategoryNameAndExteriorColorId(String categoryName, Long exteriorColorId) {
        String optionId = categoryName + "_id";
        String query = "SELECT " + optionId + " AS option_id, count(*) AS count FROM purchase_history \n" +
                "WHERE exterior_color_id=:exterior_color_id \n" +
                "GROUP BY " + optionId;

        Map<String, Object> params = new HashMap<>();
        params.put("exterior_color_id", exteriorColorId);

        return namedTemplate.query(query, params, purchaseCountDtoRowMapper);
    }
}
