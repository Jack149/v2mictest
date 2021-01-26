input.onSound(DetectedSound.Loud, function () {
    led.plotBarGraph(
    input.soundLevel(),
    128
    )
})
input.onSound(DetectedSound.Quiet, function () {
    basic.clearScreen()
})
basic.clearScreen()
basic.pause(100)
basic.forever(function () {
	
})
