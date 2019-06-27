package com.hos.one.dao;

import com.hos.one.entity.Hotel;

public interface HotelMapper {
    int deleteByPrimaryKey(Integer hotelid);

    int insert(Hotel record);

    int insertSelective(Hotel record);

    Hotel selectByPrimaryKey(Integer hotelid);

    Hotel selectByPhone(String phone);

    Hotel selectByName(String name);

    int updateByPrimaryKeySelective(Hotel record);

    int updateByPrimaryKey(Hotel record);
}