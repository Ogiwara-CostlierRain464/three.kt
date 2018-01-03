@file:JsQualifier("THREE")
package jp.ogiwara.three.geometry

import jp.ogiwara.three.core.Geometry

@JsName("CylinderGeometry")
open external class CylinderGeometry(radiusTop: Number = definedExternally,
                                     radiusBottom: Number = definedExternally,
                                     height: Number = definedExternally,
                                     radialSegments: Number = definedExternally,
                                     heightSegments: Number = definedExternally,
                                     openEnded: Boolean = definedExternally,
                                     thetaStart: Number = definedExternally,
                                     thetaLength: Number = definedExternally): Geometry{
}