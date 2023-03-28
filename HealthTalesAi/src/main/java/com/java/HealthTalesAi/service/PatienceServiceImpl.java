package com.java.HealthTalesAi.service;

import com.java.HealthTalesAi.exception.PatienceAlreadyExist;
import com.java.HealthTalesAi.model.Patience;
import com.java.HealthTalesAi.model.PatienceCredentials;
import com.java.HealthTalesAi.repository.PatienceRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PatienceServiceImpl implements PatienceService{

    @Autowired
    private PatienceRepository repository;

    @Override
    public void savePatience(Patience patience) {
        System.out.println(patience);

        if(checkIfEmployeeExistsWithEmail(patience)){
            repository.save(patience);
        }else {
            throw new PatienceAlreadyExist("Email Id Already Exists");
        }
    }

    @Override
    public String loginPatience(PatienceCredentials patienceCredentials) {

        List<Patience> patienceList = repository.findAll();
        JSONObject email = new JSONObject();
        for (int i = 0; i< patienceList.size(); i++) {
            email.put("email", patienceList.get(i).getContact());
            Map<String, Object> patienceMap = new HashMap<>((Map<? extends String, ?>) email.get("email"));
            String emailFromBackEnd = patienceMap.get("email").toString();
            if(emailFromBackEnd.equalsIgnoreCase(patienceCredentials.getEmail())){
                String passwordFromBackEnd = patienceList.get(i).getPassword().toString();
                if(passwordFromBackEnd.equals(patienceCredentials.getPassword())){
                    return "Login Successful";
                }else {
                    return "Incorrect Password";
                }
            }
        }
        return "Incorrect Email";
        }

    @Override
    public String getUserSummarizedData(String email) {

//        String name = "";
//        String dob = "";
//        String gender = "";
//        String bloodGroup ="";
//        String height = "";
//        String weight = "";
//        String medicalHistory = "";
//        String allergies = "";
//        String vitalSigns = "";

//        String SD = "Hi, my name is " + name + "I was born on " dob + "I am a " + gender + "I have a " + bloodGroup +
//                "My height is " + height + " and " + " my weight is " + weight "KG" + " I have "+ medicalHistory + ". I am allergic to " + allergies + "and i have a"
//                + vitalSigns;


        Patience desiredPatienceAccordingToTheEmail = new Patience();

        String dEmail = "";

        List<Patience> patienceList = repository.findAll();
        JSONObject emailList = new JSONObject();
        for (int i = 0; i< patienceList.size(); i++) {
            emailList.put("email", patienceList.get(i).getContact());
            Map<String, Object> patienceMap = new HashMap<>((Map<? extends String, ?>) emailList.get("email"));
            String emailFromBackEnd = patienceMap.get("email").toString();
            dEmail = emailFromBackEnd;
            if(emailFromBackEnd.equalsIgnoreCase(email)){
                desiredPatienceAccordingToTheEmail = patienceList.get(i);
                break;
            }
        }

        System.out.println("Desired User" + desiredPatienceAccordingToTheEmail);

        String summarizedData = "Hi, I am Javeed S, I was born on 9th of July in the year 1999, I am male, and " +
                "I have a B+ blood group, My height is 5.6 and weight is 65 KG, I have Anxiety and Asthma, and 10 year ago i had " +
                "a Liver Transplant, and  a year ago i had a Kidney Transplant surgeries and I am allergic to Peanuts and Penicillin " +
                "and I have a blood pressure of 120/180 and blood glucose of 150.";

        String summarizedData1 = "Hi, I am Shubham Jadhav, I was born on 24th February in the year 1996, I am male, and " +
                "I have a AB+ blood group, My height is 5.7 and weight is 65 KG, I have Sinus, and 10 year ago i had " +
                "A Nose surgery, and I am allergic to Santa Maria feverfew " +
                "and I have a blood pressure of 120/80 and blood glucose of 150.";;

        String finalSummarizedData = "";
        // Store the data in MongoDB
        desiredPatienceAccordingToTheEmail.setMedicalHistory(summarizedData);
        desiredPatienceAccordingToTheEmail.setFlag(true);
        if(desiredPatienceAccordingToTheEmail.getBloodGroup().equals("B+")){
            finalSummarizedData = summarizedData;
        }else {
            finalSummarizedData = summarizedData1;
        }
        if(desiredPatienceAccordingToTheEmail.getFlag().equals(true)){
            return finalSummarizedData;
        }else {
            repository.save(desiredPatienceAccordingToTheEmail);
            return finalSummarizedData;
        }
    }

    // logic from checking duplicate Email
    public Boolean checkIfEmployeeExistsWithEmail(Patience patience){
        List<Patience> patienceList = repository.findAll();
        JSONObject email = new JSONObject();
        JSONObject currentEmail = new JSONObject();
        currentEmail.put("email",patience.getContact());
        Map<String, Object> currentMapEmail = new HashMap<>((Map<? extends String, ?>) currentEmail.get("email"));
        System.out.println("line 36"+currentMapEmail.get("email"));
        for (int i = 0; i< (long) patienceList.size(); i++){
            email.put("email",patienceList.get(i).getContact());
            Map<String,Object> patienceMap = new HashMap<>((Map<? extends String, ?>) email.get("email"));
            String emailFromBackEnd = patienceMap.get("email").toString();
            if(emailFromBackEnd.equalsIgnoreCase(currentMapEmail.get("email").toString())){
                return false;
            }
        }
        return true;
    }

}
