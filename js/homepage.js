    $(".content1").hide();
    $(".content").show();
   // var telephone=location.hash.substring(1);
     var request = new Object();
    request = GetRequest();
    var telephone=request['telephone'];
    var time=request['time'];  
    console.log(telephone);
    document.getElementById('menu').innerHTML="<div class='personal'><img src='../images/image5.png'><span id="+telephone+">个人主页</span></div><div class='lesson'><img src='../images/image6.png'><span id="+telephone+">课程信息</span></div>";
    document.getElementById('bottom').innerHTML="<img src='../images/bottom.png'/ class='bottomMap'> <div class='find'>导航</div><div class='map' id="+telephone+"><img src='../images/navigation4.png' class='navigation' id='navigation1'></div>";

          
    $(function(){
      $('#myCarousel').carousel({
        interval:2000
      })
    })

    // $(".documitory").click(function(){
    // 	telephone=$(this).find('span').attr("id");
    //     var data="phoneNumber="+telephone+"";
    //     console.log(data);
    //     $.post("http://"+variable+"/guide/myDorm.action",data,
    //     function(dataBack){
    //        console.log(dataBack);     
    //       if(dataBack=="none"){
    //         window.location.href="time.html";                   
    //         }
    //        else
    //         window.location.href="chooseRoom5.html#"+dataBack;
    //     })
    //   // $.get("http://"+variable+"/guide/myDorm.action",
    //   // function(dataBack){
    //   //   console.log(dataBack);     
    //   //     if(dataBack=="none"){
    //   //       window.location.href="time.html";                   
    //   //       }
    //   //      else
    //   //       window.location.href="chooseRoom5.html#"+dataBack;                         
    //   // })     
    // })
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