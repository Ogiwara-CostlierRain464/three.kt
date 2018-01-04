if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'examples_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'examples_main'.");
}
var examples_main = function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var WebGLRenderer = THREE.WebGLRenderer;
  var Scene = THREE.Scene;
  var PerspectiveCamera = THREE.PerspectiveCamera;
  var AxesHelper = THREE.AxesHelper;
  var SphereGeometry = THREE.SphereGeometry;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var TextureLoader = THREE.TextureLoader;
  var MeshBasicMaterial_init = THREE.MeshBasicMaterial;
  var Mesh = THREE.Mesh;
  var ensureNotNull = Kotlin.ensureNotNull;
  var math = Kotlin.kotlin.math;
  var Vector3 = THREE.Vector3;
  var getCallableRef = Kotlin.getCallableRef;
  var BoxGeometry = THREE.BoxGeometry;
  var MeshNormalMaterial = THREE.MeshNormalMaterial;
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
    this.rotation = 0;
    this.mouseY = 0;
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
  function ForMe$run$lambda(this$ForMe) {
    return function (it) {
      if (Kotlin.isType(it, MouseEvent)) {
        this$ForMe.mouseY = it.pageY;
      }
      return Unit;
    };
  }
  function ForMe$run$lambda$ObjectLiteral() {
  }
  ForMe$run$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function ForMe$run$lambda$tick(this$ForMe, closure$camera, closure$renderer, closure$scene) {
    var Math_0 = Math;
    return function closure$tick(d) {
      var targetRot = this$ForMe.mouseY / ForMe$Companion_getInstance().WIDTH * 360;
      this$ForMe.rotation += (targetRot - this$ForMe.rotation) * 0.02;
      var radian = this$ForMe.rotation * math.PI / 180;
      closure$camera.position.setX(1000 * Math_0.sin(radian));
      closure$camera.position.setY(1000 * Math_0.cos(radian));
      closure$camera.lookAt(new Vector3(0, 0, 0));
      closure$renderer.render(closure$scene, closure$camera);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function ForMe$run$lambda_0(this$ForMe) {
    return function (it) {
      var renderer = new WebGLRenderer();
      renderer.setSize(ForMe$Companion_getInstance().WIDTH, ForMe$Companion_getInstance().HEIGHT);
      var scene = new Scene();
      var camera = new PerspectiveCamera(45, ForMe$Companion_getInstance().WIDTH / ForMe$Companion_getInstance().HEIGHT | 0, 0.1, 1000);
      var axes = new AxesHelper(500);
      scene.add(axes);
      var geometry = new SphereGeometry(200, 30, 30);
      var d = new ForMe$run$lambda$ObjectLiteral();
      d['map'] = (new TextureLoader()).load('res/earth.jpg');
      var material = new MeshBasicMaterial_init(d);
      var box = new Mesh(geometry, material);
      scene.add(box);
      ensureNotNull(document.getElementById('WebGL-output')).appendChild(renderer.domElement);
      var tick = ForMe$run$lambda$tick(this$ForMe, camera, renderer, scene);
      tick(2);
      return Unit;
    };
  }
  ForMe.prototype.run = function () {
    document.addEventListener('mousemove', ForMe$run$lambda(this));
    window.onload = ForMe$run$lambda_0(this);
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
  main([]);
  Kotlin.defineModule('examples_main', _);
  return _;
}(typeof examples_main === 'undefined' ? {} : examples_main, kotlin);

//# sourceMappingURL=examples_main.js.map
