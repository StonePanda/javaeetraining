$(function(){
	if(window.sessionStorage.hasOwnProperty("email")==true){//已经登录
		$('#clientemail').text(window.sessionStorage.getItem("email"));
		$('#clientemail').attr('href','/clientdetail');
		$('#exitOrRegister').text('退出')
		$('#exitOrRegister').attr('href','/about')
		$('#bookOrLoginBt').append("现在预定")
		$('#clientname').attr('value',window.sessionStorage.getItem("email"))
		$('#clientphone').attr('value',window.sessionStorage.getItem("phone"))

	}
	else{
		$('#clientemail').text("登录");
		$('#clientemail').attr('href','/login');
		$('#exitOrRegister').text('注册')
		$('#exitOrRegister').attr('href','/register')
		$('#bookOrLoginBt').append("请先登录！")
	}
	initHotel();
})

function getParams(key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
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
	$.ajax({//请求的是酒店信息
		url: "/user/hoteldetails",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            showHotel(data)
        },
        error: function(data) {
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
            //这里必须用json字符串存储，sessionstorage!!!!!
            window.sessionStorage.setItem('roomtype',JSON.stringify(data))
            console.log(data)//必须要用jquery循环
            console.log(window.sessionStorage.getItem('roomtype'))
        },
        error: function(data) {
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
        },
        error: function(data) {
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
        },
        error: function(data) {
    	}
	})
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


function
bookOrLogin(){
	data=JSON.parse(window.sessionStorage.getItem('roomtype'))
	console.log(data)
	console.log(data[0])
	if(window.sessionStorage.hasOwnProperty("email")==true){//已经登录
		//根据email得到电话信息，如果被修改就提示请用户重新确认
		if($('#clientphone').attr('value')!=window.sessionStorage.getItem("phone")||$('#clientname').attr('value')!=window.sessionStorage.getItem("email")){
			console.log($('#clientphone').attr('value'))//原生js是getElementByid.value，jquery写法是val()
			//不知道不能用val(),只能用value
			console.log(window.sessionStorage.getItem("phone"))
			console.log($('#clientphone').attr('value')!=window.sessionStorage.getItem("phone"))
			//两个之中有任何一个不相等，就要提示信息不对
			/*<div class="alert alert-success">
                                <a class="close" data-dismiss="alert">×</a>
                                <strong></strong>
                            </div>*/
			$('#tishixiaoxi').append(
				$('<div>').attr('class','alert alert-success').append(
					$('<a>').attr('class','close').attr('data-dismiss','alert').append('x'),
					$('<strong>').append('错误！').append('输入电话或邮箱与注册时电话邮箱不符！')))
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
		if($('#datepicker2').attr('value')<$('#datepicker1').attr('value')&&$('#datepicker2').attr('value')>nowdatestr){//=
			//do nothing
			status=0
		}
		else if($('#datepicker2').attr('value')<$('#datepicker1').attr('value')&&$('#datepicker2').attr('value')==nowdatestr){
			status=1
		}
		else{
			$('#tishixiaoxi').append(
				$('<div>').attr('class','alert alert-success').append(
					$('<a>').attr('class','close').attr('data-dismiss','alert').append('x'),
					$('<strong>').append('错误！').append('输入时间不正确！')))
		}
		//检查房间数量够不够，如果不够就提示重新选择
		/*jquery ajax遍历集合的for循环两种形式：

1：for(var i = 0; i<=list.length;i++)

2:for(var item in list){

list[item].属性

}*/
		for(var i=0;i<data.length;i++){
			if (data[i].num-$('#roomnum').attr('value')<0&&data[i].roomtype==$('#roomtype').attr('value')) {
				//刚好选的房型不够
				$('#tishixiaoxi').append(
				$('<div>').attr('class','alert alert-success').append(
					$('<a>').attr('class','close').attr('data-dismiss','alert').append('x'),
					$('<strong>').append('错误！').append('该房型剩余数量不足！')))
			}
		}
		var whichtype=0
		for(var i=0;i<data.length;i++){
			if(data[i].roomtype==$('#roomtype').attr('value')){
				whichtype=i
			}
		}
		console.log(data.length)
		console.log(whichtype)
		//如果全都ok
		var obj={
			"clientid":window.sessionStorage.getItem("id"),
			"hotelid":getParams("hotelid"),
			"roomtype":$('#roomtype').val(),//这里只能用val()
			"timestart":(Math.round(new Date($('#datepicker2').val()).getTime())/1000).toString(),
			"timeend":(Math.round(new Date($('#datepicker2').val()).getTime())/1000).toString(),
			"status":status,
			"num":$('#roomnum').val(),
			"price":parseInt($('#roomnum').val())*parseInt(data[whichtype].price)
		}
		console.log(data[whichtype].price)
		console.log(parseInt(data[whichtype].price))
		console.log(parseInt($('#roomnum').val())*parseInt(data[whichtype].price))
		$.ajax({//请求的是酒店信息
		url: "/user/bookhotel",
        dataType: "json",
        contentType: "application/json",//传过去的值的类型
        async: true,
        type: "POST",
        data: JSON.stringify(obj),
        success: function (data) {//这里仅仅是post成功
            $('#tishixiaoxi').append(
				$('<div>').attr('class','alert alert-success').append(
					$('<a>').attr('class','close').attr('data-dismiss','alert').append('x'),
					$('<strong>').append('成功！').append('预定成功，请留意日期安排行程！')))
            setTimeOut("window.location.href='/clientaccount?clientid='"+window.sessionStorage.getItem('id'),2000)
        },
        error: function(data) {
    	}
		})
	}
	else{
		window.location.href='/login'
	}
	return false
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
  		$('#priceroomtype').append($('<span>').append(item.price+'/')).append(item.roomtype+'/间(余'+item.num+')<br>')
  	}
  	if(item.discount==0){//无优惠
  		$('#priceroomtype').append(item.price+'/'+item.roomtype+'/间(余'+item.num+')<br>')
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