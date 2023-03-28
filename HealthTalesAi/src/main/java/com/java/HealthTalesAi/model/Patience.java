package com.java.HealthTalesAi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Patience {

    @Id
    private String patienceId;
    private Object name;
    private Object dob;
    private Object gender;
    private Object bloodGroup;
    private Object height;
    private Object weight;
    private Object contact;
    private Object medicalHistory;
    private Object allergies;
    private Object vitalSigns;
    private Object password;
    private Object patienceSummarizedHistory;
    private Object flag;

}
