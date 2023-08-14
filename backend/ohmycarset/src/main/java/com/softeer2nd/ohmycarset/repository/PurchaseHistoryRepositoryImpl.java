package com.softeer2nd.ohmycarset.repository;

import com.softeer2nd.ohmycarset.domain.PurchaseHistory;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class PurchaseHistoryRepositoryImpl implements PurchaseHistoryRepository {
    private final JdbcTemplate jdbcTemplate;
    private final RowMapper<PurchaseHistory> purchaseHistoryRowMapper = BeanPropertyRowMapper.newInstance(PurchaseHistory.class);
    public PurchaseHistoryRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
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
        String sql = "SELECT A.* FROM purchase_history AS A\n" +
                "INNER JOIN purchase_tag_map AS M ON A.id=M.purhcase_id\n" +
                "WHERE M.tag_id=?";
        return jdbcTemplate.query(sql, purchaseHistoryRowMapper, tagID);
    }

    @Override
    public Long countByTagId(Long tagId) {
        String sql = "SELECT COUNT(*) FROM purchase_tag_map\n" +
                "WHERE tag_id=?";
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
        String table = optionName + "_id";
        String sql = "SELECT COUNT(*) FROM purchase_history AS A\n" +
                "INNER JOIN purchase_tag_map AS M ON A.id=M.purhcase_id\n" +
                "WHERE M.tag_id=? AND A." + table + "=?";
        return jdbcTemplate.queryForObject(sql, Long.class, tagId, optionId);
    }
}
