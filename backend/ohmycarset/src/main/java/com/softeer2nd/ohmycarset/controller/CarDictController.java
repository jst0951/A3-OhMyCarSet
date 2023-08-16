package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.dto.CarDictDto;
import com.softeer2nd.ohmycarset.service.CarDictService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name = "백카사전", description = "백카사전 관련 API입니다.")
public class CarDictController {
    private final CarDictService carDictService;
    public CarDictController(CarDictService carDictService) {
        this.carDictService = carDictService;
    }

    @GetMapping(value = "/car_dict")
    @Operation(summary = "[공통]백Car사전", description = "백카사전의 모든 데이터를 제공합니다.")
    public List<CarDictDto> getAllCarDict() {
        return carDictService.getAllCarDict();
    }
}