window.onload=function(){
     var body=''; 
     var TargetX;
     var TargetY;
     //var telephone=location.hash.substring(1); 
      var request = new Object();
      request = GetRequest();
      var telephone=request['telephone'];
      var time=request['time']; 
      var data="phoneNumber="+telephone+"";
      console.log(data);
      $.post(""+variable+"/guide/getMyCourse.action",data,
      function(dataBack){
         console.log(dataBack);         
              var dataBack=JSON.parse(dataBack);
              console.log(dataBack[0].courseName);
              var length=dataBack.length;  
              console.log(length)
              for(var i=0;i<=length-1;i++){
              body+="   <div class='form'><div class='course1'><span >"+dataBack[i].courseName+"</span></div><div class='course2'><span >"+dataBack[i].teacherName+"</span></div><div class='course3''><span>"+dataBack[i].courseSeq+"</span></div><div class='course4'><div class='hotel'> <span class='location'>"+dataBack[i].location+"</span></div><div class='route'><span >路线</span><img src='../images/line_blue.png' ></div></div><div class='clear'> </div> </div>"
            
              }
              document.getElementById('body').innerHTML = body;
              
            })   
        $('.return').click(function(){
        window.location.href='homepage.html?time='+timestamp+'&telephone='+telephone; 
      })
     $("body").delegate(".course4","click",function(){
        var location=$(this).find(".location").html();
        console.log(location);
        var num=0;
        var lenLocation=location.length;
        for(var i=0;i++;i<lenLocaiton){
          if (lenLocaiton[i]!= "number")
          {
              num++;
          }
          else
            break;
        }
        var place=location.substring(0,lenLocation-3);
         //将汉字转成unicode编码
        console.log(place);
        var str=escape(place).toLocaleLowerCase().replace(/%u/gi,'\\u');
        //用拼接字符串的方式正则表达式
        //console.log(str);
        var string="/"+str+"/g";
        //将字符串转成正则表达式
      //  console.log(string);
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
        	console.log(data.Markers[i-1].Name);
        	console.log(place);
          if(data.Markers[i-1].Name==place){
        	  console.log(1);
            TargetX=data.Markers[i-1].LocX;
            TargetY=data.Markers[i-1].LocY;
            console.log(TargetX);
            console.log(TargetY);           
            window.location.href='navigation33.html?TargetX='+TargetX+'&TargetY='+TargetY+'&TargetName='+place+'&telephone='+telephone+'&time='+timestamp; 
          //body+="<div class='location' id="+data.Markers[i-1].MarkerId+"><span class='location1' id="+data.Markers[i-1].LocX+">"+data.Markers[i-1].Name+"</span><br><span class='location2' id="+data.Markers[i-1].LocY+">石家庄市-裕华区-国网电力培训中心</span><div class='navigation'><img src='../images/navigation2.png' class='navigation1'><br><span class='navigation2'>路线</span></div></div>";
          }
          else{
        	  console.log(false);
          }
          
        }

       // document.getElementById("mid").innerHTML = body;
        // $('.location').click(function(){         
         //  console.log(TargetX);
         //  console.log(TargetY);           
          // window.location.href='navigation33.html?TargetX='+TargetX+'&TargetY='+TargetY+'&TargetName='+placeName+'&telephone='+telephone;         
          //})
        }
        else{
            console.log("服务器异常")
        }
        })
     });
    //      $.get("http://"+variable+"/guide/getMyCourse.action",
    //         function(data){    
    //         console.log(data);         
    //           var dataBack=JSON.parse(data);
    //           console.log(dataBack[0].courseName);
    //           var length=dataBack.length;  
    //           console.log(length)
    //           for(var i=0;i<=length-1;i++){
    //           body+="   <div class='form'><div class='course1'><span >"+dataBack[i].courseName+"</span></div><div class='course2'><span >"+dataBack[i].teacherName+"</span></div><div class='course3''><span>"+dataBack[i].courseSeq+"</span></div><div class='course4'><div class='hotel'> <span >"+dataBack[i].location+"</span></div><div class='route'><span >路线</span><img src='../images/line_blue.png' ></div></div><div class='clear'> </div> </div>"
            
    //           }
    //           document.getElementById('body').innerHTML = body;
             
    //         })   
    //     $('.return').click(function(){
    //     window.location.href="homepage.html"; 
    // })
     
     }