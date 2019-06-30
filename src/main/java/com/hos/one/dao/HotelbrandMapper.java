package com.hos.one.dao;

import com.hos.one.entity.Hotelbrand;

import java.util.List;

public interface HotelbrandMapper {
    int deleteByPrimaryKey(Integer hotelid);

    int insert(Hotelbrand record);

    int insertSelective(Hotelbrand record);

    Hotelbrand selectByPrimaryKey(Integer hotelid);

    List<Integer> selectByBrandId(Integer brandid);

    int updateByPrimaryKeySelective(Hotelbrand record);

    int updateByPrimaryKey(Hotelbrand record);
}