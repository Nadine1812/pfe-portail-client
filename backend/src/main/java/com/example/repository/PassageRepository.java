package com.example.repository;

import com.example.model.Passage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.ZonedDateTime;
import java.util.List;

@Repository
public interface PassageRepository extends JpaRepository<Passage, Long> {


}
