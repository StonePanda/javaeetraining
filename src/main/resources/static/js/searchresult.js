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
	var keyword=getParams("kw")
	obj={
		"keyword":keyword
	}
	$.ajax({
		url: "/user/search",
            dataType: "json",
            contentType: "application/json",//传过去的值的类型
            async: true,
            type: "POST",
            data: JSON.stringify(obj),
            success: function (data) {//这里仅仅是post成功
                //sessionStorage.user = JSON.stringify(data);
                //session存储账户名
               console.log(data)
               show(data)
        }

	})
}

function show(data){
	/*<div class="col-12 col-sm-6 col-md-6 col-lg-4">
                    <div class="single-hotels-2">
                        <div class="hotel-image">
                            <img src="images/hotel/1.jpg" alt="" class="border-raduis-3">
                        </div>
                        <div class="hotel-description">
                            <a href="#"><h4>Sheraton Hotel</h4></a>
                            <p>低至<span>$500/</span>2人2天</p>
                            <div class="hotel-book-btn">
                                <a href="#" class="travel-booking-btn hvr-shutter-out-horizontal">详细信息</a>
                            </div>
                        </div>
                    </div>
                </div>*/
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