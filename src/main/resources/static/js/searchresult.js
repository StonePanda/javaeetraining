window.onload=function(){
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
        }
	})
	}
}

function show(data){//这时候是这个城市里的全部酒店
    window.sessionStorage.setItem("hotellist",data)
  var hotellist = data;
  $('#showlist').html('')
  $.each(hotellist, function (index, item) {
    $('#showlist').append(
    	$('<div>').attr('class','col-12 col-sm-6 col-md-6 col-lg-4').append(
    		$('<div>').attr('class','single-hotels-2').append(
    			$('<div>').attr('class','hotel-image').append($('<img>').attr('src',item.photourl).attr('class','border-raduis-3')),
    			$('<div>').attr('class','hotel-description').append(
    				$('<a>').attr('href','#').append($('<h4>').append(item.hotelname)),
    				$('<p>').append(item.positiontext),
    				$('<div>').attr('class','hotel-book-btn').append(
    					$('<a>').attr('href','#').attr('class','travel-booking-btn hvr-shutter-out-horizontal').append('详细信息'))
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
        "city":city
        "brand":brand
        "price":price
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
        "city":city
        "brand":brand
        "price":price
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
        "city":city
        "brand":brand
        "price":price
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