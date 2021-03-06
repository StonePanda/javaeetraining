package com.hos.one.dao;

import com.hos.one.entity.Roomtype;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RoomtypeMapper {
    int deleteByPrimaryKey(@Param("hotelid") Integer hotelid, @Param("roomtype") String roomtype);

    int insert(Roomtype record);

    int insertSelective(Roomtype record);

    Roomtype selectByPrimaryKey(@Param("hotelid") Integer hotelid, @Param("roomtype") String roomtype);

    int updateByOrder(@Param("hotelid") Integer hotelid,@Param("roomtype") String roomtype, @Param("minusnum") Integer minusnum);

    int updateByOrderTui(@Param("hotelid") Integer hotelid,@Param("roomtype") String roomtype, @Param("addnum") Integer addnum);

    List<Roomtype> selectByHotelId(Integer hotelid);

    List<Integer> selectHasDiscountHotel();

    List<Roomtype> selectAllRoomtypeByHotelid(int hotelid);

    int getAvgPriceByHotelid(Integer hotelid);

    int getDiscountByHotelid(Integer hotelid);

    int updateByPrimaryKeySelective(Roomtype record);

    int updateByPrimaryKey(Roomtype record);
}