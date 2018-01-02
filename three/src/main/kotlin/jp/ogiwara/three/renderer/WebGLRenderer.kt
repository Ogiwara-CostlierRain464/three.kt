@file:JsQualifier("THREE")

package jp.ogiwara.three.renderer

import jp.ogiwara.three.camera.Camera
import jp.ogiwara.three.scene.Scene
import org.khronos.webgl.WebGLRenderingContext
import org.w3c.dom.Node

@JsName("WebGLRenderer")
external class WebGLRenderer: Renderer{
    var context: WebGLRenderingContext? = definedExternally

    var domElement: Node

    fun render(scene: Scene, camera: Camera,
               renderTarget: WebGLRenderTarget = definedExternally,
               forceClear: Boolean = definedExternally)
    fun setSize(width: Number, height: Number)
}