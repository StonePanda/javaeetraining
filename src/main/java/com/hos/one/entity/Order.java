package com.hos.one.entity;

public class Order {
    private Integer orderid;

    private Integer clientid;

    private Integer hotelid;

    private String roomtype;

    private Integer timestart;

    private Integer timeend;

    private Double price;

    private Integer status;

    private Integer commentstar;

    private String commentcontent;

    private Integer roomnum;

    public Order(Integer orderid, Integer clientid, Integer hotelid, String roomtype, Integer timestart, Integer timeend, Double price, Integer status, Integer commentstar, String commentcontent,Integer roomnum) {
        this.orderid = orderid;
        this.clientid = clientid;
        this.hotelid = hotelid;
        this.roomtype = roomtype;
        this.timestart = timestart;
        this.timeend = timeend;
        this.price = price;
        this.status = status;
        this.commentstar = commentstar;
        this.commentcontent = commentcontent;
        this.roomnum=roomnum;
    }

    public Order() {
        super();
    }

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    public Integer getClientid() {
        return clientid;
    }

    public void setClientid(Integer clientid) {
        this.clientid = clientid;
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

    public Integer getTimestart() {
        return timestart;
    }

    public void setTimestart(Integer timestart) {
        this.timestart = timestart;
    }

    public Integer getTimeend() {
        return timeend;
    }

    public void setTimeend(Integer timeend) {
        this.timeend = timeend;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getCommentstar() {
        return commentstar;
    }

    public void setCommentstar(Integer commentstar) {
        this.commentstar = commentstar;
    }

    public String getCommentcontent() {
        return commentcontent;
    }

    public void setCommentcontent(String commentcontent) {
        this.commentcontent = commentcontent == null ? null : commentcontent.trim();
    }

    public Integer getRoomnum(){return roomnum;}

    public void setRoomnum(Integer roomnum){this.roomnum=roomnum;}
}