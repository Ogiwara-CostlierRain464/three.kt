if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'examples_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'examples_main'.");
}
var examples_main = function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
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
    var runnable = new HelloThreeKt();
    runnable.run();
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Runnable',
    interfaces: []
  };
  var WIDTH;
  var HEIGHT;
  function HelloThreeKt() {
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
    renderer.setSize(WIDTH, HEIGHT);
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, WIDTH / HEIGHT | 0, 0.1, 1000);
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
  var package$tutorial1 = package$example.tutorial1 || (package$example.tutorial1 = {});
  Object.defineProperty(package$tutorial1, 'WIDTH', {
    get: function () {
      return WIDTH;
    }
  });
  Object.defineProperty(package$tutorial1, 'HEIGHT', {
    get: function () {
      return HEIGHT;
    }
  });
  package$tutorial1.HelloThreeKt = HelloThreeKt;
  WIDTH = 960;
  HEIGHT = 540;
  main([]);
  Kotlin.defineModule('examples_main', _);
  return _;
}(typeof examples_main === 'undefined' ? {} : examples_main, kotlin);

//# sourceMappingURL=examples_main.js.map
