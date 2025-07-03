package com.codewithshrikant.Appbackend;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class Homecontroller {
        @GetMapping("/")
        public String home() {
                return "This is Home page";
        }

        @GetMapping("/api/hello")
        public String hello() {
                return "✅ Hello from Spring Boot!";
        }
}
