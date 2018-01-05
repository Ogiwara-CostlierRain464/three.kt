if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'examples_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'examples_main'.");
}
var examples_main = function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var WebGLRenderer = THREE.WebGLRenderer;
  var Scene = THREE.Scene;
  var OrthographicCamera = THREE.OrthographicCamera;
  var OrbitControls = THREE.OrbitControls;
  var AxesHelper = THREE.AxesHelper;
  var PlaneGeometry = THREE.PlaneGeometry;
  var MeshNormalMaterial = THREE.MeshNormalMaterial;
  var Mesh = THREE.Mesh;
  var math = Kotlin.kotlin.math;
  var Group = THREE.Group;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var BoxGeometry = THREE.BoxGeometry;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Vector3 = THREE.Vector3;
  var getCallableRef = Kotlin.getCallableRef;
  var GridHelper = THREE.GridHelper;
  var PerspectiveCamera = THREE.PerspectiveCamera;
  var MeshStandardMaterial = THREE.MeshStandardMaterial;
  var TorusKnotGeometry = THREE.TorusKnotGeometry;
  var SpotLight = THREE.SpotLight;
  var SphereGeometry = THREE.SphereGeometry;
  var TextureLoader = THREE.TextureLoader;
  var MeshBasicMaterial_init = THREE.MeshBasicMaterial;
  var DirectionalLight = THREE.DirectionalLight;
  var AmbientLight = THREE.AmbientLight;
  var TDSLoader = THREE.TDSLoader;
  MoveAbleBox.prototype = Object.create(Mesh.prototype);
  MoveAbleBox.prototype.constructor = MoveAbleBox;
  var WEB_GL_TAG;
  function main(args) {
    var runnable = new Tetris();
    runnable.run();
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Runnable',
    interfaces: []
  };
  function Stage() {
  }
  Stage.prototype.init = function () {
  };
  Stage.prototype.mainLoop = function () {
  };
  Stage.prototype.onKeyDown = function () {
  };
  Stage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stage',
    interfaces: []
  };
  function MoveAbleBlock() {
  }
  MoveAbleBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveAbleBlock',
    interfaces: []
  };
  function Tetris() {
    Tetris$Companion_getInstance();
  }
  function Tetris$Companion() {
    Tetris$Companion_instance = this;
    this.SIZE = 750;
  }
  Tetris$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tetris$Companion_instance = null;
  function Tetris$Companion_getInstance() {
    if (Tetris$Companion_instance === null) {
      new Tetris$Companion();
    }
    return Tetris$Companion_instance;
  }
  Tetris.prototype.run = function () {
    this._2_0();
  };
  function Tetris$_1$lambda$lambda(closure$group) {
    return function (it) {
      if (Kotlin.isType(it, KeyboardEvent)) {
        switch (it.key) {
          case 'w':
            closure$group.position.add(new Vector3(0, 0, 5));
            break;
          case 'a':
            closure$group.position.add(new Vector3(5, 0, 0));
            break;
          case 's':
            closure$group.position.add(new Vector3(0, 0, -5));
            break;
          case 'd':
            closure$group.position.add(new Vector3(-5, 0, 0));
            break;
        }
      }
      return Unit;
    };
  }
  function Tetris$_1$lambda$tick(closure$renderer, closure$scene, closure$camera) {
    return function closure$tick(d) {
      closure$renderer.render(closure$scene, closure$camera);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function Tetris$_1$lambda(it) {
    var renderer = new WebGLRenderer();
    renderer.setSize(Tetris$Companion_getInstance().SIZE, Tetris$Companion_getInstance().SIZE);
    renderer.setClearColor(16777215);
    var scene = new Scene();
    var camera = new OrthographicCamera(Tetris$Companion_getInstance().SIZE / -2 | 0, Tetris$Companion_getInstance().SIZE / 2 | 0, Tetris$Companion_getInstance().SIZE / 2 | 0, Tetris$Companion_getInstance().SIZE / -2 | 0, 1, 10000);
    camera.position.set(300, 300, 300);
    var controls = new OrbitControls(camera);
    scene.add(new AxesHelper(500));
    var plane = new Mesh(new PlaneGeometry(1000, 1000), new MeshNormalMaterial());
    plane.position.set(0, 0, 0);
    plane.rotateX(0.5 * math.PI);
    scene.add(plane);
    var group = new Group();
    var tmp$;
    tmp$ = (new IntRange(0, 2)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var box = new Mesh(new BoxGeometry(100, 100, 100), new MeshNormalMaterial());
      box.position.set(100 * element | 0, 100 * element | 0, 100 * element | 0);
      group.add(box);
    }
    scene.add(group);
    ensureNotNull(document.getElementById(WEB_GL_TAG)).appendChild(renderer.domElement);
    document.onkeydown = Tetris$_1$lambda$lambda(group);
    var tick = Tetris$_1$lambda$tick(renderer, scene, camera);
    tick(2);
    return Unit;
  }
  Tetris.prototype._1_0 = function () {
    window.onload = Tetris$_1$lambda;
  };
  function Tetris$_2$lambda$tick(closure$renderer, closure$scene, closure$camera) {
    return function closure$tick(d) {
      closure$renderer.render(closure$scene, closure$camera);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function Tetris$_2$lambda(it) {
    var renderer = new WebGLRenderer();
    renderer.setSize(Tetris$Companion_getInstance().SIZE, Tetris$Companion_getInstance().SIZE);
    renderer.setClearColor(16777215);
    var scene = new Scene();
    var grid = new GridHelper(500);
    grid.position.set(250, 0, 250);
    scene.add(grid);
    var box = new MoveAbleBox(50);
    box.position.set(25, 25, 475);
    scene.add(box);
    scene.add(new AxesHelper(500));
    var camera = new OrthographicCamera(Tetris$Companion_getInstance().SIZE / -2 | 0, Tetris$Companion_getInstance().SIZE / 2 | 0, Tetris$Companion_getInstance().SIZE / 2 | 0, Tetris$Companion_getInstance().SIZE / -2 | 0, 1, 10000);
    camera.position.set(250, 500, 250);
    camera.lookAt(grid.position);
    ensureNotNull(document.getElementById(WEB_GL_TAG)).appendChild(renderer.domElement);
    var tick = Tetris$_2$lambda$tick(renderer, scene, camera);
    tick(2);
    return Unit;
  }
  Tetris.prototype._2_0 = function () {
    window.onload = Tetris$_2$lambda;
  };
  Tetris.prototype.addVectorBlock_0 = function () {
    var box1 = new Mesh(new BoxGeometry(10, 10, 10), new MeshNormalMaterial());
    var box2 = box1.clone();
    var box3 = box1.clone();
    var box4 = box1.clone();
    box1.position.set(-25, 525, -25);
    box2.position.set(525, 525, -25);
    box3.position.set(-25, -25, -25);
    box4.position.set(525, -25, -25);
    return [box1, box2, box3, box4];
  };
  Tetris.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tetris',
    interfaces: [Runnable]
  };
  function MoveAbleBox(size) {
    Mesh.call(this, new BoxGeometry(size, size, size), new MeshNormalMaterial());
    document.addEventListener('keypress', MoveAbleBox_init$lambda(this));
  }
  function MoveAbleBox_init$lambda(this$MoveAbleBox) {
    return function (it) {
      if (Kotlin.isType(it, KeyboardEvent)) {
        switch (it.key) {
          case 'w':
            this$MoveAbleBox.position.add(new Vector3(0, 0, -50));
            break;
          case 'a':
            this$MoveAbleBox.position.add(new Vector3(-50, 0, 0));
            break;
          case 's':
            this$MoveAbleBox.position.add(new Vector3(0, 0, 50));
            break;
          case 'd':
            this$MoveAbleBox.position.add(new Vector3(50, 0, 0));
            break;
        }
      }
      return Unit;
    };
  }
  MoveAbleBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveAbleBox',
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
  function ForMe$run$lambda$ObjectLiteral() {
  }
  ForMe$run$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function ForMe$run$lambda$ObjectLiteral_0() {
  }
  ForMe$run$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function ForMe$run$lambda$tick(closure$renderer, closure$scene, closure$camera, closure$light) {
    var Math_0 = Math;
    return function closure$tick(d) {
      closure$renderer.render(closure$scene, closure$camera);
      var t = (new Date()).getTime() / 500;
      var r = 20;
      var lx = r * Math_0.cos(t);
      var lz = r * Math_0.sin(t);
      var x = t / 3;
      var ly = 20 + 5 * Math_0.sin(x);
      closure$light.position.set(lx, ly, lz);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function ForMe$run$lambda(it) {
    var renderer = new WebGLRenderer();
    renderer.setSize(ForMe$Companion_getInstance().WIDTH, ForMe$Companion_getInstance().HEIGHT);
    renderer.setClearColor(10395294);
    renderer.shadowMap.enabled = true;
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, ForMe$Companion_getInstance().WIDTH / ForMe$Companion_getInstance().HEIGHT | 0, 0.1, 10000);
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);
    var d = new ForMe$run$lambda$ObjectLiteral();
    d['color'] = 8421504;
    d['roughness'] = 0.0;
    var floor = new Mesh(new BoxGeometry(2000, 0.1, 2000), new MeshStandardMaterial(d));
    floor.receiveShadow = true;
    scene.add(floor);
    var d1 = new ForMe$run$lambda$ObjectLiteral_0();
    d1['color'] = 11141120;
    d1['roughness'] = 0.0;
    var knot = new Mesh(new TorusKnotGeometry(3, 1, 100, 16), new MeshStandardMaterial(d));
    knot.position.set(0, 5, 0);
    knot.castShadow = true;
    scene.add(knot);
    var light = new SpotLight(16777215, 2, 100, math.PI / 4, 1);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    scene.add(light);
    ensureNotNull(document.getElementById('WebGL-output')).appendChild(renderer.domElement);
    var tick = ForMe$run$lambda$tick(renderer, scene, camera, light);
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
  function PortalGun() {
    PortalGun$Companion_getInstance();
  }
  function PortalGun$Companion() {
    PortalGun$Companion_instance = this;
    this.WIDTH = 500;
    this.HEIGHT = 500;
  }
  PortalGun$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PortalGun$Companion_instance = null;
  function PortalGun$Companion_getInstance() {
    if (PortalGun$Companion_instance === null) {
      new PortalGun$Companion();
    }
    return PortalGun$Companion_instance;
  }
  function PortalGun$run$lambda$lambda(closure$scene) {
    return function (it) {
      closure$scene.add(it);
      return Unit;
    };
  }
  function PortalGun$run$lambda$tick(closure$renderer, closure$scene, closure$camera) {
    return function closure$tick(d) {
      closure$renderer.render(closure$scene, closure$camera);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function PortalGun$run$lambda(it) {
    var renderer = new WebGLRenderer();
    renderer.setSize(PortalGun$Companion_getInstance().WIDTH, PortalGun$Companion_getInstance().HEIGHT);
    renderer.setClearColor(10395294);
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, PortalGun$Companion_getInstance().WIDTH / PortalGun$Companion_getInstance().HEIGHT | 0, 0.1, 10000);
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
    loader.load('res/model/3ds/portalgun/portalgun.3ds', PortalGun$run$lambda$lambda(scene));
    ensureNotNull(document.getElementById('WebGL-output')).appendChild(renderer.domElement);
    var tick = PortalGun$run$lambda$tick(renderer, scene, camera);
    tick(2);
    return Unit;
  }
  PortalGun.prototype.run = function () {
    window.onload = PortalGun$run$lambda;
  };
  PortalGun.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PortalGun',
    interfaces: [Runnable]
  };
  function Shadow() {
    Shadow$Companion_getInstance();
  }
  function Shadow$Companion() {
    Shadow$Companion_instance = this;
    this.WIDTH = 500;
    this.HEIGHT = 500;
  }
  Shadow$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Shadow$Companion_instance = null;
  function Shadow$Companion_getInstance() {
    if (Shadow$Companion_instance === null) {
      new Shadow$Companion();
    }
    return Shadow$Companion_instance;
  }
  function Shadow$run$lambda$ObjectLiteral() {
  }
  Shadow$run$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Shadow$run$lambda$ObjectLiteral_0() {
  }
  Shadow$run$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Shadow$run$lambda$tick(closure$renderer, closure$scene, closure$camera, closure$light) {
    var Math_0 = Math;
    return function closure$tick(d) {
      closure$renderer.render(closure$scene, closure$camera);
      var t = (new Date()).getTime() / 500;
      var r = 20;
      var lx = r * Math_0.cos(t);
      var lz = r * Math_0.sin(t);
      var x = t / 3;
      var ly = 20 + 5 * Math_0.sin(x);
      closure$light.position.set(lx, ly, lz);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function Shadow$run$lambda(it) {
    var renderer = new WebGLRenderer();
    renderer.setSize(Shadow$Companion_getInstance().WIDTH, Shadow$Companion_getInstance().HEIGHT);
    renderer.setClearColor(10395294);
    renderer.shadowMap.enabled = true;
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, Shadow$Companion_getInstance().WIDTH / Shadow$Companion_getInstance().HEIGHT | 0, 0.1, 10000);
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);
    var d = new Shadow$run$lambda$ObjectLiteral();
    d['color'] = 8421504;
    d['roughness'] = 0.0;
    var floor = new Mesh(new BoxGeometry(2000, 0.1, 2000), new MeshStandardMaterial(d));
    floor.receiveShadow = true;
    scene.add(floor);
    var d1 = new Shadow$run$lambda$ObjectLiteral_0();
    d1['color'] = 11141120;
    d1['roughness'] = 0.0;
    var knot = new Mesh(new TorusKnotGeometry(3, 1, 100, 16), new MeshStandardMaterial(d));
    knot.position.set(0, 5, 0);
    knot.castShadow = true;
    scene.add(knot);
    var light = new SpotLight(16777215, 2, 100, math.PI / 4, 1);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    scene.add(light);
    ensureNotNull(document.getElementById('WebGL-output')).appendChild(renderer.domElement);
    var tick = Shadow$run$lambda$tick(renderer, scene, camera, light);
    tick(2);
    return Unit;
  }
  Shadow.prototype.run = function () {
    window.onload = Shadow$run$lambda;
  };
  Shadow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shadow',
    interfaces: [Runnable]
  };
  var package$example = _.example || (_.example = {});
  Object.defineProperty(package$example, 'WEB_GL_TAG', {
    get: function () {
      return WEB_GL_TAG;
    }
  });
  package$example.main_kand9s$ = main;
  package$example.Runnable = Runnable;
  var package$tetris = package$example.tetris || (package$example.tetris = {});
  package$tetris.Stage = Stage;
  package$tetris.MoveAbleBlock = MoveAbleBlock;
  Object.defineProperty(Tetris, 'Companion', {
    get: Tetris$Companion_getInstance
  });
  package$tetris.Tetris = Tetris;
  package$tetris.MoveAbleBox = MoveAbleBox;
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
  Object.defineProperty(PortalGun, 'Companion', {
    get: PortalGun$Companion_getInstance
  });
  package$tutorial1.PortalGun = PortalGun;
  Object.defineProperty(Shadow, 'Companion', {
    get: Shadow$Companion_getInstance
  });
  package$tutorial1.Shadow = Shadow;
  WEB_GL_TAG = 'WebGL-output';
  main([]);
  Kotlin.defineModule('examples_main', _);
  return _;
}(typeof examples_main === 'undefined' ? {} : examples_main, kotlin);

//# sourceMappingURL=examples_main.js.map
