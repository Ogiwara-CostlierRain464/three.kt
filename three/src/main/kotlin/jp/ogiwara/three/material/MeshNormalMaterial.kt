@file:JsQualifier("THREE")
package jp.ogiwara.three.material

/**
 * https://ics-creative.github.io/tutorial-three/samples/material_variation_normal.html
 */
@JsName("MeshNormalMaterial")
external class MeshNormalMaterial(params: dynamic = definedExternally): Material{
    override var fog: Boolean = definedExternally
    @Deprecated("use `is` statement")
    val isMeshNormalMaterial: Boolean = definedExternally
    var wireframe: Boolean = definedExternally
}