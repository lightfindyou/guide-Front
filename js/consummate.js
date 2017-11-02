window.onload=function(){
	var height=$(window).height();
	console.log(height);
	$(".content").css({"height":height,"backgroundColor":"#eeeeee"});
	var userName,gender,IDNumber,phoneNumber,email;
	//匹配中文姓名
	var regChinese=function(card){
		var regChineseChar=/^[\u4e00-\u9fa5]+$/;
		if(regChineseChar.test(card)==true){
			return true;
			console.log("姓名格式正确");
		}
		else{
			return false;
			// alert("请输入真实姓名");
		}
	}
	//匹配身份证号码
	var isCardNo=function(card){
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
		if(reg.test(card)==true){
			return true;
			console.log("身份证格式正确");
		}
		else{
			return false;
			// alert("身份证格式不正确");
		}
	}
	//匹配性别
	var isSex=function(sex){
		var sexReg=/^['男'|'女']$/; 
		if(sexReg.test(sex)==true){
			return true;
			console.log("格式正确");
		}
		else{
			return false;
			alert("请输入男或女");
		}
	}
	//匹配手机号
	var istelephone=function(telephone){
		var telephoneReg=/(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		if(telephoneReg.test(telephone)==true){
			return true;
			console.log("手机号格式正确");
		}
		else{
			return false;
			alert("手机号格式错误");
		}
	}
	//匹配邮箱
	var isMail=function(szMail){
		var szReg=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
		if(szReg.test(szMail)==true){
			return true;
			console.log("邮箱格式正确");
		}
		else{
			return false;
			alert("邮箱格式错误");
		}
    } 
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
           if(regChinese(userName)==false){
			alert("请输入真实姓名");
		}
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
          if(isSex(gender)==false){
			alert("请输入男或女");
		  }
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
          if(isCardNo(IDNumber)==false){
          	alert("身份证格式不正确");
          }
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
           if(istelephone(phoneNumber)==false){
          	alert("手机号格式不正确");
          }
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
           if(isMail(email)==false){
          	alert("邮箱格式不正确");
          }
		}
	});
	
	//3.	完善个人信息
	$(".finish").click(function(){	
	    if((userName!=null)&&(gender!=null)&&(IDNumber!=null)&&(phoneNumber!=null)&&(email!=null)){	
	        var data="userName="+userName+"&gender="+gender+"&IDNumber="+IDNumber+"&phoneNumber="+phoneNumber+"&email="+email+"";
	        console.log(data);
	        $.post(""+variable+"/guide/completeUser.action",data,function(dataBack){
	        	console.log(dataBack);
	        	// dataBack=JSON.parse(dataBack);
	        	 // document.getElementById('code').value=dataBack.verifCode; 
	        	// if(dataBack.status=="success"){
	        	//var str=data1.Substring(6,dataBack.length-1);      
			    if(dataBack=="success"){
	        		window.location.href="success.html#"+timestamp;
	        		console.log("success");
	        	}
	        })
		}
		else{
			alert("输入框不能为空")
		}
	})
}