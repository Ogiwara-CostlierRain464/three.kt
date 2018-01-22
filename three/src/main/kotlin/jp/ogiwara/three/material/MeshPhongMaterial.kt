@file:JsQualifier("THREE")
package jp.ogiwara.three.material

import kotlin.js.Json

/**
 * https://ics-creative.github.io/tutorial-three/samples/material_variation_phong.html
 */
@JsName("MeshPhongMaterial")
external class MeshPhongMaterial : Material{
    constructor()
    constructor(parameters: Json)
}