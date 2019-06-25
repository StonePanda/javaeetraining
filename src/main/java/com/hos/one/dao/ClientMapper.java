package com.hos.one.dao;

import com.hos.one.entity.Client;

public interface ClientMapper {
    int deleteByPrimaryKey(Integer clientid);

    int insert(Client record);

    int insertSelective(Client record);

    Client selectByPrimaryKey(Integer clientid);

    int updateByPrimaryKeySelective(Client record);

    int updateByPrimaryKey(Client record);
}