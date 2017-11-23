 var myCalendar = new SimpleCalendar('#calendar');
  var request = new Object();
    request = GetRequest();
    var telephone=request['telephone'];
    var timestamp=request['time'];  
       var intTime;
       $(".sc-select-year").attr("disabled","disabled");
       $(".sc-select-month").attr("disabled","disabled");
       $(".sc-item").click(function(){
         $(this).css("color","#FFF");
         $(this).parent().siblings().find("td").css("background-color","");
         $(this).css("background-color","#64779f").siblings().css({"background-color":"","color":"#64779f"});
          var day=$(this).find(".day").html();
          console.log(day);
          var year=$(".sc-select-year").val();
          console.log(year);
          var month=$(".sc-select-month").val();
          console.log(month);
          document.getElementById('num').innerHTML="您所选的日期是"+month+"月"+day+"号";
          inTime=year+"."+month+"."+day;

       });
       $(".finish").click(function(){
        window.location.href='outTime.html?time='+timestamp+'&telephone='+telephone+'&inTime='+inTime;
       })
       $(".return").click(function(){
        window.location.href='homepage.html?time='+timestamp+'&telephone='+telephone;
       })