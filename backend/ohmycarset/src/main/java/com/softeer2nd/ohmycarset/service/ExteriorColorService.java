package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.ExteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.ExteriorColorDto;
import com.softeer2nd.ohmycarset.repository.ExteriorColorRepository;
import com.softeer2nd.ohmycarset.repository.TrimRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ExteriorColorService {
    private final TrimRepository trimRepository;
    private final ExteriorColorRepository exteriorColorRepository;
    public ExteriorColorService(TrimRepository trimRepository, ExteriorColorRepository exteriorColorRepository) {
        this.trimRepository = trimRepository;
        this.exteriorColorRepository = exteriorColorRepository;
    }

    public List<ExteriorColorDto> getAllExteriorColor() {
        List<ExteriorColorDto> exteriorColorDtoList = new ArrayList<>();
        List<Trim> trimList = trimRepository.findAll();
        for(Trim trim: trimList) {
            List<ExteriorColor> exteriorColorList = exteriorColorRepository.findAllByTrimId(trim.getId());
            exteriorColorDtoList.add(new ExteriorColorDto(trim, exteriorColorList));
        }

        return exteriorColorDtoList;
    }
}
