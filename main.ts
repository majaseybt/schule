input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.turnRgbLedOff()
    x = randint(1, 6)
    basic.showNumber(x)
    if (x == 6) {
        basic.setLedColor(0x00ffff)
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
})
let x = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.setLedColor(0x00ffff)
    } else {
        basic.turnRgbLedOff()
    }
    basic.pause(100)
})
