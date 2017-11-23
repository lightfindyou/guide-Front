window.onload=function(){
	var height=$(window).height();
	console.log(height);
	$(".content").css({"height":height,"backgroundColor":"#eeeeee"});
	// var userName;
	 var telephone;
	 var password;
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
	           password=document.getElementById('pwd').value;
			}
	});
	$(".finish").click(function(){
	    var data="phoneNumber="+telephone+"&password="+password+"";
		console.log(data);
		 $.post(""+variable+"/guide/login.action",data,
		 function(dataBack){
		         console.log(dataBack);     
		         if(dataBack=="success"){
		         	console.log("验证成功");		        	
		         	window.location.href='homepage.html?time='+timestamp+'&telephone='+telephone;											
		 			    }
		 		 else
		 			alert("验证失败")
							  			  
		 })	
    })
	

}



