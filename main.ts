let _1 = 0
let _2 = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    _1 += -1
})
input.onGesture(Gesture.TiltLeft, function () {
    _2 += -1
})
input.onButtonPressed(Button.AB, function () {
    if (b == 0) {
        b = 1
    } else {
        b = 0
    }
})
input.onButtonPressed(Button.B, function () {
    _1 += 1
})
input.onGesture(Gesture.TiltRight, function () {
    _2 += 1
})
basic.forever(function () {
    if (b == 0) {
        basic.showString("" + (_1))
        basic.showString("" + (_2))
    } else {
        basic.showString("" + (_2))
        basic.showString("" + (_1))
    }
})
