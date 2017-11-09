 var request = new Object();
    request = GetRequest();
    var roomType=request['roomType'];
    var time=request['time'];
    var outTime=request['outTime']
    var applyDate=request['applyDate'];
    var timestamp=request['timestamp'];
    var telephone=request['telephone'];
    var Male=request['Male'];
    var Female=request['Female'];
    roomType=decodeURI(roomType);   
    $(".right1").click(function(){
        window.location.href='time.html?time='+timestamp+'&telephone='+telephone;
      })
     $(".right2").click(function(){
        window.location.href='outTime.html?time='+timestamp+'&telephone='+telephone+'&time='+time;
      })
    $(".right3").click(function(){
      window.location.href='chooseRoom1.html?time='+timestamp+'&telephone='+telephone+'&time='+time+'&outTime='+outTime;
    })
    console.log(roomType);
    document.getElementById("time1").value=applyDate;
    document.getElementById("time2").value=time;
    document.getElementById("time3").value=outTime;
    document.getElementById("room").value=roomType;
    document.getElementById("number").value="男士"+Male+"人 女士"+Female+"人";
    // var myDate = new Date();
    // var year=myDate.getFullYear();    
    // var month=myDate.getMonth();       
    // var day=myDate.getDate(); 
    // var time1=year+"."+month+"."+day;
     $(".return").click(function(){
      window.location.href='chooseRoom1.html?timestamp='+timestamp+'&telephone='+telephone+'&time='+time+'&outTime='+outTime;
    })