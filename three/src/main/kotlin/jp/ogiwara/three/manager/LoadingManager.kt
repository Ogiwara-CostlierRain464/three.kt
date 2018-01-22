@file:JsQualifier("THREE")
package jp.ogiwara.three.manager

@JsName("DefaultLoadingManager")
external val DefaultLoadingManager: LoadingManager = definedExternally

@JsName("LoadingManager")
external class LoadingManager(onLoad: () -> Unit = definedExternally,
                              onProgress: (String,Int,Int) -> Unit = definedExternally,
                              onError: (String) -> Unit = definedExternally) {
}