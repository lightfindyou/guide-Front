 //var phone=location.hash.substring(1);
   var request = new Object();
    request = GetRequest();
    var phone=request['telephone'];
    var time=request['time']; 
	var pwd;
    var newPassword;
    $("#pwd").focus(function(){
    var pwditem = $(this).val();
    if (pwditem = this.defaultValue) {
        pwditem = $(this).val("");
    }; 
    $("#pwd").attr("type","password");
    });

    $("#pwd").blur(function(){
        var pwditem = $(this).val();
        if(pwditem ==""){
            $(this).val(this.defaultValue); 
        }
        if((pwditem!=this.defaultValue)&&(pwditem!="")){
           pwd=document.getElementById('pwd').value;
        }
    }); 
    $("#newPassword").focus(function(){
        var pwditem = $(this).val();
        if (pwditem = this.defaultValue) {
            pwditem = $(this).val("");
        }; 
        $("#newPassword").attr("type","password");
    });

    $("#newPassword").blur(function(){
        var pwditem = $(this).val();
        if(pwditem ==""){
            $(this).val(this.defaultValue); 
        }
        if((pwditem!=this.defaultValue)&&(pwditem!="")){
           newPassword=document.getElementById('newPassword').value;
        }
    }); 
    $(".finish").click(function(){
        console.log(pwd);
        console.log(newPassword);
        if(pwd==newPassword){
            var data="phoneNumber="+phone+"&password="+newPassword+"";
            console.log(data);
            $.post(""+variable+"/guide/changePassword.action",data,
            function(dataBack){
                console.log(dataBack);
                if(dataBack=="success"){
                alert("修改密码成功");
                window.location.href="landing.html#"+timestamp; 
                }
                                                      
            })  
        }
       
    }   )
    $('.return').click(function(){
        window.location.href='changePhone1.html?time='+timestamp+'&telephone='+phone; 
    })
    // $('.finish').click(function(){
    //     window.location.href="#"; 
    // })