@file:JsQualifier("THREE")
package jp.ogiwara.three.loader

import jp.ogiwara.three.manager.LoadingManager

@JsName("TextureLoader")
external class TextureLoader(manager: LoadingManager = definedExternally) {
    fun load(url: String)
}