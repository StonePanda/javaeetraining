$(function(){
	if(window.sessionStorage.hasOwnProperty("hotelinfo")==true){
		$('#PhoneOrLogin').append(window.sessionStorage.getItem("hotelinfo"))
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
		"phone":window.sessionStorage.getItem("hotelinfo")
	}
	$.ajax({
		url: "/hotel/allroomtype"
		type:"POST"
		dataType:"application/json"
		contentType:"application/json"
		data:JSON.stringify(obj)
		success: function(data){
			//如果是刚注册的，那么一个房型信息都没有
			if(data="null"){
				//do nothing
			}
			//数据库里面已经有的信息
			else{//data此时返回的是一个列表
				$.each(data,function(index,item){
					/*<div class="row form-group">
                <div class="col-lg-4 col-md-4 form-group">
                    <label for="roomtype1">房间类型</label>
                    <input type="text" class="form-control" id="roomtype1">
                </div>
                <div class="col-lg-4 col-md-4 form-group">                  
                    <label for="price1">今日定价(若有优惠，为优惠后价格)</label>
                    <input type="price" class="form-control" id="price1">
                </div>
                <div class="col-lg-4 col-md- form-group"> 
                  <label class="control-label templatemo-block">优惠设置</label>
                  <select class="form-control" id="discount1">
                    <option value="有优惠">有优惠</option>
                    <option value="无优惠">无优惠</option>
                  </select>
                </div>
              </div>*/
              		$('#roomtype').append(
              			$('<div>').attr('class','row form-group').append(
              				$('<div>').attr('class','col-lg-4 col-md-4 form-group').append(
              					$('<label>').attr('for','roomtype'+index).append("房间类型"),
              					$('<input>').attr('type','text').attr('class','form-control').attr('id','roomtype'+index).append(item.roomtype)),
              				$('<div>').attr('class','col-lg-4 col-md-4 form-group').append(
              					$('<label>').attr('for','price'+index).append('今日定价(若有优惠，为优惠后价格)'),
              					$('<input>').attr('type','price').attr('class','form-control').attr('id','price'+index).append(item.price)),
              				$('<div>').attr('class','col-lg-4 col-md- form-group').append(
              					$('<label>').attr('class','control-label templatemo-block').append('优惠设置'),
              					$('<select>').attr('class','form-control').attr('id','discount'+index).append(
              						$('<option>').attr('value','有优惠').append('有优惠'),
              						$('<option>').attr('value','无优惠').append('无优惠')
              						)
              					)
              				)
              			)
				})
			}
		}
	})
	//这个使为了得到基本信息
	//这只是数据库里面已经有的宾馆的显示方式
	$.ajax({
		url:"/hotel/baseinfo"
		type:"POST"
		contentType:"application/json"
		dataType:"application/json"
		data:JSON.stringify(obj)
		success:function(data){
			//返回的应该是hotel里表的信息,酒店品牌应该单独返回
			$('#basename').attr('value',data.hotelname)
			$('#basepositiontext').attr('value',data.positiontext)
			$('#basephone').attr('value',data.hotelphone)
			$('#baseoverview').attr('value',data.overview)
			$('#basepicurl').attr('src',data.photourl)
		}
	})
	$.ajax({
		url:"hotel/brandname"
		type:"POST"
		contentType:"application/json"
		dataType:"application/json"
		data:JSON.stringify(obj)
		success:function(data){
			$('#basebrand').attr('value',data)
		}
	})
}