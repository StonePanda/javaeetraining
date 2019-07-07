$(function(){
	if(window.sessionStorage.hasOwnProperty("hotelphone")==true){
		$('#PhoneOrLogin').append(window.sessionStorage.getItem("hotelphone"))
		$('#PhoneOrLogin').attr('href','/index-admin')
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
	//先根据hotelphone查看各种房型以及基本信息
	var obj={
		"hotelid":window.sessionStorage.getItem("hotelid")
	}
	$.ajax({
		url: "/hotel/allroomtype",
		type:"POST",
		dataType:"json",
		async: true,
		contentType:"application/json",
		data:JSON.stringify(obj),
		success: function(data){
			console.log(data)
			//如果是刚注册的，那么一个房型信息都没有
			if(data=="null"){//do nothing
			}
			//数据库里面已经有的信息
			else {//data此时返回的是一个列表
				$.each(data,function(index,item){
                	if(item.discount=="1"){//原来有优惠
                		$('#roomtype').append(
              			$('<div>').attr('class','row form-group').append(
              				$('<div>').attr('class','col-lg-3 col-md-3 form-group').append(
              					$('<label>').attr('for','roomtype'+index).append("房间类型"),
              					$('<div>').attr('type','text').attr('class','form-control').attr('id','roomtype'+index).attr('align','center').attr('style','border-color: transparent;box-shadow:none;').append(item.roomtype)
              					),
              				$('<div>').attr('class','col-lg-3 col-md-3 form-group').append(
              					$('<label>').attr('for','price'+index).append('今日定价|有优惠写优惠后价格'),
              					$('<input>').attr('type','price').attr('class','form-control').attr('id','price'+index).attr('value',item.price)
              					),
              				$('<div>').attr('class','col-lg-3 col-md-3 form-group').append(
              					$('<label>').append('剩余房间数量'),
              					$('<div>').attr('type','text').attr('class','form-control').attr('id','roomnum'+index).attr('align','center').attr('style','border-color: transparent;box-shadow:none;').append(item.num)
              					),
              				$('<div>').attr('class','col-lg-3 col-md-3 form-group').append(
              					$('<label>').attr('class','control-label templatemo-block').append('优惠设置'),
              					$('<select>').attr('class','form-control').attr('id','discount'+index).append(
              						$('<option selected="selected">').attr('value','1').append('有优惠'),
              						$('<option>').attr('value','0').append('无优惠')
              						)//如何用js设置select的默认值
              					),
              				$('<div>').attr('class','form-group text-right').append(
              					$('<button>').attr('type','button').attr('class','templatemo-white-button').attr('onclick','updateRoomtype('+index+')').append('更新'))
              				)
              			)
                	}
                	else if(item.discount=="0"){//原来无优惠
                		$('#roomtype').append(
              			$('<div>').attr('class','row form-group').append(
              				$('<div>').attr('class','col-lg-3 col-md-3 form-group').append(
              					$('<label>').attr('for','roomtype'+index).append("房间类型"),
              					$('<div>').attr('type','text').attr('class','form-control').attr('id','roomtype'+index).attr('align','center').attr('style','border-color: transparent;box-shadow:none;').append(item.roomtype)
              					),
              				$('<div>').attr('class','col-lg-3 col-md-3 form-group').append(
              					$('<label>').attr('for','price'+index).append('今日定价|有优惠写优惠后价格'),
              					$('<input>').attr('type','price').attr('class','form-control').attr('id','price'+index).attr('value',item.price)
              					),
              				$('<div>').attr('class','col-lg-3 col-md-3 form-group').append(
              					$('<label>').append('剩余房间数量'),
              					$('<div>').attr('type','text').attr('class','form-control').attr('id','roomnum'+index).attr('align','center').attr('style','border-color: transparent;box-shadow:none;').append(item.num)
              					),
              				$('<div>').attr('class','col-lg-3 col-md-3 form-group').append(
              					$('<label>').attr('class','control-label templatemo-block').append('优惠设置'),
              					$('<select>').attr('class','form-control').attr('id','discount'+index).append(
              						$('<option>').attr('value','1').append('有优惠'),
              						$('<option selected ="selected">').attr('value','0').append('无优惠')
              						)//如何用js设置select的默认值
              					),
              				$('<div>').attr('class','form-group text-right').append(
              					$('<button>').attr('type','button').attr('class','templatemo-white-button').attr('onclick','updateRoomtype('+index+')').append('更新'))
              				)
              			)
                	}
              		
                })
				}
			},
		error: function(data) {
    	}
	})
	//这个使为了得到基本信息
	//这只是数据库里面已经有的宾馆的显示方式
	$.ajax({
		url:"/hotel/baseinfo",
		type:"POST",
		dataType:"json",
		async: true,
		contentType:"application/json",
		data:JSON.stringify(obj),

		success:function(data){
			//返回的应该是hotel里表的信息,酒店品牌应该单独返回
			$('#basename').attr('value',data.hotelname)
			$('#basepositiontext').attr('value',data.positiontext)
			$('#basephone').attr('value',data.hotelphone)
			$('#baseoverview').append(data.overview)
			$('#basepicurl').attr('src',data.photourl)
		}
	})
	$.ajax({
		url:"hotel/brandname",
		type:"POST",
		dataType:"json",
		async: true,//不加这个竟然会post不成功？？
		contentType:"application/json",
		data:JSON.stringify(obj),
		success:function(data){
			if(data=="null"){
				//do nothing
			}
			else{
				$('#basebrand').attr('value',data)
			}
			
		}
	})
}

updateRoomtype=function(data){
	var obj={
		"hotelid":window.sessionStorage.getItem("hotelid"),
		"roomtype":$('#roomtype'+data).text(),
		"price":$('#price'+data).val(),
		"discount":$('#discount'+data+' option:selected').val()
	}
	console.log(JSON.stringify(obj))
	$.ajax({
		url:"/hotel/updateroomtype",
		async:true,
		dataType:"json",
		contentType:"application/json",
		type:"POST",
		data:JSON.stringify(obj),
		success:function(data){
			alert(data)
		}
	})
}