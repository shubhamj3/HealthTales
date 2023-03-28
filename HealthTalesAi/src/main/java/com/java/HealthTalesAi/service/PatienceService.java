package com.java.HealthTalesAi.service;


import com.java.HealthTalesAi.model.Patience;
import com.java.HealthTalesAi.model.PatienceCredentials;

public interface PatienceService {

    void savePatience (Patience patience);
    String loginPatience(PatienceCredentials patienceCredentials);
    String getUserSummarizedData(String email);

}
