$(function(){
	if(window.sessionStorage.hasOwnProperty("email")==true){
		$('#clientemail').text(window.sessionStorage.getItem("email"));
		$('#clientemail').attr('href','/clientdetail');
		$('#exitOrRegister').text('退出')
		$('#exitOrRegister').attr('href','/about')
	}
	else{
		$('#clientemail').text("登录");
		$('#clientemail').attr('href','/login');
		$('#exitOrRegister').text('注册')
		$('#exitOrRegister').attr('href','/register')
	}
	var _script = document.createElement('script');
    _script.type = "text/javascript";
    _key = "ow8uqXF6pIh8PgH06CGieoAzbc0kv7Bo";//百度地图可以申请到
    _script.src = "http://api.map.baidu.com/location/ip?ak="+_key+"&coor=bd09ll&ip=&callback=initpopular";//拼接URL
    document.head.appendChild(_script);
	//initpopular()
})

/* function 
 f(data){
                pointX = data.content.point.x;
                pointY = data.content.point.y;
                    document.getElementById("comefrom").innerHTML  = "你所在城市:"+data.content.address;
                    // document.getElementById("pointX").innerHTML  = "你城市经度:"+pointX;
                    // document.getElementById("pointY").innerHTML  = "你的城市纬度:"+pointY;
              }*/  //获取IP所在经纬度和城市

function
initpopular(data){
	var obj={
		"IPCity":data.content.address
	}
	console.log(data.content.address)
	$.ajax({
		url: "/user/popular",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            showPopular(data)
            console.log(data)
        },
        error: function(data) {
      		console.log(data)
    	}
	})
}

/*<div class="col-12 col-sm-6 col-md-6 col-lg-4">
				<div class="single-package">
					<div class="package-image">
						<a href="#"><img src="images/packages/1.jpg" alt=""></a>
					</div>
					<div class="package-content">
						<h3><a href="" title="">JuMei Hotel – <br>
						All Stunning Places</a></h3>
						<p>1 Day for only <span>$500</span>
						</p>
					</div>
					<div class="package-calto-action">
						<ul class="ct-action">
							<li><a href="#" class="travel-booking-btn hvr-shutter-out-horizontal">Book Now</a></li>
							<li>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
							</li>
						</ul>
					</div>
				</div>
</div>*/

function
showPopular(data){
  var hotellist = data;
  $('#popularhotels').html('')
  $.each(hotellist, function (index, item) {
    $('#popularhotels').append(
    	$('<div>').attr('class','col-12 col-sm-6 col-md-6 col-lg-4').append(//.attr('height','300px').attr('width','400px')
    		$('<div>').attr('class','single-package').append(
    			$('<div>').attr('class','package-image').append($('<a>').attr('href','#').append($('<img>').attr('src',item.photourl).attr('alt',item.hotelname))),
    			$('<div>').attr('class','package-content').append(
    				$('<h4>').append($('<a>').attr('href','').attr('title','').append(item.hotelname).append('<br>')),
    				$('<p>').append(item.overview.substr(0,16)+'...')),
    			$('<div>').attr('class','package-calto-action').append(
    				$('<ul>').attr('class','ct-action').append(
    					$('<li>').append($('<a>').attr('href','#').attr('class','travel-booking-btn hvr-shutter-out-horizontal')
    					.append('现在预定')),
    					$('<li>').append(
    						$('<i>').attr('class','fa fa-star'),
    						$('<i>').attr('class','fa fa-star'),
    						$('<i>').attr('class','fa fa-star'),
    						$('<i>').attr('class','fa fa-star'),
    						$('<i>').attr('class','fa fa-star'))
      				)
      			)
 			)
    	)
  )})
}

function
jumpSearch(){
	var keyword=$('#keyword2').val();
	window.location.href='/search?city='+keyword;//
	return false//防止form自己的跳转
}

