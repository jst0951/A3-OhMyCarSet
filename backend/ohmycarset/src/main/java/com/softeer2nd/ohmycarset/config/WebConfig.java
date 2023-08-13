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
                        "http://loclahost:5173",
                        "http://ohmycarset.com",
                        "http://ohmycarset.com:80",
                        "http://www.ohmycarset.com",
                        "http://www.ohmycarset.com:80",
                        "https://ohmycarset.com",
                        "https://ohmycarset.com:443",
                        "https://www.ohmycarset.com",
                        "https://www.ohmycarset.com:443"
                ) // 허용할 Origin 목록
                .allowedMethods("*") // 허용할 HTTP 메소드 목록
                .allowedHeaders("*"); // 허용할 헤더 목록
    }
}
