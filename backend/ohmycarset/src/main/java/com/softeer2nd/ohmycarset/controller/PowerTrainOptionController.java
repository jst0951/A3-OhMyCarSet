package com.softeer2nd.ohmycarset.controller;

import com.softeer2nd.ohmycarset.domain.PowerTrainOption;
import com.softeer2nd.ohmycarset.dto.PowerTrainDto;
import com.softeer2nd.ohmycarset.service.PowerTrainService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PowerTrainOptionController {
    private  final PowerTrainService powerTrainService;

    public PowerTrainOptionController(PowerTrainService powerTrainService) {
        this.powerTrainService = powerTrainService;
    }

    @GetMapping(value = "/selective_option/파워트레인")
    public List<PowerTrainDto> getPowerTrain() {
        List<PowerTrainDto> powerTrainDtoList = new ArrayList<>();

        List<PowerTrainOption> powerTrainOptionList = powerTrainService.findAll();

        for(PowerTrainOption powerTrainOption : powerTrainOptionList) {
            powerTrainDtoList.add(new PowerTrainDto(powerTrainOption));
        }

        return powerTrainDtoList;
    }
}
