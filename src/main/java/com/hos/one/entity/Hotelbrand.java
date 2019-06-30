package com.hos.one.entity;

public class Hotelbrand {
    private Integer hotelid;

    private Integer brandid;

    private String brandname;

    public Hotelbrand(Integer hotelid, Integer brandid, String brandname) {
        this.hotelid = hotelid;
        this.brandid = brandid;
        this.brandname = brandname;
    }

    public Hotelbrand() {
        super();
    }

    public Integer getHotelid() {
        return hotelid;
    }

    public void setHotelid(Integer hotelid) {
        this.hotelid = hotelid;
    }

    public Integer getBrandid() {
        return brandid;
    }

    public void setBrandid(Integer brandid) {
        this.brandid = brandid;
    }

    public String getBrandname() {
        return brandname;
    }

    public void setBrandname(String brandname) {
        this.brandname = brandname == null ? null : brandname.trim();
    }
}