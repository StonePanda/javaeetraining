package com.hos.one.dao;

import com.hos.one.entity.Order;

import java.util.List;

public interface OrderMapper {
    int deleteByPrimaryKey(Integer orderid);

    int insert(Order record);

    int insertSelective(Order record);

    Order selectByPrimaryKey(Integer orderid);

    List<Integer> selectTwoCommentClientByHotelid(Integer hotelid);

    List<Order> selectTwoHasCtOrderByHotelid(Integer hotelid);

    List<Order> selectHasCtOrderByHotelid(Integer hotelid);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);
}