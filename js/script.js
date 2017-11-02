var jsonLoader = new THREE.JSONLoader();
jsonLoader.load('http://ojxko64c5.bkt.clouddn.com/20170707.js', createScene);
function createScene(geometry, materials) {
    console.log(materials.length);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
    var scene = new THREE.Scene();
    var ground = new THREE.Mesh(new THREE.CubeGeometry(1000, 5, 1000), new THREE.MeshBasicMaterial({ color: 0xaeaeae }));
    ground.position.y = -5;
    ground.receiveShadow = true;
    ground.castShadow = false;
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    scene.add(mesh);
    scene.add(ground);
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //var renderer = new THREE.WebGLRenderer({ antialias: true });
    var renderer = new THREE.WebGLRenderer();
    var light0 = new THREE.DirectionalLight(0xffffff, 1);
    light0.castShadow = true;
    light0.position.set(40, 10, 60);
    light0.shadow.radius = 10;
    light0.shadow.camera.visible = true;
    light0.shadow.camera.far = 1000;
    light0.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(light0);
    var light3 = new THREE.DirectionalLight(0xffffff, 1);
    light3.castShadow = true;
    light3.position.set(-10, 10, 0);
    light3.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(light3);

  

    renderer.setClearColor(0xEEEEEE, 1.0); 
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    // camera.position.z = 300;
    // camera.position.y = 100;
    // camera.position.x = 0;
    camera.position.z = 250;
    camera.position.y = 300;
    camera.position.x = 0;
    camera.lookAt(new THREE.Vector3(0, 0, -1));
    $('.content').hide();
    $('.content1').show();
    document.body.appendChild(renderer.domElement);
    window.onkeydown = function (ev) {
        ev.preventDefault();
        switch (ev.keyCode) {
            case 37: {
                camera.position.x -= 1;
                break;
            }
            case 38: {
                if (ev.shiftKey === true)
                    camera.position.z -= 1;
                else
                    camera.position.y += 1;
                break;
            }
            case 39: {
                camera.position.x += 1;
                break;
            }
            case 40: {
                if (ev.shiftKey === true)
                    camera.position.z += 1;
                else
                    camera.position.y -= 1;
                break;
            }
        }
    };
    var multi_touch_mode = false;
    var touchA;
    var touchB;
    var multi_touch_distance = 0;
    window.ontouchstart = function (ev) {
        if (ev.touches.length > 1) {
            multi_touch_mode = true;
            touchA = ev.touches[0];
            touchB = ev.touches[1];
            multi_touch_distance = Math.sqrt(Math.pow((touchA.clientX - touchB.clientX), 2) +
                Math.pow((touchA.clientY - touchB.clientY), 2));
        }
        else
            multi_touch_mode = false;
    };
    var lastsidetouchX = window.innerWidth / 2;
    var lastsidetouchY = window.innerHeight / 2;
    var lastmoveX = window.innerWidth / 2;
    var lastmoveY = window.innerHeight / 2;
    var lasttouchX = window.innerWidth / 2;
    var lasttouchY = window.innerHeight / 2;
    var xangle = 3.14 / lastmoveX;
    var yangle = 3.14 / lastmoveY;
    var move = function (mev, tev) {
        if (mev !== void 0) {
            if (mev.clientX > lastmoveX) {
                camera.rotateY(xangle);
            }
            else if (mev.clientX < lastmoveX) {
                camera.rotateY(-xangle);
            }
            lastmoveX = mev.clientX;
        }
        else if (tev !== void 0) {
            if (tev.touches[0].clientX >= window.innerWidth - 48) {
                if (tev.touches[0].clientY - lastsidetouchY > 0) {
                    camera.position.y += 5;
                    ////
                    if (camera.position.y >= 200)
                        camera.position.y = 200;
                    lastsidetouchY = tev.touches[0].clientY;
                }
                else if (tev.touches[0].clientY - lastsidetouchY < 0) {
                    camera.position.y -= 5;
                    ////
                    if (camera.position.y <= 0)
                        camera.position.y = 0;
                    lastsidetouchY = tev.touches[0].clientY;
                }
                return;
            }
            else if (tev.touches[0].clientY >= window.innerHeight - 48) {
                if (tev.touches[0].clientX - lastsidetouchX > 0) {
                    camera.position.x += 5;
                    ////
                    lastsidetouchX = tev.touches[0].clientX;
                    if (camera.position.x >= 200)
                        camera.position.x = 200;
                }
                else if (tev.touches[0].clientX - lastsidetouchX < 0) {
                    camera.position.x -= 5;
                    ////
                    lastsidetouchX = tev.touches[0].clientX;
                    if (camera.position.x <= -200)
                        camera.position.x = -200;
                }
                return;
            }
            if (tev.touches[0].clientX > lasttouchX) {
                camera.rotation.y += 0.02;
                ////左右
            }
            else if (tev.touches[0].clientX < lasttouchX) {
                camera.rotation.y -= 0.02;
                ////
            }
            lasttouchX = tev.touches[0].clientX;
        }
        else
            return false;
    };
    window.onmousemove = function (ev) {
        ev.preventDefault();
        move(ev, void 0);
    };
    window.ontouchend = function (ev) {
        multi_touch_distance = 0;
        multi_touch_mode = false;
    };
    window.ontouchmove = function (ev) {
        ev.preventDefault();
        if (ev.touches.length === 1) {
            multi_touch_mode = false;
            move(void 0, ev);
        }
        else if (ev.changedTouches.length > 1) {
            touchA = ev.changedTouches[0];
            touchB = ev.changedTouches[1];
            var distance = Math.sqrt(Math.pow((touchA.clientX - touchB.clientX), 2) +
                Math.pow((touchA.clientY - touchB.clientY), 2));
            if (distance > multi_touch_distance) {
                camera.position.z -= 5;
                ////双手
                if (camera.position.z <= -400)
                    camera.position.z = -400;
            }
            else {
                camera.position.z += 5;
                ////
                if (camera.position.z >= 400)
                    camera.position.z = 400;
            }
            multi_touch_distance = distance;
        }
    };
    var animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();

   


    //绘制导航线
    var request = new Object();
    request = GetRequest();
    var TargetX=request['TargetX'];
    var TargetY=request['TargetY'];
    var telephone=request['telephone'];
    TargetX1=parseFloat(TargetX);
    TargetY1=parseFloat(TargetY);  
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
    console.log(TargetX);
    $(".users").click(function(){
        console.log(place);
        window.location.href="navigation1.html#"+telephone;
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
    wx.getLocation({
        success: function (res) {
            LocY = res.latitude; // 纬度
            LocX = res.longitude; // 经度
            console.log(LocX);
            console.log(LocY);
        
        }
    });

    LocX=114.553038;
    LocY=38.012394;//仿真中心  
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
        shape2.lineTo(0, 1.5);//第2点
        shape2.lineTo(0.25, 1.5);
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
        var material2=new THREE.MeshPhongMaterial({color:0x00ff00});//材质对象
        line2=new THREE.Mesh(geometry2,material2);//网格模型对象
        scene.add(line2);//网格模型添加到场景中

        var update=window.setInterval(function(){
   
             //time++;
            //scene.remove(line2);//去除一开始绘制的完整路线
            scene.remove(line);
            scene.remove(circle);
            scene.remove(line1);
               // console.log(path[3].LocX);
               
                // LocX=path[i].LocX;
                // LocY=path[i].LocY;
           //获取当前地理位置
            wx.getLocation({
                        success: function (res) {
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
                                    console.log(newPoints);
                                    var len=newPoints.length;
                                    console.log(newPoints[len-1]);
                            //绘制当前点
                                    var geometry0 = new THREE.SphereGeometry(2,40,40);
                                    var material0=new THREE.MeshPhongMaterial({color:0x64779f});
                                    circle=new THREE.Mesh(geometry0,material0);//网格模型对象
                                    circle.position.set( (newPoints[len-1].LocX*k_x+b_x), 2, (newPoints[len-1].LocY*k_y+b_y));
                                    //circle.rotation.z=Math.PI;
                                    scene.add(circle);//网格模型添加到场景中
                                    //调整相机位置
                                    camera.position.z=-(newPoints[0].LocY*k_y+b_y); 
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
                                    shape1.lineTo(0, 1.5);//第2点
                                    shape1.lineTo(0.25, 1.5);
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
                                    shape.lineTo(0, 1.5);//第2点
                                    shape.lineTo(0.25, 1.5);
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
                                    var material=new THREE.MeshPhongMaterial({color:0x00ff00});//材质对象
                                    line=new THREE.Mesh(geometry,material);//网格模型对象
                                    scene.add(line);//网格模型添加到场景中


                         }
                    });        
 
           
                            
         },2000); 

     // $('.button').click(function(){window.clearInterval(update);});

          }
          else{
            console.log("服务器异常")
          }
      });



    


}
