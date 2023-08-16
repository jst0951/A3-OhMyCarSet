package com.softeer2nd.ohmycarset.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserInfoDto {
    public Integer age;
    public Character gender;
    public String tag1;
    public String tag2;
    public String tag3;

    public UserInfoDto(Integer age, Character gender, String tag1, String tag2, String tag3) {
        this.age = age;
        this.gender = gender;
        this.tag1 = tag1;
        this.tag2 = tag2;
        this.tag3 = tag3;
    }
}