window.onload=function(){
	var height=$(window).height();
	console.log(height);
	$(".content").css({"height":height,"backgroundColor":"#eeeeee"});

	 console.log(variable);
	 var userName;
	 var telephone;
	 var code,password,pwd;
	$("#name").focus(function(){
		var pwditem = $(this).val();
		if (pwditem = this.defaultValue) {
	        pwditem = $(this).val(""); 
	    }; 
	  });

	$("#name").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		    $(this).val(this.defaultValue); 		    
		}
		if((pwditem!=this.defaultValue)&&(pwditem!="")){
           userName=document.getElementById('name').value;
		}
	});

	$("#telephone").focus(function(){
	var pwditem = $(this).val();
	if (pwditem = this.defaultValue) {
	    pwditem = $(this).val("");
	}; 
	});

	$("#telephone").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		    $(this).val(this.defaultValue); 
		}
		if((pwditem!=this.defaultValue)&&(pwditem!="")){
           telephone=document.getElementById('telephone').value;
		}
	});	
	$("#password").focus(function(){
		var pwditem = $(this).val();
		$("#password").attr("type","password");
		if (pwditem = this.defaultValue) {
	        pwditem = $(this).val("");
	    }; 
	  });

	$("#password").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		    $(this).val(this.defaultValue); 
		    $("#password").attr("type","text");	  
		}
		if((pwditem!=this.defaultValue)&&(pwditem!="")){
           password=document.getElementById('password').value;
		}
	});
	$("#pwd").focus(function(){
		var pwditem = $(this).val();
		$("#pwd").attr("type","password");
		if (pwditem = this.defaultValue) {
		    pwditem = $(this).val("");
		}; 
	});

	$("#pwd").blur(function(){
		var pwditem = $(this).val();

		if(pwditem ==""){
		    $(this).val(this.defaultValue);
		    $("#pwd").attr("type","text");	    
		}
		if((pwditem!=this.defaultValue)&&(pwditem!="")){
	           pwd=document.getElementById('pwd').value;
			}
	});
	//获取验证码
	var wait = 60;
	function time(btn) {
	    if (wait == 0) {
	        btn.removeAttribute("disabled");
	        btn.value = "验证码";
	        wait = 60;
	    } else {
	        btn.setAttribute("disabled", true);
	        btn.value = wait + "秒";
	        wait--;
	        setTimeout(function () {
	            time(btn);
	        },
	        1000)
	    }
	}
	// var pattern=/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
 //    if(pattern.test(telephone)) { 
 //        console.log(true)
 //    }else{ 
 //       alert("手机号格式错误") 
 //    }
// if(telephone!=null){
 	$(".verifCode").click(function(){
 		if(telephone!=null){
			//手机号正则匹配
			var pattern=/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
	        if(pattern.test(telephone)) { 
	        console.log(true);
	        time(this);
			console.log(userName);
			console.log(telephone);
			var data="phoneNumber="+telephone+"";
			console.log(data);
			$.post(""+variable+"/guide/getVerifCode.action",data,
			function(dataBack){
				console.log(dataBack);
		        $("#finish").click(function(){
		        	code=document.getElementById('code').value;
			        console.log(11);
			        if((code!=null)&&(password!=null)&&(pwd!=null)){
				        if(password==pwd){
				    	    var data="userName="+userName+"&phoneNumber="+telephone+"&verifCode="+code+"&password="+password+"";
				    		console.log(data);
				    		$.post(""+variable+"/guide/register.action",data,
				    		function(dataBack){
				    			console.log(dataBack);
				    	        // data1=JSON.parse(data1);	
				    	         //var str=data1.Substring(6,dataBack.length-1);      
			    		        if(dataBack=="success"){
			    		        	console.log("验证成功");
			    		        	window.location.href='consummate.html#'+timestamp;											
			    					    }
			    				 else
			    					alert("验证失败");	    							  			  
				    		})   
				    	}
						else{
							alert("俩次密码输入不一致")
						} 
					} 
					else{
						alert("输入框不能为空");
					}
		        })
			      						  			  
			})  
	    }else{ 
	       alert("手机号格式错误") 
	    }	

	    }
	 else{
	 	alert("手机号不能为空");
	 }	
	})
 // }
 // else{
 // 	alert("手机号不能为空");
 // }
	
}



