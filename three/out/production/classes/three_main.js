if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'three_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'three_main'.");
}
var three_main = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Color = THREE.Color;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  function MeshBasicMaterialParam() {
    this.asDynamic = null;
    this.color_wy85g5$_0 = 0;
    this.wireframe_ha1rhs$_0 = false;
    this.opacity_e4j6hf$_0 = 0.0;
    this.transparent_ftar5y$_0 = false;
    this.visible_mgxequ$_0 = true;
  }
  Object.defineProperty(MeshBasicMaterialParam.prototype, 'color', {
    get: function () {
      return this.color_wy85g5$_0;
    },
    set: function (value) {
      this.asDynamic.color = value;
    }
  });
  Object.defineProperty(MeshBasicMaterialParam.prototype, 'wireframe', {
    get: function () {
      return this.wireframe_ha1rhs$_0;
    },
    set: function (value) {
      this.asDynamic.wireframe = value;
    }
  });
  Object.defineProperty(MeshBasicMaterialParam.prototype, 'opacity', {
    get: function () {
      return this.opacity_e4j6hf$_0;
    },
    set: function (value) {
      this.asDynamic.opacity = value;
    }
  });
  Object.defineProperty(MeshBasicMaterialParam.prototype, 'transparent', {
    get: function () {
      return this.transparent_ftar5y$_0;
    },
    set: function (value) {
      this.asDynamic.transparent = value;
    }
  });
  Object.defineProperty(MeshBasicMaterialParam.prototype, 'visible', {
    get: function () {
      return this.visible_mgxequ$_0;
    },
    set: function (value) {
      this.asDynamic.visible = value;
    }
  });
  MeshBasicMaterialParam.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MeshBasicMaterialParam',
    interfaces: []
  };
  function MeshBasicMaterialParam_init($this) {
    $this = $this || Object.create(MeshBasicMaterialParam.prototype);
    MeshBasicMaterialParam_init_0(new Object(), $this);
    return $this;
  }
  function MeshBasicMaterialParam_init_0(asDynamic, $this) {
    $this = $this || Object.create(MeshBasicMaterialParam.prototype);
    MeshBasicMaterialParam.call($this);
    $this.asDynamic = asDynamic;
    return $this;
  }
  function ColorPalette() {
    ColorPalette_instance = this;
    this.RED = new Color(244, 67, 54);
    this.PINK = new Color(233, 30, 99);
    this.BLUE = new Color(33, 150, 243);
    this.GREEN = new Color(76, 175, 80);
    this.YELLOW = new Color(255, 235, 59);
    this.GREY = new Color(158, 158, 158);
    this.BLACK = new Color(0, 0, 0);
    this.WHITE = new Color(255, 255, 255);
  }
  ColorPalette.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ColorPalette',
    interfaces: []
  };
  var ColorPalette_instance = null;
  function ColorPalette_getInstance() {
    if (ColorPalette_instance === null) {
      new ColorPalette();
    }
    return ColorPalette_instance;
  }
  function dynamic() {
    return new DynamicParam();
  }
  function DynamicParam() {
    this.obj_0 = new DynamicParam$obj$ObjectLiteral();
  }
  DynamicParam.prototype.color_3p81yu$ = function (color) {
    this.obj_0['color'] = color;
    return this;
  };
  DynamicParam.prototype.create = function () {
    return this.obj_0;
  };
  function DynamicParam$obj$ObjectLiteral() {
  }
  DynamicParam$obj$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  DynamicParam.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicParam',
    interfaces: []
  };
  var package$jp = _.jp || (_.jp = {});
  var package$ogiwara = package$jp.ogiwara || (package$jp.ogiwara = {});
  var package$three = package$ogiwara.three || (package$ogiwara.three = {});
  var package$material = package$three.material || (package$three.material = {});
  package$material.MeshBasicMaterialParam_init = MeshBasicMaterialParam_init;
  package$material.MeshBasicMaterialParam = MeshBasicMaterialParam;
  var package$util = package$three.util || (package$three.util = {});
  Object.defineProperty(package$util, 'ColorPalette', {
    get: ColorPalette_getInstance
  });
  package$util.dynamic = dynamic;
  package$util.DynamicParam = DynamicParam;
  Kotlin.defineModule('three_main', _);
  return _;
}(typeof three_main === 'undefined' ? {} : three_main, kotlin);

//# sourceMappingURL=three_main.js.map
