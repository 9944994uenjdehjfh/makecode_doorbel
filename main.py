def on_gesture_right():
    global on
    on = 0
    israng()
grove.on_gesture(GroveGesture.RIGHT, on_gesture_right)

def israng():
    global on
    music.play(music.tone_playable(349, music.beat(BeatFraction.DOUBLE)),
        music.PlaybackMode.UNTIL_DONE)
    if on == 0:
        for index in range(4):
            if input.button_is_pressed(Button.A):
                on = 1
                strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
                strip.show()
            else:
                strip.show_color(neopixel.colors(NeoPixelColors.RED))
                strip.show()
                basic.pause(1000)
                strip.show_color(neopixel.colors(NeoPixelColors.WHITE))
                strip.show()
                basic.pause(1000)
    else:
        pass
on = 0
strip: neopixel.Strip = None
strip.set_brightness(255)
on = 1
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
grove.init_gesture()
strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
strip.show()

def on_forever():
    pass
basic.forever(on_forever)
