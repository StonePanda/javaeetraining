package com.hos.one.service;

import com.hos.one.entity.Hotel;

public interface Hotelservice {
    void addHotel(Hotel hotel);

    Hotel findHotelByPhone(String phone);

    Hotel findHotelByName(String name);
}
