package com.hos.one.dao;

import com.hos.one.entity.Hotelcity;

public interface HotelcityMapper {
    int deleteByPrimaryKey(Integer cityid);

    int insert(Hotelcity record);

    int insertSelective(Hotelcity record);

    Hotelcity selectByPrimaryKey(Integer cityid);

    int updateByPrimaryKeySelective(Hotelcity record);

    int updateByPrimaryKey(Hotelcity record);
}