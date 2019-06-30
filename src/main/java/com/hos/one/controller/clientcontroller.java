package com.hos.one.controller;

import com.alibaba.fastjson.JSON;
import com.hos.one.entity.Client;
import com.hos.one.entity.Hotel;
import com.hos.one.service.Cityhotelservice;
import com.hos.one.service.Clientservice;
import com.hos.one.service.Hotelbrandservice;
import com.hos.one.service.Hotelservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class Clientcontroller {
    @Autowired
    private Clientservice clientservice;
    @Autowired
    private Hotelservice hotelservice;
    @Autowired
    private Cityhotelservice cityhotelservice;
    @Autowired
    private Hotelbrandservice hotelbrandservice;
    //用户登录
    @ResponseBody
    @PostMapping("/login")
    public String postLogin(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Client clientlogin=clientservice.findClientByEmail(map.get("email").toString());
        if (clientlogin.getAccountpw().equals(map.get("password").toString())){
            return JSON.toJSONString("success");
        }
        else{
            //全都忘光的JAVA语法！！！！字符串用==比较是比较的内存地址
            //字符串比较应该用A.equals(B)
            return JSON.toJSONString("fail");
        }
    }
    //用户注册
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
    //根据城市名查找hotel
    @ResponseBody
    @PostMapping("/searchcity")
    public String postCitySearch(@RequestBody Map<String,Object> map) {//不要用void,不然前端会报4040错误
        //先根据城市名查找list的hotelid
        List<Integer> hotelidlist=cityhotelservice.selectByCityName(map.get("city").toString());
        List<Hotel> hotellist=new ArrayList<>();
        for (int i = 0; i < hotelidlist.size(); i++) {
            hotellist.add(hotelservice.findHotelByPrimaryKey(hotelidlist.get(i)));
        }
        return JSON.toJSONString(hotellist);
    }
    //根据品牌名查找hotel
    @ResponseBody
    @PostMapping("/searchbrand")
    public String postBrandSearch(@RequestBody Map<String,Object> map) {//不要用void,不然前端会报4040错误
        //先根据品牌id查找list的hotelid
        List<Integer> hotelidlist=hotelbrandservice.findHotelByBrand(Integer.parseInt(map.get("brand").toString()));
        List<Hotel> hotellist=new ArrayList<>();
        for (int i = 0; i < hotelidlist.size(); i++) {
            hotellist.add(hotelservice.findHotelByPrimaryKey(hotelidlist.get(i)));
        }
        return JSON.toJSONString(hotellist);
    }
}

