if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'examples_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'examples_main'.");
}
var examples_main = function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var WebGLRenderer = THREE.WebGLRenderer;
  var Scene = THREE.Scene;
  var PerspectiveCamera = THREE.PerspectiveCamera;
  var OrbitControls = THREE.OrbitControls;
  var AxesHelper = THREE.AxesHelper;
  var DirectionalLight = THREE.DirectionalLight;
  var AmbientLight = THREE.AmbientLight;
  var TDSLoader = THREE.TDSLoader;
  var Unit = Kotlin.kotlin.Unit;
  var ensureNotNull = Kotlin.ensureNotNull;
  var getCallableRef = Kotlin.getCallableRef;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var BoxGeometry = THREE.BoxGeometry;
  var MeshNormalMaterial = THREE.MeshNormalMaterial;
  var Mesh = THREE.Mesh;
  var SphereGeometry = THREE.SphereGeometry;
  var TextureLoader = THREE.TextureLoader;
  var MeshBasicMaterial_init = THREE.MeshBasicMaterial;
  function main(args) {
    var runnable = new ForMe();
    runnable.run();
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Runnable',
    interfaces: []
  };
  function ForMe() {
    ForMe$Companion_getInstance();
  }
  function ForMe$Companion() {
    ForMe$Companion_instance = this;
    this.WIDTH = 500;
    this.HEIGHT = 500;
  }
  ForMe$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ForMe$Companion_instance = null;
  function ForMe$Companion_getInstance() {
    if (ForMe$Companion_instance === null) {
      new ForMe$Companion();
    }
    return ForMe$Companion_instance;
  }
  function ForMe$run$lambda$lambda(closure$scene) {
    return function (it) {
      closure$scene.add(it);
      return Unit;
    };
  }
  function ForMe$run$lambda$tick(closure$renderer, closure$scene, closure$camera) {
    return function closure$tick(d) {
      closure$renderer.render(closure$scene, closure$camera);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function ForMe$run$lambda(it) {
    var renderer = new WebGLRenderer();
    renderer.setSize(ForMe$Companion_getInstance().WIDTH, ForMe$Companion_getInstance().HEIGHT);
    renderer.setClearColor(10395294);
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, ForMe$Companion_getInstance().WIDTH / ForMe$Companion_getInstance().HEIGHT | 0, 0.1, 10000);
    camera.position.set(0, 0, 5);
    var controls = new OrbitControls(camera);
    var axes = new AxesHelper(500);
    var directionalLight = new DirectionalLight(16777215);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    var ambientLight = new AmbientLight(16777215, 2);
    scene.add(ambientLight);
    var loader = new TDSLoader();
    loader.setPath('res/model/3ds/portalgun/texture/');
    loader.load('res/model/3ds/portalgun/portalgun.3ds', ForMe$run$lambda$lambda(scene));
    ensureNotNull(document.getElementById('WebGL-output')).appendChild(renderer.domElement);
    var tick = ForMe$run$lambda$tick(renderer, scene, camera);
    tick(2);
    return Unit;
  }
  ForMe.prototype.run = function () {
    window.onload = ForMe$run$lambda;
  };
  ForMe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ForMe',
    interfaces: [Runnable]
  };
  function HelloThreeKt() {
    HelloThreeKt$Companion_getInstance();
  }
  function HelloThreeKt$Companion() {
    HelloThreeKt$Companion_instance = this;
    this.WIDTH = 960;
    this.HEIGHT = 540;
  }
  HelloThreeKt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HelloThreeKt$Companion_instance = null;
  function HelloThreeKt$Companion_getInstance() {
    if (HelloThreeKt$Companion_instance === null) {
      new HelloThreeKt$Companion();
    }
    return HelloThreeKt$Companion_instance;
  }
  function HelloThreeKt$run$lambda$tick(closure$box, closure$renderer, closure$scene, closure$camera) {
    return function closure$tick(d) {
      closure$box.rotateX(0.1);
      closure$renderer.render(closure$scene, closure$camera);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function HelloThreeKt$run$lambda(it) {
    var renderer = new WebGLRenderer();
    renderer.setSize(HelloThreeKt$Companion_getInstance().WIDTH, HelloThreeKt$Companion_getInstance().HEIGHT);
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, HelloThreeKt$Companion_getInstance().WIDTH / HelloThreeKt$Companion_getInstance().HEIGHT | 0, 0.1, 1000);
    camera.position.set(0, 0, 1000);
    var geometry = new BoxGeometry(400, 400, 400);
    var material = new MeshNormalMaterial();
    var box = new Mesh(geometry, material);
    scene.add(box);
    ensureNotNull(document.getElementById('WebGL-output')).appendChild(renderer.domElement);
    var tick = HelloThreeKt$run$lambda$tick(box, renderer, scene, camera);
    tick(2);
    return Unit;
  }
  HelloThreeKt.prototype.run = function () {
    window.onload = HelloThreeKt$run$lambda;
  };
  HelloThreeKt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloThreeKt',
    interfaces: [Runnable]
  };
  function MoveEarth() {
    MoveEarth$Companion_getInstance();
    this.rotation = 0;
    this.mouseY = 0;
  }
  function MoveEarth$Companion() {
    MoveEarth$Companion_instance = this;
    this.WIDTH = 500;
    this.HEIGHT = 500;
  }
  MoveEarth$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MoveEarth$Companion_instance = null;
  function MoveEarth$Companion_getInstance() {
    if (MoveEarth$Companion_instance === null) {
      new MoveEarth$Companion();
    }
    return MoveEarth$Companion_instance;
  }
  function MoveEarth$run$lambda(this$MoveEarth) {
    return function (it) {
      if (Kotlin.isType(it, MouseEvent)) {
        this$MoveEarth.mouseY = it.pageY;
      }
      return Unit;
    };
  }
  function MoveEarth$run$lambda$ObjectLiteral() {
  }
  MoveEarth$run$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function MoveEarth$run$lambda$tick(closure$renderer, closure$scene, closure$camera) {
    return function closure$tick(d) {
      closure$renderer.render(closure$scene, closure$camera);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function MoveEarth$run$lambda_0(it) {
    var renderer = new WebGLRenderer();
    renderer.setSize(MoveEarth$Companion_getInstance().WIDTH, MoveEarth$Companion_getInstance().HEIGHT);
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, MoveEarth$Companion_getInstance().WIDTH / MoveEarth$Companion_getInstance().HEIGHT | 0, 0.1, 10000);
    camera.position.set(0, 0, 1000);
    var controls = new OrbitControls(camera);
    var axes = new AxesHelper(500);
    scene.add(axes);
    var geometry = new SphereGeometry(200, 30, 30);
    var d = new MoveEarth$run$lambda$ObjectLiteral();
    d['map'] = (new TextureLoader()).load('res/image/earth.jpg');
    var material = new MeshBasicMaterial_init(d);
    var box = new Mesh(geometry, material);
    scene.add(box);
    ensureNotNull(document.getElementById('WebGL-output')).appendChild(renderer.domElement);
    var tick = MoveEarth$run$lambda$tick(renderer, scene, camera);
    tick(2);
    return Unit;
  }
  MoveEarth.prototype.run = function () {
    document.addEventListener('mousemove', MoveEarth$run$lambda(this));
    window.onload = MoveEarth$run$lambda_0;
  };
  MoveEarth.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveEarth',
    interfaces: [Runnable]
  };
  var package$example = _.example || (_.example = {});
  package$example.main_kand9s$ = main;
  package$example.Runnable = Runnable;
  Object.defineProperty(ForMe, 'Companion', {
    get: ForMe$Companion_getInstance
  });
  var package$tutorial1 = package$example.tutorial1 || (package$example.tutorial1 = {});
  package$tutorial1.ForMe = ForMe;
  Object.defineProperty(HelloThreeKt, 'Companion', {
    get: HelloThreeKt$Companion_getInstance
  });
  package$tutorial1.HelloThreeKt = HelloThreeKt;
  Object.defineProperty(MoveEarth, 'Companion', {
    get: MoveEarth$Companion_getInstance
  });
  package$tutorial1.MoveEarth = MoveEarth;
  main([]);
  Kotlin.defineModule('examples_main', _);
  return _;
}(typeof examples_main === 'undefined' ? {} : examples_main, kotlin);

//# sourceMappingURL=examples_main.js.map
