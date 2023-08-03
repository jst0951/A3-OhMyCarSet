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
                        "http://localhost:5173",
                        "https://localhost:5173",
                        "http://ohmycarset.com:80",
                        "http://www.ohmycarset.com:80",
                        "https://ohmycarset.com:443",
                        "https://www.ohmycarset.com:443"
                ) // 허용할 도메인 목록
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메소드 목록
                .allowedHeaders("*") // 허용할 헤더 목록
                .allowCredentials(true); // 쿠키를 주고받을 수 있도록 허용 여부
    }
}
