package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.TrimDto;
import com.softeer2nd.ohmycarset.repository.ExteriorColorRepository;
import com.softeer2nd.ohmycarset.repository.TrimRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TrimService {
    private final TrimRepository trimRepository;
    private final ExteriorColorRepository exteriorColorRepository;
    public TrimService(TrimRepository trimRepository, ExteriorColorRepository exteriorColorRepository) {
        this.trimRepository = trimRepository;
        this.exteriorColorRepository = exteriorColorRepository;
    }

    public List<TrimDto> getAllTrim() {
        List<TrimDto> trimDtoList = new ArrayList<>();
        List<Trim> trimList = trimRepository.findAll();
        for(Trim trim: trimList) {
            ExteriorColor exteriorColor = exteriorColorRepository.findById(trim.getRepColorId()).orElse(null);
            trimDtoList.add(new TrimDto(trim, exteriorColor));
        }

        return trimDtoList;
    }
}
