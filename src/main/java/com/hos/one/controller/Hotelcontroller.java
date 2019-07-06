package com.hos.one.controller;

import com.alibaba.fastjson.JSON;
import com.hos.one.entity.Client;
import com.hos.one.entity.Hotel;
import com.hos.one.entity.Hotelman;
import com.hos.one.service.Clientservice;
import com.hos.one.service.Hotelmanservice;
import com.hos.one.service.Hotelservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/hotel")
public class Hotelcontroller {
    @Autowired
    private Hotelservice hotelservice;
    @Autowired
    private Hotelmanservice hotelmanservice;
    @ResponseBody
    @PostMapping("/login")
    public String postLogin(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Hotelman hotellogin=hotelmanservice.findHotelManByPhone(map.get("phone").toString());
        if (hotellogin.getHotelpw().equals(map.get("password").toString())){
            return JSON.toJSONString("success");
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
}
