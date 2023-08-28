package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.InteriorColor;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.InteriorColorDto;
import com.softeer2nd.ohmycarset.repository.InteriorColorRepository;
import com.softeer2nd.ohmycarset.repository.TrimRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class InteriorColorService {
    private final InteriorColorRepository interiorColorRepository;
    private final TrimRepository trimRepository;
    public InteriorColorService(InteriorColorRepository interiorColorRepository, TrimRepository trimRepository) {
        this.interiorColorRepository = interiorColorRepository;
        this.trimRepository = trimRepository;
    }

    public List<InteriorColorDto> getAllInteriorColor() {
        List<InteriorColorDto> interiorColorDtoList = new ArrayList<>();
        List<Trim> trimList = trimRepository.findAll();
        for(Trim trim: trimList) {
            List<InteriorColor> interiorColorList = interiorColorRepository.findAllByTrimId(trim.getId());
            interiorColorDtoList.add(new InteriorColorDto(trim.getId(), trim.getName(), interiorColorList));
        }

        return interiorColorDtoList;
    }
}
