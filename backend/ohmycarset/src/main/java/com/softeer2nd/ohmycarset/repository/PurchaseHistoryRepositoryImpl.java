package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import com.softeer2nd.ohmycarset.dto.PurchaseCountDto;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
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
    @Cacheable(value = "count")
    public Long count() {
        return jdbcTemplate.queryForObject("SELECT COUNT(*) FROM purchase_history", Long.class);
    }

    @CachePut(value = "count")
    public Long updateCount() {
        return count();
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
    @Cacheable(value = "countByTagId", key = "#tagId")
    public Long countByTagId(Long tagId) {
        String sql = "SELECT COUNT(*) FROM purchase_history \n" +
                "WHERE ? IN (tag1_id, tag2_id, tag3_id)";
        return jdbcTemplate.queryForObject(sql, Long.class, tagId);
    }

    @Override
    @CachePut(value = "countByTagId", key = "#tagId")
    public Long updateCountByTagId(Long tagId) {
        return countByTagId(tagId);
    }

    @Override
    @Cacheable(value = "countByCategoryNameAndOptionId", key = "{#optionName, #optionId}")
    public Long countByCategoryNameAndOptionId(String optionName, Long optionId) {
        String column = optionName + "_id";
        String sql = "SELECT COUNT(*) FROM purchase_history\n" +
                "WHERE " + column + "=?";
        return jdbcTemplate.queryForObject(sql, Long.class, optionId);
    }

    @Override
    @CachePut(value = "countByCategoryNameAndOptionId", key = "{#optionName, #optionId}")
    public Long updateCountByCategoryNameAndOptionId(String optionName, Long optionId) {
        return countByCategoryNameAndOptionId(optionName, optionId);
    }

    @Override
    @Cacheable(value = "countByCategoryNameAndPackageId", key = "{#categoryName, #packageId}")
    public Long countByCategoryNameAndPackageId(String categoryName, Long packageId) {
        String table = "purchase_" + categoryName + "_map";
        String sql = "SELECT COUNT(*) FROM " + table + "\n" +
                "WHERE " + table + ".option_id=?";
        return jdbcTemplate.queryForObject(sql, Long.class, packageId);
    }

    @Override
    @CachePut(value = "countByCategoryNameAndPackageId", key = "{#categoryName, #packageId}")
    public Long updateCountByCategoryNameAndPackageId(String categoryName, Long packageId) {
        return countByCategoryNameAndPackageId(categoryName, packageId);
    }

    @Override
    @Cacheable(value = "countByTagIdAndCategoryNameAndOptionId", key = "{#tagId, #categoryName, #optionId}")
    public Long countByTagIdAndCategoryNameAndOptionId(Long tagId, String categoryName, Long optionId) {
        String column = categoryName + "_id";
        String sql = "SELECT COUNT(*) FROM purchase_history WHERE\n" +
                "(tag1_id=? OR tag2_id=? OR tag3_id=?) AND\n" +
                column + "=?";
        return jdbcTemplate.queryForObject(sql, Long.class, tagId, tagId, tagId, optionId);
    }

    @Override
    @CachePut(value = "countByTagIdAndCategoryNameAndOptionId", key = "{#tagId, #categoryName, #optionId}")
    public Long updateCountByTagIdAndCategoryNameAndOptionId(Long tagId, String categoryName, Long optionId) {
        return countByTagIdAndCategoryNameAndOptionId(tagId, categoryName, optionId);
    }

    @Override
    @Cacheable(value = "countByTagIdAndCategoryNameAndPackageId", key = "{#tagId, #categoryName, #packageId}")
    public Long countByTagIdAndCategoryNameAndPackageId(Long tagId, String categoryName, Long packageId) {
        String table = "purchase_" + categoryName + "_map";
        String query = "SELECT COUNT(*) FROM purchase_history AS A \n" +
                "INNER JOIN " + table + " AS M ON A.id=M.purchase_id \n" +
                "WHERE (A.tag1_id=? OR A.tag2_id=? OR A.tag3_id=?) AND M.option_id=?";
        return jdbcTemplate.queryForObject(query, Long.class, tagId, tagId, tagId, packageId);
    }

    @Override
    @CachePut(value = "countByTagIdAndCategoryNameAndPackageId", key = "{#tagId, #categoryName, #packageId}")
    public Long updateCountByTagIdAndCategoryNameAndPackageId(Long tagId, String categoryName, Long packageId) {
        return countByTagIdAndCategoryNameAndPackageId(tagId, categoryName, packageId);
    }

    @Override
    @Cacheable(value = "countByCategoryNameAndAge", key = "{#categoryName, #age}")
    public List<PurchaseCountDto> countByCategoryNameAndAge(String categoryName, Integer age) {
        String optionId = categoryName + "_id";
        String query = "SELECT " + optionId + " AS option_id, count(*) AS count FROM purchase_history \n" +
                "WHERE age >= :age AND age <= :age+9 \n" +
                "GROUP BY " + optionId;

        Map<String, Object> params = new HashMap<>();
        params.put("age", age);

        return namedTemplate.query(query, params, purchaseCountDtoRowMapper);
    }

    @Override
    @CachePut(value = "countByCategoryNameAndAge", key = "{#categoryName, #age}")
    public List<PurchaseCountDto> updateCountByCategoryNameAndAge(String categoryName, Integer age) {
        return countByCategoryNameAndAge(categoryName, age);
    }

    @Override
    @Cacheable(value = "countByCategoryNameAndGenderAndAge", key = "{#categoryName, #gender, #age}")
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
    @CachePut(value = "countByCategoryNameAndGenderAndAge", key = "{#categoryName, #gender, #age}")
    public List<PurchaseCountDto> updateCountByCategoryNameAndGenderAndAge(String categoryName, Character gender, Integer age) {
        return countByCategoryNameAndGenderAndAge(categoryName, gender, age);
    }

    @Override
    @Cacheable(value = "countByCategoryNameAndExteriorColorId", key = "{#categoryName, #exteriorColorId}")
    public List<PurchaseCountDto> countByCategoryNameAndExteriorColorId(String categoryName, Long exteriorColorId) {
        String optionId = categoryName + "_id";
        String query = "SELECT " + optionId + " AS option_id, count(*) AS count FROM purchase_history \n" +
                "WHERE exterior_color_id=:exterior_color_id \n" +
                "GROUP BY " + optionId;

        Map<String, Object> params = new HashMap<>();
        params.put("exterior_color_id", exteriorColorId);

        return namedTemplate.query(query, params, purchaseCountDtoRowMapper);
    }

    @Override
    @CachePut(value = "countByCategoryNameAndExteriorColorId", key = "{#categoryName, exteriorColorId}")
    public List<PurchaseCountDto> updateCountByCategoryNameAndExteriorColorId(String categoryName, Long exteriorColorId) {
        return countByCategoryNameAndExteriorColorId(categoryName, exteriorColorId);
    }

    @Override
    public Long countByCategoryNameAndOptionIdAndGenderAndAgeAndTags(String categoryName, Long id, Character gender, Integer age, List<Long> tagIds) {
        String column = categoryName + "_id";
        String query = "SELECT count(*) as count FROM purchase_history \n" +
                "WHERE " + column + "=:id AND (gender=:gender AND age >= :age AND age <= :age+9 AND tag1_id IN (:tagIds) AND tag2_id IN (:tagIds) AND tag3_id IN (:tagIds)) \n";

        Map<String, Object> params = new HashMap<>();
        params.put("id", id);
        params.put("gender", gender.toString());
        params.put("age", age);
        params.put("tagIds", tagIds);

        return namedTemplate.queryForObject(query, params, Long.class);
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
    @Cacheable(value = "countByCategoryNameAndOptionIdAndGender", key = "{#categoryName, #optionId, #gender}")
    public Long countByCategoryNameAndOptionIdAndGender(String categoryName, Long optionId, Character gender) {
        String option = categoryName + "_id";
        String query = "SELECT count(*) as count FROM purchase_history \n" +
                "WHERE gender=:gender AND " + option + "=:id";

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());
        params.put("id", optionId);

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    @CachePut(value = "countByCategoryNameAndOptionIdAndGender", key = "{#categoryName, #optionId, #gender}")
    public Long updateCountByCategoryNameAndOptionIdAndGender(String categoryName, Long optionId, Character gender) {
        return countByCategoryNameAndOptionIdAndGender(categoryName, optionId, gender);
    }

    @Override
    @Cacheable(value = "countByCategoryNameAndOptionIdAndAge", key = "{#categoryName, #optionId, #age}")
    public Long countByCategoryNameAndOptionIdAndAge(String categoryName, Long optionId, Integer age) {
        String option = categoryName + "_id";
        String query = "SELECT COUNT(*) FROM purchase_history \n" +
                "WHERE " + option + "=:id AND age >= :age AND age <= :age+9";

        Map<String, Object> params = new HashMap<>();
        params.put("age", age);
        params.put("id", optionId);

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    @CachePut(value = "countByCategoryNameAndOptionIdAndAge", key = "{#categoryName, #optionId, #age}")
    public Long updateCountByCategoryNameAndOptionIdAndAge(String categoryName, Long optionId, Integer age) {
        return countByCategoryNameAndOptionIdAndAge(categoryName, optionId, age);
    }

    @Override
    @Cacheable(value = "countByCategoryNameAndOptionIdAndGenderAndAge", key = "{#categoryName, #optionId, #gender, #age}")
    public Long countByCategoryNameAndOptionIdAndGenderAndAge(String categoryName, Long optionId, Character gender, Integer age) {
        String option = categoryName + "_id";
        String query = "SELECT count(*) as count FROM purchase_history \n" +
                "WHERE " + option + "=:id AND gender=:gender AND age >= :age AND age <= :age+9";

        Map<String, Object> params = new HashMap<>();
        params.put("id", optionId);
        params.put("gender", gender.toString());
        params.put("age", age);

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    @CachePut(value = "countByCategoryNameAndOptionIdAndGenderAndAge", key = "{#categoryName, #optionId, #gender, #age}")
    public Long updateCountByCategoryNameAndOptionIdAndGenderAndAge(String categoryName, Long optionId, Character gender, Integer age) {
        return countByCategoryNameAndOptionIdAndGenderAndAge(categoryName, optionId, gender, age);
    }

    @Override
    @Cacheable(value = "countByGenderAndAge", key = "{#gender, #age}")
    public Long countByGenderAndAge(Character gender, Integer age) {
        String query = "SELECT count(*) as count FROM purchase_history \n" +
                "WHERE gender=:gender AND age >= :age AND age <= :age+9";

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());
        params.put("age", age);

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    @CachePut(value = "countByGenderAndAge", key = "{#gender, #age}")
    public Long updateCountByGenderAndAge(Character gender, Integer age) {
        return countByGenderAndAge(gender, age);
    }

    @Override
    @Cacheable(value = "countByGender", key = "#gender")
    public Long countByGender(Character gender) {
        String query = "SELECT count(*) as count FROM purchase_history \n" +
                "WHERE gender=:gender";

        Map<String, Object> params = new HashMap<>();
        params.put("gender", gender.toString());

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    @CachePut(value = "countByGender", key = "#gender")
    public Long updateCountByGender(Character gender) {
        return updateCountByGender(gender);
    }

    @Override
    @Cacheable(value = "countByAge", key = "#age")
    public Long countByAge(Integer age) {
        String query = "SELECT count(*) as count FROM purchase_history \n" +
                "WHERE age>=:age AND age<=:age+9";

        Map<String, Object> params = new HashMap<>();
        params.put("age", age);

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    @CachePut(value = "countByAge", key = "#age")
    public Long updateCountByAge(Integer age) {
        return countByAge(age);
    }

    @Override
    public Long countByCategoryNameAndPackageIdAndGenderAndAgeAndTags(String categoryName, Long packageId, Character gender, Integer age, List<Long> tagIds) {
        String table = "purchase_" + categoryName + "_map";
        String query = "SELECT count(*) as count FROM purchase_history AS A\n" +
                "INNER JOIN " + table + " AS M ON A.id=M.purchase_id \n" +
                "WHERE M.option_id=:packageId AND (A.gender=:gender AND A.age >= :age AND A.age <= :age+9 AND A.tag1_id IN (:tagIds) AND A.tag2_id IN (:tagIds) AND A.tag3_id IN (:tagIds)) \n";

        Map<String, Object> params = new HashMap<>();
        params.put("packageId", packageId);
        params.put("gender", gender.toString());
        params.put("age", age);
        params.put("tagIds", tagIds);

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    public Long countByCategoryNameAndOptionIdAndAgeAndTags(String categoryName, Long id, Integer age, List<Long> tagIds) {
        String column = categoryName + "_id";
        String query = "SELECT count(*) as count FROM purchase_history \n" +
                "WHERE " + column + "=:id AND (age >= :age AND age <= :age+9 AND tag1_id IN (:tagIds) AND tag2_id IN (:tagIds) AND tag3_id IN (:tagIds)) \n";

        Map<String, Object> params = new HashMap<>();
        params.put("id", id);
        params.put("age", age);
        params.put("tagIds", tagIds);

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    public Long countByAgeAndTags(Integer age, List<Long> tagIds) {
        String query = "SELECT count(*) as count FROM purchase_history \n" +
                "WHERE (age >= :age AND age <= :age+9 AND tag1_id IN (:tagIds) AND tag2_id IN (:tagIds) AND tag3_id IN (:tagIds)) \n";

        Map<String, Object> params = new HashMap<>();
        params.put("age", age);
        params.put("tagIds", tagIds);

        return namedTemplate.queryForObject(query, params, Long.class);
    }

    @Override
    public Long countByCategoryNameAndPackageIdAndAgeAndTags(String categoryName, Long packageId, Integer age, List<Long> tagIds) {
        String table = "purchase_" + categoryName + "_map";
        String query = "SELECT count(*) as count FROM purchase_history AS A\n" +
                "INNER JOIN " + table + " AS M ON A.id=M.purchase_id \n" +
                "WHERE M.option_id=:packageId AND (A.age >= :age AND A.age <= :age+9 AND A.tag1_id IN (:tagIds) AND A.tag2_id IN (:tagIds) AND A.tag3_id IN (:tagIds)) \n";

        Map<String, Object> params = new HashMap<>();
        params.put("packageId", packageId);
        params.put("age", age);
        params.put("tagIds", tagIds);

        return namedTemplate.queryForObject(query, params, Long.class);
    }
}
