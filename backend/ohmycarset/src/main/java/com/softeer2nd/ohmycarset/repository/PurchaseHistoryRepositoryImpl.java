package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import com.softeer2nd.ohmycarset.domain.Tag;
import com.softeer2nd.ohmycarset.dto.PurchaseCountDto;
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
        String sql = "SELECT COUNT(*) FROM purchase_history \n" +
                "WHERE ? IN (tag1_id, tag2_id, tag3_id)";
        return jdbcTemplate.queryForObject(sql, Long.class, tagId);
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
    public List<PurchaseCountDto> countByCategoryNameAndGenderAndAgeAndTags(String optionName, Character gender, Integer age, List<Long> tagIds) {
        String optionId = optionName + "_id";
        String query = "SELECT " + optionId + " as option_id, count(*) as count FROM purchase_history \n" +
                "WHERE (gender=:gender AND age >= :age AND age <= :age+9 AND tag1_id IN (:tagIds) AND tag2_id IN (:tagIds) AND tag3_id IN (:tagIds)) \n" +
                "GROUP BY " + optionId;

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());
        params.put("age", age);
        params.put("tagIds", tagIds);

        List<PurchaseCountDto> purchaseCountDtoList = namedTemplate.query(query, params, purchaseCountDtoRowMapper);
        return purchaseCountDtoList;
    }

    @Override
    public List<PurchaseCountDto> countByPackageNameAndGenderAndAgeAndTags(String packageName, Character gender, Integer age, List<Long> tagIds) {
        String packageId = packageName + "_id";
        String mappingTable = "purchase_" + packageName + "_map";
        String query = "SELECT  M.option_id, count(*) as count FROM purchase_history AS H \n" +
                "INNER JOIN " + mappingTable + " AS M ON H.id=M.purchase_id \n" +
                "WHERE (H.gender=:gender AND H.age >= :age AND H.age <= :age+9 AND H.tag1_id IN (:tagIds) AND H.tag2_id IN (:tagIds) AND H.tag3_id IN (:tagIds)) \n" +
                "GROUP BY M.option_id";

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());
        params.put("age", age);
        params.put("tagIds", tagIds);

        List<PurchaseCountDto> purchaseCountDtoList = namedTemplate.query(query, params, purchaseCountDtoRowMapper);
        return purchaseCountDtoList;
    }

    @Override
    public Long countByGenderAndAgeAndTags(Character gender, Integer age, List<Long> tagIds) {
        String query = "SELECT count(*) as count FROM purchase_history \n" +
                "WHERE (gender=:gender AND age >= :age AND age <= :age+9 AND tag1_id IN (:tagIds) AND tag2_id IN (:tagIds) AND tag3_id IN (:tagIds)) \n";

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());
        params.put("age", age);
        params.put("tagIds", tagIds);

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    public PurchaseCountDto findOptionByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age) {
        String option = categoryName + "_id";
        String query = "SELECT " + option + " as option_id, count(*) as count FROM purchase_history \n" +
                "WHERE (gender=:gender AND age >= :age AND age <= :age+9) \n" +
                "GROUP BY option_id \n" +
                "ORDER BY count DESC \n" +
                "LIMIT 1";

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());
        params.put("age", age);

        return namedTemplate.queryForObject(query, params, purchaseCountDtoRowMapper);
    }

    @Override
    public List<PurchaseCountDto> findAllByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age) {
        String option = categoryName + "_id";
        String query = "SELECT " + option + " as option_id, count(*) as count FROM purchase_history \n" +
                "WHERE (gender=:gender AND age >= :age AND age <= :age+9) \n" +
                "GROUP BY option_id \n" +
                "ORDER BY count DESC";

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());
        params.put("age", age);

        return namedTemplate.query(query, params, purchaseCountDtoRowMapper);
    }

    @Override
    public Double countByCategoryNameAndOptionIdAndGender(String categoryName, Long id, Character gender) {
        String option = categoryName + "_id";
        String query = "SELECT (COUNT(CASE WHEN " + option + "=:id THEN 1 END) / COUNT(*)) * 100 FROM purchase_history \n" +
                "WHERE gender=:gender";

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());
        params.put("id", id);

        return namedTemplate.queryForObject(query, params, Double.class);
    }

    @Override
    public Double countByCategoryNameAndOptionIdAndAge(String categoryName, Long id, Integer age) {
        String option = categoryName + "_id";
        String query = "SELECT (COUNT(CASE WHEN " + option + "=:id THEN 1 END) / COUNT(*)) * 100 FROM purchase_history \n" +
                "WHERE age >= :age AND age <= :age+9";

        Map<String, Object> params = new HashMap<>();
        params.put("age", age);
        params.put("id", id);

        return namedTemplate.queryForObject(query, params, Double.class);
    }

    @Override
    public List<Long> countByCategoryNameAndOptionIds(String categoryName, List<Long> optionIds) {
        String column = categoryName + "_id";
        String query = "SELECT count(*) AS count FROM purchase_history \n" +
                "WHERE " + column + " IN (:optionIds) \n" +
                "GROUP BY " + column + " \n" +
                "ORDER BY count DESC";

        MapSqlParameterSource parameters = new MapSqlParameterSource("optionIds", optionIds);

        return namedTemplate.queryForList(query, parameters, Long.class);
    }
}
