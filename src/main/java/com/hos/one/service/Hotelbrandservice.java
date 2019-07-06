package com.hos.one.service;

import java.util.List;

public interface Hotelbrandservice {
    List<Integer> findHotelByBrand(int brandid);

    List<Integer> findHotelByBrandName(String brandname);

    String findBrandnameByHotelid(int hotelid);
}
