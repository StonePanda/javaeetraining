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
	initHotel();
})

function getParams(key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                //console.log(r[2]);
                return decodeURI(r[2]);//unescape()
            }
            return null;
}

function
initHotel(){
	var hotelid=getParams("hotelid")
	var obj={
		"hotelid":hotelid
	}
	$.ajax({
		url: "/user/hoteldetails",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            showHotel(data)
            console.log(data)
        },
        error: function(data) {
      		console.log(data)
    	}
	})
	$.ajax({
		url: "/user/roomtype",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            showRoomtype(data)
            console.log(data)
        },
        error: function(data) {
      		console.log(data)
    	}
	})
	$.ajax({
		url: "/user/commentemail",//得到两个评论的用户名
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            showCommentEmail(data)
            console.log(data)
        },
        error: function(data) {
      		console.log(data)
    	}
	})
	$.ajax({
		url: "/user/commenttwo",//得到两个评论内容
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            showCommentTwo(data)
            console.log(data)
        },
        error: function(data) {
      		console.log(data)
    	}
	})
}

function
showHotel(data){
	var hoteldetails=data
	$('#hotelname').append(hoteldetails.hotelname)
	for (i = 0; i < hoteldetails.getstars; i++) { 
    	$('#hotelgetstars').append('<i class="fa fa-star"></i>')
 	}
 	$('#hotelpicurl').attr('src',hoteldetails.photourl)
 	$('#hoteloverview').append(hoteldetails.overview)
}

function
showRoomtype(data){//得到的是一个list
var roomtypelist = data
  $.each(roomtypelist, function (index, item) {
  	if(item.discount==1){//有优惠
  		$('#priceroomtype').append($('<span>').append(item.price+'/')).append(item.roomtype+'/间  ')
  	}
  	if(item.discount==0){//无优惠
  		$('#priceroomtype').append(item.price+'/'+item.roomtype+'/间')
  	}
    })
}

function
showCommentEmail(data){
	var emaillist = data
	$('#comment1email').append(emaillist[0])
	$('#comment2email').append(emaillist[1])
}

function
showCommentTwo(data){
	var commentlist=data
	commentlist
}