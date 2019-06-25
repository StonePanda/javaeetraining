package com.hos.one.dao;

import com.hos.one.entity.Brand;

public interface BrandMapper {
    int deleteByPrimaryKey(Integer brandid);

    int insert(Brand record);

    int insertSelective(Brand record);

    Brand selectByPrimaryKey(Integer brandid);

    int updateByPrimaryKeySelective(Brand record);

    int updateByPrimaryKey(Brand record);
}