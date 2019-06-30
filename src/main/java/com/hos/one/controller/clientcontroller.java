package com.hos.one.controller;

import com.alibaba.fastjson.JSON;
import com.hos.one.entity.Client;
import com.hos.one.service.Clientservice;
import com.hos.one.service.Hotelservice;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/user")
public class Clientcontroller {

    @Autowired
    private Clientservice clientservice;

    @Autowired
    private Hotelservice hotelservice;

    @ResponseBody
    @PostMapping("/login")
    public String postLogin(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Client clientlogin=clientservice.findClientByEmail(map.get("email").toString());
        if (clientlogin.getAccountpw().equals(map.get("password").toString())){
            return JSON.toJSONString("success");
        }
        else{
            //System.out.println(clientlogin.getAccountpw()==map.get("password").toString());
            //System.out.println(clientlogin.getAccountpw()=="55");
            //System.out.println("55"==map.get("password").toString());
            //全都忘光的JAVA语法！！！！字符串用==比较是比较的内存地址
            //字符串比较应该用A.equals(B)
            return JSON.toJSONString("fail");
        }
    }

    @ResponseBody
    @PostMapping("/register")
    public String postregister(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Client clientregister =new Client();
        //email和phone都要求是唯一的！！所以要加判断！！
        if(clientservice.findClientByEmail(map.get("email").toString())!= null
                && clientservice.findClientByPhone(map.get("phone").toString())!=null){
            return JSON.toJSONString("fail");
        }
        clientregister.setAccountpw(map.get("accountpw").toString());
        clientregister.setEmail(map.get("email").toString());
        clientregister.setPhone(map.get("phone").toString());
        clientservice.addclient(clientregister);
        return JSON.toJSONString("success");
    }

    @ResponseBody
    @PostMapping("/search")
    public String postSearch(@RequestBody Map<String,Object> map) {//不要用void,不然前端会报4040错误
        //System.out.println(JSON.toJSONString(hotelservice.findHotelByKeyWord("同福客栈")));
        System.out.println(map.get("keyword").toString());
        return JSON.toJSONString(hotelservice.findHotelByKeyWord(map.get("keyword").toString()));//map.get("keyword").toString())
    }
}

