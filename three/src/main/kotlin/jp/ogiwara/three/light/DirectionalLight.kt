@file:JsQualifier("THREE")
package jp.ogiwara.three.light

import jp.ogiwara.three.math.Vector3

@JsName("DirectionalLight")
external class DirectionalLight(color:  Number = definedExternally,
                                intensity: Number = definedExternally): Light{
    override var castShadow: Boolean = definedExternally

    override var position: Vector3
}