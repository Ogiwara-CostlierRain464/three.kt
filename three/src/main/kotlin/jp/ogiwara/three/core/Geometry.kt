@file:JsQualifier("THREE")
package jp.ogiwara.three.core

import jp.ogiwara.three.math.Vector3
import jp.ogiwara.three.obj.Mesh
import jp.ogiwara.three.util.JsArray

@JsName("Geometry")
open external class Geometry {
    val id: Number
    val isGeometry: Boolean = definedExternally
    var name: String = definedExternally

    val vertices: JsArray<Vector3>

    fun center()
    fun dispose()
    fun lookAt(vector3: Vector3)

    fun mergeMesh(mesh: Mesh)

    fun normalize()
}