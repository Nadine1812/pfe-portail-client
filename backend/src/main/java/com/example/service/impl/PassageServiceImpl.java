package com.example.service.impl;

import com.example.model.Passage;
import com.example.repository.PassageRepository;
import com.example.service.PassageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;
import java.util.List;

@Service
public class PassageServiceImpl implements PassageService {

    @Autowired
    public PassageRepository passageRepository;

    @Override
    public List<Passage> getAllPassage() {
        return passageRepository.findAll();
    }


}
