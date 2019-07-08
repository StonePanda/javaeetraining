$(function(){
	if(window.sessionStorage.hasOwnProperty("email")==true){
		$('#clientemail').text(window.sessionStorage.getItem("email"));
		$('#clientemail').attr('href','/clientaccount');
		$('#exitOrRegister').text('退出')
		$('#exitOrRegister').attr('href','/about')
		$('#footeremail').attr('value',window.sessionStorage.getItem("email"))
		init()
	}
	else{
		$('#clientemail').text("登录");
		$('#clientemail').attr('href','/login');
		$('#exitOrRegister').text('注册')
		$('#exitOrRegister').attr('href','/register')
		$('#footeremail').attr('value','请先登录！')
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
})
function getParams(key) {
            var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
               return decodeURI(r[2]);//unescape()
            }
            return null;
}

function init(){
	var obj={
		"orderid":getParams("orderid")
	}
	$.ajax({
		url:"/user/commentyemian",
		type:"post",
		dataType:"json",
		contentType:"application/json",
		data:JSON.stringify(obj),
		async:true,
		success:function(data){
			//获取到的data有酒店图片地址，酒店名称
			$('#hotelname').append(data.hotelname)
			$('#hotelphoto').attr('src',data.photourl)
		}
	})
}

commentnow=function(){
	var obj={
		"orderid":getParams("orderid"),
		"commentcontent":$('#commentcontent').val(),//评论内容
		"commentstar":$('#commentstar input[name="rating"]:checked').val()//得到的就是数字
	}
	console.log(obj)
	$.ajax({
		url:"/user/updatecomment",
		type:"POST",
		dataType:"json",
		contentType:"application/json",
		async:true,
		data:JSON.stringify(obj),
		success:function(data){
			//如果成功
			if(data=="success"){
				alert("评论成功")
				window.location.href="/clientaccount"
			}
		}
	})
	
}