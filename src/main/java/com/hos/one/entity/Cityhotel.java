package com.hos.one.entity;

public class Cityhotel {
    private Integer hotelid;

    private Integer cityid;

    private String cityname;

    public Cityhotel(Integer hotelid, Integer cityid, String cityname) {
        this.hotelid = hotelid;
        this.cityid = cityid;
        this.cityname = cityname;
    }

    public Cityhotel() {
        super();
    }

    public Integer getHotelid() {
        return hotelid;
    }

    public void setHotelid(Integer hotelid) {
        this.hotelid = hotelid;
    }

    public Integer getCityid() {
        return cityid;
    }

    public void setCityid(Integer cityid) {
        this.cityid = cityid;
    }

    public String getCityname() {
        return cityname;
    }

    public void setCityname(String cityname) {
        this.cityname = cityname == null ? null : cityname.trim();
    }
}