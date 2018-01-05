@file:JsQualifier("THREE")
package jp.ogiwara.three.scene

import jp.ogiwara.three.math.Color

@JsName("Fog")
external class Fog{
    constructor(color: Color, near: Number, far: Number)
    constructor(color: Number, near: Number, far: Number)
}