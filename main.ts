let strip = neopixel.create(DigitalPin.P9, 4, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(1, 360)
})
