package com.yourpackage;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class RuleEngineController {

    @PostMapping("/evaluate")
    public boolean evaluateRule(@RequestBody UserAttributes attributes) {
        // Example rules - feel free to modify as per your needs
        return attributes.getAge() > 18 && attributes.getIncome() > 50000;
    }
}
