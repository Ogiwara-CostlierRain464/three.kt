package example

import example.tutorial1.PortalGun

fun main(args: Array<String>){
    val runnable: Runnable = PortalGun()
    runnable.run()
}