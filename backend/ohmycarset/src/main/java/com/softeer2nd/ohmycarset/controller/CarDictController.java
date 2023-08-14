package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.CarDictDto;
import com.softeer2nd.ohmycarset.service.CarDictService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarDictController {
    private final CarDictService carDictService;
    public CarDictController(CarDictService carDictService) {
        this.carDictService = carDictService;
    }

    @GetMapping(value = "/car_dict")
    public List<CarDictDto> getAllCarDict() {
        return carDictService.getAllCarDict();
    }
}