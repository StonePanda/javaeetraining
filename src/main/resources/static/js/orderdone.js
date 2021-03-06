$(function(){
	if(window.sessionStorage.hasOwnProperty("hotelphone")==true){
		$('#PhoneOrLogin').append(window.sessionStorage.getItem("hotelphone"))
		$('#LogoutOrRegister').append("退出")
		$('#LogoutOrRegister').attr('href','/about')
		init()
	}
	else{
		$('#PhoneOrLogin').append("登录")
		$('#PhoneOrLogin').attr('href','/login-admin')
		$('#LogoutOrRegister').append("注册")
		$('#LogoutOrRegister').attr('href','register-amidn')
	}
})

function
init(){
	var obj={
		"hotelid":window.sessionStorage.getItem("hotelid")
	}
	$.ajax({
		url:"/hotel/orderdone",
		type:"POST",
		dataType:"json",
		contentType:"application/json",
		data:JSON.stringify(obj),
		async: true,
		success:function(data){//这个必须一次返回完毕
			//返回是orderlist的data
			/*<tr>//用户
                    <td>00</td>
                    <td>入住时间</td>
                    <td>离店时间</td>
                    <td>房间类型</td>
                    <td>房间数目</td>
                    <td>总价格</td>
                  </tr>*/
            $.each(data,function(index,item){//用替代发
            	$('#listdone').append(
            		$('<tr>').append(
            			$('<td>').append(item.commentcontent),
            			$('<td>').append(new Date(parseInt(item.timestart+"000")).getFullYear()+'-'+(new Date(parseInt(item.timestart+"000")).getMonth()+1)+'-'+new Date(parseInt(item.timestart+"000")).getDate()),
            			$('<td>').append(new Date(parseInt(item.timeend+"000")).getFullYear()+'-'+(new Date(parseInt(item.timeend+"000")).getMonth()+1)+'-'+new Date(parseInt(item.timeend+"000")).getDate()),
            			$('<td>').append(item.roomtype),
            			$('<td>').append(item.roomnum),
            			$('<td>').append(item.price)
            			))
            })
		}
	})
}