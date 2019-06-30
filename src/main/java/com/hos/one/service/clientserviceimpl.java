package com.hos.one.service;

import com.hos.one.dao.ClientMapper;
import com.hos.one.entity.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Clientserviceimpl implements Clientservice{

    @Autowired//不能使用autowired？
    private ClientMapper clientmapper;

    //用户注册
    @Override
    public void addclient(Client client){
        clientmapper.insertSelective(client);
    }

    //用户注册时查看邮箱是否被注册过
    @Override
    public Client findClientByEmail(String email){return clientmapper.selectByEmail(email);}

    //用户注册时查看邮箱是否被登陆过
    @Override
    public Client findClientByPhone(String phone){return clientmapper.selectByPhone(phone);}
}
