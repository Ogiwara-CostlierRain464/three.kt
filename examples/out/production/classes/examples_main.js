(function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var WebGLRenderer = THREE.WebGLRenderer;
  var Scene = THREE.Scene;
  var PerspectiveCamera = THREE.PerspectiveCamera;
  var BoxGeometry = THREE.BoxGeometry;
  var MeshNormalMaterial = THREE.MeshNormalMaterial;
  var Mesh = THREE.Mesh;
  function main(args) {
    window.addEventListener('load', getCallableRef('init', function (e) {
      return init(e), Unit;
    }));
  }
  var width;
  var height;
  function init$tick(closure$renderer, closure$scene, closure$camera) {
    return function closure$tick(d) {
      closure$renderer.render(closure$scene, closure$camera);
      window.requestAnimationFrame(getCallableRef('tick', function (d) {
        return closure$tick(d), Unit;
      }));
    };
  }
  function init(e) {
    var renderer = new WebGLRenderer();
    renderer.setSize(width, height);
    var scene = new Scene();
    var camera = new PerspectiveCamera(45, width / height | 0, 0.1, 1000);
    camera.position.set(0, 0, 1000);
    var geometry = new BoxGeometry(400, 400, 400);
    var material = new MeshNormalMaterial();
    var box = new Mesh(geometry, material);
    scene.add(box);
    var tick = init$tick(renderer, scene, camera);
    tick(2);
  }
  var package$example = _.example || (_.example = {});
  package$example.main_kand9s$ = main;
  Object.defineProperty(package$example, 'width', {
    get: function () {
      return width;
    }
  });
  Object.defineProperty(package$example, 'height', {
    get: function () {
      return height;
    }
  });
  package$example.init_9ojx7i$ = init;
  width = 960;
  height = 540;
  main([]);
  Kotlin.defineModule('examples_main', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=examples_main.js.map
