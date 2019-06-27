package com.hos.one.controller;

import com.alibaba.fastjson.JSON;
import com.hos.one.entity.Client;
import com.hos.one.entity.Hotel;
import com.hos.one.service.Clientservice;
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

    @ResponseBody
    @PostMapping("/login")
    public String postLogin(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Hotel hotellogin=hotelservice.findHotelByPhone(map.get("phone").toString());
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
        Hotel hotelregister =new Hotel();
        //酒店名和酒店电话都是唯一的！！！
        if(hotelservice.findHotelByName(map.get("name").toString())!= null
                && hotelservice.findHotelByPhone(map.get("phone").toString())!=null){
            return JSON.toJSONString("fail");
        }
        hotelregister.setHotelname(map.get("name").toString());
        hotelregister.setHotelphone(map.get("phone").toString());
        hotelregister.setHotelpw(map.get("password").toString());
        hotelservice.addHotel(hotelregister);
        return JSON.toJSONString("success");
    }
}
