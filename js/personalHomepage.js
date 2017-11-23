 window.onload=function(){
        //var telephone=location.hash.substring(1); 
         var request = new Object();
        request = GetRequest();
        var telephone=request['telephone'];
        var time=request['time']; 
        var data="phoneNumber="+telephone+"";
        console.log(data);
        $.post(""+variable+"/guide/getPersionalInfo.action",data,
        function(dataBack){
            dataBack=JSON.parse(dataBack);
            console.log(dataBack.IDNumber);
            //  document.getElementById('body').innerHTML='<div class="form"><span class="left">姓名</span><span class="right">'+dataBack.userName+'</span></div><div class="form"><span class="left">班级</span><span class="right">'+dataBack.classes+'</span></div><div class="form"><span class="left">性别</span><span class="right">'+dataBack.gender+'</span></div><div class="form"><span class="left">身份证号</span><span class="right">'+dataBack.IDNumber+'</span></div><div class="form"><span class="left">电子邮箱</span><span class="right">'+dataBack.email+'</span></div><div class="form"><span class="left">用户名</span><span class="right">'+dataBack.userName+'</span></div><div class="form"><span class="left">密码</span><span class="right">'+dataBack.password+'</span></div><div class="form"><span class="left">手机号</span><span class="right" id="phone">'+dataBack.phoneNumber+'</span><span class="change">修改</span></div>';                                               
            document.getElementById('name').value=dataBack.userName;
            document.getElementById('sex').value=dataBack.gender;
            document.getElementById('IDNumber').value=dataBack.IDNumber;
            document.getElementById('email').value=dataBack.email;
           // document.getElementById('userName').value=dataBack.userName;
            document.getElementById('password').value=dataBack.password;
            document.getElementById('telephone').value=dataBack.phoneNumber;
        })
         var userName,gender,IDNumber,phoneNumber,email,password;
        $("#edit").show();
        $("#finish").hide();
        $(".eye1").hide();
        $(".eye").show();
        $(".right").attr("disabled","disabled"); 
        $(".edit").click(function(){
          $(".right").css({"border":"1px solid #64779f"});
          $(".right").removeAttr("disabled");
          $("#edit").hide();
          $("#finish").show();
          $("#finish").click(function(){
            userName=document.getElementById('name').value;
            gender=document.getElementById('sex').value;
            IDNumber=document.getElementById('IDNumber').value;
            email=document.getElementById('email').value;
           // userName=document.getElementById('userName').value;
            password=document.getElementById('password').value;
            phoneNumber=document.getElementById('telephone').value;
            if((userName!=null)&&(gender!=null)&&(IDNumber!=null)&&(phoneNumber!=null)&&(email!=null)&&(password!=null)){ 
              var data="userName="+userName+"&gender="+gender+"&IDNumber="+IDNumber+"&phoneNumber="+phoneNumber+"&email="+email+"&password="+password+"";
              console.log(data);
              $.post("/guide/completeUser.action",data,function(dataBack){
                console.log(dataBack);
                // dataBack=JSON.parse(dataBack);
                 // document.getElementById('code').value=dataBack.verifCode; 
                // if(dataBack.status=="success"){
                //var str=data1.Substring(6,dataBack.length-1);      
              if(dataBack=="success"){             
                  console.log("success");
                  alert("修改成功");
                }
                else{
                  alert("修改失败");
                }
              })
            }
            else{
              alert("输入框不能为空")
            }
            $(".right").css({"border":"none"});
            $(".right").attr("disabled","disabled"); 
            $("#edit").show();
            $("#finish").hide();
          })
        })
        $(".eye").click(function(){
          $(".eye").hide();
          $(".eye1").show();
          $("#password").attr('type','text'); 
          $(".eye1").click(function(){
            $(".eye1").hide();
            $(".eye").show();
            $("#password").attr('type','password');
          }) 
        })
        
        $('.return').click(function(){
        window.location.href='homepage.html?time='+timestamp+'&telephone='+telephone; 
        })
        $('.change').click(function(){
        window.location.href="changePhone1.html#"+timestamp; 
        })
        $('.quit').click(function(){             
              var message=confirm("确定要退出吗？");
              if(message==true){
                window.location.href="landing.html#"+timestamp;                
             }
        })
     }