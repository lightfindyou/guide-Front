    var phone;
    var code;
    //var telephone=location.hash.substring(1);
    var request = new Object();
    request = GetRequest();
    var telephone=request['telephone'];
    var time=request['time']; 
    $("#phone").focus(function(){
    var pwditem = $(this).val();
    if (pwditem = this.defaultValue) {
        pwditem = $(this).val("");
    }; 
    });

    $("#phone").blur(function(){
        var pwditem = $(this).val();
        if(pwditem ==""){
            $(this).val(this.defaultValue); 
        }
        if((pwditem!=this.defaultValue)&&(pwditem!="")){
           phone=document.getElementById('phone').value;
        }
    }); 
    $("#code").focus(function(){
        var pwditem = $(this).val();
        if (pwditem = this.defaultValue) {
            pwditem = $(this).val("");
        }; 
    });

    $("#code").blur(function(){
        var pwditem = $(this).val();
        if(pwditem ==""){
            $(this).val(this.defaultValue); 
        }
        if((pwditem!=this.defaultValue)&&(pwditem!="")){
           code=document.getElementById('code').value;
        }
    }); 
    //获取验证码
    var wait = 60;
    function time(btn) {
        if (wait == 0) {
            btn.removeAttribute("disabled");
            btn.value = "获取验证码";
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
    $(".getCode").click(function(){
    	time(this);
        console.log(phone);
        var data="phoneNumber="+phone+"";
        console.log(data);
        $.post(""+variable+"/guide/getVerifCode.action",data,
        function(dataBack){
            console.log(dataBack);
            //document.getElementById('getCode').value=dataBack;    
                                                  
        })  
          $(".next").click(function(){
               // var code=document.getElementById('getCode').value;
                var data1="phoneNumber="+phone+"&verifCode="+code+"";
                $.post(""+variable+"/guide/checkVerificationCode.action",data1,
                    function(dataBack1){
                        console.log(dataBack1);
                        if(dataBack1=="success"){
                            window.location.href='findPassword2.html?time='+timestamp+'&telephone='+phone; 
                        }
                        else{
                            console.log("失败");
                        }

                    })
            })  
    } )
    $('.return').click(function(){
        window.location.href='homepage.html?time='+timestamp+'&telephone='+telephone; 
    })
    // $('.next').click(function(){
    //     window.location.href="findPassword2.html"; 
    // })