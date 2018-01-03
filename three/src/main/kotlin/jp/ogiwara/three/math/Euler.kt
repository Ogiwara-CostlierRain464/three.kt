@file:JsQualifier("THREE")
package jp.ogiwara.three.math

@JsName("Euler")
external class Euler(x: Number = definedExternally,
                     y: Number = definedExternally,
                     z: Number = definedExternally,
                     order: String = definedExternally) {
    @Deprecated("use `is` statement")
    val isEuler: Boolean = definedExternally

    var x: Number
    var y: Number
    var z: Number

    fun copy(euler: Euler)

}