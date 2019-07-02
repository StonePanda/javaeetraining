package com.hos.one.service;

import com.hos.one.dao.OrderMapper;
import com.hos.one.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Orderserviceimpl implements Orderservice{
    @Autowired
    private OrderMapper ordermapper;

    @Override
    public void addOrder(Order neworder){
        ordermapper.insertSelective(neworder);
    }
}
