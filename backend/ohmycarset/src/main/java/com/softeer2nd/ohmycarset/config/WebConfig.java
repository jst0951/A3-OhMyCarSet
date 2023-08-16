package com.softeer2nd.ohmycarset.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 경로에 대해
                .allowedOrigins(
                        "*"
                ) // 허용할 도메인 목록
                .allowedMethods("*") // 허용할 HTTP 메소드 목록
                .allowedHeaders("*");
    }
}
