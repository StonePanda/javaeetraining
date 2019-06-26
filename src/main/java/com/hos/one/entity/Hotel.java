package com.hos.one.entity;

public class Hotel {
    private Integer hotelid;

    private String hotelname;

    private String hotelphone;

    private String hotelpw;

    private String positiontext;

    private Double positionwei;

    private Double positionjing;

    private Integer brandid;

    private String overview;

    private String photourl;

    private Integer getstars;

    public Hotel(Integer hotelid, String hotelname, String hotelphone, String hotelpw, String positiontext, Double positionwei, Double positionjing, Integer brandid, String overview, String photourl, Integer getstars) {
        this.hotelid = hotelid;
        this.hotelname = hotelname;
        this.hotelphone = hotelphone;
        this.hotelpw = hotelpw;
        this.positiontext = positiontext;
        this.positionwei = positionwei;
        this.positionjing = positionjing;
        this.brandid = brandid;
        this.overview = overview;
        this.photourl = photourl;
        this.getstars = getstars;
    }

    public Hotel() {
        super();
    }

    public Integer getHotelid() {
        return hotelid;
    }

    public void setHotelid(Integer hotelid) {
        this.hotelid = hotelid;
    }

    public String getHotelname() {
        return hotelname;
    }

    public void setHotelname(String hotelname) {
        this.hotelname = hotelname == null ? null : hotelname.trim();
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

    public String getPositiontext() {
        return positiontext;
    }

    public void setPositiontext(String positiontext) {
        this.positiontext = positiontext == null ? null : positiontext.trim();
    }

    public Double getPositionwei() {
        return positionwei;
    }

    public void setPositionwei(Double positionwei) {
        this.positionwei = positionwei;
    }

    public Double getPositionjing() {
        return positionjing;
    }

    public void setPositionjing(Double positionjing) {
        this.positionjing = positionjing;
    }

    public Integer getBrandid() {
        return brandid;
    }

    public void setBrandid(Integer brandid) {
        this.brandid = brandid;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview == null ? null : overview.trim();
    }

    public String getPhotourl() {
        return photourl;
    }

    public void setPhotourl(String photourl) {
        this.photourl = photourl == null ? null : photourl.trim();
    }

    public Integer getGetstars() {
        return getstars;
    }

    public void setGetstars(Integer getstars) {
        this.getstars = getstars;
    }
}