package com.softeer2nd.ohmycarset.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI openAPI() {
        Info info = new Info()
                .title("OhMyCarSet")
                .version("2023.08.14")
                .description("오마카세(OhMyCarSet) 프로젝트의 API 문서입니다.");

        return new OpenAPI()
                .components(new Components())
                .info(info);
    }
}
