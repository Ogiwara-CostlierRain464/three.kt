package example.tutorial1

import example.Runnable
import jp.ogiwara.three.camera.PerspectiveCamera
import jp.ogiwara.three.geometry.BoxGeometry
import jp.ogiwara.three.material.MeshNormalMaterial
import jp.ogiwara.three.obj.Mesh
import jp.ogiwara.three.renderer.WebGLRenderer
import jp.ogiwara.three.scene.Scene
import org.w3c.dom.events.Event
import kotlin.browser.document
import kotlin.browser.window

class HelloThreeKt : Runnable{

    companion object {
        const val WIDTH = 960
        const val HEIGHT = 540
    }

    override fun run() {
        window.onload = {
            val renderer = WebGLRenderer()
            renderer.setSize(WIDTH, HEIGHT)

            val scene = Scene()

            val camera = PerspectiveCamera(45, WIDTH / HEIGHT, 0.1 , 1000)
            camera.position.set(0,0,1000)

            val geometry = BoxGeometry(400,400,400)
            val material = MeshNormalMaterial()
            val box = Mesh(geometry, material)

            scene.add(box)

            document.getElementById("WebGL-output")!!.appendChild(renderer.domElement)

            fun tick(d: Number){
                box.rotateX(0.1)

                renderer.render(scene, camera)

                window.requestAnimationFrame(::tick)
            }

            tick(2)
        }
    }
}