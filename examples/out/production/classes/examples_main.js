if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'examples_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'examples_main'.");
}
var examples_main = function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Vector3 = THREE.Vector3;
  var WebGLRenderer_init = THREE.WebGLRenderer;
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
  var getCallableRef = Kotlin.getCallableRef;
  var GridHelper = THREE.GridHelper;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Geometry = THREE.Geometry;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var PointsMaterial = THREE.PointsMaterial;
  var Points = THREE.Points;
  var PerspectiveCamera = THREE.PerspectiveCamera;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var MeshPhongMaterial_init = THREE.MeshPhongMaterial;
  var DirectionalLight = THREE.DirectionalLight;
  var TextureLoader = THREE.TextureLoader;
  var MeshStandardMaterial = THREE.MeshStandardMaterial;
  var TorusKnotGeometry = THREE.TorusKnotGeometry;
  var SpotLight = THREE.SpotLight;
  var SphereGeometry = THREE.SphereGeometry;
  var MeshBasicMaterial_init = THREE.MeshBasicMaterial;
  var AmbientLight = THREE.AmbientLight;
  var TDSLoader = THREE.TDSLoader;
  MoveAbleBox.prototype = Object.create(Mesh.prototype);
  MoveAbleBox.prototype.constructor = MoveAbleBox;
  var WEB_GL_TAG;
  function main$lambda(it) {
    var runnable = new Shadow();
    runnable.run();
    return Unit;
  }
  function main(args) {
    window.onload = main$lambda;
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Runnable',
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
    var board = new TetrisBoard(new Vector3(0, 0, 0));
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
    var renderer = new WebGLRenderer_init();
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
    return function (_) {
      closure$renderer.render(closure$scene, closure$camera);
    };
  }
  function Tetris$_2$lambda(it) {
    var renderer = new WebGLRenderer_init();
    renderer.setSize(Tetris$Companion_getInstance().SIZE, Tetris$Companion_getInstance().SIZE);
    renderer.setClearColor(16777215);
    var scene = new Scene();
    var grid = new GridHelper(500);
    grid.position.set(250, 0, 250);
    scene.add(grid);
    var box = new TBlock(new Vector3(25, 25, 475));
    scene.add(box.group);
    scene.add(new AxesHelper(500));
    var camera = new OrthographicCamera(Tetris$Companion_getInstance().SIZE / -2 | 0, Tetris$Companion_getInstance().SIZE / 2 | 0, Tetris$Companion_getInstance().SIZE / 2 | 0, Tetris$Companion_getInstance().SIZE / -2 | 0, 1, 10000);
    camera.position.set(250, 500, 250);
    camera.lookAt(grid.position);
    ensureNotNull(document.getElementById(WEB_GL_TAG)).appendChild(renderer.domElement);
    var tick = Tetris$_2$lambda$tick(renderer, scene, camera);
    return window.requestAnimationFrame(getCallableRef('tick', function (_) {
      return tick(_), Unit;
    }));
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
  function TBlock(centerPos) {
    this.centerPos_0 = centerPos;
    this.group = new Group();
    this.prepareBoxes_0();
    this.prepareKeyBoard_0();
  }
  TBlock.prototype.prepareBoxes_0 = function () {
    var tmp$;
    var b = new Mesh(new BoxGeometry(50, 50, 50), new MeshNormalMaterial());
    b.position.set(0, 0, 0);
    b.position.add(this.centerPos_0);
    var a = b.clone();
    a.position.add(new Vector3(-50, 0, 0));
    var c = b.clone();
    c.position.add(new Vector3(50, 0, 0));
    var d = b.clone();
    d.position.add(new Vector3(0, 0, 50));
    (tmp$ = this.group).add.apply(tmp$, [a, b, c, d]);
  };
  function TBlock$prepareKeyBoard$lambda(this$TBlock) {
    return function (it) {
      if (Kotlin.isType(it, KeyboardEvent)) {
        switch (it.key) {
          case 'w':
            this$TBlock.group.position.add(new Vector3(0, 0, -50));
            break;
          case 'a':
            this$TBlock.group.position.add(new Vector3(-50, 0, 0));
            break;
          case 's':
            this$TBlock.group.position.add(new Vector3(0, 0, 50));
            break;
          case 'd':
            this$TBlock.group.position.add(new Vector3(50, 0, 0));
            break;
        }
      }
      return Unit;
    };
  }
  TBlock.prototype.prepareKeyBoard_0 = function () {
    document.addEventListener('keypress', TBlock$prepareKeyBoard$lambda(this));
  };
  TBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TBlock',
    interfaces: []
  };
  function TetrisBoard(cornerPosition) {
    TetrisBoard$Companion_getInstance();
    this.cornerPosition_0 = cornerPosition;
    this.scene_0 = new Scene();
    this.renderer_0 = null;
    this.camera_0 = new PerspectiveCamera(45, 1, 0.1, 10000);
    this.renderer_0 = new WebGLRenderer_init(json([to('antialias', true)]));
    this.renderer_0.setSize(TetrisBoard$Companion_getInstance().RENDER_SIZE, TetrisBoard$Companion_getInstance().RENDER_SIZE);
    this.renderer_0.shadowMap.enabled = true;
    var plane = new Mesh(new PlaneGeometry(TetrisBoard$Companion_getInstance().STAGE_WIDTH, TetrisBoard$Companion_getInstance().STAGE_HEIGHT), new MeshPhongMaterial_init(json([to('wireframe', true), to('color', 2201331)])));
    plane.position.set(this.cornerPosition_0.x + 250, this.cornerPosition_0.y + 500, this.cornerPosition_0.z);
    plane.receiveShadow = true;
    this.scene_0.add(plane);
    this.camera_0.position.set(plane.position.x + 100, plane.position.y + 100, plane.position.z + 1200);
    this.camera_0.lookAt(plane.position);
    this.camera_0.castShadow = true;
    var light = new DirectionalLight(16777215);
    light.position.set(1, 1, 1);
    this.scene_0.add(light);
    this.scene_0.add(new AxesHelper(500));
    var tBlock = new TetrisBlock(this.cornerPosition_0);
    this.scene_0.add(tBlock.group);
    ensureNotNull(document.getElementById(WEB_GL_TAG)).appendChild(this.renderer_0.domElement);
    this.step_0(2);
    this.createStarField_0();
  }
  function TetrisBoard$Companion() {
    TetrisBoard$Companion_instance = this;
    this.STAGE_HEIGHT = 1000;
    this.STAGE_WIDTH = 500;
    this.RENDER_SIZE = 700;
  }
  TetrisBoard$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TetrisBoard$Companion_instance = null;
  function TetrisBoard$Companion_getInstance() {
    if (TetrisBoard$Companion_instance === null) {
      new TetrisBoard$Companion();
    }
    return TetrisBoard$Companion_instance;
  }
  TetrisBoard.prototype.step_0 = function (_) {
    this.renderer_0.render(this.scene_0, this.camera_0);
    window.requestAnimationFrame(getCallableRef('step', function ($receiver, _) {
      return $receiver.step_0(_), Unit;
    }.bind(null, this)));
  };
  function TetrisBoard$createStarField$ObjectLiteral() {
  }
  TetrisBoard$createStarField$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  TetrisBoard.prototype.createStarField_0 = function () {
    var geometry = new Geometry();
    var numParticle = 1000;
    var size = 1500;
    var tmp$;
    tmp$ = until(0, size).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      geometry.vertices.push(new Vector3(size * (Math.random() + 1), size * (Math.random() + 1), size * (Math.random() + 1)));
      geometry.vertices.push(new Vector3(size * (Math.random() - 1), size * (Math.random() - 1), size * (Math.random() - 1)));
    }
    var d = new TetrisBoard$createStarField$ObjectLiteral();
    d['size'] = 10;
    d['color'] = 16777215;
    var material = new PointsMaterial(d);
    var mesh = new Points(geometry, material);
    this.scene_0.add(mesh);
  };
  TetrisBoard.prototype.downBlocks = function () {
  };
  TetrisBoard.prototype.removeLine = function () {
  };
  TetrisBoard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetrisBoard',
    interfaces: []
  };
  function TetrisBlock(cornerPosition) {
    TetrisBlock$Companion_getInstance();
    this.cornerPosition_0 = cornerPosition;
    this.group = new Group();
    this.prepareBoxes_0();
    this.prepareKeyBoard_0();
  }
  function TetrisBlock$Companion() {
    TetrisBlock$Companion_instance = this;
    this.SIZE = 50;
    this.COLOR = 5025616;
  }
  TetrisBlock$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TetrisBlock$Companion_instance = null;
  function TetrisBlock$Companion_getInstance() {
    if (TetrisBlock$Companion_instance === null) {
      new TetrisBlock$Companion();
    }
    return TetrisBlock$Companion_instance;
  }
  function TetrisBlock$prepareBoxes$ObjectLiteral() {
  }
  TetrisBlock$prepareBoxes$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  TetrisBlock.prototype.prepareBoxes_0 = function () {
    var loader = new TextureLoader();
    var texture = loader.load('examples/res/image/iron-material-512.jpg');
    var param = new TetrisBlock$prepareBoxes$ObjectLiteral();
    param['map'] = texture;
    var b = new Mesh(new BoxGeometry(TetrisBlock$Companion_getInstance().SIZE, TetrisBlock$Companion_getInstance().SIZE, TetrisBlock$Companion_getInstance().SIZE), new MeshPhongMaterial_init(param));
    b.position.set(this.cornerPosition_0.x + (TetrisBlock$Companion_getInstance().SIZE / 2 | 0), this.cornerPosition_0.y + TetrisBoard$Companion_getInstance().STAGE_HEIGHT - (TetrisBlock$Companion_getInstance().SIZE / 2 | 0), this.cornerPosition_0.z + (TetrisBlock$Companion_getInstance().SIZE / 2 | 0));
    b.castShadow = true;
    var a = b.clone();
    a.position.add(new Vector3(-50, 0, 0));
    var c = b.clone();
    c.position.add(new Vector3(50, 0, 0));
    var d = b.clone();
    d.position.add(new Vector3(0, -50, 0));
    this.group.add(a, b, c, d);
  };
  function TetrisBlock$prepareKeyBoard$lambda(this$TetrisBlock) {
    return function (it) {
      if (Kotlin.isType(it, KeyboardEvent)) {
        switch (it.key) {
          case 'w':
            this$TetrisBlock.group.position.add(new Vector3(0, 50, 0));
            break;
          case 'a':
            this$TetrisBlock.group.position.add(new Vector3(-50, 0, 0));
            break;
          case 's':
            this$TetrisBlock.group.position.add(new Vector3(0, -50, 0));
            break;
          case 'd':
            this$TetrisBlock.group.position.add(new Vector3(50, 0, 0));
            break;
        }
      }
      return Unit;
    };
  }
  TetrisBlock.prototype.prepareKeyBoard_0 = function () {
    document.addEventListener('keypress', TetrisBlock$prepareKeyBoard$lambda(this));
  };
  TetrisBlock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TetrisBlock',
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
    var renderer = new WebGLRenderer_init();
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
    var renderer = new WebGLRenderer_init();
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
    var renderer = new WebGLRenderer_init();
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
    var renderer = new WebGLRenderer_init();
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
  function Shadow$run$ObjectLiteral() {
  }
  Shadow$run$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Shadow$run$ObjectLiteral_0() {
  }
  Shadow$run$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Shadow$run$tick(closure$renderer, closure$scene, closure$camera, closure$light) {
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
  Shadow.prototype.run = function () {
    var renderer = new WebGLRenderer_init();
    renderer.setSize(Shadow$Companion_getInstance().WIDTH, Shadow$Companion_getInstance().HEIGHT);
    renderer.setClearColor(10395294);
    renderer.shadowMap.enabled = true;
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, Shadow$Companion_getInstance().WIDTH / Shadow$Companion_getInstance().HEIGHT | 0, 0.1, 10000);
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);
    var d = new Shadow$run$ObjectLiteral();
    d['color'] = 8421504;
    d['roughness'] = 0.0;
    var floor = new Mesh(new BoxGeometry(2000, 0.1, 2000), new MeshStandardMaterial(d));
    floor.receiveShadow = true;
    scene.add(floor);
    var d1 = new Shadow$run$ObjectLiteral_0();
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
    var tick = Shadow$run$tick(renderer, scene, camera, light);
    tick(2);
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
  Object.defineProperty(Tetris, 'Companion', {
    get: Tetris$Companion_getInstance
  });
  var package$tetris = package$example.tetris || (package$example.tetris = {});
  package$tetris.Tetris = Tetris;
  package$tetris.MoveAbleBox = MoveAbleBox;
  package$tetris.TBlock = TBlock;
  Object.defineProperty(TetrisBoard, 'Companion', {
    get: TetrisBoard$Companion_getInstance
  });
  package$tetris.TetrisBoard = TetrisBoard;
  Object.defineProperty(TetrisBlock, 'Companion', {
    get: TetrisBlock$Companion_getInstance
  });
  package$tetris.TetrisBlock = TetrisBlock;
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
