$(function{
	if(window.sessionStorage.hasOwnProperty("email")==true){//已经登录
        $('#clientemail').text(window.sessionStorage.getItem("email"));
        $('#clientemail').attr('href','/clientdetail');
        $('#exitOrRegister').text('退出')
        $('#exitOrRegister').attr('href','/about')
        $('#xiugaiemail').attr('value',window.sessionStorage.getItem("email"))
        $('#xiugaiphone').attr('value',window.sessionStorage.getItem("phone"))
        init()//初始化个人信息
    }
    else{
        $('#clientemail').text("登录");
        $('#clientemail').attr('href','/login');
        $('#exitOrRegister').text('注册')
        $('#exitOrRegister').attr('href','/register')
    }
    
})

function
init(){
	/*获取所有订单然后在前端显示，把用户id传过去就可*/
	var obj={
		"clientid":window.sessionStorage.getItem("id")
	}
	$.ajax({
		url: "/user/allorder",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            show(data)
        }
	})
}

function
show(data){
	var orderlist=data
	$.each(orderlist,function(index,item){
		if(item.status==0){//未完成
			/*<tr>
                                                                    <td>房型</td>
                                                                    <td>开始时间</td>
                                                                    <td>结束时间</td>
                                                                    <td>价格</td>
                                                                    <td><a href="cart.html" class="btn btn-sqr">查看</a>
                                                                    <a href="cart.html" class="btn btn-sqr">退单</a>
                                                                    </td>
                                                                </tr>*/
            $('#weiwancheng').append(
            	$('<tr>').append(
            		$('<td>').append(item.roomtype),
            		$('<td>').append(new Date(parseInt(item.timestart+"000")).getFullYear+"-"+(new Date(parseInt(item.timestart+"000")).getMonth()+1)+"-"+new Date(parseInt(item.timestart+"000")).getDate()),
            		$('<td>').append(new Date(parseInt(item.timeend+"000")).getFullYear+"-"+(new Date(parseInt(item.timeend+"000")).getMonth()+1)+"-"+new Date(parseInt(item.timeend+"000")).getDate()),
            		$('<td>').append(item.price),
            		$('<td>').append(
            			$('<a>').attr('href','/cart?orderid='+item.orderid).attr('class','btn btn-sqr').append('查看'),
            			$('<a>').attr('class','btn btn-sqr').append('退单'))
            		))
		}
		else if(item.status==1){//进行中
			/*<tr>
                                                                    <td>房型</td>
                                                                    <td>开始时间</td>
                                                                    <td>结束时间</td>
                                                                    <td>价格</td>
                                                                    <td><a href="cart.html" class="btn btn-sqr">查看</a>
                                                                    
                                                                    </td>
                                                                </tr>*/
            $('#jinxingzhong').append(
            	$('<tr>').append(
            		$('<td>').append(item.roomtype),
            		$('<td>').append(new Date(parseInt(item.timestart+"000")).getFullYear+"-"+(new Date(parseInt(item.timestart+"000")).getMonth()+1)+"-"+new Date(parseInt(item.timestart+"000")).getDate()),
            		$('<td>').append(new Date(parseInt(item.timeend+"000")).getFullYear+"-"+(new Date(parseInt(item.timeend+"000")).getMonth()+1)+"-"+new Date(parseInt(item.timeend+"000")).getDate()),
            		$('<td>').append(item.price),
            		$('<td>').append(
            			$('<a>').attr('href','/cart?orderid='+item.orderid).attr('class','btn btn-sqr').append('查看'))
            		))

		}
		else{
			/*<!--<tr>
                                                                    <td>房型</td>
                                                                    <td>Aug 22, 2018</td>
                                                                    <td>Pending</td>
                                                                    <td>$3000</td>
                                                                    <td><a href="cart.html" class="btn btn-sqr">查看</a>
                                                                    <a href="cart.html" class="btn btn-sqr">评论</a>
                                                                    </td>
                                                                </tr>*/
            if(item.commentcontent!=null){
            	//不能加评论按钮
            	$('#yiwancheng').append(
            	$('<tr>').append(
            		$('<td>').append(item.roomtype),
            		$('<td>').append(new Date(parseInt(item.timestart+"000")).getFullYear+"-"+(new Date(parseInt(item.timestart+"000")).getMonth()+1)+"-"+new Date(parseInt(item.timestart+"000")).getDate()),
            		$('<td>').append(new Date(parseInt(item.timeend+"000")).getFullYear+"-"+(new Date(parseInt(item.timeend+"000")).getMonth()+1)+"-"+new Date(parseInt(item.timeend+"000")).getDate()),
            		$('<td>').append(item.price),
            		$('<td>').append(
            			$('<a>').attr('href','/cart?orderid='+item.orderid).attr('class','btn btn-sqr').append('查看'),
            			$('<a>').attr('class','btn btn-sqr').attr('href','/comment?orderid='+item.orderid).append('评论'))
            		))
            }
            else{
            	$('#yiwancheng').append(
            	$('<tr>').append(
            		$('<td>').append(item.roomtype),
            		$('<td>').append(new Date(parseInt(item.timestart+"000")).getFullYear+"-"+(new Date(parseInt(item.timestart+"000")).getMonth()+1)+"-"+new Date(parseInt(item.timestart+"000")).getDate()),
            		$('<td>').append(new Date(parseInt(item.timeend+"000")).getFullYear+"-"+(new Date(parseInt(item.timeend+"000")).getMonth()+1)+"-"+new Date(parseInt(item.timeend+"000")).getDate()),
            		$('<td>').append(item.price),
            		$('<td>').append(
            			$('<a>').attr('href','/cart?orderid='+item.orderid).attr('class','btn btn-sqr').append('查看'))
            		))
            }
		}
	})
}

modifyInfo=function(){
	//传递id和，修改后的邮箱和手机号以及当前密码过去
	//判断当前密码是否正确，判断手机号和邮箱是否注册过
	var obj={
		"id":window.sessionStorage.getItem("id"),
		"phone":$('#xiugaiphone').val(),
		"email":$('#xiugaiemail').val(),
		"password":$('#nowpw').val()
	}
	$.ajax({
		url:"/user/modifyinfo",
		dataType:"application/json",
		contentType:"application/json",
		data:JSON.stringify(obj),
		type:"POST",
		success: function (data){
			if(data=="success"){
				alert("修改成功，请重新登录")
				window.location.href="/login"
			}
			else{
				console.log(data)
				alert(data)
			}
		}
	})
}

updatePw=function(){
	//先判断两次输入的新密码是否正确
	if($('#newpw').val()==$('#newpw2').val()){
		//do nothing
	}
	else{
		alert("两次输入的密码不一致")
	}
	//传递当前密码和
	var obj={
		"id":window.sessionStorage.getItem("id"),
		"nowpw":$('#mfnpw').val(),
		"newpw":$('#newpw').val()
	}
	$.ajax({
		url: "/user/updatepw",
		dataType:"application/json",
		contentType:"application/json",
		data:JSON.stringify(obj),
		type:"POST",
		success: function(data){
			if(data=="success"){
				alert("修改密码成功")
			}
			else{
				alert(data)
			}
		}
	})
}