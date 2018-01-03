package example.tutorial1

import example.Runnable
import jp.ogiwara.three.camera.PerspectiveCamera
import jp.ogiwara.three.geometry.BoxGeometry
import jp.ogiwara.three.geometry.CylinderGeometry
import jp.ogiwara.three.geometry.PlaneGeometry
import jp.ogiwara.three.geometry.SphereGeometry
import jp.ogiwara.three.light.DirectionalLight
import jp.ogiwara.three.material.MeshBasicMaterial
import jp.ogiwara.three.material.MeshNormalMaterial
import jp.ogiwara.three.obj.Mesh
import jp.ogiwara.three.renderer.WebGLRenderer
import jp.ogiwara.three.scene.Scene
import kotlin.browser.document
import kotlin.browser.window


class ForMe : Runnable {
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
            camera.position.set(0,0,100)

            val geometry = CylinderGeometry(5,5,20,32)
            val material = MeshNormalMaterial()
            val mesh = Mesh(geometry, material)

            scene.add(mesh)

            val light = DirectionalLight(0x333333)
            light.position.set(1,1,1)

            scene.add(light)

            document.getElementById("WebGL-output")!!.appendChild(renderer.domElement)

            @Suppress("UNUSED_PARAMETER")
            fun tick(d: Number){
                mesh.rotateX(0.1)

                renderer.render(scene, camera)

                window.requestAnimationFrame(::tick)
            }

            tick(2)
        }
    }
}