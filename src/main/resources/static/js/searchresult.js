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

function show(data){
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