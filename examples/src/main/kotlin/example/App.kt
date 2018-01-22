package example

import example.tetris.Tetris
import example.tutorial1.ForMe
import example.tutorial1.Shadow
import kotlin.browser.window

const val WEB_GL_TAG = "WebGL-output"

fun main(args: Array<String>){

    window.onload = {
        val runnable: Runnable = Shadow()
        runnable.run()
    }
}