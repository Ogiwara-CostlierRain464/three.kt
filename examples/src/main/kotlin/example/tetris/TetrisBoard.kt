package example.tetris

import example.WEB_GL_TAG
import jp.ogiwara.three.camera.OrthographicCamera
import jp.ogiwara.three.camera.PerspectiveCamera
import jp.ogiwara.three.control.OrbitControls
import jp.ogiwara.three.core.Geometry
import jp.ogiwara.three.geometry.BoxGeometry
import jp.ogiwara.three.geometry.PlaneGeometry
import jp.ogiwara.three.helper.AxesHelper
import jp.ogiwara.three.light.DirectionalLight
import jp.ogiwara.three.light.PointLight
import jp.ogiwara.three.loader.TextureLoader
import jp.ogiwara.three.material.MeshNormalMaterial
import jp.ogiwara.three.material.MeshPhongMaterial
import jp.ogiwara.three.material.MeshToonMaterial
import jp.ogiwara.three.material.PointsMaterial
import jp.ogiwara.three.math.Vector3
import jp.ogiwara.three.obj.Group
import jp.ogiwara.three.obj.Mesh
import jp.ogiwara.three.obj.Points
import jp.ogiwara.three.renderer.WebGLRenderer
import jp.ogiwara.three.scene.Scene
import jp.ogiwara.three.util.DynamicParam
import jp.ogiwara.three.util.dynamic
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Json
import kotlin.js.Math
import kotlin.js.json

/**
 * 場所に依存しない 1000 * 500
 *
 * 背景案、無尽蔵のブロックが飛んでる…
 */
class TetrisBoard(private val cornerPosition: Vector3){

    companion object {
        const val STAGE_HEIGHT = 1000
        const val STAGE_WIDTH = 500

        const val RENDER_SIZE = 700
    }

    private val scene = Scene()
    private val renderer: WebGLRenderer
    private val camera = PerspectiveCamera(45,1,0.1,10000)

    init{
        //val param = WebGLRenderer.Init()
        //param.alpha = true
        //param.antialias = true
        renderer = WebGLRenderer(json("antialias" to true))
        renderer.setSize(RENDER_SIZE, RENDER_SIZE)
        //renderer.setClearColor(0x9e9e9e)
        renderer.shadowMap.enabled = true

        val plane = Mesh(PlaneGeometry(STAGE_WIDTH, STAGE_HEIGHT), MeshPhongMaterial(json("wireframe" to true,"color" to 0x2196f3)))
        plane.position.set(cornerPosition.x + 250, cornerPosition.y + 500, cornerPosition.z)
        plane.receiveShadow = true
        scene.add(plane)

        camera.position.set(plane.position.x + 100, plane.position.y + 100, plane.position.z + 1200)
        camera.lookAt(plane.position)
        camera.castShadow = true
        //val orbit = OrbitControls(camera)

        val light = DirectionalLight(0xffffff)
        light.position.set(1,1,1)
        scene.add(light)

        scene.add(AxesHelper(500))

        val tBlock = TetrisBlock(cornerPosition)
        scene.add(tBlock.group)

        document.getElementById(WEB_GL_TAG)!!.appendChild(renderer.domElement)

        step(2.toDouble())

        createStarField()
    }


    //Tetris内の重力、ライン削除の処理
    private fun step(`_`: Double){
        renderer.render(scene, camera)

        window.requestAnimationFrame(::step)
    }

    private fun createStarField(){
        val geometry = Geometry()
        val numParticle = 1000
        val size = 1500
        0.until(size).forEach {

                    geometry.vertices.push(Vector3(
                            size * (Math.random() + 1),
                            size * (Math.random() + 1),
                            size * (Math.random() + 1)
                    ))

                    geometry.vertices.push(Vector3(
                            size * (Math.random() - 1),
                            size * (Math.random() - 1),
                            size * (Math.random() - 1)
                    ))
                }

        val d: dynamic = object{}
        d["size"] = 10
        d["color"] = 0xFFFFFF
        val material = PointsMaterial(d)
        val mesh = Points(geometry,material)
        scene.add(mesh)
    }

    fun downBlocks(){

    }

    fun removeLine(){

    }
}

/**
 * @param centerPosition ステージパネルの中心座標
 */
class TetrisBlock(private val cornerPosition: Vector3){

    companion object {
        const val SIZE = 50
        const val COLOR = 0x4caf50
    }

    val group = Group()

    init {
        prepareBoxes()
        prepareKeyBoard()
    }

    private fun prepareBoxes(){
        val loader = TextureLoader()
        val texture = loader.load("examples/res/image/iron-material-512.jpg")
        val param: dynamic = object{}
        param["map"] = texture

        val b = Mesh(BoxGeometry(SIZE, SIZE, SIZE), MeshPhongMaterial(param))
        b.position.set(
                cornerPosition.x + SIZE / 2
                ,cornerPosition.y + TetrisBoard.STAGE_HEIGHT - SIZE / 2,
                cornerPosition.z + SIZE / 2)
        b.castShadow = true

        val a = b.clone()
        a.position.add(Vector3(-50,0,0))
        val c = b.clone()
        c.position.add(Vector3(50,0,0))
        val d = b.clone()
        d.position.add(Vector3(0,-50,0))

        group.add(a,b,c,d)
    }

    private fun prepareKeyBoard(){
        document.addEventListener("keypress",{
            if(it is KeyboardEvent){
                when(it.key){
                    "w" -> group.position.add(Vector3(0,50,0))
                    "a" -> group.position.add(Vector3(-50,0,0))
                    "s" -> group.position.add(Vector3(0,-50,0))
                    "d" -> group.position.add(Vector3(50,0,0))
                }
            }
        })
    }
}