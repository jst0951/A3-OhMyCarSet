package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.domain.CarDict;
import com.softeer2nd.ohmycarset.dto.CarDictDto;
import com.softeer2nd.ohmycarset.repository.CarDictRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarDictService {
    private final CarDictRepository carDictRepository;
    public CarDictService(CarDictRepository carDictRepository) {
        this.carDictRepository = carDictRepository;
    }

    public List<CarDictDto> getAllCarDict() {
        List<CarDictDto> carDictDtoList = new ArrayList<>();

        List<CarDict> carDictList = carDictRepository.findAll();
        for(CarDict carDict: carDictList) {
            carDictDtoList.add(new CarDictDto(carDict.getId(), carDict.getKeyword(), carDict.getDescription(), carDict.getImgSrc()));
        }

        return carDictDtoList;
    }
}