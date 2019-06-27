$(function () {
    document.getElementById('phone').value=window.sessionStorage.getItem("phone");
    //document.getElementById('pass').value="";
    console.log(window.sessionStorage.getItem("phone"))
    console.log($("#phone").val())
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
        //ajax submit
        let phone = $("#phone").val();
        let pass = $("#pass").val();
        var obj= {
                "phone": phone,
                "password": pass
            }
        $.ajax({
            url: "/hotel/login",
            dataType: "json",
            async: true,
            type: "post",
            contentType: "application/json",//传过去的值的类型
            data: JSON.stringify(obj),
            success: function (data) {
                var status=data
                if(status=="success"){
                    console.log(status)
                    //window.location.href = "/index";
                } else {
                    console.log(status)
                    setError("酒店电话或密码错误！")
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
