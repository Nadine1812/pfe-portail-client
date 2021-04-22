package com.example.config;


import com.google.common.base.Strings;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.paths.AbstractPathProvider;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import springfox.documentation.service.ApiKey;
import springfox.documentation.service.SecurityScheme;


@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
	
	
	@Value("${swagger.host_url}")
    private String host_url;

    @Value("${server.servlet.context-path}")
    private String contextPath;

    @Value("${swagger.swaggerPath}")
    private String swaggerPath;
    @Bean
    public Docket api() {
        List< SecurityScheme > schemeList = new ArrayList <>();
        schemeList.add(new ApiKey( "JWT", "Authorization", "header"));
    	 return new Docket(DocumentationType.SWAGGER_2)

                 .host(host_url)
                 .pathProvider(
                         new AbstractPathProvider() {
                             @Override
                             protected String getDocumentationPath() {
                                 return Strings.isNullOrEmpty(contextPath) ? "/" : contextPath;
                             }
                             @Override
                             protected String applicationPath() {
                                 return Strings.isNullOrEmpty(swaggerPath) ? "/" : swaggerPath;
                             }
                         })
                 .produces(Collections.singleton("application/json"))
                 .consumes(Collections.singleton("application/json"))
                 .ignoredParameterTypes( Authentication.class)
                 .securitySchemes(schemeList)
                 .useDefaultResponseMessages(false)
                 .select()
                 .apis(RequestHandlerSelectors.basePackage("com.example"))
                 .paths(PathSelectors.any())
                 .build();
    }

}
