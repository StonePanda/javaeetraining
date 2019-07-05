window.onload=function(){
    if(window.sessionStorage.hasOwnProperty("email")==true){//已经登录
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
	initialize()
}

function getParams(key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                //console.log(r[2]);
                return decodeURI(r[2]);//unescape()
            }
            return null;
}

function initialize(){
	//品牌搜索
	if(getParams("brand")!=null){
		var brand=getParams("brand")
		obj={
			"brand":brand
		}
	$.ajax({
		url: "/user/searchbrand",
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
	//关键词搜索
	if(getParams("city")!=null){
		var city=getParams("city")
		obj={
		"city":city
		}
	$.ajax({
		url: "/user/searchcity",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            show(data)
            console.log(data)
        }
	})
	}
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

function show(data){//这时候是这个城市里的全部酒店

  window.sessionStorage.setItem("hotellist",data)
  var hotellist =data
  $('#showlist').html('')
  console.log("append失败？")
  $.each(hotellist, function (index,item) {
    console.log(item.hotelname)
    $('#showlist').append(
    	$('<div>').attr('class','col-12 col-sm-6 col-md-6 col-lg-4').append(
    		$('<div>').attr('class','single-hotels-2').append(
    			$('<div>').attr('class','hotel-image').append($('<img>').attr('src',item.photourl).attr('class','border-raduis-3').attr('style','height:260px;width:100%;')),
    			$('<div>').attr('class','hotel-description').append(
    				$('<a>').attr('href','/hoteldetails?hotelid='+item.hotelid).append($('<h4>').append(item.hotelname)),
    				$('<p>').append(item.positiontext),
    				$('<div>').attr('class','hotel-book-btn').append(
    					$('<a>').attr('href','/hoteldetails?hotelid='+item.hotelid).attr('class','travel-booking-btn hvr-shutter-out-horizontal').append('详细信息'))
      			)
      		)
 		)
    )
  })
}

function
distanceselectlist(){
    if($('#searchsousuok').value==null){
        //console.log("没有输入")如果没有输入就没办法使用地点筛选
            alert("需要输入目的地才能使用距离筛选！")
    }
    else if($('#distanceselect').value=="ALL"){
    	//do nothing
    }
    else{
    	var map = new BMap.Map("l-map");
    	map.centerAndZoom(getParams("city"),12);  //初始化地图,设置城市和地图级别。
        //需要计算两点之间的距离了
        //在现在的data里筛选出来符合距离
        hotellist=window.sessionStorage.getItem("hotellist")
    	$.each(hotellist, function (index, item) {
    		var hotelpoint=new BMap.Point(item.positionjing,item.positionwei)
    		if($('#distanceselect').value=="<1000m"){
    			if(map.getDistance(window.sessionStorage.getItem("clientpoint"),hotelpoint)<1000){
    				//donothing
    			}
    			else{
    				hotellist.remove(item)
    			}
    		}
    		else if(('#distanceselect').value=="1000-2000m"){
    			if(map.getDistance(window.sessionStorage.getItem("clientpoint"),hotelpoint)<2000&&
    				map.getDistance(window.sessionStorage.getItem("clientpoint"),hotelpoint)>1000){
    				//donothing
    			}
    			else{
    				hotellist.remove(item)
    			}
    		}
    		else if(('#distanceselect').value=="2000-5000m"){
    			if(map.getDistance(window.sessionStorage.getItem("clientpoint"),hotelpoint)>=2000&&
    				map.getDistance(window.sessionStorage.getItem("clientpoint"),hotelpoint)<=5000){
    				//donothing
    			}
    			else{
    				hotellist.remove(item)
    			}
    		}
    		else{
    			if(map.getDistance(window.sessionStorage.getItem("clientpoint"),hotelpoint)>5000){
    				//donothing
    			}
    			else{
    				hotellist.remove(item)
    			}
    		}
  })
    	show(hotellist)
    	window.sessionStorage.setItem("hotellist",hotellist)
}

function
brandselectlist(){
	$(".shangquan li").removeClass("active")
    $(this).addClass("active")
    var text1=$(this).text();
    $(".sqinput").html(text1)
	var city=getParams("city")
    var brand=$('#brandselect').value
    var price=$('#priceselect').value
    var discount=$('#discountlist').value
    obj={
        "city":city,
        "brand":brand,
        "price":price,
        "discount":discount
    }
    $.ajax({
        url: "/user/searchselect",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            show(data)
            window.sessionStorage.setItem("hotellist",data);
        }
    })
    }
}

function
priceselectlist(){
	var city=getParams("city")
    var brand=$('#brandselect').value
    var price=$('#priceselect').value
    var discount=$('#discountlist').value
    obj={
        "city":city,
        "brand":brand,
        "price":price,
        "discount":discount
    }
    $.ajax({
        url: "/user/searchselect",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            show(data)
            window.sessionStorage.setItem("hotellist",data);
        }
    })
}

function
starsselectlist(){
	if($('#starsselect').value=="ALL"){
    	//do nothing
    }
    else{
        hotellist=window.sessionStorage.getItem("hotellist")
    	$.each(hotellist, function (index, item) {
    		if($('#starsselect').value=="五星酒店"){
    			if(item.getstars==5){
    				//donothing
    			}
    			else{
    				hotellist.remove(item)
    			}
    		}
    		else if($('#starsselect').value=="四星酒店"){
    			if(item.getstars==4){
    				//donothing
    			}
    			else{
    				hotellist.remove(item)
    			}
    		}
    		else if($('#starsselect').value=="三星酒店"){
    			if(item.getstars==3){
    				//donothing
    			}
    			else{
    				hotellist.remove(item)
    			}
    		}
    		else if($('#starsselect').value=="二星酒店"){
    			if(item.getstars==2){
    				//donothing
    			}
    			else{
    				hotellist.remove(item)
    			}
    		}
    		else{
    			if(item.getstars==1){
    				//donothing
    			}
    			else{
    				hotellist.remove(item)
    			}
    		}
  })
    	show(hotellist)
    	window.sessionStorage.setItem("hotellist",hotellist)
}

function
discountselectlist(){
	var city=getParams("city")
    var brand=$('#brandselect').value
    var price=$('#priceselect').value
    var discount=$('#discountlist').value
    obj={
        "city":city,
        "brand":brand,
        "price":price,
        "discount":discount
    }
    $.ajax({
        url: "/user/searchselect",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            show(data)
            window.sessionStorage.setItem("hotellist",data);
        }
    })
    }
}

function
showselectedlist(){
	if($('#showselected').value=="列表模式"){
		//donothing
	}
	else{
		window.location.href="/map"
	}
}