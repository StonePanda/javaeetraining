$(function () {
    if(window.sessionStorage.hasOwnProperty("email")==true){
        document.getElementById('email').value=window.sessionStorage.getItem("email");
        console.log(window.sessionStorage.getItem("email"))
        console.log($("#email").val())
    }
    $("#email, #pass").focus(restore);
    $("#email").blur(checkEmail);
    $("#pass").blur(checkPass);
    $("#submit").click(checkAll);
});

function checkEmail() {
    let flag;
    let email = $("#email").val();

    if(email === ""){
        setError("请输入邮箱！");
        flag = false;
    } else if (!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
        setError("请输入合法邮箱！");
        flag = false;
    } else {
        flag = true;
    }
    return flag;
}

//check whether pass is empty
function checkPass() {

    let flag = true;

    if($("#pass").val() === ""){
        flag = false;
        setError("请输入密码！");
    }
    return flag;
}

function checkAll() {
    if(!(checkEmail() && checkPass())){
        return false;
    } else {
        //ajax submit
        var email = $("#email").val();
        var pass = $("#pass").val();
        var obj= {
                "email": email,
                "password": pass
            }
        $.ajax({
            url: "/user/login",
            dataType: "json",
            contentType: "application/json",//传过去的值的类型
            async: true,
            type: "post",
            data: JSON.stringify(obj),
            success: function (data) {//这里仅仅是post成功
                //sessionStorage.user = JSON.stringify(data);
                //session存储账户名
                var status=data
                if(status=="输入密码错误！请重新输入密码！"){
                    console.log(data)
                    setError("密码错误！请重新输入！")
                }
                else if(status=="没有该用户！请先注册！"){
                    console.log(data)
                    setError("没有该用户！请先注册！")
                }
                else{
                    console.log(data)
                    window.sessionStorage.setItem("email",email)
                    window.sessionStorage.setItem("phone",data.phone)
                    window.sessionStorage.setItem("id",data.clientid)
                    window.location.href = "/index";
                    
                }
                
        }});
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
