//var dataBack=location.hash.substring(1); 
var request = new Object();
request = GetRequest();
var timestamp=request['time'];
var telephone=request['telephone'];
var dataBack=request['dataBack'];
dataBack=JSON.parse(dataBack);
console.log(dataBack);
document.getElementById("time1").value=dataBack.applyDate;
document.getElementById("time2").value=dataBack.checkInDate;
document.getElementById("time3").value=dataBack.checkOutDate;
document.getElementById("room").value=dataBack.roomType;
document.getElementById("number").value="男士"+dataBack.male+"人 女士"+dataBack.female+"人";
var time=dataBack.checkInDate;
var outTime=dataBack.checkInDate;
$(".return").click(function(){
    window.location.href='homepage.html?time='+timestamp+'&telephone='+telephone;
})
 $("#finish").click(function(){
    window.location.href='homepage.html?time='+timestamp+'&telephone='+telephone;
})
 $(".right1").click(function(){
    window.location.href='time.html?time='+timestamp+'&telephone='+telephone;
  })
 $(".right2").click(function(){
    window.location.href='outTime.html?time='+timestamp+'&telephone='+telephone+'&time='+time;
  })
$(".right3").click(function(){
  window.location.href='chooseRoom1.html?time='+timestamp+'&telephone='+telephone+'&time='+time+'&outTime='+outTime;
})