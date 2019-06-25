package com.hos.one.entity;

public class Roomtype {
    private Integer hotelid;

    private String roomtype;

    private Integer num;

    private Double price;

    public Roomtype(Integer hotelid, String roomtype, Integer num, Double price) {
        this.hotelid = hotelid;
        this.roomtype = roomtype;
        this.num = num;
        this.price = price;
    }

    public Roomtype() {
        super();
    }

    public Integer getHotelid() {
        return hotelid;
    }

    public void setHotelid(Integer hotelid) {
        this.hotelid = hotelid;
    }

    public String getRoomtype() {
        return roomtype;
    }

    public void setRoomtype(String roomtype) {
        this.roomtype = roomtype == null ? null : roomtype.trim();
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}