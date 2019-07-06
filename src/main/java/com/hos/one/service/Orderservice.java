package com.hos.one.service;

import com.hos.one.entity.Order;

import java.util.List;

public interface Orderservice {
    void addOrder(Order neworder);
/**/
List<Integer> findTwoCommentClientByHotelid(int hotelid);

   List<Order> findTwoHasCtOrderByHotelid(int hotelid);

    List<Order> findHasCtOrderByHotelid(int hotelid);

    List<Order> findHasCommentOrder();

    List<Order> selectAllOrderByClientid(int clientid);

    void updateOrderStatus(int timenow);

    List<Order> selectAllDoneOrderByHotelid(int hotelid);

    List<Order> selectAllTodoOrderByHotelid(int hotelid);

    List<Order> selectAllDoingOrderByHotelid(int hotelid);

}
