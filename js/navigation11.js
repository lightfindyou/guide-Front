    //var telephone=location.hash.substring(1);
    var request = new Object();
    request = GetRequest();
    var telephone=request['telephone'];
    var time=request['time'];
    $('.content1').hide();
    $('.content').show();
    var place;
    $("#place").focus(function(){
    var pwditem = $(this).val();
    if (pwditem = this.defaultValue) {
        pwditem = $(this).val("");
    }; 
    });
    $("#place").blur(function(){
        var pwditem = $(this).val();
        if(pwditem ==""){
            $(this).val(this.defaultValue); 
        }
        if((pwditem!=this.defaultValue)&&(pwditem!="")){
           place=document.getElementById('place').value;
        }
    });
    document.onkeydown = function () {
        var oEvent = window.event;
        if (oEvent.keyCode == 8) {
            var str = document.getElementById('place').value;
            str = str.substring(0, str.length - 1);
            document.getElementById('place').value = str;
        }
    }
      $("#line").click(function(){
          place=document.getElementById('place').value;
          console.log(place);
          window.location.href="navigation22.html?place="+place+"&telephone="+telephone+"&time="+timestamp;           
      })
      $(".users").click(function(){      
          //window.location.href="homepage.html#"+telephone;    
          if(telephone==null){
             window.location.href='landing.html#'+timestamp;    
          }  
          else{
             window.location.href='homepage.html?time='+timestamp+'&telephone='+telephone;
          }  
      })
var jsonLoader = new THREE.JSONLoader();
jsonLoader.load('http://ojxko64c5.bkt.clouddn.com/20170707.js', createScene);
 var scene = new THREE.Scene();
function createScene(geometry, materials) {
    console.log(materials.length);
    var mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(materials));
    // var scene = new THREE.Scene();
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

}
