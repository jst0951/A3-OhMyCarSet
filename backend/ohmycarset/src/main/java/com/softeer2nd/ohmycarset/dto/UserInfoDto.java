package com.softeer2nd.ohmycarset.dto;

import lombok.Getter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Getter
public class UserInfoDto {
    public final Integer age;
    public final Character gender;
    public final String tag1;
    public final String tag2;
    public final String tag3;

    public UserInfoDto(Integer age, Character gender, String tag1, String tag2, String tag3) {
        this.age = age;
        this.gender = gender;
        this.tag1 = tag1;
        this.tag2 = tag2;
        this.tag3 = tag3;
    }
}