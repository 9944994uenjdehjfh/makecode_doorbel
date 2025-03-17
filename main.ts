grove.onGesture(GroveGesture.Right, function () {
    amount += 1
    on = 0
    israng()
})
function israng () {
    music.play(music.tonePlayable(349, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    if (on == 0) {
        for (let index = 0; index < 40; index++) {
            if (input.buttonIsPressed(Button.A) || grove.measureInCentimetersV2(DigitalPin.P2) <= 5) {
                on = 1
                strip.showColor(neopixel.colors(NeoPixelColors.Black))
                strip.show()
            } else {
                music.play(music.tonePlayable(9999, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
                strip.showColor(neopixel.colors(NeoPixelColors.Red))
                strip.show()
                basic.pause(1000)
                strip.showColor(neopixel.colors(NeoPixelColors.White))
                strip.show()
                basic.pause(1000)
                Time_door += 1
            }
        }
    } else {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    amount += 1
    on = 0
    israng()
})
let Time_door = 0
let strip: neopixel.Strip = null
let on = 0
let amount = 0
on = 1
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip.setBrightness(255)
grove.initGesture()
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.forever(function () {
	
})
