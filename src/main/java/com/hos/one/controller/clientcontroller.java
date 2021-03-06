package com.hos.one.controller;

import com.alibaba.fastjson.JSON;
import com.hos.one.entity.Client;
import com.hos.one.entity.Hotel;
import com.hos.one.entity.Order;
import com.hos.one.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sun.java2d.pipe.OutlineTextRenderer;

import java.util.*;

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
        if(clientlogin==null){
            return JSON.toJSONString("没有该用户！请先注册！");
        }
        else if (clientlogin.getAccountpw().equals(map.get("password").toString())){
            clientlogin.setAccountpw("*****");//为了设置密码不可显示
            return JSON.toJSONString(clientlogin);
        }
        else{
            //全都忘光的JAVA语法！！！！字符串用==比较是比较的内存地址
            //字符串比较应该用A.equals(B)
            return JSON.toJSONString("输入密码错误！请重新输入密码！");
        }
    }
    //用户注册
    @ResponseBody
    @PostMapping("/register")
    public String postregister(@RequestBody Map<String,Object> map){//不要用void,不然前端会报4040错误
        Client clientregister =new Client();
        //email和phone都要求是唯一的！！所以要加判断！！
        if(clientservice.findClientByEmail(map.get("email").toString())!= null
                || clientservice.findClientByPhone(map.get("phone").toString())!=null){
            System.out.println(clientservice.findClientByPhone(map.get("phone").toString()).toString());
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
        neworder.setPrice(Double.parseDouble((map.get("price").toString())));
        neworder.setRoomnum(Integer.parseInt(map.get("num").toString()));
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
        System.out.println(map.get("hotelid"));
        System.out.println(orderservice.findTwoCommentClientByHotelid(23));
        System.out.println(orderservice.findTwoCommentClientByHotelid(Integer.parseInt(map.get("hotelid"))).toString());
        if(orderservice.findTwoCommentClientByHotelid(Integer.parseInt(map.get("hotelid")))==null){
            System.out.println(orderservice.findTwoCommentClientByHotelid(Integer.parseInt(map.get("hotelid"))));
            return JSON.toJSONString("null");
        }
        else{
            System.out.println("不是空");
            List<Integer> twoctemial=orderservice.findTwoCommentClientByHotelid(Integer.parseInt(map.get("hotelid")));
            //可能一个评论也没有
            List<String> returneamil=new ArrayList(2);
            for(int i=0;i< twoctemial.size();i++){
                returneamil.add(clientservice.findClientById(twoctemial.get(i)).getEmail());
            }
            return JSON.toJSONString(returneamil);
        }
    }
    @ResponseBody
    @PostMapping("commenttwo")
    public String postCommenttwo(@RequestBody Map<String,String> map){
        return JSON.toJSONString(orderservice.findTwoHasCtOrderByHotelid(Integer.parseInt(map.get("hotelid"))));
    }
    @ResponseBody
    @PostMapping("searchselect")
    public String postSelect(@RequestBody Map<String,String> map){
        /*    obj={
        "city":city
        "brand":brand
        "price":price
        "discount":discount
    }*/
        //City
        List<Integer> hotelidlist=cityhotelservice.selectByCityName(map.get("city"));
        System.out.println(JSON.toJSONString(hotelidlist));
        List<Hotel> hotellist=new ArrayList<>();
        List<Integer> hotelidbybrand=new ArrayList<>();
        //city里面选择品牌
        if(map.get("brand").equals("ALL")||map.get("brand").equals("品牌筛选")){
            //品牌没有筛选
        }
        else{
            System.out.println("品牌被筛选");
            hotelidbybrand=hotelbrandservice.findHotelByBrandName(map.get("brand"));
            //倒序删除不会出现大小变化问题
            for(int i=hotelidlist.size()-1;i>=0;i--){//i的初始化已经定了！！
                if(!hotelidbybrand.contains(hotelidlist.get(i))){
                    hotelidlist.remove(i);
                }
            }
            //品牌筛选完毕
        }
        //查看price,这个price是平均价格
        if(map.get("price").equals("ALL")||map.get("price").equals("价格筛选")){
            //价格不做筛选
        }
        else{
            System.out.println("价格筛选");
            switch (map.get("price")){
                case "0-200元/日"://<=200
                    for(int i=hotelidlist.size()-1;i>=0;i--){
                        if(roomtypeservice.getAvgPriceByHotelid(hotelidlist.get(i))>200){
                            hotelidlist.remove(i);
                        }
                    }
                    break;
                case "200-500元/日":
                    for(int i=hotelidlist.size()-1;i>=0;i--){
                        if(roomtypeservice.getAvgPriceByHotelid(hotelidlist.get(i))>500||
                                roomtypeservice.getAvgPriceByHotelid(hotelidlist.get(i))<=200){
                            hotelidlist.remove(i);
                        }
                    }
                    break;
                case ">500元/日":
                    for(int i=hotelidlist.size()-1;i>=0;i--){
                        if(roomtypeservice.getAvgPriceByHotelid(hotelidlist.get(i))<=500){
                            hotelidlist.remove(i);
                        }
                    }
                    break;
                default:
                    break;
            }
            //价格筛选完毕
        }
        //有无优惠筛选
        if(map.get("discount").equals("优惠筛选")||map.get("discount").equals("ALL")){
            //什么都不做
        }
        else{
            System.out.println("优惠筛选");
            if(map.get("discount").equals("有优惠")){
                for(int i=hotelidlist.size()-1;i>=0;i--){
                    if(roomtypeservice.getDiscountByHotelid(hotelidlist.get(i))==0){//==0是无优惠
                        hotelidlist.remove(i);
                    }
                }
            }
            else{//只要没有优惠的
                for(int i=hotelidlist.size()-1;i>=0;i--){
                    if(roomtypeservice.getDiscountByHotelid(hotelidlist.get(i))>0){//==0是无优惠
                        hotelidlist.remove(i);
                    }
                }
            }
        }
        for (int i=0;i<hotelidlist.size();i++){
            hotellist.add(hotelservice.findHotelByPrimaryKey(hotelidlist.get(i)));
        }
        System.out.println(JSON.toJSONString(hotelidlist));
        System.out.println(JSON.toJSONString(hotellist));
        return JSON.toJSONString(hotellist);
    }
    @ResponseBody
    @PostMapping("indexdiscount")
    public String postIndexDiscount(@RequestBody Map<String,String> map){
        //获取到的格式是四川省成都市这样的格式，需要得到省与市之间的东西
        int shengpos=map.get("IPCity").toString().indexOf("省");
        int shipos=map.get("IPCity").toString().indexOf("市");
        String ipcity=map.get("IPCity").toString().substring(shengpos+1,shipos);
        //因为是首页显示，所以得到用户IP所在的位置推荐即可
        List<Integer> hotelidlist=cityhotelservice.selectByCityName(ipcity);//用户IP所在的城市

        int minavgprice=roomtypeservice.getAvgPriceByHotelid(hotelidlist.get(0));
        int minavgid=1;
        //找到平均价格最小的那个
        for(int i=0;i<hotelidlist.size();i++){
            if(roomtypeservice.getAvgPriceByHotelid(hotelidlist.get(i))<minavgprice){
                minavgprice=roomtypeservice.getAvgPriceByHotelid(hotelidlist.get(i));
                minavgid=i;
            }
        }
        Hotel returnHotel=new Hotel();
        returnHotel.setHotelid(minavgid);
        returnHotel.setBrandid(minavgprice);
        returnHotel.setHotelname(hotelservice.findHotelByPrimaryKey(minavgid).getHotelname());
        return JSON.toJSONString(returnHotel);
    }
    @ResponseBody
    @PostMapping("indexcomment")
    public String postIndexComment(@RequestBody Map<String,String> map){
        //获取到的格式是四川省成都市这样的格式，需要得到省与市之间的东西
        int shengpos=map.get("IPCity").toString().indexOf("省");
        int shipos=map.get("IPCity").toString().indexOf("市");
        String ipcity=map.get("IPCity").toString().substring(shengpos+1,shipos);
        //因为是首页显示，所以得到用户IP所在的位置推荐即可
        List<Integer> hotelidlist=cityhotelservice.selectByCityName(ipcity);//用户IP所在的城市
        /*包括评论内容，用户名，酒店名，酒店id，评论星*/
        //已经得到id，找到四个评论，order的id越大说明这个评论越新,只要order id靠后就可以了
        //选出这些酒店的有评论的最后四个order
        List<Order> AllCtOrder=orderservice.findHasCommentOrder();
        List<Order> returnOrder=new ArrayList<>();
        //倒叙检查
        for(int i=AllCtOrder.size()-1;i>=0;i--){
            if(returnOrder.size()>=4){
                break;
            }
            else if(hotelidlist.contains(AllCtOrder.get(i).getHotelid())){
                if(returnOrder.size()>=4){
                    break;
                }
                else{
                    returnOrder.add(AllCtOrder.get(i));
                }
            }
        }
        /*包括评论内容，用户邮箱，酒店名，酒店id，评论星*/
        List<Hotel> returnTidai=new ArrayList<>();
        Hotel temTidaiHotel=new Hotel();
        for(int i=0;i<returnOrder.size();i++){
            temTidaiHotel=new Hotel();
            temTidaiHotel.setHotelid(returnOrder.get(i).getHotelid());
            temTidaiHotel.setHotelname(hotelservice.findHotelByPrimaryKey(returnOrder.get(i).getHotelid()).getHotelname());
            temTidaiHotel.setHotelphone(clientservice.findClientById(returnOrder.get(i).getClientid()).getEmail());
            temTidaiHotel.setOverview(returnOrder.get(i).getCommentcontent());
            temTidaiHotel.setGetstars(returnOrder.get(i).getCommentstar());
            returnTidai.add(temTidaiHotel);
        }
        return JSON.toJSONString(returnTidai);
    }
    @ResponseBody
    @GetMapping("footerhotel")
    public String getFooterHotel(){
        //什么都没有，只要返回有优惠的三个hotel就行了
        List<Integer> hasDtHotelid=roomtypeservice.findHasDiscountHotel();
        List<Hotel> returnHotel=new ArrayList<>();
        Hotel temHotel=new Hotel();
        /*酒店id，酒店名字，酒店图片的url,酒店优惠后的平均价格，还是要用一下替代的方法*/
        for(int i=hasDtHotelid.size()-1;i>hasDtHotelid.size()-4;i--){
            temHotel=new Hotel();
            temHotel.setHotelid(hasDtHotelid.get(i));
            temHotel.setHotelname(hotelservice.findHotelByPrimaryKey(hasDtHotelid.get(i)).getHotelname());
            temHotel.setPhotourl(hotelservice.findHotelByPrimaryKey(hasDtHotelid.get(i)).getPhotourl());
            temHotel.setBrandid(roomtypeservice.getAvgPriceByHotelid(hasDtHotelid.get(i)));
            returnHotel.add(temHotel);
        }
        return JSON.toJSONString(returnHotel);
    }
    @ResponseBody
    @PostMapping("allorder")
    public String postAllOrder(@RequestBody Map<String,String> map){
        /*	var obj={
		"clientid":window.sessionStorage.getItem("id")
	    }*/
        //根据用户id找出和这个用户相关的所有order
        List<Order> commentorder=orderservice.selectAllOrderByClientid(Integer.parseInt(map.get("clientid")));
        for(int i=0;i<commentorder.size();i++){
            commentorder.get(i).setCommentcontent(hotelservice.findHotelByPrimaryKey(commentorder.get(i).getHotelid()).getHotelname());
        }
        return JSON.toJSONString(commentorder);
    }
    @ResponseBody
    @PostMapping("modifyinfo")
    public String postModiftInfo(@RequestBody Map<String,String> map){
        /*var obj={
		"id":window.sessionStorage.getItem("id"),
		"phone":$('#xiugaiphone').val(),
		"email":$('#xiugaiemail').val(),
		"password":$('#nowpw').val()
	}*/
        if(clientservice.findClientById(Integer.parseInt(map.get("id"))).getAccountpw().equals(map.get("password"))){
            //密码相同
            //检查手机号和邮箱有没有被注册过
            if(clientservice.findClientByPhone(map.get("phone"))==null&&clientservice.findClientByEmail(map.get("email"))==null){
                //都没有被注册过
                //执行更新操作
                Client updateClient=new Client();
                updateClient.setClientid(Integer.parseInt(map.get("id")));
                updateClient.setPhone(map.get("phone"));
                updateClient.setEmail(map.get("email"));
                updateClient.setAccountpw(map.get("password"));
                clientservice.updateClient(updateClient);
                return JSON.toJSONString("success");
            }
            else{
                return JSON.toJSONString("手机号或邮箱已被注册！");
            }
        }
        else{
            return JSON.toJSONString("当前密码不对！");
        }
    }
    @ResponseBody
    @PostMapping("updatepw")
    public String postUpdatePw(@RequestBody Map<String,String> map){
        /*	var obj={
		"id":window.sessionStorage.getItem("id"),
		"nowpw":$('#mfnpw').val()
		"newpw":$('#newpw').val()
	}*/
        if(clientservice.findClientById(Integer.parseInt(map.get("id"))).getAccountpw().equals(map.get("nowpw"))){
            //当前密码正确
            Client newclient=new Client();
            newclient.setClientid(Integer.parseInt(map.get("id")));
            newclient.setAccountpw(map.get("newpw"));
            clientservice.updateCtPassword(newclient);
            return JSON.toJSONString("success");
        }
        else{
            //当前密码不正确
            return JSON.toJSONString("当前密码不正确！");
        }
    }
    @ResponseBody
    @PostMapping("commentyemian")
    public String postCommentYeMian(@RequestBody Map<String,String> map){
        return JSON.toJSONString(hotelservice.findHotelByPrimaryKey(orderservice.selectOrderByPrimaryKey(Integer.parseInt(map.get("orderid"))).getHotelid()));
    }
    @ResponseBody
    @PostMapping("updatecomment")
    public String postUpdataComment(@RequestBody Map<String,String> map){
        Order newOrder=new Order();
        newOrder.setOrderid(Integer.parseInt(map.get("orderid")));
        newOrder.setCommentcontent(map.get("commentcontent"));
        newOrder.setCommentstar(Integer.parseInt(map.get("commentstar")));
        orderservice.updateOrderByOrderidSelectice(newOrder);
        return JSON.toJSONString("success");
    }
    @ResponseBody
    @PostMapping("tuiorder")
    public String postTuiOrder(@RequestBody Map<String,String> map){
        /*var obj={
        "orderid":order.orderid,
        "hotelid":order.hotelid,
        "roomtype":order.roomtype,
        "roomnum":order.roomnum
    }*/
        //先更新房型表
        roomtypeservice.setAddNum(Integer.parseInt(map.get("orderid")),map.get("roomtype"),Integer.parseInt(map.get("roomnum")));
        orderservice.deleteOrderByOrderid(Integer.parseInt(map.get("orderid")));
        return JSON.toJSONString("success");
    }
}

