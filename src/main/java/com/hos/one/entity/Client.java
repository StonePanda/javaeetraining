package com.hos.one.entity;

public class Client {
    private Integer clientid;

    private String phone;

    private String accountpw;

    private String email;

    public Client(Integer clientid, String phone, String accountpw, String email) {
        this.clientid = clientid;
        this.phone = phone;
        this.accountpw = accountpw;
        this.email = email;
    }

    public Client() {
        super();
    }

    public Integer getClientid() {
        return clientid;
    }

    public void setClientid(Integer clientid) {
        this.clientid = clientid;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getAccountpw() {
        return accountpw;
    }

    public void setAccountpw(String accountpw) {
        this.accountpw = accountpw == null ? null : accountpw.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }
}