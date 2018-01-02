@file:JsQualifier("THREE")
package jp.ogiwara.three.material

@JsName("Material")
abstract external class Material {

    open var fog: Boolean = definedExternally
    var id: Number
    val isMaterial: Boolean = definedExternally

    var name: String = definedExternally
}