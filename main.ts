let 點數 = 0
input.onGesture(Gesture.Shake, function () {
    點數 = randint(1, 6)
    basic.showNumber(點數)
})
basic.forever(function () {
	
})
