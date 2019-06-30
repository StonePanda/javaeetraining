package com.hos.one.service;

import com.hos.one.entity.Hotel;

import java.util.List;

public interface Hotelservice {
    void addHotel(Hotel hotel);

    Hotel findHotelByPhone(String phone);

    Hotel findHotelByName(String name);

    List<Hotel> findHotelByKeyWord(String keyword);
}
