package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.CoreOption;
import com.softeer2nd.ohmycarset.domain.DefaultCategory;
import com.softeer2nd.ohmycarset.domain.DefaultOption;
import com.softeer2nd.ohmycarset.domain.Trim;
import com.softeer2nd.ohmycarset.dto.DefaultOptionCategoryDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDetailDto;
import com.softeer2nd.ohmycarset.dto.DefaultOptionDto;
import com.softeer2nd.ohmycarset.repository.DefaultCategoryRepository;
import com.softeer2nd.ohmycarset.repository.DefaultOptionRepository;
import com.softeer2nd.ohmycarset.repository.TrimRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class DefaultOptionService {

    private final DefaultCategoryRepository defaultCategoryRepository;
    private final DefaultOptionRepository defaultOptionRepository;
    private final TrimRepository trimRepository;
    public DefaultOptionService(DefaultCategoryRepository defaultCategoryRepository, DefaultOptionRepository defaultOptionRepository, TrimRepository trimRepository) {
        this.defaultCategoryRepository = defaultCategoryRepository;
        this.defaultOptionRepository = defaultOptionRepository;
        this.trimRepository = trimRepository;
    }

    public List<DefaultOptionDto> getAllDefaultOption() {

        List<DefaultOptionDto> defaultOptionDtoList = new ArrayList<>();
        List<Trim> trimList = trimRepository.findAll();

        for (Trim trim : trimList) {
            List<DefaultCategory> defaultCategoryList = defaultCategoryRepository.findAll();
            List<DefaultOptionCategoryDto> defaultOptionCategoryDtoList = new ArrayList<>();

            for(DefaultCategory defaultCategory : defaultCategoryList) {
                List<DefaultOption> defaultOptionList = defaultOptionRepository.findByTrimIdAndDefCategoryId(trim.getId(), defaultCategory.getId());
                List<DefaultOptionDetailDto> defaultOptionDetailDtoList = new ArrayList<>();

                for(DefaultOption defaultOption : defaultOptionList) {
                    defaultOptionDetailDtoList.add(new DefaultOptionDetailDto(defaultOption));
                }

                defaultOptionCategoryDtoList.add(new DefaultOptionCategoryDto(defaultCategory.getName(), defaultOptionDetailDtoList));
            }

            defaultOptionDtoList.add(new DefaultOptionDto(trim, defaultOptionCategoryDtoList));
        }

        return defaultOptionDtoList;
    }
}
