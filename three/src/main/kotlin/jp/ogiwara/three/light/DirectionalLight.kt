@file:JsQualifier("THREE")
package jp.ogiwara.three.light

import jp.ogiwara.three.math.Vector3

/**
 * https://ics-creative.github.io/tutorial-three/samples/light_directional.html
 */
@JsName("DirectionalLight")
external class DirectionalLight(color:  Number = definedExternally,
                                intensity: Number = definedExternally): Light{
    override var castShadow: Boolean = definedExternally

    override var position: Vector3
}