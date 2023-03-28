package com.java.HealthTalesAi.repository;


import com.java.HealthTalesAi.model.Patience;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatienceRepository extends MongoRepository<Patience,String> {

//    Boolean existsByEmail(String email);
//    Boolean existsByPassword(String password);
//    List<Patience> findByEmail(String email);

}
