@file:JsQualifier("THREE")
package jp.ogiwara.three.loader

import jp.ogiwara.three.scene.Scene

/**
 * https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/ColladaLoader.js
 */
@JsName("ColladaLoader")
external class ColladaLoader {
    var scene: Scene

    fun load(daeUrl: String, callBack: (ColladaLoader) -> Unit)
}