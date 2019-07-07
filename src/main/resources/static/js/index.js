$(function(){
	 var tomorrow = new Date();
     $('#discountendtime').attr('data-countdown',tomorrow.getFullYear()+'/'+(parseInt(tomorrow.getMonth())+1)+'/'+(parseInt(tomorrow.getDate())+1))
	if(window.sessionStorage.hasOwnProperty("email")==true){
		$('#clientemail').text(window.sessionStorage.getItem("email"));
		$('#clientemail').attr('href','/clientaccount');
		$('#exitOrRegister').text('退出')
		$('#exitOrRegister').attr('href','/about')
		$('#footeremail').attr('value',window.sessionStorage.getItem("email"))
	}
	else{
		$('#clientemail').text("登录");
		$('#clientemail').attr('href','/login');
		$('#exitOrRegister').text('注册')
		$('#exitOrRegister').attr('href','/register')
		$('#footeremail').attr('value','请先登录！')
	}
	var _script = document.createElement('script');
    _script.type = "text/javascript";
    _key = "ow8uqXF6pIh8PgH06CGieoAzbc0kv7Bo";//百度地图可以申请到
    _script.src = "http://api.map.baidu.com/location/ip?ak="+_key+"&coor=bd09ll&ip=&callback=initpopular";//拼接URL
    document.head.appendChild(_script);
})

function
initpopular(data){
	var obj={
		"IPCity":data.content.address
	}
	IPCity=data.content.address
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
	//然后还要获得最有优惠的
	console.log("最优惠的没有返回？")
	$.ajax({
		url: "/user/indexdiscount",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            console.log("最优惠的返回"+data)
            //返回名字，返回平均价格，时间就是明天的，模式是2019/7/5,返回一个新对象，用一个平均价格代替某一个int值
            $('#discounthotel').append(data.hotelname)
            $('#discountavgprice').append(data.brandid)//这个是代替
            $('#discounthotelurl').attr('href','/hoteldetails?hotelid='+data.hotelid)
        },
        error: function(data) {
      		console.log(data)
    	}
	})
	console.log("评论没有返回？")
	//和这个城市相关的宾馆的评论随机选四个
	$.ajax({
		url: "/user/indexcomment",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功,返回的应该是替代了的。包括评论内容，用户名，酒店名，酒店id，评论星
            console.log("四个评论返回"+JSON.stringify(data))
            console.log(data[0].getstars)
            console.log(data[2])
            console.log(data[1])
            console.log(data[3])
            //返回名字，返回平均价格，时间就是明天的，模式是2019/7/5,返回一个新对象，用一个平均价格代替某一个int值
            /* temTidaiHotel.setHotelid(returnOrder.get(i).getHotelid());
            temTidaiHotel.setHotelname(hotelservice.findHotelByPrimaryKey(returnOrder.get(i).getHotelid()).getHotelname());
            temTidaiHotel.setHotelphone(clientservice.findClientById(returnOrder.get(i).getClientid()).getEmail());
            temTidaiHotel.setOverview(returnOrder.get(i).getCommentcontent());
            temTidaiHotel.setGetstars(returnOrder.get(i).getCommentstar());*/
            $('#indexct1ct').append(data[0].overview)
            $('#indexct1cl').append(data[0].Hotelphone)
            $('#indexct1hn').append(data[0].hotelname)
            $('#indexct1hn').attr('href','/hoteldetails?hotelid='+data[0].hotelid)
            if(data[0].getstars=="5"){
            	$('#indexct1star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            else if(data[0].getstars=="4"){
            	$('#indexct1star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[0].getstars=="3"){
            	$('#indexct1star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[0].getstars=="2"){
            	$('#indexct1star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[0].getstars=="1"){
            	$('#indexct1star').append('<li><i class="fa fa-star"></i></li>')
            }
            $('#indexct2ct').append(data[1].overview)
            $('#indexct2cl').append(data[1].Hotelphone)
            $('#indexct2hn').append(data[1].hotelname)
            $('#indexct2hn').attr('href','/hoteldetails?hotelid='+data[1].hotelid)
            if(data[1].getstars=="5"){
            	$('#indexct2star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            else if(data[1].getstars=="4"){
            	$('#indexct2star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[1].getstars=="3"){
            	$('#indexct2star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[1].getstars=="2"){
            	$('#indexct2star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[1].getstars=="1"){
            	$('#indexct2star').append('<li><i class="fa fa-star"></i></li>')
            }
            $('#indexct3ct').append(data[2].overview)
            $('#indexct3cl').append(data[2].Hotelphone)
            $('#indexct3hn').append(data[2].hotelname)
            $('#indexct3hn').attr('href','/hoteldetails?hotelid='+data[2].hotelid)
            if(data[2].getstars=="5"){
            	$('#indexct3star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            else if(data[2].getstars=="4"){
            	$('#indexct3star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[2].getstars=="3"){
            	$('#indexct3star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[2].getstars=="2"){
            	$('#indexct3star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[2].getstars=="1"){
            	$('#indexct3star').append('<li><i class="fa fa-star"></i></li>')
            }
            console.log("第三个评论有没有"+data[3].overview)
            $('#indexct4ct').append(data[3].overview)
            $('#indexct4cl').append(data[3].Hotelphone)
            $('#indexct4hn').append(data[3].hotelname)
            $('#indexct4hn').attr('href','/hoteldetails?hotelid='+data[3].hotelid)
            if(data[3].getstars=="5"){
            	$('#indexct4star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            else if(data[3].getstars=="4"){
            	$('#indexct4star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[3].getstars=="3"){
            	$('#indexct4star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[3].getstars=="2"){
            	$('#indexct4star').append('<li><i class="fa fa-star"></i></li>'+
            							'<li><i class="fa fa-star"></i></li>')
            }
            if(data[3].getstars=="1"){
            	$('#indexct4star').append('<li><i class="fa fa-star"></i></li>')
            }
            
        },
        error: function(data) {
      		console.log(data)
    	}
	})
	$.ajax({
		url: "/user/footerhotel",
        dataType: "json",//期待返回的类型
        async: true,
        type: "GET",
        success: function (data) {//这里仅仅是post成功,返回的应该是替代了的。包括评论内容，用户名，酒店名，酒店id，评论星
            console.log(data)
            console.log(data[0])
            console.log(data[1])
            console.log(data[2])
            /*酒店id，酒店名字，酒店图片的url,酒店优惠后的平均价格，还是要用一下替代的方法*/
            /*temHotel.setHotelid(hasDtHotelid.get(i));
            temHotel.setHotelname(hotelservice.findHotelByPrimaryKey(hasDtHotelid.get(i)).getHotelname());
            temHotel.setPhotourl(hotelservice.findHotelByPrimaryKey(hasDtHotelid.get(i)).getPhotourl());
            temHotel.setBrandid(roomtypeservice.getAvgPriceByHotelid(hasDtHotelid.get(i)));*/
            $('#fthotel1url').attr('href','/hoteldetails?hotelid='+data[0].hotelid)
            $('#fthotel1img').attr('src',data[0].photourl)
            $('#fthotel1img').attr('alt',data[0].hotelname)
            $('#fthotel1name').append(data[0].hotelname)
            $('#fthotel1avgprice').append('平均每日'+data[0].brandid+'元')
                        $('#fthotel2url').attr('href','/hoteldetails?hotelid='+data[1].hotelid)
            $('#fthotel2img').attr('src',data[1].photourl)
            $('#fthotel2img').attr('alt',data[1].hotelname)
            $('#fthotel2name').append(data[1].hotelname)
            $('#fthotel2avgprice').append('平均每日'+data[1].brandid+'元')
                        $('#fthotel3url').attr('href','/hoteldetails?hotelid='+data[2].hotelid)
            $('#fthotel3img').attr('src',data[2].photourl)
            $('#fthotel3img').attr('alt',data[2].hotelname)
            $('#fthotel3name').append(data[2].hotelname)
            $('#fthotel3avgprice').append('平均每日'+data[2].brandid+'元')
            console.log("第三个为什不现实？"+data[2].brandid)
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
    	$('<div>').attr('class','col-12 col-sm-6 col-md-6 col-lg-4').append(
    		$('<div>').attr('class','single-package').append(
    			$('<div>').attr('class','package-image').append($('<a>').attr('href','/hoteldetails?hotelid='+item.hotelid).append($('<img>').attr('src',item.photourl).attr('alt',item.hotelname))),
    			$('<div>').attr('class','package-content').append(
    				$('<h4>').append($('<a>').attr('href','/hoteldetails?hotelid='+item.hotelid).attr('title','').append(item.hotelname).append('<br>')),
    				$('<p>').append(item.overview.substr(0,36)+'...')),
    			$('<div>').attr('class','package-calto-action').append(
    				$('<ul>').attr('class','ct-action').append(
    					$('<li>').append($('<a>').attr('href','/hoteldetails?hotelid='+item.hotelid).attr('class','travel-booking-btn hvr-shutter-out-horizontal')
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