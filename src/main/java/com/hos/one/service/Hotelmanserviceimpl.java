package com.hos.one.service;

import com.hos.one.dao.HotelmanMapper;
import com.hos.one.entity.Hotelman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Hotelmanserviceimpl implements Hotelmanservice{
    @Autowired
    private HotelmanMapper hotelmanmapper;

    @Override
    public Hotelman findHotelManByPhone(String phone){
        return hotelmanmapper.selectByPhone(phone);
    }

    @Override
    public void addHotelMan(Hotelman hotelman){
        hotelmanmapper.insertSelective(hotelman);
    }
}
