@file:JsQualifier("THREE")
package jp.ogiwara.three.obj

import jp.ogiwara.three.core.Geometry
import jp.ogiwara.three.core.Object3D
import jp.ogiwara.three.material.Material

@JsName("Mesh")
open external class Mesh(geometry: Geometry,material: Material): Object3D{

    @Deprecated(message = "use 'is' statement")
    val isMesh: Boolean = definedExternally

    fun clone(): Mesh
}