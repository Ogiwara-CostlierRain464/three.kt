@file:JsQualifier("THREE")
package jp.ogiwara.three.obj

import jp.ogiwara.three.core.Geometry
import jp.ogiwara.three.core.Object3D
import jp.ogiwara.three.material.Material

@JsName("Line")
open external class Line(geometry: Geometry = definedExternally,
                         material: Material = definedExternally) : Object3D{
}