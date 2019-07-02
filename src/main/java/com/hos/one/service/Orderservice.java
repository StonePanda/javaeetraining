package com.hos.one.service;

import com.hos.one.entity.Order;

import java.util.List;

public interface Orderservice {
    void addOrder(Order neworder);
/**/
    List<Integer> findTwoCommentByHotelid(int hotelid);

    List<Order> findTwoOrderByHotelid(int hotelid);
}
