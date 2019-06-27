var time = 3;
$(function () {

    $("#name, #phone, #pass, #pass-ag").focus(restore);
    $("#phone").blur(checkPhone);
    $("#name").blur(checkName);
    $("#pass").blur(checkPass);
    $("#pass-ag").blur(checkPassAg);
    $("#submit").click(checkAll);

});

function checkName() {
    var name = $("#name").val();
    var flag = true;

    if(name === ""){
        setError("请输入酒店名！");
        flag = false;
    }else if(name.length < 4 && name.length > 10){
        setError("酒店名在4~10个字符长度！");
        flag = false;
    }
    return flag;
}

function checkPhone() {
    var flag = true;
    var phone = $("#phone").val();

    if(phone === ""){
        setError("请输入酒店电话！");
        flag = false;
    }
    return flag;
}

//check whether pass is empty
function checkPass() {

    var flag = true;

    if($("#pass").val() === ""){
        flag = false;
        setError("请输入密码！");
    }
    return flag;
}

function checkPassAg() {
    var flag = true;
    if ($("#pass").val() !== $("#pass-ag").val()){
        setError("两次输入的密码不一致！");
        flag = false;
    }
    return flag;
}

function checkAll() {
    if(!(checkName() && checkPass() && checkPhone() && checkPassAg())){
        return false;
    } else {
        var name = $("#name").val();
        var phone = $("#phone").val();
        var pass = $("#pass").val();

        var obj={
                    "name": name,
                    "password": pass,
                    "phone": phone
                }
        $.ajax({
            type: "POST",
            url: "/hotel/register",
            dataType: "json",//返回值类型
            contentType: "application/json",//传过去的值的类型
            data: JSON.stringify(obj),
            success: function (data) {
               if(data=="success"){
                window.sessionStorage.setItem("phone",phone)
                window.location.href="/login-admin"
                console.log(data)
               }
               else{
                console.log(data)
                setError("酒店电话或名字已被注册！")
               }
             },
            }
        );

    }
}
//clear error info
function restore() {
    $(".err").text("");
}

//set error info
function setError(info) {
    $(".err").text(info);
}

function okStyle() {
    $(".err").css({
        color: "#fff",
        background: "#89ee90"
    });
}

function regOk() {
    setTimeout(regOk, 1000);
    if (time > 0) {
        var info = "注册成功，" + time + "s后跳转登陆界面";
        setError(info);
        time--;
    } else {
        window.location.href = "login.html";
    }
}