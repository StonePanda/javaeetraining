package com.hos.one.service;

import com.hos.one.dao.OrderMapper;
import com.hos.one.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Orderserviceimpl implements Orderservice{
    @Autowired
    private OrderMapper ordermapper;

    @Override
    public void addOrder(Order neworder){
        ordermapper.insertSelective(neworder);
    }

    @Override
    public List<Integer> findTwoCommentClientByHotelid(int hotelid){
        return ordermapper.selectTwoCommentClientByHotelid(hotelid);
    }

    @Override
    public List<Order> findTwoHasCtOrderByHotelid(int hotelid){
        return ordermapper.selectTwoHasCtOrderByHotelid(hotelid);
    }

    @Override
    public List<Order> findHasCtOrderByHotelid(int hotelid){
        return ordermapper.selectHasCtOrderByHotelid(hotelid);
    }
}
