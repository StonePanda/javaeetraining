package com.hos.one.controller;

import com.alibaba.fastjson.JSON;
import com.hos.one.entity.Client;
import com.hos.one.entity.Hotel;
import com.hos.one.entity.Order;
import com.hos.one.service.*;
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
    @Autowired
    private Orderservice orderservice;
    @Autowired
    private Roomtypeservice roomtypeservice;
    //用户登录
    @ResponseBody
    @PostMapping("/login")
    public String postLogin(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Client clientlogin=clientservice.findClientByEmail(map.get("email").toString());
        if (clientlogin.getAccountpw().equals(map.get("password").toString())){
            clientlogin.setAccountpw("null");//为了设置密码不可显示
            return JSON.toJSONString(clientlogin);
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
    public String postCitySearch(@RequestBody Map<String,Object> map) {//不要用void,不然前端会报4040错误//先根据城市名查找list的hotelid
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
    public String postBrandSearch(@RequestBody Map<String,Object> map) {//不要用void,不然前端会报4040错误//先根据品牌id查找list的hotelid
        List<Integer> hotelidlist=hotelbrandservice.findHotelByBrand(Integer.parseInt(map.get("brand").toString()));
        List<Hotel> hotellist=new ArrayList<>();
        for (int i = 0; i < hotelidlist.size(); i++) {
            hotellist.add(hotelservice.findHotelByPrimaryKey(hotelidlist.get(i)));
        }
        return JSON.toJSONString(hotellist);
    }
    //查找最受好评的六个酒店
    @ResponseBody
    @PostMapping("popular")
    public String postPopular(@RequestBody Map<String,Object> map){
        //获取到的格式是四川省成都市这样的格式，需要得到省与市之间的东西
        int shengpos=map.get("IPCity").toString().indexOf("省");
        int shipos=map.get("IPCity").toString().indexOf("市");
        String ipcity=map.get("IPCity").toString().substring(shengpos+1,shipos);
        //因为是首页显示，所以得到用户IP所在的位置推荐即可
        List<Integer> hotelidlist=cityhotelservice.selectByCityName(ipcity);//用户IP所在的城市

        //先获取hotelidlist，然后获取其中getstars最大的六个
        List<Hotel> hotellist=new ArrayList<>();
        for (int i = 0; i < hotelidlist.size(); i++) {
            hotellist.add(hotelservice.findHotelByPrimaryKey(hotelidlist.get(i)));
        }
        //将hotellist找到
        List<Hotel> returnhotellist=new ArrayList<>();
        //先从五星的找
        for(int i=0;i<hotellist.size();i++) {
            if (hotellist.get(i).getGetstars() == 5) {
                if(returnhotellist.size()>=6)
                    break;
                returnhotellist.add(hotellist.get(i));
            }
        }
        //再从四星的找
        for(int i=0;i<hotellist.size();i++) {
            if (hotellist.get(i).getGetstars() == 4) {
                if(returnhotellist.size()>=6)
                    break;
                returnhotellist.add(hotellist.get(i));
            }
        }
        //如果没有就不找了，不能获取三星
        return JSON.toJSONString(returnhotellist);
    }
    //根据用户email，返回id和电话信息
    @ResponseBody
    @PostMapping("bookhotel")
    public  String postBookHotel(@RequestBody Map<String,Object> map){
        /*var obj={
			"clientid":window.sessionStorage.getItem("id"),
			"hotelid":getParams("hotelid"),
			"roomtype":$('#roomtype').value,
			"timestart":Math.round(new Date($('#datepicker2').value)).getTime()/1000).toString(),
			"timeend":Math.round(new Date($('#datepicker2').value)).getTime()/1000).toString(),
			"status":status
		}*/
        Order neworder=new Order();
        neworder.setClientid(Integer.parseInt(map.get("clientid").toString()));
        neworder.setHotelid(Integer.parseInt(map.get("hotelid").toString()));
        neworder.setRoomtype(map.get("roomtype").toString());
        neworder.setTimeend(Integer.parseInt(map.get("timeend").toString()));
        neworder.setTimestart(Integer.parseInt(map.get("timestart").toString()));
        neworder.setStatus(Integer.parseInt(map.get("status").toString()));
        orderservice.addOrder(neworder);
        roomtypeservice.setNewNum(Integer.parseInt(map.get("hotelid").toString()),map.get("roomtype").toString(),Integer.parseInt(map.get("num").toString()));
        return JSON.toJSONString("success");
    }
    @ResponseBody
    @PostMapping("hoteldetails")
    public String postHotelDetails(@RequestBody Map<String,Object> map){
        /*	var obj={
		"hotelid":hotelid
	        }*/
        return JSON.toJSONString(hotelservice.findHotelByPrimaryKey(Integer.parseInt(map.get("hotelid").toString())));
    }
    @ResponseBody
    @PostMapping("roomtype")
    public String postRoomType(@RequestBody Map<String,Object> map){
        /*	var obj={
		"hotelid":hotelid
	}*/
        return JSON.toJSONString(roomtypeservice.findRoomtypeByHotelid(Integer.parseInt(map.get("hotelid").toString())));
    }
    @ResponseBody
    @PostMapping("ctclientemail")
    public String postCtClientEmail(@RequestBody Map<String,String> map){
        List<Integer> twoctemial=orderservice.findTwoCommentByHotelid(Integer.parseInt(map.get("hotelid")));
        List<String> returneamil=new ArrayList(2);
        for(int i=0;i<2;i++){
            returneamil.add(clientservice.findClientById(twoctemial.get(i)).getEmail());
        }
        return JSON.toJSONString(returneamil);
    }
    @ResponseBody
    @PostMapping("commenttwo")
    public String postCommenttwo(@RequestBody Map<String,String> map){
        return JSON.toJSONString(orderservice.findTwoOrderByHotelid(Integer.parseInt(map.get("hotelid"))));
    }
}

