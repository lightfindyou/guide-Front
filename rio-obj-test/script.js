 
// <reference path="node_modules/@types/three/index.d.ts" />
var jsonLoader = new THREE.JSONLoader();
jsonLoader.load('model/untitled.js', createScene);
var GlobalConfig = {
    Camera: {
        InitialPosition: [0, 100, 400],
        InitialLookAt: [0, -100, -400]
    }
};
var DegreeTick = 0;
var PAUSED = true;
/**
 * Callback when object loaded successfully.
 * @param geometry Object from original obj file.
 * @param materials Material definitions from original mtl file.
 */
 var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 var scene = new THREE.Scene();
function createScene(geometry, materials) {
    var meshMaterial = new THREE.MeshFaceMaterial(materials);
    meshMaterial.clipShadows = true;
    meshMaterial.side = THREE.DoubleSide;
    var mesh = new THREE.Mesh(geometry, meshMaterial);
   var scene = new THREE.Scene();
    var ground = new THREE.Mesh(new THREE.CubeGeometry(250, 1, 750), new THREE.MeshLambertMaterial({ color: 0xaeaeae }));
    ground.position.x = 12.5;
    ground.position.y = -1;
    ground.position.z = -125;
    ground.receiveShadow = true;
    ground.castShadow = false;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.position.set(0, 0, 0);
    scene.add(mesh);
    scene.add(ground);
   // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    /**
     * Light control
     *
     * Author: DevChache
     * Email: yangzd1996@outlook.com
     */
    var light0 = new THREE.DirectionalLight(0xFFF3CE, .5);
    light0.castShadow = true;
    light0.position.set(0, 400, 0);
    light0.shadow.radius = 10;
    light0.shadow.camera.visible = true;
    scene.add(light0);
    var light1 = new THREE.AmbientLight(0xffffff, .4);
    light1.position.set(0, 500, 0);
    scene.add(light1);
    var light2 = new THREE.SpotLight(0xffffff, .75);
    light2.position.set(500, 600, -500);
    light2.castShadow = true;
    var light2Target = new THREE.Object3D();
    light2Target.position.set(0, 0, -100);
    light2.target = light2Target;
    scene.add(light2Target);
    light2.shadow.mapSize.width = 4096;
    light2.shadow.mapSize.height = 4096;
    light2.shadow.camera.near = 0.5;
    light2.shadow.camera.far = 1500;
    light2.shadow.camera.fov = 30;
    scene.add(light2);
    /**
     * Create sky box
     *
     * Author: DevChache
     * Email: yangzd1996@outlook.com
     */
    // let skyboxGeometry = new THREE.CubeGeometry(800, 500, 500);
    // let cubeMaterials = [
    //   new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0001.bmp"), side: THREE.DoubleSide }),
    //   new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0004.bmp"), side: THREE.DoubleSide }),
    //   new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0003.bmp"), side: THREE.DoubleSide }),
    //   new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0006.png"), side: THREE.DoubleSide }),
    //   new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0005.bmp"), side: THREE.DoubleSide }),
    //   new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0002.bmp"), side: THREE.DoubleSide }),
    // ];
    // let skycubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
    // let skybox = new THREE.Mesh(skyboxGeometry, skycubeMaterial);
    // skybox.position.set(0, 0, 0);
    // scene.add(skybox);
    var shader = THREE.ShaderLib["cube"];
    var path = "image/skybox/";
    var format = '.bmp';
    var urls = [
        path + 'skyrender0001' + format, path + 'skyrender0004' + format,
        path + 'skyrender0003' + format, path + 'skyrender0006.png',
        path + 'skyrender0005' + format, path + 'skyrender0002' + format
    ];
    var textureCube = THREE.ImageUtils.loadTextureCube(urls);
    shader.uniforms["tCube"].value = textureCube;
    var material = new THREE.ShaderMaterial({
        fragmentShader: shader.fragmentShader,
        vertexShader: shader.vertexShader,
        uniforms: shader.uniforms,
        depthWrite: false,
        side: THREE.BackSide
    });
    var skybox = new THREE.Mesh(new THREE.CubeGeometry(100000, 100000, 100000), material);
    scene.add(skybox);
    camera.position.set(GlobalConfig.Camera.InitialPosition[0], GlobalConfig.Camera.InitialPosition[1], GlobalConfig.Camera.InitialPosition[2]);
    camera.lookAt(camera.worldToLocal(new THREE.Vector3(0, 0, 0)));
    RegisterEvent();
    // setInterval(function () {
    //     if (DegreeTick >= 360)
    //         DegreeTick = 0;
    //     if (PAUSED)
    //         return;
    //     var z = GlobalConfig.Camera.InitialPosition[2] * Math.cos(DegreeTick);
    //     var x = GlobalConfig.Camera.InitialPosition[2] * Math.sin(DegreeTick);
    //     x = -x;
    //     camera.position.setX(x);
    //     camera.position.setZ(z);
    //     // camera.lookAt(camera.worldToLocal(new THREE.Vector3(0, 0, 0)));
    //     camera.lookAt(new THREE.Vector3(-x, 0, -z));
    //     DegreeTick += 0.01;
    // }, 16.67);
    document.body.appendChild(renderer.domElement);
    var animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();
}
function RegisterEvent() {
    // Your code here.
    var hammertime = new Hammer(document.getElementsByTagName("body").item(0));
            //为该dom元素指定触屏移动事件
             hammertime.on("panup", function (ev) {
               // alert("向上滑动");
                  camera.position.z += 2;
             });
             hammertime.on("pandown", function (ev) {
               // alert("向下滑动")
                  camera.position.z -= 2;
             });
              hammertime.on("panleft", function (ev) {
                //alert("向左滑动");
                camera.position.x += 2;
             });
             hammertime.on("panright", function (ev) {
                //alert("向右滑动");
                camera.position.x -= 2;
             });
             if( camera.position.y >10){
                hammertime.get('pinch').set({
                enable: true
                });
                  hammertime.on("pinchin", function (ev) {
                   // alert("多点触控时两手指距离越来越近");
                     camera.position.y += 0.5;
                 });
                 hammertime.on("pinchout", function (ev) {
                    //alert("多点触控时两手指距离越来越远");
                    camera.position.y -= 0.5;
                });
             }
             else{
                hammertime.remove("pinch")
             }
           
             hammertime.get('rotate').set({
                enable: true
            });
            hammertime.on("rotate", function (ev) {
                 //控制台输出
               // alert("旋转")
                //  if (DegreeTick >= 360)
                //     DegreeTick = 0;
                // if (PAUSED)
                //     return;
                // var z = GlobalConfig.Camera.InitialPosition[2] * Math.cos(DegreeTick);
                // var x = GlobalConfig.Camera.InitialPosition[2] * Math.sin(DegreeTick);
                // x = -x;
                // camera.position.setX(x);
                // camera.position.setZ(z);
                // // camera.lookAt(camera.worldToLocal(new THREE.Vector3(0, 0, 0)));
                // camera.lookAt(new THREE.Vector3(-x, 0, -z));
                // DegreeTick += 0.01;
             });
    // end
    document.addEventListener("keydown", function (ev) {
        if (ev.keyCode === 32) {
            ev.preventDefault();
            PAUSED = !PAUSED;
        }
    });
}
