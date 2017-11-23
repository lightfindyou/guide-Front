window.onload=function(){
	var userName,password,pwd;
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
	$("#password").focus(function(){
		var pwditem = $(this).val();
		if (pwditem = this.defaultValue) {
	        pwditem = $(this).val("");
	    }; 
	  });

	$("#password").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		    $(this).val(this.defaultValue); 
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
	//2.	完善个人账户
	$(".finish").click(function(){
		console.log(pwd);
		console.log(password);
		if(password==pwd){
            var data="phoneNumber="+userName+"&password="+password+"";
            console.log(data);
            $.post("http://localhost:8080/guide/completeAccount.action",data,function(dataBack){
            	// dataBack=JSON.parse(dataBack);
            	//var str=data1.Substring(6,dataBack.length-1); 
            	if(dataBack=="success"){
            		window.location.href="consummate1.html";
            		console.log("success");
            	}
            })
		}
		else{
			alert("俩次密码输入不一致")
		}
	})

}