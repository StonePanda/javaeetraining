package com.hos.one.service;

import com.hos.one.dao.RoomtypeMapper;
import com.hos.one.entity.Roomtype;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Roomtypeserviceimpl implements Roomtypeservice{
    @Autowired
    private RoomtypeMapper roomtypemapper;

    @Override
    public List<Roomtype> findRoomtypeByHotelid(Integer hotelid){
        return roomtypemapper.selectByHotelId(hotelid);
    }

    @Override
    public void setNewNum(Integer hotelid,String roomtype,Integer minusnum){
        roomtypemapper.updateByOrder(hotelid,roomtype,minusnum);
    }
}