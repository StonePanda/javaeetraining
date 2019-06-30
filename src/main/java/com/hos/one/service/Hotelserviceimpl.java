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

    //酒店注册
    @Override
    public void addHotel(Hotel hotel){hotelmapper.insertSelective(hotel);}

    //酒店注册时看看电话是否被注册过
    @Override
    public Hotel findHotelByPhone(String phone){return hotelmapper.selectByPhone(phone);}

    //酒店注册时看看名字是否被注册过
    @Override
    public Hotel findHotelByName(String name){return hotelmapper.selectByName(name);}

    @Override
    public Hotel findHotelByPrimaryKey(int hotelid){
        return hotelmapper.selectByPrimaryKey(hotelid);
    }
}
