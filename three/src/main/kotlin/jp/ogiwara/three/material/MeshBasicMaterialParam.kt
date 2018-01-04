package jp.ogiwara.three.material

class MeshBasicMaterialParam {
    var asDynamic: dynamic

    //TODO
    constructor(): this(js("new Object()"))

    private constructor(asDynamic: dynamic) {
        this.asDynamic = asDynamic
    }


    var color: Int = 0
        set(value){
            asDynamic.color = value
        }
    var wireframe: Boolean = false
        set(value) {
            asDynamic.wireframe = value
        }
    var opacity: Double = 0.0
        set(value) {
            asDynamic.opacity = value
        }
    var transparent: Boolean = false
        set(value) {
            asDynamic.transparent = value
        }
    var visible: Boolean = true
        set(value) {
            asDynamic.visible = value
        }
}