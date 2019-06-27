var time = 3;
$(function () {

    $("#phone, #email, #pass, #pass-ag").focus(restore);
    $("#email").blur(checkEmail);
    $("#phone").blur(checkPhone);
    $("#pass").blur(checkPass);
    $("#pass-ag").blur(checkPassAg);
    $("#submit").click(checkAll);

});

function checkPhone() {
    var phone = $("#phone").val();
    var flag = true;

    if(phone === ""){
        setError("请输入电话！");
        flag = false;
    }
    return flag;
}

function checkEmail() {
    var flag = true;
    var email = $("#email").val();

    if(email === ""){
        setError("请输入邮箱！");
        flag = false;
    } else if (!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
        setError("请输入合法邮箱！");
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
    if(!(checkPhone() && checkPass() && checkEmail() && checkPassAg())){
        return false;
    } else {
        var phone = $("#phone").val();
        var email = $("#email").val();
        var pass = $("#pass").val();

        var obj={
                    "phone": phone,
                    "accountpw": pass,
                    "email": email
                }
        $.ajax({
            type: "POST",
            url: "/user/register",
            dataType: "json",//返回值类型
            contentType: "application/json",//传过去的值的类型
            //async: true,
            data: JSON.stringify(obj),
            success: function (data) {//这个表示post成功
               var status=data
               if(status=="success"){
               console.log(data)
               window.sessionStorage.setItem("email",email);
               window.location.href="/login";
               }
               else{
               	console.log(data)
               	setError("手机号或邮箱已被注册！")
               }
             }
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
        window.location.href = "/login";
    }
}