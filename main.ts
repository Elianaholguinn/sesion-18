let random = 0
basic.forever(function () {
    random = randint(5, 10)
    basic.showNumber(random)
    basic.clearScreen()
    for (let index = 0; index <= random; index++) {
        basic.showNumber(index)
        for (let index2 = 0; index2 < index; index2++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(300)
        }
    }
    basic.showString("A BUSCAR!!!")
})
