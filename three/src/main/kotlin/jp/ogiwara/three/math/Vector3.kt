@file:JsQualifier("THREE")

package jp.ogiwara.three.math

@JsName("Vector3")
external class Vector3(x: Number = definedExternally,
                       y: Number = definedExternally,
                       z: Number = definedExternally) {
    //region properties
    var isVector3: Boolean = definedExternally
    val x: Number
    val y: Number
    val z: Number
    //endregion

    //region methods
    fun add(v: Number)
    fun set(x: Number, y: Number, z: Number)
    //endregion
}