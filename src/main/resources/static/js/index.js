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
	initpopular()
})

function
initpopular(){
	$.ajax({
		url: "/user/popular",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify("getMostPopularHotel"),
        success: function (data) {//这里仅仅是post成功
            showPopular(data)
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
    			$('<div>').attr('class','package-image').append($('<a>').attr('href','#').append('<img>').attr('src',item.photourl).attr('alt',item.hotelname)),
    			$('<div>').attr('class','package-content').append(
    				$('<h4>').append($('<a>').attr('href','').attr('title','').append(item.hotelname).append('<br>')),
    				$('<p>').append(item.overview.substr(0,6))),
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

