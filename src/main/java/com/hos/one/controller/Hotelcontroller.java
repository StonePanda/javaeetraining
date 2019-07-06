package com.hos.one.controller;

import com.alibaba.fastjson.JSON;
import com.hos.one.entity.Hotel;
import com.hos.one.entity.Hotelman;
import com.hos.one.entity.Order;
import com.hos.one.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/hotel")
public class Hotelcontroller {
    @Autowired
    private Hotelservice hotelservice;
    @Autowired
    private Hotelmanservice hotelmanservice;
    @Autowired
    private Orderservice orderservice;
    @Autowired
    private Clientservice clientservice;
    @Autowired
    private Roomtypeservice roomtypeservice;
    @Autowired
    private Hotelbrandservice hotelbrandservice;
    @ResponseBody
    @PostMapping("/login")
    public String postLogin(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Hotelman hotellogin=hotelmanservice.findHotelManByPhone(map.get("phone").toString());
        if (hotellogin.getHotelpw().equals(map.get("password").toString())){
            //return JSON.toJSONString("success");
            //返回从hotelman里取出的除了hotelid的其他数据
            Hotelman returnhotelman=hotelmanservice.findHotelManByPhone(map.get("phone").toString());
            returnhotelman.setHotelpw("null");
            return JSON.toJSONString(returnhotelman);
        }
        else{
            return JSON.toJSONString("fail");
        }
    }
    @ResponseBody
    @PostMapping("/register")
    public String postregister(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Hotelman hotelregister =new Hotelman();
        Hotel hoteladd=new Hotel();
        //酒店名和酒店电话都是唯一的！！！
        if(hotelmanservice.findHotelManByPhone(map.get("phone").toString())!= null
                && hotelservice.findHotelByPhone(map.get("phone").toString())!=null){
            return JSON.toJSONString("fail");
        }//准确来说两个都可以，因为两张表是同步的
        hotelregister.setHotelname(map.get("name").toString());
        hotelregister.setHotelphone(map.get("phone").toString());
        hotelregister.setHotelpw(map.get("password").toString());
        hoteladd.setHotelname(map.get("name").toString());
        hoteladd.setHotelphone(map.get("phone").toString());
        hotelservice.addHotel(hoteladd);
        hotelmanservice.addHotelMan(hotelregister);
        return JSON.toJSONString("success");
    }
    @ResponseBody
    @PostMapping("/orderdone")
    public String postorderdone(@RequestBody Map<String,String> map){
        //返回状态为2的订单，需要的信息：
        /*$('<td>').append(item.commentcontent),//用户电话
        $('<td>').append(new Date(parseInt(item.timestart+"000")).getFullYear()+'-'+(new Date(parseInt(item.timestart+"000")).getMonth()+1)+'-'+new Date(parseInt(item.timestart+"000")).getDate()),
        $('<td>').append(new Date(parseInt(item.timeend+"000")).getFullYear()+'-'+(new Date(parseInt(item.timeend+"000")).getMonth()+1)+'-'+new Date(parseInt(item.timeend+"000")).getDate()),
        $('<td>').append(item.roomtype),
       $('<td>').append(item.roomnum),//房间数目
        $('<td>').append(item.price)*/
        List<Order> neworder=orderservice.selectAllDoneOrderByHotelid(Integer.parseInt(map.get("hotelid")));
        for(int i=0;i<neworder.size();i++){
            neworder.get(i).setCommentcontent(clientservice.findClientById(neworder.get(i).getClientid()).getPhone());
        }
        return JSON.toJSONString(neworder);
    }
    @ResponseBody
    @PostMapping("/ordertodo")
    public String postordertodo(@RequestBody Map<String,String> map){
        //返回状态为2的订单，需要的信息：
        /*$('<td>').append(item.commentcontent),//用户电话
        $('<td>').append(new Date(parseInt(item.timestart+"000")).getFullYear()+'-'+(new Date(parseInt(item.timestart+"000")).getMonth()+1)+'-'+new Date(parseInt(item.timestart+"000")).getDate()),
        $('<td>').append(new Date(parseInt(item.timeend+"000")).getFullYear()+'-'+(new Date(parseInt(item.timeend+"000")).getMonth()+1)+'-'+new Date(parseInt(item.timeend+"000")).getDate()),
        $('<td>').append(item.roomtype),
       $('<td>').append(item.roomnum),//房间数目
        $('<td>').append(item.price)*/
        List<Order> neworder=orderservice.selectAllTodoOrderByHotelid(Integer.parseInt(map.get("hotelid")));
        for(int i=0;i<neworder.size();i++){
            neworder.get(i).setCommentcontent(clientservice.findClientById(neworder.get(i).getClientid()).getPhone());
        }
        return JSON.toJSONString(neworder);
    }
    @ResponseBody
    @PostMapping("/orderdoing")
    public String postorderdoing(@RequestBody Map<String,String> map){
        //返回状态为2的订单，需要的信息：
        /*$('<td>').append(item.commentcontent),//用户电话
        $('<td>').append(new Date(parseInt(item.timestart+"000")).getFullYear()+'-'+(new Date(parseInt(item.timestart+"000")).getMonth()+1)+'-'+new Date(parseInt(item.timestart+"000")).getDate()),
        $('<td>').append(new Date(parseInt(item.timeend+"000")).getFullYear()+'-'+(new Date(parseInt(item.timeend+"000")).getMonth()+1)+'-'+new Date(parseInt(item.timeend+"000")).getDate()),
        $('<td>').append(item.roomtype),
       $('<td>').append(item.roomnum),//房间数目
        $('<td>').append(item.price)*/
        List<Order> neworder=orderservice.selectAllDoingOrderByHotelid(Integer.parseInt(map.get("hotelid")));
        for(int i=0;i<neworder.size();i++){
            neworder.get(i).setCommentcontent(clientservice.findClientById(neworder.get(i).getClientid()).getPhone());
        }
        System.out.println(JSON.toJSONString(neworder));
        return JSON.toJSONString(neworder);
    }
    @ResponseBody
    @PostMapping("/allroomtype")
    public String postAllRoomType(@RequestBody Map<String,String> map){
        //房间类型，价格，和是否有优惠都要返回
        return JSON.toJSONString(roomtypeservice.selectAllRoomTypeByHotelid(Integer.parseInt(map.get("hotelid"))));
    }
    @ResponseBody
    @PostMapping("/baseinfo")
    public String postBaseInfo(@RequestBody Map<String,String> map){
        return JSON.toJSONString(hotelservice.findHotelByPrimaryKey(Integer.parseInt(map.get("hotelid"))));
    }
    @ResponseBody
    @PostMapping("/brandname")
    public String postBrandname(@RequestBody Map<String,String> map){
        return JSON.toJSONString(hotelbrandservice.findBrandnameByHotelid(Integer.parseInt(map.get("hotelid"))));
    }
}
