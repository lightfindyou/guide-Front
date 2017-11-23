window.onload=function(){
	$("#name").focus(function(){
		var pwditem = $(this).val();
		if (pwditem = this.defaultValue) {
	        pwditem = $(this).val(""); 
	        $("#pwd").show();
	        $("#pword").hide();
	    }; 
	  });

	$("#name").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		    $(this).val(this.defaultValue); 
		}
	});

	$("#telephone").focus(function(){
	var pwditem = $(this).val();
	if (pwditem = this.defaultValue) {
	    pwditem = $(this).val("");
	    $("#pwd").hide();
	    $("#pword").show(); 
	}; 
	});

	$("#telephone").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		    $(this).val(this.defaultValue); 
		}
	});
	var userName=document.getElementById('name').value;
	var telephone=document.getElementById('telephone').value;
	//获取验证码
	//$(".verifCode").click(function(){
	//	var data="phoneNumber="+telephone+"";
	//	$.post("http://localhost:8080/guide/getVerifCode.action",data,
	//	function(dataBack){
		//	var str=data1.Substring(8,dataBack.length-1);
	  //      document.getElementById('code').value=str;    
		      						  			  
		//})  
	//}   )
	var code=document.getElementById('code').value;
	console.log(userName);
	//点击完成跳转页面
	$(".landing").click(function(){
		// var temp={"userName":"","password":"","verifCode":""}
		// var data={"data":{"userName":"","password":"","verifCode":""}};
		// temp.userName=userName;
		// temp.password=telephone;
		// temp.verifCode=code;	      
		// temp=JSON.stringify(temp);    
		// data.data=temp; 
		// data1=status=success
	    var data="userName="+userName+"&password="+telephone+"&verifCode="+code+"";
		$.post("/guide/register.action",data,
		function(dataBack){
			console.log(dataBack);
	        // data1=JSON.parse(data1);	
	         var str=dataBack.Substring(6,dataBack.length()-1);      
		        if(str=="success"){
		        	console.log("验证成功");
		        	window.location.href='consummate2.html';											
					    }
				 else
					alert("验证失败")
							  			  
		})     
    })

}



