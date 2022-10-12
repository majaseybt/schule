input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showString("maja")
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
input.onGesture(Gesture.Shake, function () {
    basic.showString("hi!")
})
let x = 0
basic.showIcon(IconNames.Heart)
basic.setLedColor(0x00ffff)
basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.setLedColor(0x00ffff)
    } else {
        basic.turnRgbLedOff()
    }
    basic.pause(100)
})
