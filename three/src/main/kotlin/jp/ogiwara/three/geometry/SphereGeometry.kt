@file:JsQualifier("THREE")
package jp.ogiwara.three.geometry

import jp.ogiwara.three.core.Geometry

@JsName("SphereGeometry")
external class SphereGeometry(radius: Number = definedExternally,
                              widthSegments: Number = definedExternally,
                              heightSegments: Number = definedExternally,
                              phiStart: Number = definedExternally,
                              phiLength: Number = definedExternally,
                              thetaStart: Number = definedExternally,
                              thetaLength: Number = definedExternally): Geometry {
}