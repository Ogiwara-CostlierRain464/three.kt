if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'three_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'three_main'.");
}
var three_main = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function WebGLShadowMap() {
  }
  WebGLShadowMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebGLShadowMap',
    interfaces: []
  };
  var package$jp = _.jp || (_.jp = {});
  var package$ogiwara = package$jp.ogiwara || (package$jp.ogiwara = {});
  var package$three = package$ogiwara.three || (package$ogiwara.three = {});
  var package$renderer = package$three.renderer || (package$three.renderer = {});
  var package$webgl = package$renderer.webgl || (package$renderer.webgl = {});
  package$webgl.WebGLShadowMap = WebGLShadowMap;
  Kotlin.defineModule('three_main', _);
  return _;
}(typeof three_main === 'undefined' ? {} : three_main, kotlin);

//# sourceMappingURL=three_main.js.map
