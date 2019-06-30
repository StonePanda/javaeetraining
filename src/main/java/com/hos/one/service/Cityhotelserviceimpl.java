package com.hos.one.service;

import com.hos.one.dao.CityhotelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Cityhotelserviceimpl implements Cityhotelservice {
    @Autowired
    private CityhotelMapper cityhotelmapper;

    @Override
    public List<Integer> selectByCityName(String cityname){
        return cityhotelmapper.selectByCityName(cityname);
    }
}
