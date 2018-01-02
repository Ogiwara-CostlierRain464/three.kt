@file:JsQualifier("THREE")

package jp.ogiwara.three.core

import jp.ogiwara.three.math.Quaternion
import jp.ogiwara.three.math.Vector3

@JsName("Object3D")
external open class Object3D{
    //region properties
    var castShadow: Boolean = definedExternally
    var children: List<Object3D>
    var frustumCulled: Boolean = definedExternally
    val id: Number
    var isObject: Boolean = definedExternally

    var name: String = definedExternally

    var position: Vector3 = definedExternally
    var quaternion: Quaternion
    var receiveShadow: Boolean = definedExternally
    var renderOrder: Number = definedExternally

    var visible: Boolean = definedExternally
    //endregion

    //region methods
    fun lookAt(vector: Vector3)
    fun lookAt(x: Number, y: Number, z: Number)
    //endregion
}