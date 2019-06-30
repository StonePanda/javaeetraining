package com.hos.one.dao;

import com.hos.one.entity.Cityhotel;

import java.util.List;

public interface CityhotelMapper {
    int deleteByPrimaryKey(Integer hotelid);

    int insert(Cityhotel record);

    int insertSelective(Cityhotel record);

    Cityhotel selectByPrimaryKey(Integer hotelid);

    //根据城市名查找hotelid
    List<Integer> selectByCityName(String cityname);

    int updateByPrimaryKeySelective(Cityhotel record);

    int updateByPrimaryKey(Cityhotel record);
}