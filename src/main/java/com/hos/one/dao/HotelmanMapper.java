package com.hos.one.dao;

import com.hos.one.entity.Hotelman;

public interface HotelmanMapper {
    int deleteByPrimaryKey(Integer hotelid);

    int insert(Hotelman record);

    int insertSelective(Hotelman record);

    Hotelman selectByPrimaryKey(Integer hotelid);

    Hotelman selectByPhone(String hotelphone);

    Hotelman selectByName(String hotelname);

    int updateByPrimaryKeySelective(Hotelman record);

    int updateByPrimaryKey(Hotelman record);
}