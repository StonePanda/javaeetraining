$(function () {
    if(window.sessionStorage.hasOwnProperty("phone")==true){
        document.getElementById('phone').value=window.sessionStorage.getItem("phone");
    }
    
    //document.getElementById('pass').value="";
    $("#phone, #pass").focus(restore);
    $("#phone").blur(checkPhone);
    $("#pass").blur(checkPass);
    $("#submit").click(checkAll);
});

//check whether phone is empty
function checkPhone() {

    let flag = true;

    if($("#phone").val() === ""){
        flag = false;
        setError("请输入酒店电话！");
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

    if(!(checkPhone() && checkPass())){
        return false;
    } else {
        let phone = $("#phone").val();//js中的let
        let pass = $("#pass").val();
        var obj= {
                "phone": phone,
                "password": pass
            }
        $.ajax({//后端重写
            url: "/hotel/login",
            dataType: "json",
            async: true,
            type: "post",
            contentType: "application/json",//传过去的值的类型
            data: JSON.stringify(obj),
            success: function (data) {
                var status=data
                if(status=="密码错误！请重新输入！"){
                    console.log(status)
                    setError("密码错误！请重新输入！")
                } 
                else if(status=="无此用户，请先注册！"){
                    console.log(status)
                    setError("无此用户，请先注册！")
                }
                else {//这个时候返回的酒店的所有信息,返回的是success
                    console.log(status)
                    window.sessionStorage.setItem("hotelphone",data.hotelphone)
                    window.sessionStorage.setItem("hotelid",data.hotelid)
                    window.sessionStorage.setItem("hotelname",data.hotelname)
                    window.location.href = "/index-admin";
                }
            }
        });
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
