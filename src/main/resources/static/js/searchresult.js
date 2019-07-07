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
$(".selemenu").click(function(){
    $(this).next().slideToggle();
    $(this).parents().siblings().find(".citylist,.citylist2").slideUp();
})
/*$(".citylist span").click(function(){
    var text=$(this).text();
    $(this).parent().prev().html(text);
    $(this).parent().prev().css("color","#666")
    $(this).parent().fadeOut();
    
})*/

$(function(){
    $(document).not($(".selectbox")).click(function(){
        $(".citylistdistance,.citylist,.citylist2").slideUp();
     })
     $(".selectbox").click(function(event){
        event.stopPropagation();
    })
})


function getParams(key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
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
               window.sessionStorage.setItem("hotellist",JSON.stringify(data))
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
            window.sessionStorage.setItem("hotellist",JSON.stringify(data))
        }
	})
	}
    $.ajax({
        url: "/user/footerhotel",
        dataType: "json",//期待返回的类型
        async: true,
        type: "GET",
        success: function (data) {//这里仅仅是post成功,返回的应该是替代了的。包括评论内容，用户名，酒店名，酒店id，评论星
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
        },
        error: function(data) {
        }
    })
}

function show(data){//这时候是这个城市里的全部酒店
    console.log(data)
    $('#showlist').html('')
    if(data.length==0){
        $('#showlist').append("当前条件下暂时没有宾馆注册哦！~")
        console.log("看看是不是空")
    }
  var hotellist =data
  $.each(hotellist, function (index,item) {
    if(item==null){
        //do nothing
    }
    else{
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
  }
})
}

$("#citylistdistance span").click(function(){//距离筛选
    var text=$(this).text();
    $(this).parent().prev().html(text);
    $(this).parent().prev().css("color","#666")
    $(this).parent().fadeOut()
})

$("#citylistdistance span").on("click",function(){
    var hotellist=JSON.parse(window.sessionStorage.getItem("hotellist"))
    if($('#starsselect').text()=="ALL"||$('#starsselect').text()=="星级筛选"){
                //do nothing
                }
            else{
          
         $.each(hotellist, function (index, item) {
            if(item==null){

            }
            else{
            if($('#starsselect').text()=="五星酒店"){
                if(item.getstars==5){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
            //因为splice后后面那个就被忽略了
                }
            }
            else if($('#starsselect').text()=="四星酒店"){
                if(item.getstars==4){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#starsselect').text()=="三星酒店"){
                if(item.getstars==3){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#starsselect').text()=="二星酒店"){
                if(item.getstars==2){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else{
                if(item.getstars==1){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            }
            })
                }



    if(window.sessionStorage.hasOwnProperty("clientpoint")==false||$('#searchsousuok').val()==""){
            alert("需要输入目的地才能使用距离筛选！")
    }
    else if($('#distanceselect').text()=="ALL"){
    	//do nothing
        show(hotellist)
    }
    else{
    	var map = new BMap.Map("l-map");//因为不是每次都重新获取，所以不能更改存储的
    	map.centerAndZoom(getParams("city"),12) //初始化地图,设置城市和地图级别。
        //需要计算两点之间的距离了
        //在现在的data里筛选出来符合距离
        var clientpp=JSON.parse(window.sessionStorage.getItem("clientpoint"))
    	$.each(hotellist, function(index, item) {
            if(item==null){
                // do nothing
            }
            else{
    		var hotelpoint=new BMap.Point(item.positionjing,item.positionwei)
            var clientpoint=new BMap.Point(clientpp.lng,clientpp.lat)
    		if($('#distanceselect').text()=="<1000m"){
    			if(map.getDistance(clientpoint,hotelpoint)<1000){
    				//donothing
    			}
    			else{
    				hotellist.splice(index,1,null)
    			}
    		}
    		else if($('#distanceselect').text()=="1000-2000m"){
    			if(map.getDistance(clientpoint,hotelpoint)<2000&&
    				map.getDistance(clientpoint,hotelpoint)>1000){
    				//donothing
    			}
    			else{
    				hotellist.splice(index,1,null)
    			}
    		}
    		else if($('#distanceselect').text()=="2000-5000m"){
    			if(map.getDistance(clientpoint,hotelpoint)>=2000&&
    				map.getDistance(clientpoint,hotelpoint)<=5000){
    				//donothing
    			}
    			else{
    				hotellist.splice(index,1,null)
    			}
    		}
    		else{
    			if(map.getDistance(clientpoint,hotelpoint)>5000){
    				//donothing
    			}
    			else{
    				hotellist.splice(index,1,null)
    			}
    		}
            }
        })
    	show(hotellist)
    }
})

/*onclick,click,on()的优先关系：onclick>click>on()；

onclick和click绑定的事件，彼此之间遵守事件冒泡规则，从内到外触发；

on()绑定的事件，总是晚于onclick和click绑定的事件触发；

由此可以得到，使用on()绑定的事件与onclick和click绑定的事件，判断触发先后顺序时，不能只考虑事件冒泡规则。
*/
$(".shangquan li").click(function(){
    
    $(".shangquan li").removeClass("active")
        $(this).addClass("active")
        var text1=$(this).text();
        $("#brandselect").html('')
        $("#brandselect").append(text1)
})

$(".shangquan li").on("click",function(){//品牌筛选
    var city=getParams("city")
    var brand=$('#brandselect').text()
    var price=$('#priceselect').text()
    var discount=$('#discountlist').text()
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
            /*show(data)*/
            window.sessionStorage.setItem("hotellist",JSON.stringify(data))
             var hotellist=JSON.parse(window.sessionStorage.getItem("hotellist"))
            if($('#starsselect').text()=="ALL"||$('#starsselect').text()=="星级筛选"){
                //do nothing
                }
            else{
                $.each(hotellist, function (index, item) {
            if(item==null){

            }
            else{
            if($('#starsselect').text()=="五星酒店"){
                if(item.getstars==5){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
            //因为splice后后面那个就被忽略了
                }
            }
            else if($('#starsselect').text()=="四星酒店"){
                if(item.getstars==4){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#starsselect').text()=="三星酒店"){
                if(item.getstars==3){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#starsselect').text()=="二星酒店"){
                if(item.getstars==2){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else{
                if(item.getstars==1){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            }
            })
                }
            if($('#distanceselect').text()=="ALL"||$('#distanceselect').text()=="距离筛选"){
        //do nothing
            }
            else{
                var map = new BMap.Map("l-map");//因为不是每次都重新获取，所以不能更改存储的
                map.centerAndZoom(getParams("city"),12) //初始化地图,设置城市和地图级别。
        //需要计算两点之间的距离了
        //在现在的data里筛选出来符合距离
                  var clientpp=JSON.parse(window.sessionStorage.getItem("clientpoint"))
                $.each(hotellist, function(index, item) {
                    if(item==null){
                // do nothing
                    }
                    else{
            var hotelpoint=new BMap.Point(item.positionjing,item.positionwei)
            var clientpoint=new BMap.Point(clientpp.lng,clientpp.lat)
            if($('#distanceselect').text()=="<1000m"){
                if(map.getDistance(clientpoint,hotelpoint)<1000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#distanceselect').text()=="1000-2000m"){
                if(map.getDistance(clientpoint,hotelpoint)<2000&&
                    map.getDistance(clientpoint,hotelpoint)>1000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#distanceselect').text()=="2000-5000m"){
                if(map.getDistance(clientpoint,hotelpoint)>=2000&&
                    map.getDistance(clientpoint,hotelpoint)<=5000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else{
                if(map.getDistance(clientpoint,hotelpoint)>5000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            }
        })    
            }
            show(hotellist)
        }
    })
})

$("#citylistprice span").click(function(){//价格筛选
    var text=$(this).text();
    $(this).parent().prev().html(text);
    $(this).parent().prev().css("color","#666")
    $(this).parent().fadeOut();
    
})

$("#citylistprice span").on("click",function(){//价格筛选
	var city=getParams("city")
    var brand=$('#brandselect').text()
    var price=$('#priceselect').text()
    var discount=$('#discountlist').text()
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
            /*show(data)*/
            window.sessionStorage.setItem("hotellist",JSON.stringify(data))
            var hotellist=JSON.parse(window.sessionStorage.getItem("hotellist"))
            if($('#starsselect').text()=="ALL"||$('#starsselect').text()=="星级筛选"){
                //do nothing
                }
            else{
         $.each(hotellist, function (index, item) {
            if(item==null){

            }
            else{
            if($('#starsselect').text()=="五星酒店"){
                if(item.getstars==5){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
            //因为splice后后面那个就被忽略了
                }
            }
            else if($('#starsselect').text()=="四星酒店"){
                if(item.getstars==4){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#starsselect').text()=="三星酒店"){
                if(item.getstars==3){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#starsselect').text()=="二星酒店"){
                if(item.getstars==2){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else{
                if(item.getstars==1){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            }
            })
                }
            if($('#distanceselect').text()=="ALL"||$('#distanceselect').text()=="距离筛选"){
        //do nothing
            }
            else{
            var map = new BMap.Map("l-map");//因为不是每次都重新获取，所以不能更改存储的
            map.centerAndZoom(getParams("city"),12) //初始化地图,设置城市和地图级别。
        //需要计算两点之间的距离了
        //在现在的data里筛选出来符合距离
            var clientpp=JSON.parse(window.sessionStorage.getItem("clientpoint"))
            $.each(hotellist, function(index, item) {
             if(item==null){
                  // do nothing
                }
            else{
            var hotelpoint=new BMap.Point(item.positionjing,item.positionwei)
            var clientpoint=new BMap.Point(clientpp.lng,clientpp.lat)
            if($('#distanceselect').text()=="<1000m"){
                if(map.getDistance(clientpoint,hotelpoint)<1000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#distanceselect').text()=="1000-2000m"){
                if(map.getDistance(clientpoint,hotelpoint)<2000&&
                    map.getDistance(clientpoint,hotelpoint)>1000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#distanceselect').text()=="2000-5000m"){
                if(map.getDistance(clientpoint,hotelpoint)>=2000&&
                    map.getDistance(clientpoint,hotelpoint)<=5000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else{
                if(map.getDistance(clientpoint,hotelpoint)>5000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            }
            })
            }
            show(hotellist)
        }
    })
})

$("#cityliststar span").click(function(){//星级筛选
    var text=$(this).text();
    $(this).parent().prev().html(text);
    $(this).parent().prev().css("color","#666")
    $(this).parent().fadeOut();
    
})

$('#cityliststar span').on("click",function(){//星级筛选
    var hotellist=JSON.parse(window.sessionStorage.getItem("hotellist"))
    if($('#distanceselect').text()=="ALL"||$('#distanceselect').text()=="距离筛选"){
        //do nothing
            }
            else{
            var map = new BMap.Map("l-map");//因为不是每次都重新获取，所以不能更改存储的
            map.centerAndZoom(getParams("city"),12) //初始化地图,设置城市和地图级别。
        //需要计算两点之间的距离了
        //在现在的data里筛选出来符合距离
            var clientpp=JSON.parse(window.sessionStorage.getItem("clientpoint"))
            $.each(hotellist, function(index, item) {
             if(item==null){
                  // do nothing
                }
            else{
            var hotelpoint=new BMap.Point(item.positionjing,item.positionwei)
            var clientpoint=new BMap.Point(clientpp.lng,clientpp.lat)
            if($('#distanceselect').text()=="<1000m"){
                if(map.getDistance(clientpoint,hotelpoint)<1000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#distanceselect').text()=="1000-2000m"){
                if(map.getDistance(clientpoint,hotelpoint)<2000&&
                    map.getDistance(clientpoint,hotelpoint)>1000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#distanceselect').text()=="2000-5000m"){
                if(map.getDistance(clientpoint,hotelpoint)>=2000&&
                    map.getDistance(clientpoint,hotelpoint)<=5000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else{
                if(map.getDistance(clientpoint,hotelpoint)>5000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            }
            })
            }
	if($('#starsselect').text()=="ALL"){
    	//do nothing
    }
    else{
    	$.each(hotellist, function (index, item) {
            if(item==null){

            }
            else{
    		if($('#starsselect').text()=="五星酒店"){
    			if(item.getstars==5){
    				//donothing
    			}
    			else{
    				hotellist.splice(index,1,null)
            //因为splice后后面那个就被忽略了
    			}
    		}
    		else if($('#starsselect').text()=="四星酒店"){
    			if(item.getstars==4){
    				//donothing
    			}
    			else{
    				hotellist.splice(index,1,null)
    			}
    		}
    		else if($('#starsselect').text()=="三星酒店"){
    			if(item.getstars==3){
    				//donothing
    			}
    			else{
    				hotellist.splice(index,1,null)
    			}
    		}
    		else if($('#starsselect').text()=="二星酒店"){
        			if(item.getstars==2){
    				//donothing
    			}
    			else{
    				hotellist.splice(index,1,null)
    			}
    		}
    		else{
    			if(item.getstars==1){
    				//donothing
    			}
    			else{
    				hotellist.splice(index,1,null)
    			}
    		}
        }
    })
    	show(hotellist)
    }
})

$("#citylistdiscount span").click(function(){//优惠筛选
    var text=$(this).text();
    $(this).parent().prev().html(text);
    $(this).parent().prev().css("color","#666")
    $(this).parent().fadeOut();
})
$('#citylistdiscount span').on("click",function(){
	var city=getParams("city")
    var brand=$('#brandselect').text()
    var price=$('#priceselect').text()
    var discount=$('#discountlist').text()
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
            /*show(data)*/
            window.sessionStorage.setItem("hotellist",JSON.stringify(data))
            var hotellist=JSON.parse(window.sessionStorage.getItem("hotellist"))
            if($('#starsselect').text()=="ALL"||$('#starsselect').text()=="星级筛选"){
                //do nothing
                }
            else{
          
         $.each(hotellist, function (index, item) {
            if(item==null){

            }
            else{
            if($('#starsselect').text()=="五星酒店"){
                if(item.getstars==5){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
            //因为splice后后面那个就被忽略了
                }
            }
            else if($('#starsselect').text()=="四星酒店"){
                if(item.getstars==4){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#starsselect').text()=="三星酒店"){
                if(item.getstars==3){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#starsselect').text()=="二星酒店"){
                if(item.getstars==2){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else{
                if(item.getstars==1){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            }
            })
                }
            if($('#distanceselect').text()=="ALL"||$('#distanceselect').text()=="距离筛选"){
        //do nothing
            }
            else{
        var map = new BMap.Map("l-map");//因为不是每次都重新获取，所以不能更改存储的
        map.centerAndZoom(getParams("city"),12) //初始化地图,设置城市和地图级别。
        //需要计算两点之间的距离了
        //在现在的data里筛选出来符合距离
        var clientpp=JSON.parse(window.sessionStorage.getItem("clientpoint"))
        $.each(hotellist, function(index, item) {
            if(item==null){
                // do nothing
            }
            else{
            var hotelpoint=new BMap.Point(item.positionjing,item.positionwei)
            var clientpoint=new BMap.Point(clientpp.lng,clientpp.lat)
            if($('#distanceselect').text()=="<1000m"){
                if(map.getDistance(clientpoint,hotelpoint)<1000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#distanceselect').text()=="1000-2000m"){
                if(map.getDistance(clientpoint,hotelpoint)<2000&&
                    map.getDistance(clientpoint,hotelpoint)>1000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else if($('#distanceselect').text()=="2000-5000m"){
                if(map.getDistance(clientpoint,hotelpoint)>=2000&&
                    map.getDistance(clientpoint,hotelpoint)<=5000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            else{
                if(map.getDistance(clientpoint,hotelpoint)>5000){
                    //donothing
                }
                else{
                    hotellist.splice(index,1,null)
                }
            }
            }
        })    
            }
            show(hotellist)
        }
    })})

$("#citylistshow span").click(function(){
    var text=$(this).text();
    $(this).parent().prev().html(text);
    $(this).parent().prev().css("color","#666")
    $(this).parent().fadeOut();
})

$("#citylistshow span").on("click",function(){
	if($('#showselected').attr('value')=="列表模式"){
		//donothing
	}
	else{
		window.location.href="/map"
	}
})