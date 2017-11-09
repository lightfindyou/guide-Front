/// <reference path="node_modules/@types/three/index.d.ts" />
var jsonLoader = new THREE.JSONLoader();
jsonLoader.load('model/untitled.js', createScene);

let GlobalConfig = {
  Camera: {
    InitialPosition: [0, 100, 500],
    InitialLookAt: [0, -100, -500]
  }
};

let DegreeTick = 0;
let PAUSED = true;


/**
 * Callback when object loaded successfully.
 * @param geometry Object from original obj file.
 * @param materials Material definitions from original mtl file.
 */
function createScene(
  geometry: THREE.Geometry, materials: Array<THREE.Material>) {
  let meshMaterial = new THREE.MeshFaceMaterial(materials);
  meshMaterial.clipShadows = true;
  meshMaterial.side = THREE.DoubleSide;
  let mesh = new THREE.Mesh(geometry, meshMaterial);

  let scene = new THREE.Scene();

  let ground = new THREE.Mesh(
    new THREE.CubeGeometry(250, 1, 750),
    new THREE.MeshLambertMaterial({ color: 0xaeaeae }));
  ground.position.x = 12.5;
  ground.position.y = -0.6;
  ground.position.z = -125;
  ground.receiveShadow = true;
  ground.castShadow = false;

  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.position.set(0, 0, 0);



  scene.add(mesh);
  scene.add(ground);
  let camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000);
  let renderer = new THREE.WebGLRenderer(
    { antialias: true } as THREE.WebGLRendererParameters);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);



  /**
   * Light control
   * 
   * Author: DevChache
   * Email: yangzd1996@outlook.com
   */

  let light0 = new THREE.DirectionalLight(0xFFF3CE, .5);
  light0.castShadow = true;
  light0.position.set(0, 400, 0);
  light0.shadow.radius = 10;
  light0.shadow.camera.visible = true;
  scene.add(light0);


  let light1 = new THREE.AmbientLight(0xffffff, .4);
  light1.position.set(0, 500, 0);
  scene.add(light1);





  let light2 = new THREE.SpotLight(0xffffff, .85);
  light2.position.set(500, 600, -500);
  light2.castShadow = true;
  let light2Target = new THREE.Object3D();
  light2Target.position.set(0, 0, -100);
  light2.target = light2Target;
  scene.add(light2Target);
  light2.shadow.mapSize.width = 2048;
  light2.shadow.mapSize.height = 2048;
  (light2.shadow.camera as any).near = 0.5;
  (light2.shadow.camera as any).far = 1500;
  (light2.shadow.camera as any).fov = 30;
  scene.add(light2);



  let light2Helper = new THREE.CameraHelper(light2.shadow.camera);
  scene.add(light2Helper);


  /**
   * Create sky box
   * 
   * Author: DevChache
   * Email: yangzd1996@outlook.com
   */

  let skyboxGeometry = new THREE.CubeGeometry(1024, 1024, 1024);
  let cubeMaterials = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0001.bmp"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0004.bmp"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0003.bmp"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0006.png"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0005.bmp"), side: THREE.DoubleSide }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load("image/skybox/skyrender0002.bmp"), side: THREE.DoubleSide }),
  ];
  let skycubeMaterial = new THREE.MeshFaceMaterial(cubeMaterials);
  let skybox = new THREE.Mesh(skyboxGeometry, skycubeMaterial);
  skybox.position.set(0, 0, 0);
  scene.add(skybox);

  camera.position.set(GlobalConfig.Camera.InitialPosition[0],
    GlobalConfig.Camera.InitialPosition[1],
    GlobalConfig.Camera.InitialPosition[2]);

  camera.lookAt(camera.worldToLocal(new THREE.Vector3(0, 0, 0)));


  RegisterEvent();


  setInterval(() => {
    if (DegreeTick >= 360)
      DegreeTick = 0;
    if (PAUSED)
      return;
    let z = GlobalConfig.Camera.InitialPosition[2] * Math.cos(DegreeTick);
    let x = GlobalConfig.Camera.InitialPosition[2] * Math.sin(DegreeTick);
    x = -x;
    camera.position.setX(x);
    camera.position.setZ(z);
    // camera.lookAt(camera.worldToLocal(new THREE.Vector3(0, 0, 0)));
    camera.lookAt(new THREE.Vector3(-x, 0, -z));
    DegreeTick += 0.01;
  }, 16.67);


  document.body.appendChild(renderer.domElement);

  var animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
}


function RegisterEvent() {
  // Your code here.

  document.addEventListener("keydown", (ev) => {
    if (ev.keyCode === 32) {
      ev.preventDefault();
      PAUSED = !PAUSED;
    }
  });
}