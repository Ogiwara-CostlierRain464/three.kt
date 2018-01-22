package example.tutorial1

import example.Runnable
import jp.ogiwara.three.camera.PerspectiveCamera
import jp.ogiwara.three.control.OrbitControls
import jp.ogiwara.three.geometry.BoxGeometry
import jp.ogiwara.three.geometry.SphereGeometry
import jp.ogiwara.three.geometry.TorusKnotGeometry
import jp.ogiwara.three.helper.AxesHelper
import jp.ogiwara.three.light.AmbientLight
import jp.ogiwara.three.light.DirectionalLight
import jp.ogiwara.three.light.SpotLight
import jp.ogiwara.three.loader.TDSLoader
import jp.ogiwara.three.material.MeshStandardMaterial
import jp.ogiwara.three.obj.Mesh
import jp.ogiwara.three.renderer.WebGLRenderer
import jp.ogiwara.three.scene.Scene
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Date
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin


class Shadow : Runnable {

    companion object {
        const val WIDTH = 500
        const val HEIGHT = 500
    }

    override fun run() {
            val renderer = WebGLRenderer()
            renderer.setSize(WIDTH, HEIGHT)
            renderer.setClearColor(0x9e9e9e)
            renderer.shadowMap.enabled = true

            val scene = Scene()

            val camera = PerspectiveCamera(45, WIDTH / HEIGHT, 0.1 , 10000)
            camera.position.set(20,20,20)
            camera.lookAt(0,0,0)

            val d: dynamic = object {}
            d["color"] = 0x808080
            d["roughness"] = 0.0

            val floor = Mesh(
                    BoxGeometry(2000,0.1,2000),
                    MeshStandardMaterial(d)
            )
            floor.receiveShadow = true
            scene.add(floor)

            val d1: dynamic = object {}
            d1["color"] = 0xaa0000
            d1["roughness"] = 0.0

            val knot = Mesh(
                    TorusKnotGeometry(3,1,100,16),
                    MeshStandardMaterial(d)
            )
            knot.position.set(0,5,0)
            knot.castShadow = true
            scene.add(knot)

            val light = SpotLight(0xffffff,2,100, PI / 4 , 1)
            light.castShadow = true
            light.shadow.mapSize.width = 2048
            light.shadow.mapSize.height = 2048
            scene.add(light)

            document.getElementById("WebGL-output")!!.appendChild(renderer.domElement)

            @Suppress("UNUSED_PARAMETER")
            fun tick(d: Number){

                renderer.render(scene, camera)

                val t = Date().getTime() / 500
                val r = 20
                val lx = r * cos(t)
                val lz = r * sin(t)
                val ly = 20 + 5 * sin(t / 3)
                light.position.set(lx, ly, lz)

                window.requestAnimationFrame(::tick)
            }

            tick(2)
    }
}