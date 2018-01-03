@file:JsQualifier("THREE")
package jp.ogiwara.three.camera

@JsName("PerspectiveCamera")
external class PerspectiveCamera(fov: Number,
                                 aspect: Number,
                                 near: Number = definedExternally,
                                 far: Number = definedExternally) : Camera{
    var aspect: Number = definedExternally
    var far: Number = definedExternally
    var filmGauge: Number = definedExternally
    var focus: Number = definedExternally
    var fov: Number = definedExternally
    val isPerspectiveCamera: Boolean = definedExternally
    var near: Number = definedExternally
}