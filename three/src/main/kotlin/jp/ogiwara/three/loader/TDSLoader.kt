@file:JsQualifier("THREE")
package jp.ogiwara.three.loader

import jp.ogiwara.three.core.Object3D

@JsName("TDSLoader")
external class TDSLoader {
    fun setPath(textureUrl: String)
    fun load(_3dsUrl: String,callBack:  (Object3D) -> Unit)
}