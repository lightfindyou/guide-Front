var variable="/";
//var variable="http://localhost:8080";
//var variable="39.108.180.240:8080";
var navVariable="39.108.180.240:8181";
var timestamp=new Date().getTime();

function GetRequest() {  
  var url = location.search; //获取url中"?"符后的字串  
  url=decodeURI(url);
  var theRequest = new Object();   
  if (url.indexOf("?") != -1) {   
  var str = url.substr(1);   
  strs = str.split("&");   
  for(var i = 0; i < strs.length; i ++) {   
   theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
}   
}   
return theRequest;   
}
 