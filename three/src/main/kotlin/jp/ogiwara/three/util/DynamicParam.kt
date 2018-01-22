package jp.ogiwara.three.util


fun dynamic() = DynamicParam()

class DynamicParam {
    private val obj: dynamic = object{}

    fun color(color: Number): DynamicParam{
        obj["color"] = color
        return this
    }

    fun create(): dynamic = obj

}