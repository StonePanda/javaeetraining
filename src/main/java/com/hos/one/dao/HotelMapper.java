package com.hos.one.dao;

import com.hos.one.entity.Hotel;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface HotelMapper {
    int deleteByPrimaryKey(Integer hotelid);

    int insert(Hotel record);

    int insertSelective(Hotel record);

    Hotel selectByPrimaryKey(Integer hotelid);

    Hotel selectByPhone(String phone);

    Hotel selectByName(String name);

    List<Hotel> selectByKeyWord(@Param("keyword") String keyword);

    int updateByPrimaryKeySelective(Hotel record);

    int updateByPrimaryKey(Hotel record);
}