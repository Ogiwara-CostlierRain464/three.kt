@file:JsQualifier("THREE")

package jp.ogiwara.three.core

import jp.ogiwara.three.math.Euler
import jp.ogiwara.three.math.Quaternion
import jp.ogiwara.three.math.Vector3

@JsName("Object3D")
open external class Object3D{
    //region properties
    open var castShadow: Boolean = definedExternally
    var children: List<Object3D>
    var frustumCulled: Boolean = definedExternally
    val id: Number
    //@Deprecated("use 'is' statement")
    //val isObject: Boolean = definedExternally
    @Deprecated("use 'is' statement")
    val isObject3D: Boolean = definedExternally

    var name: String = definedExternally

    open val position: Vector3 = definedExternally
    open var rotation: Euler
    var quaternion: Quaternion
    open var receiveShadow: Boolean = definedExternally
    var renderOrder: Number = definedExternally

    var visible: Boolean = definedExternally
    //endregion

    //region methods
    fun add(vararg obj: Object3D)

    open fun clone(recursive: Boolean): Object3D

    fun lookAt(vector: Vector3)
    fun lookAt(x: Number, y: Number, z: Number)

    fun remove(vararg obj: Object3D)

    fun rotateX(rad: Number)
    fun rotateY(rad: Number)
    fun rotateZ(rad: Number)
    //endregion
}