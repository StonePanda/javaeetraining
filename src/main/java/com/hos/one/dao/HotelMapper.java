package com.hos.one.dao;

import com.hos.one.entity.Hotel;

import java.util.List;

public interface HotelMapper {
    int deleteByPrimaryKey(Integer hotelid);

    int insert(Hotel record);

    int insertSelective(Hotel record);

    //根据Id得到hotel
    Hotel selectByPrimaryKey(Integer hotelid);

    Hotel selectByPhone(String hotelphone);

    Hotel selectByName(String hotelname);

    int updateByPrimaryKeySelective(Hotel record);

    int updateByPrimaryKey(Hotel record);
}