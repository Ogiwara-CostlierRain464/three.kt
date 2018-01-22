@file:JsQualifier("THREE")

package jp.ogiwara.three.math

import jp.ogiwara.three.camera.Camera

@JsName("Vector3")
external class Vector3(x: Number = definedExternally,
                       y: Number = definedExternally,
                       z: Number = definedExternally) {
    //region properties
    var isVector3: Boolean = definedExternally
    val x: Double
    val y: Double
    val z: Double
    //endregion

    //region methods
    fun add(v: Vector3)


    fun project(camera: Camera)

    fun set(x: Number, y: Number, z: Number)

    fun setX(x: Number)
    fun setY(y: Number)
    fun setZ(z: Number)
    //endregion
}