$(function () {
    //if(window.sessionStorage.hasOwnProperty("email")==true){}
    document.getElementById('email').value=window.sessionStorage.getItem("email");
    //document.getElementById('pass').value="";
    console.log(window.sessionStorage.getItem("email"))
    console.log($("#email").val())
    $("#pass").value="";
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
        let email = $("#email").val();
        let pass = $("#pass").val();
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
                if(status=="fail"){
                    console.log(data)
                    setError("邮箱或密码错误！")
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
