 //var time=location.hash.substring(1);
      var height=$(window).height();
      console.log(height);
      $(".content").css({"height":height,"backgroundColor":"#eeeeee"});
      var request = new Object();
      request = GetRequest();
      var telephone=request['telephone'];
      var timestamp=request['timestamp']; 
      var time=request['time'];
      var outTime=request['outTime']; 
       var roomType,number,sex,Male,Female,doubleRoom,quadRoom;           
       var value="";
       var radio=document.getElementsByName("sex");
       var reg = new RegExp("^[0-9]*$");      
       // $(".doubleRoom").click(function(){
       //  $(this).css("background-color","#64779f");
       //  $('.quadRoom').css("background-color","rgba(218,218,218,0.4)");
       //  number=$(this).children().length;
       //  });
       //  $(".quadRoom").click(function(){
       //  $(this).css("background-color","#64779f");
       //  $('.doubleRoom').css("background-color","rgba(218,218,218,0.4)");
       //  number=$(this).children().length;        
       //  })       
        $('.next').click(function(){ 
            // for(var i=0;i<radio.length;i++){
            // if(radio[i].checked==true){
            // value=radio[i].value;  
            // break;
            // }
            // }
            // console.log(value); 
            // sex=value; 
            Male=$("#number1").val();
            Female=$("#number2").val();
            doubleRoom=$("#number3").val();
            quadRoom=$("#number4").val();
            console.log(Male);
            if ((!reg.test(Male))&&(!reg.test(Female))&&(!reg.test(doubleRoom))&&(!reg.test(quadRoom))) {
              alert("请输入数字")
            }     
            // if(number==2){
            //  roomType="双人间";
            // }
            // else if(number==4){
            //  roomType="四人间";
            // }
            var myDate = new Date();
            var year=myDate.getFullYear();    
            var month=myDate.getMonth();       
            var day=myDate.getDate(); 
            var applyDate=year+"."+month+"."+day;
            roomType=doubleRoom+"间双人间,"+quadRoom+"间四人间";
            console.log(roomType);console.log(time);
            var data="phoneNumber="+telephone+"&checkInDate="+time+"&checkOutDate="+outTime+"&roomType="+roomType+"&Male="+Male+"&Female="+Female+"";
            console.log(data);
              $.post(""+variable+"/guide/applyRoom.action",data,
              function(dataBack){
                console.log(dataBack);    
                if(dataBack=="success"){
                  console.log("成功");
                  roomType=roomType;
                  window.location.href='chooseRoom4.html?roomType=' +encodeURI(roomType)+ '&time=' + time+ '&applyDate=' + applyDate+'&timestamp='+timestamp+'&telephone='+telephone+'&Male='+Male+'&Female='+Female+'&outTime='+outTime;                      
                  }
                else
                  alert("失败")                          
              })     
        })
        $(".return").click(function(){
          window.location.href='outTime.html?time='+timestamp+'&telephone='+telephone+'&inTime='+time;
        })

