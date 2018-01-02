@file:JsQualifier("THREE")

package jp.ogiwara.three.renderer

import org.w3c.dom.Node

@JsName("WebGLRenderer")
external class WebGLRenderer: Renderer{
    var domElement: Node


    fun setSize(width: Number, height: Number)
}