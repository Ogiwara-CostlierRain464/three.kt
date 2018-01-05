package example.tetris

/**
 * プレイ画面だけ
 *
 * - 自動でブロック落ちる -> 消去チェック、詰みチェック
 * - ユーザーアクションの受付
 */
class Stage {
    fun init(){
        //set scene , renderer
    }

    fun mainLoop(){//というより、ここではキーイベントにのみ注目すればいい
        /**
         *
         * onkeyevent:
         *  box.down など
         */
    }

    fun onKeyDown(){

    }
}

class MoveAbleBlock{

}