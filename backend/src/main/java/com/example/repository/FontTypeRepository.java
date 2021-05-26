package com.example.repository;

import com.example.model.Font_type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FontTypeRepository extends JpaRepository<Font_type, Long> {
}
