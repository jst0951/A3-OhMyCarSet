package com.softeer2nd.ohmycarset.service;

import com.softeer2nd.ohmycarset.repository.TagRepository;
import org.springframework.stereotype.Service;

@Service
public class TagService {
    private final TagRepository tagRepository;
    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }


}
