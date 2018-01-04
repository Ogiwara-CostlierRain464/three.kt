@file:JsQualifier("THREE")
package jp.ogiwara.three.light

/**
 * 環境光
 */
@JsName("AmbientLight")
external class AmbientLight(color: Number,
                            intensity: Number = definedExternally) : Light{
}