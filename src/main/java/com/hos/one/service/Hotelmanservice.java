package com.hos.one.service;

import com.hos.one.entity.Hotelman;

public interface Hotelmanservice {
    Hotelman findHotelManByPhone(String phone);

    void addHotelMan(Hotelman hotelman);
}
