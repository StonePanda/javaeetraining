package com.hos.one.dao;

import com.hos.one.entity.Roomtype;
import org.apache.ibatis.annotations.Param;

public interface RoomtypeMapper {
    int deleteByPrimaryKey(@Param("hotelid") Integer hotelid, @Param("roomtype") String roomtype);

    int insert(Roomtype record);

    int insertSelective(Roomtype record);

    Roomtype selectByPrimaryKey(@Param("hotelid") Integer hotelid, @Param("roomtype") String roomtype);

    int updateByPrimaryKeySelective(Roomtype record);

    int updateByPrimaryKey(Roomtype record);
}