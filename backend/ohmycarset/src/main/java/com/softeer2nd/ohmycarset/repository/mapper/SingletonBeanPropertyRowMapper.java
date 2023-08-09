package com.softeer2nd.ohmycarset.repository.mapper;

import org.springframework.jdbc.core.BeanPropertyRowMapper;

public class SingletonBeanPropertyRowMapper<T> extends BeanPropertyRowMapper<T> {
    private static SingletonBeanPropertyRowMapper instance;

    private SingletonBeanPropertyRowMapper(Class<T> mappedClass) {
        super(mappedClass);
    }

    public static synchronized <T> SingletonBeanPropertyRowMapper<T> getInstance(Class<T> mappedClass) {
        if (instance == null) {
            instance = new SingletonBeanPropertyRowMapper<>(mappedClass);
        }
        return instance;
    }
}