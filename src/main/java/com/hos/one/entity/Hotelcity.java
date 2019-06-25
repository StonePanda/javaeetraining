package com.hos.one.entity;

public class Hotelcity {
    private Integer cityid;

    private String cityname;

    private Integer hotelid;

    public Hotelcity(Integer cityid, String cityname, Integer hotelid) {
        this.cityid = cityid;
        this.cityname = cityname;
        this.hotelid = hotelid;
    }

    public Hotelcity() {
        super();
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

    public Integer getHotelid() {
        return hotelid;
    }

    public void setHotelid(Integer hotelid) {
        this.hotelid = hotelid;
    }
}