﻿    $(".content1").hide();
    $(".content").show();
    var height=$(window).height();
    console.log(height);
    $(".content").css({"height":height,"backgroundColor":"#eeeeee"});
    $(".check").click(function(){
      $(this).css({"backgroundColor":"#eeeeee"});
    })
    $(".check").on("click",function(){
  $(this).addClass("on").siblings().removeClass("on");
})
   // var telephone=location.hash.substring(1);
     var request = new Object();
    request = GetRequest();
    var telephone=request['telephone'];
    var time=request['time'];  
    console.log(telephone);
    document.getElementById('menu').innerHTML=" <div class='documitory'><img src='../images/image4.png'><span id="+telephone+">我的宿舍</span></div><div class='personal'><img src='../images/image5.png'><span id="+telephone+">个人主页</span></div><div class='lesson'><img src='../images/image6.png'><span id="+telephone+">课程信息</span></div>";
    document.getElementById('bottom').innerHTML="<img src='../images/bottom.png'/ class='bottomMap'> <div class='find'>导航</div><div class='map' id="+telephone+"><img src='../images/navigation4.png' class='navigation' id='navigation1'></div>";

          
    $(function(){
      $('#myCarousel').carousel({
        interval:2000
      })
    })

    $(".documitory").click(function(){
    	telephone=$(this).find('span').attr("id"); 
        var data="phoneNumber="+telephone+""; 
      var data="phoneNumber="+telephone+"";    
     $.post(""+variable+"/guide/getPersionalInfo.action",data,
        function(dataBack){
            dataBack=JSON.parse(dataBack);
            console.log(dataBack.IDNumber);
            if(dataBack.IDNumber=="NIL"){
              var message=confirm("请先完善个人信息");
              if(message==true){
                window.location.href='consummate.html?time='+timestamp+'&telephone='+telephone;                
              }             
            }
            else{
             // var data="phoneNumber="+telephone+"";
              console.log(data);
              $.post(""+variable+"/guide/myDorm.action",data,
              function(dataBack){
                console.log(dataBack);
                var data=JSON.parse(dataBack);
                console.log(data.handle);     
                if(data.noApplyRecord==1){
                  window.location.href='time.html?time='+timestamp+'&telephone='+telephone;                   
                  }
                 else{
                  if(data.handle==0){
                    var roomType=data.roomType;
                    var time=data.checkInDate;
                    var outTime=data.checkOutDate;
                    var applyDate=data.applyDate;
                    var Male=data.male;
                    var Female=data.female;
                    //var roomType=request['roomType'];
                    window.location.href='chooseRoom4.html?roomType=' +encodeURI(roomType)+ '&time=' + time+ '&applyDate=' + applyDate+'&timestamp='+timestamp+'&telephone='+telephone+'&Male='+Male+'&Female='+Female+'&outTime='+outTime;   
                  }
                  else{
                    urlByjxz='chooseRoom5.html?time='+timestamp+'&telephone='+telephone+'&dataBack='+dataBack;
                    transformedUrl=encodeURI(urlByjxz);
                    window.location.href=transformedUrl;
                  }
                   
                 }
                 // window.location.href='chooseRoom5.html?time='+timestamp+'&telephone='+telephone+'&dataBack='+dataBack;
              })
            }
           
        })
    })
    $(".personal").click(function(){
    	telephone=$(this).find('span').attr("id");
      window.location.href='personalHomepage.html?time='+timestamp+'&telephone='+telephone;
    })
    $(".lesson").click(function(){
    	telephone=$(this).find('span').attr("id");
      window.location.href='course.html?time='+timestamp+'&telephone='+telephone;
    })
    // $(".find").click(function(){
    //   window.location.href="findPassword1.html#"+telephone;
    // })
    $("#bottom").click(function(){
      window.location.href='navigation11.html?time='+timestamp+'&telephone='+telephone;
        // var url ="html/"+ event.target.id + ".html";
        // //获取token
        // $.get('http://'+variable+'.ngrok.io/Main/GetBaseInfo', {
        //     rawUrl: url
        // }, function (data) {
        //     localStorage.setItem("baseInfo", JSON.stringify(data));
        //     url=url.substring(5,21);
        //     location.href = url;
        // });
    })