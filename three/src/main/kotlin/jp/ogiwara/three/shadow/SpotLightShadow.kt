@file:JsQualifier("THREE")
package jp.ogiwara.three.shadow

import jp.ogiwara.three.math.Vector2

@JsName("SpotLightShadow")
external class SpotLightShadow: LightShadow{
    var mapSize: Vector2 = definedExternally
}