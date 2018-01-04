package example.tutorial1

import example.Runnable
import jp.ogiwara.three.camera.PerspectiveCamera
import jp.ogiwara.three.control.OrbitControls
import jp.ogiwara.three.geometry.BoxGeometry
import jp.ogiwara.three.geometry.CylinderGeometry
import jp.ogiwara.three.geometry.PlaneGeometry
import jp.ogiwara.three.geometry.SphereGeometry
import jp.ogiwara.three.helper.AxesHelper
import jp.ogiwara.three.light.DirectionalLight
import jp.ogiwara.three.loader.TextureLoader
import jp.ogiwara.three.material.MeshBasicMaterial
import jp.ogiwara.three.material.MeshBasicMaterialParam
import jp.ogiwara.three.material.MeshNormalMaterial
import jp.ogiwara.three.math.Vector3
import jp.ogiwara.three.obj.Mesh
import jp.ogiwara.three.renderer.WebGLRenderer
import jp.ogiwara.three.scene.Scene
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.browser.window
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin


class MoveEarth : Runnable {

    var rotation: Double = 0.toDouble()
    var mouseY: Double = 0.toDouble()

    companion object {
        const val WIDTH = 500
        const val HEIGHT = 500
    }

    override fun run() {

        document.addEventListener("mousemove",{
            if(it is MouseEvent){
                mouseY = it.pageY
            }
        })

        window.onload = {
            val renderer = WebGLRenderer()
            renderer.setSize(WIDTH, HEIGHT)

            val scene = Scene()

            val camera = PerspectiveCamera(45, WIDTH / HEIGHT, 0.1 , 10000)
            camera.position.set(0,0,1000)

            val controls = OrbitControls(camera)

            val axes = AxesHelper(500)
            scene.add(axes)

            val geometry = SphereGeometry(200,30,30)
            val d: dynamic = object {}
            d["map"] = TextureLoader().load("res/image/earth.jpg")
            val material = MeshBasicMaterial(d)
            val box = Mesh(geometry, material)

            scene.add(box)

            document.getElementById("WebGL-output")!!.appendChild(renderer.domElement)

            @Suppress("UNUSED_PARAMETER")
            fun tick(d: Number){

                /*val targetRot = (mouseY / WIDTH) * 360
                rotation += (targetRot - rotation) * 0.02

                val radian = rotation * PI / 180

                camera.position.setX(1000 * sin(radian))
                camera.position.setY(1000 * cos(radian))

                camera.lookAt(Vector3(0,0,0))*/

                renderer.render(scene, camera)

                window.requestAnimationFrame(::tick)
            }

            tick(2)
        }
    }
}