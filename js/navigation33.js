  //绘制导航线
   //  var request = new Object();
   //  request = GetRequest();
   //  var TargetX=request['TargetX'];
   //  var TargetY=request['TargetY'];
   //  var TargetName=request['TargetName'];
   //  var telephone=request['telephone'];
   //  var time=request['time'];
   // // document.getElementById('place').value=TargetName;
   //  TargetX1=parseFloat(TargetX);
   //  TargetY1=parseFloat(TargetY);  
   //  function GetRequest() {  
   //    var url = location.search; //获取url中"?"符后的字串  
   //    url=decodeURI(url);
   //    var theRequest = new Object();   
   //    if (url.indexOf("?") != -1) {   
   //    var str = url.substr(1);   
   //    strs = str.split("&");   
   //    for(var i = 0; i < strs.length; i ++) {   
   //     theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
   //  }   
   //  }   
   //  return theRequest;   
   //  }
   //  console.log(TargetX);
    $(".users1").click(function(){
        console.log(place);
       window.location.href='navigation11.html?time='+timestamp+'&telephone='+telephone;
    })
      //y=k*x+b线性
    var k_x=-84337.34939759;
    var b_x=9661075.710843;//关于x轴的映射
    var k_y=111702.1276595;
    var b_y=-4246208.0957445;//关于呀轴的映射
    var line;//未走路线
    var circle;//当前点
    var line1;//已走路线
    var p_Lng;//经度
    var p_Lat;//纬度
    var LocX;
    var LocY;
    var angle;
    // wx.getLocation({
    //     success: function (res) {
    //         LocY = res.latitude; // 纬度
    //         LocX = res.longitude; // 经度
    //         console.log(LocX);
    //         console.log(LocY);
        
    //     }
    // });

    LocX=114.552673;
    LocY=38.015750;//仿真中心  
    var temp={"LocX":"","LocY":"","TargetX":"","TargetY":""};
    temp.LocX= LocX; 
    temp.LocY= LocY;  
    temp.TargetX=TargetX1;
    temp.TargetY=TargetY1;  
   // temp=JSON.stringify(temp);  
    console.log(temp);
    $.post("http://"+navVariable+"/navigation/pathplanning",temp,function(dataBack){
      console.log(dataBack);
      if(dataBack.State==1){              
        //获取绘制导航线的点
        var points=dataBack.Path;
        var length=points.length;         
        console.log(points);  
         //给每个点进行映射
        var point2=[];
        var vector2;
        for(var i=0;i<length;i++){
          vector2= new THREE.Vector3( dataBack.Path[i].LocX*k_x+b_x, 2, (dataBack.Path[i].LocY*k_y+b_y));
          point2.push(vector2);
        }
        console.log(point2);
        var shape2 = new THREE.Shape();
        /**四条直线绘制一个矩形轮廓*/
        shape2.moveTo(0, 0);//起点
        shape2.lineTo(0, 2);//第2点
        shape2.lineTo(0.25, 2);
        shape2.lineTo(0.5, 0);
        shape2.lineTo(0, 0);                
         /**创建轮廓的扫描轨迹(3D样条曲线)*/
        var curve2 = new THREE.CatmullRomCurve3(point2);
        var geometry2 = new THREE.ExtrudeGeometry(//拉伸造型
            shape2,//二维轮廓
            //拉伸参数
            {
                bevelEnabled:false,//无倒角
                extrudePath:curve2,//选择扫描轨迹
                steps:50//扫描方向细分数
            }
        );
        var material2=new THREE.MeshPhongMaterial({color:0x1565c0});//材质对象
        line2=new THREE.Mesh(geometry2,material2);//网格模型对象
        scene.add(line2);//网格模型添加到场景中
        var update=window.setInterval(function(){
   
             //time++;
           // scene.remove(line2);//去除一开始绘制的完整路线
            scene.remove(line);
            scene.remove(circle);
            scene.remove(line1);
               // console.log(path[3].LocX);
               
                // LocX=path[i].LocX;
                // LocY=path[i].LocY;
           //获取当前地理位置
            wx.getLocation({
                        success: function (res) {
                             //alert(res.latitude+":"+res.longitude);
                             p_Lng= res.latitude; // 纬度
                             p_Lat= res.longitude; // 经度    
                             var p=convertGpsToTencent(p_Lng, p_Lat);//将gps坐标转换为腾讯地图坐标
                                  
                                    //p.LocX=path[time].LocX;
                                    //p.LocY=path[time].LocY;
                                    //
                                    console.log(convertGpsToTencent(p_Lng, p_Lat));//返回数据格式Point {LocX: NaN, LocY: NaN}
                                    var newPoints=adsorption_rectify(p, points);//吸附纠正,能够纠正返回纠正后的点,不能则返回null
                                    if(newPoints==null){
                                      newPoints=projection_rectify(p, points);//投影纠正
                                    }
                                    if(newPoints==null)//ziyuan:如果无法纠正，只在图上绘制p点，绘制完后退出这个函数
                                    {
                                        //......绘制p点
                                        return;
                                    }
                                    //ziyuan:如果可以纠正，则绘制newPoints中最后一个点
                                    console.log(newPoints);
                                    var len=newPoints.length;
                                    console.log(newPoints[len-1]);
                                    //拐弯处偏移的角度
                                    var k1=(newPoints[len-1].LocY-newPoints[len-2].LocY)/(newPoints[len-1].LocX-newPoints[len-2].LocX);
                                    var k2=(newPoints[len].LocY-newPoints[len-1].LocY)/(newPoints[len].LocX-newPoints[len-1].LocX);
                                    if(newPoints[len-1].LocX-newPoints[len-2].LocX==0){
                                      if(newPoints[len].LocX-newPoints[len-1].LocX==0){
                                        angle=0;
                                      }
                                      else{
                                        angle=Math.atan((newPoints[len].LocY-newPoints[len-1].LocY)/(newPoints[len].LocX-newPoints[len-1].LocX));
                                      }
                                    }
                                    else{
                                      if((newPoints[len].LocX-newPoints[len-1].LocX==0)&&(newPoints[len].LocY<newPoints[len-1].LocY)){
                                        angle=Math.PI-Math.atan((newPoints[len-1].LocY-newPoints[len-2].LocY)/(newPoints[len-1].LocX-newPoints[len-2].LocX));
                                      }
                                      else if((newPoints[len].LocX-newPoints[len-1].LocX==0)&&(newPoints[len].LocY>newPoints[len-1].LocY)){
                                        angle=Math.PI+Math.atan((newPoints[len-1].LocY-newPoints[len-2].LocY)/(newPoints[len-1].LocX-newPoints[len-2].LocX));
                                      }
                                      else{
                                        angle=Math.atan((k2-k1)/(1+k2*k1));
                                      }
                                    }
                                    camera.rotateY(angle);
                            //绘制当前点
                                    // var geometry0 = new THREE.SphereGeometry(2,40,40);
                                    // var material0=new THREE.MeshPhongMaterial({color:0x64779f});
                                    // circle=new THREE.Mesh(geometry0,material0);//网格模型对象
                                    // circle.position.set( (newPoints[len-1].LocX*k_x+b_x), 2, (newPoints[len-1].LocY*k_y+b_y));
                                    // //circle.rotation.z=Math.PI;
                                    // scene.add(circle);//网格模型添加到场景中
                                    //调整相机位置
                                   // camera.position.z=-(newPoints[0].LocY*k_y+b_y); 
                            //绘制原点到当前点的已走完的路线
                                    var point1=[];
                                    var vector1;
                                    //给每个点进行映射
                                    for(var i=0;i<len;i++){
                                      vector1= new THREE.Vector3( newPoints[i].LocX*k_x+b_x, 2, (newPoints[i].LocY*k_y+b_y));
                                      point1.push(vector1);
                                    }
                                    console.log(point1);
                                    var shape1 = new THREE.Shape();
                                    /**四条直线绘制一个矩形轮廓*/
                                    shape1.moveTo(0, 0);//起点
                                    shape1.lineTo(0, 2);//第2点
                                    shape1.lineTo(0.25, 2);
                                    shape1.lineTo(0.5, 0);
                                    shape1.lineTo(0, 0);                
                                     /**创建轮廓的扫描轨迹(3D样条曲线)*/
                                    var curve1 = new THREE.CatmullRomCurve3(point1);
                                    var geometry1 = new THREE.ExtrudeGeometry(//拉伸造型
                                        shape1,//二维轮廓
                                        //拉伸参数
                                        {
                                            bevelEnabled:false,//无倒角
                                            extrudePath:curve1,//选择扫描轨迹
                                            steps:50//扫描方向细分数
                                        }
                                    );
                                    var material1=new THREE.MeshPhongMaterial({color:0xffffff});//材质对象
                                    line1=new THREE.Mesh(geometry1,material1);//网格模型对象
                                    scene.add(line1);//网格模型添加到场景中
                            //未走的
                                    //定义地图上点的坐标数组
                                    var point=[];
                                    var vector;
                                    //给每个点进行映射
                                    for(var i=len-1;i<length;i++){
                                      vector= new THREE.Vector3( dataBack.Path[i].LocX*k_x+b_x, 2, (dataBack.Path[i].LocY*k_y+b_y));
                                      point.push(vector);
                                    }
                                    console.log(point);
                                    var shape = new THREE.Shape();
                                    /**四条直线绘制一个矩形轮廓*/
                                    shape.moveTo(0, 0);//起点
                                    shape.lineTo(0, 2);//第2点
                                    shape.lineTo(0.25, 2);
                                    shape.lineTo(0.5, 0);
                                    shape.lineTo(0, 0);                
                                     /**创建轮廓的扫描轨迹(3D样条曲线)*/
                                    var curve = new THREE.CatmullRomCurve3(point);
                                    var geometry = new THREE.ExtrudeGeometry(//拉伸造型
                                        shape,//二维轮廓
                                        //拉伸参数
                                        {
                                            bevelEnabled:false,//无倒角
                                            extrudePath:curve,//选择扫描轨迹
                                            steps:50//扫描方向细分数
                                        }
                                    );
                                    var material=new THREE.MeshPhongMaterial({color:0x1565c0});//材质对象
                                    line=new THREE.Mesh(geometry,material);//网格模型对象
                                    scene.add(line);//网格模型添加到场景中





                         }
                    });        
 
           
                            
         },4000); 

     // $('.button').click(function(){window.clearInterval(update);});

          }
          else{
            console.log("服务器异常")
          }
      });



    


