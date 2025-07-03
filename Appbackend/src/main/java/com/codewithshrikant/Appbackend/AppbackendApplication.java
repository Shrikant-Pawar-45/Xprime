package com.codewithshrikant.Appbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class AppbackendApplication {
	
	@GetMapping("/api/hello")
	public String hello(){
		return "Hello From Spring boot";
	}
	public static void main(String[] args) {
		SpringApplication.run(AppbackendApplication.class, args);
	}

}
