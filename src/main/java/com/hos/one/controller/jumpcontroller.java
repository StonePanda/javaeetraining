package com.hos.one.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller //在这里不能用restcontroller
@RequestMapping("/")
public class jumpcontroller {
    @RequestMapping("/login")
    public String getLogin(){
        return "login.html";
    }

    @RequestMapping("/register")
    public String getRegister(){return "register.html";}
}
