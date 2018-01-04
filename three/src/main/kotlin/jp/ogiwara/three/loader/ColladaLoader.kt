@file:JsQualifier("THREE")
package jp.ogiwara.three.loader

import jp.ogiwara.three.scene.Scene

@JsName("ColladaLoader")
external class ColladaLoader {
    var scene: Scene

    fun load(daeUrl: String, callBack: (ColladaLoader) -> Unit)
}