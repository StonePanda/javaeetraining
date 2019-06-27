package com.hos.one.service;
import com.hos.one.entity.Client;


public interface Clientservice {
    void addclient(Client client);

    Client findClientByEmail(String email);//根据邮箱找客户
    //根据电话找客户
    Client findClientByPhone(String email);
}
