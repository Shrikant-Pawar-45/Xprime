package com.codewithshrikant.Appbackend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")

public class Hellocontroller {

    @GetMapping("/hello")
    public String hello() {
        return "✅ Hello from Spring Boot!";
    }
}

    

