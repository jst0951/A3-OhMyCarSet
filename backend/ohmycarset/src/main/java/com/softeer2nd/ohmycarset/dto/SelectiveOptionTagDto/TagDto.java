package com.softeer2nd.ohmycarset.dto.SelectiveOptionTagDto;

import com.softeer2nd.ohmycarset.domain.Tag;
import lombok.Getter;

import java.beans.ConstructorProperties;

@Getter
public class TagDto {
    private final Long id;
    private final String name;
    private final Double percentage;

    @ConstructorProperties({"id", "name", "percentage"})
    public TagDto(Long id, String name, Double percentage) {
        this.id = id;
        this.name = name;
        this.percentage = percentage;
    }

    public TagDto(Tag tag, Double percentage) {
        this.id = tag.getId();
        this.name = tag.getName();
        this.percentage = percentage;
    }
}
