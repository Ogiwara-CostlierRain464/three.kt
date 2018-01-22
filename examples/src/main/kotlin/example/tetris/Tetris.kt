package example.tetris

import example.Runnable
import example.WEB_GL_TAG
import jp.ogiwara.three.camera.OrthographicCamera
import jp.ogiwara.three.control.OrbitControls
import jp.ogiwara.three.geometry.BoxGeometry
import jp.ogiwara.three.geometry.PlaneGeometry
import jp.ogiwara.three.helper.AxesHelper
import jp.ogiwara.three.helper.GridHelper
import jp.ogiwara.three.light.DirectionalLight
import jp.ogiwara.three.material.MeshBasicMaterial
import jp.ogiwara.three.material.MeshLambertMaterial
import jp.ogiwara.three.material.MeshNormalMaterial
import jp.ogiwara.three.math.Vector2
import jp.ogiwara.three.math.Vector3
import jp.ogiwara.three.obj.Group
import jp.ogiwara.three.obj.Mesh
import jp.ogiwara.three.renderer.WebGLRenderer
import jp.ogiwara.three.scene.Scene
import jp.ogiwara.three.util.ColorPalette
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document
import kotlin.browser.window
import kotlin.math.PI

/**
 * テトリス
 *
 * 1 キーボード入力に合わせてブロック移動
 * 2 MVC
 *
 * MVC???
 *
 * Model
 * ブロックマップ
 * 単純な10*10マップ、並行かめら
 * 描画回数をなるべく減らしたい
 * View
 * render
 * C
 * イベント駆動
 *
 */
class Tetris: Runnable {

    companion object {
        const val SIZE = 750
    }

    override fun run() {
        val board = TetrisBoard(Vector3(0,0,0))
    }

    private fun _1(){
        window.onload = {
            val renderer = WebGLRenderer()
            renderer.setSize(SIZE,SIZE)
            renderer.setClearColor(0xffffff)

            val scene = Scene()

            val camera = OrthographicCamera(SIZE/ -2,SIZE / 2, SIZE / 2, SIZE / -2, 1, 10000)
            camera.position.set(300,300,300)

            val controls = OrbitControls(camera)

            scene.add(AxesHelper(500))

            val plane = Mesh(PlaneGeometry(1000,1000),MeshNormalMaterial())
            plane.position.set(0,0,0)
            plane.rotateX(0.5 * PI)
            scene.add(plane)

            val group = Group()
            (0..2).forEach {
                val box = Mesh(BoxGeometry(100,100,100),MeshNormalMaterial())
                box.position.set(100*it, 100*it, 100*it)

                group.add(box)
            }

            scene.add(group)

            document.getElementById(WEB_GL_TAG)!!.appendChild(renderer.domElement)

            document.onkeydown = {

                if(it is KeyboardEvent){



                    when(it.key){
                        "w" -> group.position.add(Vector3(0,0,5))
                        "a" -> group.position.add(Vector3(5,0,0))
                        "s" -> group.position.add(Vector3(0,0,-5))
                        "d" -> group.position.add(Vector3(-5,0,0))
                    }
                }
            }

            @Suppress("UNUSED_PARAMETER")
            fun tick(d: Double){
                renderer.render(scene, camera)

                window.requestAnimationFrame(::tick)
            }

            tick(2.toDouble())
        }
    }

    private fun _2(){
        window.onload = {
            val renderer = WebGLRenderer()
            renderer.setSize(SIZE,SIZE)
            renderer.setClearColor(0xffffff)

            val scene = Scene()

            val grid = GridHelper(500)
            grid.position.set(250,0,250)
            scene.add(grid)

            val box = TBlock(Vector3(25,25,475))
            scene.add(box.group)


            scene.add(AxesHelper(500))

            val camera = OrthographicCamera(SIZE/ -2,SIZE / 2, SIZE / 2, SIZE / -2, 1, 10000)
            camera.position.set(250,500,250)

            //OrbitControls(camera)

            camera.lookAt(grid.position)

            document.getElementById(WEB_GL_TAG)!!.appendChild(renderer.domElement)

            @Suppress("UNUSED_PARAMETER")
            fun tick(`_`: Double){

                renderer.render(scene, camera)


            }

            window.requestAnimationFrame(::tick)

            //tick(2.toDouble())
        }
    }

    private fun addVectorBlock(): Array<Mesh>{
        val box1 = Mesh(BoxGeometry(10,10,10),MeshNormalMaterial())
        val box2 = box1.clone()
        val box3 = box1.clone()
        val box4 = box1.clone()

        box1.position.set(-25,525,-25)
        box2.position.set(525,525,-25)
        box3.position.set(-25,-25,-25)
        box4.position.set(525,-25,-25)
        return arrayOf(box1,box2,box3,box4)
    }
}

class MoveAbleBox(size: Number):
        Mesh(BoxGeometry(size,size,size),MeshNormalMaterial()){
    init{
        document.addEventListener("keypress",{
            if(it is KeyboardEvent){


                when(it.key){
                    "w" -> position.add(Vector3(0,0,-50))
                    "a" -> position.add(Vector3(-50,0,0))
                    "s" -> position.add(Vector3(0,0,50))
                    "d" -> position.add(Vector3(50,0,0))

                }
            }
        })
    }
}

class TBlock(private val centerPos: Vector3){

    val group = Group()

    init{
        prepareBoxes()
        prepareKeyBoard()
    }

    private fun prepareBoxes(){
        val b = Mesh(BoxGeometry(50,50,50),MeshNormalMaterial())
        b.position.set(0,0,0)
        b.position.add(centerPos)
        val a = b.clone()
        a.position.add(Vector3(-50,0,0))
        val c = b.clone()
        c.position.add(Vector3(50,0,0))
        val d = b.clone()
        d.position.add(Vector3(0,0,50))

        group.add(*kotlin.arrayOf(a,b,c,d))
    }

    private fun prepareKeyBoard(){
        document.addEventListener("keypress",{
            if(it is KeyboardEvent){
                when(it.key){
                    "w" -> group.position.add(Vector3(0,0,-50))
                    "a" -> group.position.add(Vector3(-50,0,0))
                    "s" -> group.position.add(Vector3(0,0,50))
                    "d" -> group.position.add(Vector3(50,0,0))
                }
            }
        })
    }
}