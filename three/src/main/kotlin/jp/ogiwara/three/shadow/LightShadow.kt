@file:JsQualifier("THREE")
package jp.ogiwara.three.shadow

import jp.ogiwara.three.camera.Camera

@JsName("LightShadow")
open external class LightShadow(camera: Camera){
    var camera: Camera
}