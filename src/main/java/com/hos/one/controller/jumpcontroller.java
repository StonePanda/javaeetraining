package com.hos.one.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller //在这里不能用restcontroller
@RequestMapping("/")
public class Jumpcontroller {
    @RequestMapping("/login")
    public String getLogin(){
        return "login.html";
    }

    @RequestMapping("/register")
    public String getRegister(){return "register.html";}

    @RequestMapping("/login-admin")
    public String getLoginadmin(){return "login-admin.html";}

    @RequestMapping("register-admin")
    public String getRegisteradmin(){return "register-admin.html";}

    @RequestMapping("index")
    public String getIndex(){return "index.html";}

    @RequestMapping("")
    public String getShouIndex(){return "index.html";}

    @RequestMapping("about")
    public String getAbout(){return "about.html";}

    @RequestMapping("search")
    public String getSearch(){return "searchresult.html";}

    @RequestMapping("hoteldetails")
    public String getHotelDetails(){return "hoteldetails.html";}
}
