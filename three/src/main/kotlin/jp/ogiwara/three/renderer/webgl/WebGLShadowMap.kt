package jp.ogiwara.three.renderer.webgl

import jp.ogiwara.three.renderer.WebGLRenderer

@JsName("WebGLShadowMap")
external class WebGLShadowMap(webGLRenderer: WebGLRenderer,
                              objects: dynamic,
                              maxTextureSize: Number) {
    var enabled: Boolean = definedExternally

}