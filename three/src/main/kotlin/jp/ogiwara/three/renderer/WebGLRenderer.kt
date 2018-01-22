@file:JsQualifier("THREE")

package jp.ogiwara.three.renderer

import jp.ogiwara.three.camera.Camera
import jp.ogiwara.three.math.Color
import jp.ogiwara.three.renderer.webgl.WebGLShadowMap
import jp.ogiwara.three.scene.Scene
import org.khronos.webgl.WebGLRenderingContext
import org.w3c.dom.Node
import kotlin.js.Json

@JsName("WebGLRenderer")
external class WebGLRenderer : Renderer{

    constructor()
    @Deprecated("use Json constructor")
    constructor(parameters: dynamic)
    constructor(parameters: Json)

    var context: WebGLRenderingContext? = definedExternally

    var domElement: Node

    var shadowMap: WebGLShadowMap

    fun render(scene: Scene, camera: Camera,
               renderTarget: WebGLRenderTarget = definedExternally,
               forceClear: Boolean = definedExternally)
    fun setSize(width: Number, height: Number)
    fun setClearColor(color: Number)
}