package example

import example.tetris.Tetris
import example.tutorial1.ForMe
import example.tutorial1.Shadow

const val WEB_GL_TAG = "WebGL-output"

fun main(args: Array<String>){
    val runnable: Runnable = Tetris()
    runnable.run()
}