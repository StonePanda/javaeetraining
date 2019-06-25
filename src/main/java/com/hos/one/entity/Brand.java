package com.hos.one.entity;

public class Brand {
    private Integer brandid;

    private String brandname;

    private String brandpicurl;

    public Brand(Integer brandid, String brandname, String brandpicurl) {
        this.brandid = brandid;
        this.brandname = brandname;
        this.brandpicurl = brandpicurl;
    }

    public Brand() {
        super();
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

    public String getBrandpicurl() {
        return brandpicurl;
    }

    public void setBrandpicurl(String brandpicurl) {
        this.brandpicurl = brandpicurl == null ? null : brandpicurl.trim();
    }
}