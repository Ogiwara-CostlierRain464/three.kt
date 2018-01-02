package example

import jp.ogiwara.three.camera.PerspectiveCamera
import jp.ogiwara.three.geometry.BoxGeometry
import jp.ogiwara.three.material.MeshNormalMaterial
import jp.ogiwara.three.obj.Mesh
import jp.ogiwara.three.renderer.WebGLRenderer
import jp.ogiwara.three.scene.Scene
import org.w3c.dom.events.Event
import kotlin.browser.window

fun main(args: Array<String>){
    window.addEventListener("load", ::init)
}

const val width = 960
const val height = 540

@Suppress("UNUSED_PARAMETER")
fun init(e: Event){
    val renderer = WebGLRenderer()
    renderer.setSize(width,height)

    val scene = Scene()

    val camera = PerspectiveCamera(45, width / height, 0.1 , 1000)
    camera.position.set(0,0,1000)

    val geometry = BoxGeometry(400,400,400)
    val material = MeshNormalMaterial()
    val box = Mesh(geometry, material)

    scene.add(box)

    fun tick(d: Number){
        renderer.render(scene, camera)

        window.requestAnimationFrame(::tick)
    }

    tick(2)
}