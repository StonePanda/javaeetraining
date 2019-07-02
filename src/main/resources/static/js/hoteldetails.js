$(function(){
	if(window.sessionStorage.hasOwnProperty("email")==true){//已经登录
		$('#clientemail').text(window.sessionStorage.getItem("email"));
		$('#clientemail').attr('href','/clientdetail');
		$('#exitOrRegister').text('退出')
		$('#exitOrRegister').attr('href','/about')
		$('#bookOrLogin').append("现在预定")
		$('#clientname').attr('value',window.sessionStorage.getItem("email"))
		$('#clientphone').attr('value',window.sessionStorage.getItem("phone"))

	}
	else{
		$('#clientemail').text("登录");
		$('#clientemail').attr('href','/login');
		$('#exitOrRegister').text('注册')
		$('#exitOrRegister').attr('href','/register')
		$('#bookOrLogin').append("请先登录！")
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

//全局变量
var checktypenum=new Array()

function
bookOrLogin(){
	if(window.sessionStorage.hasOwnProperty("email")==true){//已经登录
		//根据email得到电话信息，如果被修改就提示请用户重新确认
		if($('#clientphone').value!=window.sessionStorage.getItem("phone")||$('#clientname').value!=window.sessionStorage.getItem("email")){
			//两个之中有任何一个不相等，就要提示信息不对
			/*<div class="alert alert-success">
                                <a class="close" data-dismiss="alert">×</a>
                                <strong></strong>
                            </div>*/
			$('#tishixiaoxi').append(
				$('<div>').attr('class','alert alert-success').append(
					$('<a>').attr('class','close').attr('data-dismiss','alert').append('x'),
					$('<strong>').append('错误！'),
					append('输入电话或邮箱与注册时电话邮箱不符！')))
		}
		//检查日期必须是今天之后的，如果不是就修改
		var nowdate=new Date()
		var nowdatestr
		if(nowdate.getMonth()<9){
			if(nowdate.getDate()<10){
				nowdatestr='0'+nowdate.getMonth()+1+'/'+'0'+nowdate.getDate()+'/'+nowdate.getFullYear()
			}
			else{
				nowdatestr='0'+nowdate.getMonth()+1+'/'+nowdate.getDate()+'/'+nowdate.getFullYear()
			}
		}
		else{
			if(nowdate.getDate()<10){
				nowdatestr=nowdate.getMonth()+1+'/'+'0'+nowdate.getDate()+'/'+nowdate.getFullYear()
			}
			else{
				nowdatestr=nowdate.getMonth()+1+'/'+nowdate.getDate()+'/'+nowdate.getFullYear()
			}
		}
		//为true时时间才是对的
		var status=0//0表示未进行，1进行中，2已完成
		if($('#datepicker2').value<$('#datepicker1').value&&$('#datepicker2').value>nowdatestr){//=
			//do nothing
			var status=0
		}
		else if($('#datepicker2').value<$('#datepicker1').value&&$('#datepicker2').value=nowdatestr){
			var status=1
		}
		else{
			$('#tishixiaoxi').append(
				$('<div>').attr('class','alert alert-success').append(
					$('<a>').attr('class','close').attr('data-dismiss','alert').append('x'),
					$('<strong>').append('错误！'),
					append('输入时间不正确！')))
		}
		//检查房间数量够不够，如果不够就提示重新选择
		for(int i=0;i<checktypenum.length;i++){
			if (checktypenum[i].num-$('#roomnum').value<0&&checktypenum[i].roomtype==$('#roomtype').value) {
				//刚好选的房型不够
				$('#tishixiaoxi').append(
				$('<div>').attr('class','alert alert-success').append(
					$('<a>').attr('class','close').attr('data-dismiss','alert').append('x'),
					$('<strong>').append('错误！'),
					append('该房型剩余数量不足！')))
			}
		}
		//如果全都ok
		var obj={
			"clientid":window.sessionStorage.getItem("id"),
			"hotelid":getParams("hotelid"),
			"roomtype":$('#roomtype').value,
			"timestart":Math.round(new Date($('#datepicker2').value)).getTime()/1000).toString(),
			"timeend":Math.round(new Date($('#datepicker2').value)).getTime()/1000).toString(),
			"status":status,
			"num":$('#roomnum').value
		}
		$.ajax({//请求的是酒店信息
		url: "/user/bookhotel",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            console.log(data)
            $('#tishixiaoxi').append(
				$('<div>').attr('class','alert alert-success').append(
					$('<a>').attr('class','close').attr('data-dismiss','alert').append('x'),
					$('<strong>').append('成功！'),
					append('预定成功，请留意日期安排行程！')))
        },
        error: function(data) {
      		console.log(data)
    	}
	})
	}
	else{
		window.location.href='/login'
	}
	return false
}

function
initHotel(){
	var hotelid=getParams("hotelid")
	var obj={
		"hotelid":hotelid
	}
	$.ajax({//请求的是酒店信息
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
	$.ajax({//请求的是房型信息
		url: "/user/roomtype",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            showRoomtype(data)
            checktypenum=data
            console.log(data)
        },
        error: function(data) {
      		console.log(data)
    	}
	})

	$.ajax({//请求的评论人的用户信息
		url: "/user/ctclientemail",//得到两个评论的用户名
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
	$.ajax({//请求的是评论信息
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
showHotel(data){//酒店是肯定有的
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
  		$('#priceroomtype').append($('<span>').append(item.price+'/')).append(item.roomtype+'/间(余'+item.num+')  ')
  	}
  	if(item.discount==0){//无优惠
  		$('#priceroomtype').append(item.price+'/'+item.roomtype+'/间(余'+item.num+')  ')
  	}
    })
}

function
showCommentEmail(data){//传回来得可能没有
	var emaillist = data
	if(emaillist.length==0){
		$('#commentlist').append('暂时没有评论。。。')
	}
	if(emaillist.length==1){
		$('#comment1email').append(emaillist[0])
	}
	if(emaillist.length==2){
		$('#comment2email').append(emaillist[1])
		$('#comment1email').append(emaillist[0])
	}

}

function
showCommentTwo(data){//传回来得应该是两个，也有可能是一个和一个也没有
	var commentlist=data
	if(commentlist.length==0){
		//do nothing
	}
	if(commentlist.length==1){
		$('#comment1avatar').attr('src','images/blog/comments1.jpg')
		var timeend13=parseInt(commentlist[0].timeend+"000")
		var date1=new Date(timeend13)
		$('#comment1timeend').append(date1.getFullYear()+'-'+date1.getMonth()+'-'+date1.getDate())
		//<li><i class="fa fa-star"></i></li>
		for (i = 0; i < commentlist[0].commentstar; i++) { 
    		$('#comment1star').append('<li><i class="fa fa-star"></i></li>')
 		}
 		$('#comment1content').append(commentlist[0].commentcontent)
	}
	if(commentlist.length==2){
		$('#comment1avatar').attr('src','images/blog/comments1.jpg')
		var timeend13=parseInt(commentlist[0].timeend+"000")
		var date1=new Date(timeend13)
		$('#comment1timeend').append(date1.getFullYear()+'-'+date1.getMonth()+'-'+date1.getDate())
		//<li><i class="fa fa-star"></i></li>
		for (i = 0; i < commentlist[0].commentstar; i++) { 
    		$('#comment1star').append('<li><i class="fa fa-star"></i></li>')
 		}
 		$('#comment1content').append(commentlist[0].commentcontent)

 		$('#comment2avatar').attr('src','images/blog/comments2.jpg')
		timeend13=parseInt(commentlist[1].timeend+"000")
		var date2=new Date(timeend13)
		$('#comment2timeend').append(date2.getFullYear()+'-'+date2.getMonth()+'-'+date2.getDate())
		//<li><i class="fa fa-star"></i></li>
		for (i = 0; i < commentlist[1].commentstar; i++) { 
    		$('#comment2star').append('<li><i class="fa fa-star"></i></li>')
 		}
 		$('#comment2content').append(commentlist[1].commentcontent)
	}
}