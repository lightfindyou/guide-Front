 var time=location.hash.substring(1); 
       var roomType,number;      
       $(".doubleRoom").click(function(){
        $(this).css("background-color","#64779f");
        $('.quadRoom').css("background-color","rgba(218,218,218,0.4)");
        number=$(this).children().length;
        });
        $(".quadRoom").click(function(){
        $(this).css("background-color","#64779f");
        $('.doubleRoom').css("background-color","rgba(218,218,218,0.4)");
        number=$(this).children().length;        
        })       
        $('.next').click(function(){
         if(number==2){
          roomType="双人间";
         }
         else if(number==4){
          roomType="四人间";
         }
        var myDate = new Date();
        var year=myDate.getFullYear();    
        var month=myDate.getMonth();       
        var day=myDate.getDate(); 
        var applyDate=year+"."+month+"."+day;
        console.log(roomType);console.log(time);
        var data="applyDate="+applyDate+"&roomType="+roomType+"&date="+time+"";
        console.log(data);
          $.post("http://"+variable+"/guide/applyRoom.action",data,
          function(dataBack){
            console.log(dataBack);    
            if(dataBack=="success"){
              console.log("成功");
              roomType=roomType;
              window.location.href='chooseRoom4.html?roomType=' +encodeURI(roomType)+ '&time=' + time+ '&applyDate=' + applyDate;                      
              }
            else
              alert("失败")                          
          })     
        })