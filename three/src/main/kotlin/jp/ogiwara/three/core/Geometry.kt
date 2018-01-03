@file:JsQualifier("THREE")
package jp.ogiwara.three.core

import jp.ogiwara.three.math.Vector3

@JsName("Geometry")
abstract external class Geometry {
    val id: Number
    val isGeometry: Boolean = definedExternally
    var name: String = definedExternally

    fun center()
    fun dispose()
    fun lookAt(vector3: Vector3)

    fun normalize()
}