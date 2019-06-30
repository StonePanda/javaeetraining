package com.hos.one.service;

import com.hos.one.dao.HotelMapper;
import com.hos.one.entity.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Hotelserviceimpl implements Hotelservice{

    @Autowired
    private HotelMapper hotelmapper;

    @Override
    public void addHotel(Hotel hotel){hotelmapper.insertSelective(hotel);}

    @Override
    public Hotel findHotelByPhone(String phone){return hotelmapper.selectByPhone(phone);}

    @Override
    public Hotel findHotelByName(String name){return hotelmapper.selectByName(name);}

    @Override
    public List<Hotel> findHotelByKeyWord(String keyword){
        String sqlkeyword='%'+keyword+'%';
        System.out.println(hotelmapper.selectByKeyWord(keyword));
        return hotelmapper.selectByKeyWord(sqlkeyword);}
}
