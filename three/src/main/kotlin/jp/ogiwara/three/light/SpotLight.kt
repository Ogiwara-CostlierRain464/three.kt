@file:JsQualifier("THREE")
package jp.ogiwara.three.light

import jp.ogiwara.three.math.Vector3
import jp.ogiwara.three.shadow.SpotLightShadow

@JsName("SpotLight")
external class SpotLight(color: Number = definedExternally,
                         intensity: Number = definedExternally,
                         distance: Number = definedExternally,
                         angle: Number = definedExternally,
                         penumbra: Number = definedExternally,
                         decay: Number = definedExternally): Light{

    override var castShadow: Boolean = definedExternally
    override var position: Vector3 = definedExternally

    var shadow: SpotLightShadow
}