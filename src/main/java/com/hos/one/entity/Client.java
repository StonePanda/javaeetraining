package com.hos.one.entity;

public class Client {
    private Integer clientid;

    private String accountname;

    private String accountpw;

    private String phonenumber;

    private String email;

    public Client(Integer clientid, String accountname, String accountpw, String phonenumber, String email) {
        this.clientid = clientid;
        this.accountname = accountname;
        this.accountpw = accountpw;
        this.phonenumber = phonenumber;
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

    public String getAccountname() {
        return accountname;
    }

    public void setAccountname(String accountname) {
        this.accountname = accountname == null ? null : accountname.trim();
    }

    public String getAccountpw() {
        return accountpw;
    }

    public void setAccountpw(String accountpw) {
        this.accountpw = accountpw == null ? null : accountpw.trim();
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber == null ? null : phonenumber.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }
}