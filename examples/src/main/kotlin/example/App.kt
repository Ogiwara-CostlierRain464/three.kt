package example

import example.tutorial1.ForMe
import example.tutorial1.HelloThreeKt

fun main(args: Array<String>){
    val runnable: Runnable = ForMe()
    runnable.run()
}