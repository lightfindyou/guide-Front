window.onload=function(){
   var place=location.hash.substring(1); 
   var height=$(window).height();
	 console.log(height);
	 $("body").css({"height":height,"backgroundColor":"#eeeeee"});
    var request = new Object();
    request = GetRequest();
    var place=request['place'];
    var telephone=request['telephone'];
    var time=request['time'];
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


      //var place=location.hash.substring(1);
      document.getElementById('place1').value=place;
      console.log(place);
      $("#return").click(function(){
          window.location.href='navigation11.html?time='+timestamp+'&telephone='+telephone;
      });
      $("#place1").focus(function(){
      var pwditem = $(this).val();
      if (pwditem = this.defaultValue) {
          pwditem = $(this).val("");
      }; 
      });

      $("#place1").blur(function(){
          var pwditem = $(this).val();
          if(pwditem ==""){
              $(this).val(this.defaultValue); 
          }
          if((pwditem!=this.defaultValue)&&(pwditem!="")){
          }
      }); 
    
     //将汉字转成unicode编码
      var str=escape(place).toLocaleLowerCase().replace(/%u/gi,'\\u');
      //用拼接字符串的方式正则表达式
      var string="/"+str+"/g";
      //将字符串转成正则表达式
      var placeName= eval(string);
      console.log(placeName);
      //获取所有标记点
      $.get("http://"+navVariable+"/navigation/getallmarkers",function(data){
      console.log(data);
      if(data.State==1){
      var obj=data.Markers;
      var len=obj.length;
      console.log(len);
      var body='';
      for(var i=1;i<=len;i++){
        if(placeName.test(data.Markers[i-1].Name)==true){
        //将标记点的坐标以id的形式存入
        body+="<div class='location' id="+data.Markers[i-1].Name+"><span class='location1' id="+data.Markers[i-1].LocX+">"+data.Markers[i-1].Name+"</span><br><span class='location2' id="+data.Markers[i-1].LocY+">石家庄市-裕华区-国网电力培训中心</span><div class='navigation'><img src='../images/navigation2.png' class='navigation1'><br><span class='navigation2'>路线</span></div></div>";
        }
      }

      document.getElementById("mid").innerHTML = body;
       $('.location').click(function(){
         var Name=$(this).attr("id");
         var TargetX=$(this).find('.location1').attr("id");
         var TargetY=$(this).find('.location2').attr("id");
         console.log(TargetX);
         console.log(TargetY);           
         window.location.href='navigation33.html?TargetX='+TargetX+'&TargetY='+TargetY+'&TargetName='+Name+'&telephone='+telephone+'&time='+timestamp;         
        })
      }
      else{
          console.log("服务器异常")
      }
      })
      
  } 