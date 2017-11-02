window.onload=function(){
	var height=$(window).height();
	console.log(height);
	$(".content").css({"height":height,"backgroundColor":"#eeeeee"});
	var userName,gender,IDNumber,phoneNumber,email,classes;
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
	$("#sex").focus(function(){
		var pwditem = $(this).val();
		if (pwditem = this.defaultValue) {
		    pwditem = $(this).val("");	         
		}; 
	});

	$("#sex").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		    $(this).val(this.defaultValue); 
		}
		if((pwditem!=this.defaultValue)&&(pwditem!="")){
          gender=document.getElementById('sex').value;
		}
	});
	$("#certificate").focus(function(){
		var pwditem = $(this).val();
		if (pwditem = this.defaultValue) {
		pwditem = $(this).val("");
		}; 		
	});

	$("#certificate").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		$(this).val(this.defaultValue); 
		}
		if((pwditem!=this.defaultValue)&&(pwditem!="")){
          IDNumber=document.getElementById('certificate').value;
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
          phoneNumber=document.getElementById('telephone').value;
		}
	});
	$("#mail").focus(function(){
		var pwditem = $(this).val();
		if (pwditem = this.defaultValue) {
		pwditem = $(this).val("");
		}; 
	});

	$("#mail").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		$(this).val(this.defaultValue); 
		}
		if((pwditem!=this.defaultValue)&&(pwditem!="")){
           email=document.getElementById('mail').value;
		}
	});
	$("#classes").focus(function(){
		var pwditem = $(this).val();
		if (pwditem = this.defaultValue) {
		pwditem = $(this).val("");
		}; 
	});

	$("#classes").blur(function(){
		var pwditem = $(this).val();
		if(pwditem ==""){
		$(this).val(this.defaultValue); 
		}
		if((pwditem!=this.defaultValue)&&(pwditem!="")){
           classes=document.getElementById('classes').value;
		}
	});
	//3.	完善个人信息
	$(".finish").click(function(){
        var data="userName="+userName+"&gender="+gender+"&IDNumber="+IDNumber+"&phoneNumber="+phoneNumber+"&email="+email+"&Classes="+classes+"";
        console.log(data);
        $.post("http://"+variable+"/guide/completeUser.action",data,function(dataBack){
        	console.log(dataBack);
        	// dataBack=JSON.parse(dataBack);
        	 // document.getElementById('code').value=dataBack.verifCode; 
        	// if(dataBack.status=="success"){
        	//var str=data1.Substring(6,dataBack.length-1);      
		    if(dataBack=="success"){
        		window.location.href="success.html";
        		console.log("success");
        	}
        })
		
	})
}