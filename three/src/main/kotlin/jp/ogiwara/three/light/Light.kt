@file:JsQualifier("THREE")
package jp.ogiwara.three.light

import jp.ogiwara.three.core.Object3D

//TODO color as obj
@JsName("Light")
abstract external class Light(color: Number = definedExternally,
                     intensity: Number = definedExternally): Object3D{

}