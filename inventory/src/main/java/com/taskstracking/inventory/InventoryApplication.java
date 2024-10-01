package com.taskstracking.inventory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;





@SpringBootApplication
@EnableWebMvc
@EnableAutoConfiguration(exclude = {SecurityAutoConfiguration.class,LiquibaseAutoConfiguration.class})




public class InventoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryApplication.class, args);
		System.out.println("Hello world");
	}

}
