package com.softeer2nd.ohmycarset.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class UserWithPresetDto {
    private Integer age;
    private Character gender;
    private String tag1;
    private String tag2;
    private String tag3;
    private List<Long> recommendOptionId;

    public UserWithPresetDto(Integer age, Character gender, String tag1, String tag2, String tag3, List<Long> recommendOptionId) {
        this.age = age;
        this.gender = gender;
        this.tag1 = tag1;
        this.tag2 = tag2;
        this.tag3 = tag3;
        this.recommendOptionId = recommendOptionId;
    }
}
