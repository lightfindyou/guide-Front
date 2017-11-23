window.onload=function(){
   var date = new Date(); 
	var month= date.getMonth()+1;
	var year = date.getFullYear(); 
	var time;
	var monthsInEng=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	document.getElementById("month").innerHTML=monthsInEng[month-1];
	document.getElementById("year").innerHTML=year;
	$("table tr td").click(function(){
	    var text=$(this).text();
	    $(this).css("background-color","#529ed7").siblings().css("background-color","");
	    $(this).parent().siblings().find("td").css("background-color","");
	   document.getElementById('num').innerHTML="您所选的日期是"+month+"月"+text+"号";
	   time=year+"."+month+"."+text;
	  })
	
	$(".finish").click(function(){
		window.location.href='hotle.html#'+time;
	})
}
