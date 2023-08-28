package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.CoreOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.CoreOptionDto;
import com.softeer2nd.ohmycarset.repository.CoreOptionRepository;
import com.softeer2nd.ohmycarset.repository.TrimRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CoreOptionService {
    private final CoreOptionRepository coreOptionRepository;
    private final TrimRepository trimRepository;
    public CoreOptionService(CoreOptionRepository coreOptionRepository, TrimRepository trimRepository) {
        this.coreOptionRepository = coreOptionRepository;
        this.trimRepository = trimRepository;
    }

    public List<CoreOptionDto> getAllCoreOption() {
        List<CoreOptionDto> coreOptionDtoList = new ArrayList<>();
        List<Trim> trimList = trimRepository.findAll();

        for (Trim trim : trimList) {
            List<CoreOption> coreOptionList = coreOptionRepository.findByTrimId(trim.getId());
            coreOptionDtoList.add(new CoreOptionDto(trim.getId(), trim.getName(), coreOptionList));
        }

        return coreOptionDtoList;
    }
}
