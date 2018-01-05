@file:JsQualifier("THREE")
package jp.ogiwara.three.material

/**
 * https://ics-creative.github.io/tutorial-three/samples/material_variation_basic.html
 */
@JsName("MeshBasicMaterial")
external class MeshBasicMaterial: Material {

    constructor()
    constructor(parameters: dynamic)

    @Deprecated(message = "use dynamic constructor")
    constructor(parameters: MeshBasicMaterialParam)
}