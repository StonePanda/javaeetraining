package com.hos.one.controller;

import com.alibaba.fastjson.JSON;
import com.hos.one.entity.Client;
import com.hos.one.service.Clientservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class Clientcontroller {

    @Autowired
    private Clientservice clientservice;

    @ResponseBody
    @PostMapping("/register")
    public String postregister(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Client clientregister =new Client();
        clientregister.setAccountpw(map.get("accountpw").toString());
        clientregister.setEmail(map.get("email").toString());
        clientservice.addclient(clientregister);
        String returnjson= JSON.toJSONString(clientregister);
        return returnjson;
    }

    public long getID(){
        long newTime = System.currentTimeMillis();
        return newTime;
    }
}
