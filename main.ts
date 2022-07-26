let 點數 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(點數)
})
input.onGesture(Gesture.Shake, function () {
    點數 = randint(1, 6)
})
basic.forever(function () {
	
})
