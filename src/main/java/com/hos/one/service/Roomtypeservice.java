package com.hos.one.service;

import com.hos.one.entity.Roomtype;

import java.util.List;

public interface Roomtypeservice {
    List<Roomtype> findRoomtypeByHotelid(Integer hotelid);

    void setNewNum(Integer hotelid,String roomtype,Integer minusnum);

    void setAddNum(Integer hotelid,String roomtype,Integer addnum);

    int getAvgPriceByHotelid(Integer hotelid);

    int getDiscountByHotelid(Integer hotelid);

    List<Integer> findHasDiscountHotel();

    List<Roomtype> selectAllRoomTypeByHotelid(int hotelid);

    void updateRoomtypeByPrimaryKey(Roomtype record);
}
