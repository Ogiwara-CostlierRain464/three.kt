package example.tutorial1

import example.Runnable
import jp.ogiwara.three.camera.PerspectiveCamera
import jp.ogiwara.three.control.OrbitControls
import jp.ogiwara.three.geometry.BoxGeometry
import jp.ogiwara.three.geometry.CylinderGeometry
import jp.ogiwara.three.geometry.PlaneGeometry
import jp.ogiwara.three.geometry.SphereGeometry
import jp.ogiwara.three.helper.AxesHelper
import jp.ogiwara.three.light.AmbientLight
import jp.ogiwara.three.light.DirectionalLight
import jp.ogiwara.three.loader.TDSLoader
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


class PortalGun : Runnable {

    companion object {
        const val WIDTH = 500
        const val HEIGHT = 500
    }

    override fun run() {

        window.onload = {
            val renderer = WebGLRenderer()
            renderer.setSize(WIDTH, HEIGHT)
            renderer.setClearColor(0x9e9e9e)

            val scene = Scene()

            val camera = PerspectiveCamera(45, WIDTH / HEIGHT, 0.1 , 10000)
            camera.position.set(0,0,5)

            val controls = OrbitControls(camera)

            val axes = AxesHelper(500)
            //scene.add(axes)

            val directionalLight = DirectionalLight(0xffffff)
            directionalLight.position.set(1,1,1)
            scene.add(directionalLight)

            val ambientLight = AmbientLight(0xffffff,2)
            scene.add(ambientLight)

            val loader = TDSLoader()
            loader.setPath("res/model/3ds/portalgun/texture/")
            loader.load("res/model/3ds/portalgun/portalgun.3ds",{
                scene.add(it)
            })

            document.getElementById("WebGL-output")!!.appendChild(renderer.domElement)

            @Suppress("UNUSED_PARAMETER")
            fun tick(d: Number){

                renderer.render(scene, camera)

                window.requestAnimationFrame(::tick)
            }

            tick(2)
        }
    }
}