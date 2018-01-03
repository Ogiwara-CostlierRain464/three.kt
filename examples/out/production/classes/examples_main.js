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
  var BoxGeometry = THREE.BoxGeometry;
  var MeshNormalMaterial = THREE.MeshNormalMaterial;
  var Mesh = THREE.Mesh;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var Kind_CLASS = Kotlin.Kind.CLASS;
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
    this.WIDTH = 960;
    this.HEIGHT = 540;
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
  function ForMe$run$lambda$tick(closure$box, closure$renderer, closure$scene, closure$camera) {
    return function closure$tick(d) {
      closure$box.rotateX(0.1);
      closure$renderer.render(closure$scene, closure$camera);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function ForMe$run$lambda(it) {
    var renderer = new WebGLRenderer();
    renderer.setSize(ForMe$Companion_getInstance().WIDTH, ForMe$Companion_getInstance().HEIGHT);
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, ForMe$Companion_getInstance().WIDTH / ForMe$Companion_getInstance().HEIGHT | 0, 0.1, 1000);
    camera.position.set(0, 0, 1000);
    var geometry = new BoxGeometry(400, 400, 400);
    var material = new MeshNormalMaterial();
    var box = new Mesh(geometry, material);
    scene.add(box);
    ensureNotNull(document.getElementById('WebGL-output')).appendChild(renderer.domElement);
    var tick = ForMe$run$lambda$tick(box, renderer, scene, camera);
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
