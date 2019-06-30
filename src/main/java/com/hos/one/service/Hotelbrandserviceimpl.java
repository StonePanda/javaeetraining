package com.hos.one.service;

import com.hos.one.dao.HotelbrandMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Hotelbrandserviceimpl implements Hotelbrandservice{
    @Autowired
    private HotelbrandMapper hotelbrandmapper;

    @Override
    public List<Integer> findHotelByBrand(int brandid){
        return hotelbrandmapper.selectByBrandId(brandid);
    }
}
