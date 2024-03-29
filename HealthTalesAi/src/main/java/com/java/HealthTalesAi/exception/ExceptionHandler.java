package com.java.HealthTalesAi.exception;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice
public class ExceptionHandler {

    @org.springframework.web.bind.annotation.ExceptionHandler(PatienceAlreadyExist.class)
   public ResponseEntity<?> patienceAlreadyExistsException(PatienceAlreadyExist p){
        return new ResponseEntity<>(p.getMessage(), HttpStatus.CONFLICT);
   }
}
