package com.example.service.impl;

import com.example.model.Font_type;
import com.example.repository.FontTypeRepository;
import com.example.service.FontTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FontTypeServiceImpl implements FontTypeService {

    @Autowired
    public FontTypeRepository fontTypeRepository;

    @Override
    public List<Font_type>  getAllTypeFont() {
        return fontTypeRepository.findAll();
    }
}
