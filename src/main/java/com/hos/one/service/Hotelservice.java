package com.hos.one.service;

import com.hos.one.entity.Hotel;

import java.util.List;

public interface Hotelservice {
    void addHotel(Hotel hotel);

    //根据hotelid寻找hotel

    Hotel findHotelByPrimaryKey(int hotelid);

    Hotel findHotelByPhone(String phone);

    Hotel findHotelByName(String name);
}
