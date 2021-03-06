package com.hos.one.service;

import com.hos.one.dao.OrderMapper;
import com.hos.one.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
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

    @Override
    public List<Order> findHasCommentOrder(){return ordermapper.selectHasCommentOrder();}

    @Override
    public void updateOrderStatus(int timenow){
        ordermapper.updateOrderStatusDone(timenow);//这个将所有的订单结束时间>今天是已完成
        ordermapper.updateOrderStatusTodo(timenow);
        ordermapper.updateOrderStatusDoing(timenow);
    }
    @Override
    public List<Order> selectAllOrderByClientid(int clientid){
        Date nowdate=new Date();//获取当前时间
        String timestamp = String.valueOf(nowdate.getTime()/1000);
        int timenow=Integer.valueOf(timestamp);
        ordermapper.updateOrderStatusDone(timenow);
        ordermapper.updateOrderStatusTodo(timenow);
        ordermapper.updateOrderStatusDoing(timenow);
        return ordermapper.selectAllOrderByClientid(clientid);
    }
    @Override
    public List<Order> selectAllDoneOrderByHotelid(int hotelid){
        //用10位时间戳
        Date nowdate=new Date();//获取当前时间
        String timestamp = String.valueOf(nowdate.getTime()/1000);
        int timenow=Integer.valueOf(timestamp);
        ordermapper.updateOrderStatusDone(timenow);
        ordermapper.updateOrderStatusTodo(timenow);
        ordermapper.updateOrderStatusDoing(timenow);
        return ordermapper.selectAllDoneOrderByHotelid(hotelid);
    }
    @Override
    public List<Order> selectAllTodoOrderByHotelid(int hotelid){
        //用10位时间戳
        Date nowdate=new Date();//获取当前时间
        String timestamp = String.valueOf(nowdate.getTime()/1000);
        int timenow=Integer.valueOf(timestamp);
        ordermapper.updateOrderStatusDone(timenow);
        ordermapper.updateOrderStatusTodo(timenow);
        ordermapper.updateOrderStatusDoing(timenow);
        return ordermapper.selectAllTodoOrderByHotelid(hotelid);
    }
    @Override
    public List<Order> selectAllDoingOrderByHotelid(int hotelid){
        //用10位时间戳
        Date nowdate=new Date();//获取当前时间
        String timestamp = String.valueOf(nowdate.getTime()/1000);
        int timenow=Integer.valueOf(timestamp);
        ordermapper.updateOrderStatusDone(timenow);
        ordermapper.updateOrderStatusTodo(timenow);
        ordermapper.updateOrderStatusDoing(timenow);
        return ordermapper.selectAllDoingOrderByHotelid(hotelid);
    }
    @Override
    public Order selectOrderByPrimaryKey(int orderid){
        return ordermapper.selectByPrimaryKey(orderid);
    }
    @Override
    public void updateOrderByOrderidSelectice(Order order){
        ordermapper.updateByPrimaryKeySelective(order);
    }
    @Override
    public void deleteOrderByOrderid(Integer orderid){
        ordermapper.deleteByPrimaryKey(orderid);
    }
}
