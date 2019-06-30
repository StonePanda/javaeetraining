package com.hos.one.entity;

public class Hotelman {
    private Integer hotelid;

    private String hotelphone;

    private String hotelpw;

    private String hotelname;

    public Hotelman(Integer hotelid, String hotelphone, String hotelpw, String hotelname) {
        this.hotelid = hotelid;
        this.hotelphone = hotelphone;
        this.hotelpw = hotelpw;
        this.hotelname = hotelname;
    }

    public Hotelman() {
        super();
    }

    public Integer getHotelid() {
        return hotelid;
    }

    public void setHotelid(Integer hotelid) {
        this.hotelid = hotelid;
    }

    public String getHotelphone() {
        return hotelphone;
    }

    public void setHotelphone(String hotelphone) {
        this.hotelphone = hotelphone == null ? null : hotelphone.trim();
    }

    public String getHotelpw() {
        return hotelpw;
    }

    public void setHotelpw(String hotelpw) {
        this.hotelpw = hotelpw == null ? null : hotelpw.trim();
    }

    public String getHotelname() {
        return hotelname;
    }

    public void setHotelname(String hotelname) {
        this.hotelname = hotelname == null ? null : hotelname.trim();
    }
}