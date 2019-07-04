$(function(){
	if(window.sessionStorage.hasOwnProperty("hotelinfo")==true){
		$('#PhoneOrLogin').append(window.sessionStorage.getItem("hotelinfo").hotelphone)
		$('#LogoutOrRegister').append("退出")
	}
	else{
		$('#PhoneOrLogin').append("登录")
		$('#LogoutOrRegister').append("注册")
	}
	
})