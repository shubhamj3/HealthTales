package com.java.HealthTalesAi.restController;


import com.java.HealthTalesAi.model.Patience;
import com.java.HealthTalesAi.model.PatienceCredentials;
import com.java.HealthTalesAi.service.PatienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class PatienceController {

    @Autowired
    private PatienceService service;

    @GetMapping("/hello")
    public String sample(){
       return "Hello";
    }

    @PostMapping("/save")
    public String savePatience(@RequestBody Patience patience){
        System.out.println("Controller"+patience);
        service.savePatience(patience);
        return "Data Saved Successfully";
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody PatienceCredentials patienceCredentials){
        System.out.println("From front end" + patienceCredentials);
        String s = service.loginPatience(patienceCredentials);
        return new ResponseEntity<>(s, HttpStatus.OK);
    }

    @GetMapping("/getSummarizedDataAdvisoryBot/{email}")
    public ResponseEntity<?> getSummarizedDataOfUser(@PathVariable String email){
        return new ResponseEntity<>(service.getUserSummarizedData(email),HttpStatus.OK);
    }
//
//    @GetMapping("/getSummarizedDataBuddyBot")
//    public ResponseEntity<?> getSummarizedDataOfUser1(){
//        return new ResponseEntity<>(service.getUserSummarizedData(),HttpStatus.OK);
//    }

}
