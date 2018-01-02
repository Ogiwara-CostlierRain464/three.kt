@file:JsQualifier("THREE")
package jp.ogiwara.three.material

@JsName("MeshNormalMaterial")
external class MeshNormalMaterial(params: dynamic = definedExternally): Material{
    override var fog: Boolean = definedExternally
    @Deprecated("use `is` statement")
    val isMeshNormalMaterial: Boolean = definedExternally
    var wireframe: Boolean = definedExternally
}