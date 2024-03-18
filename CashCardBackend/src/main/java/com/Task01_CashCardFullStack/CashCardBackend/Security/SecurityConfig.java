package com.Task01_CashCardFullStack.CashCardBackend.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
public class SecurityConfig{
    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource){
        return new JdbcUserDetailsManager(dataSource);
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{


        httpSecurity.authorizeHttpRequests(request -> request
                .requestMatchers("/api/**")
                .hasRole("owner")).csrf(csrf -> csrf.disable()).httpBasic(Customizer.withDefaults());
        return httpSecurity.build();
    }
}
