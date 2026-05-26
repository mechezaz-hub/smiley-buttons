let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedString(function (receivedString) {
    servos.P0.run(50)
    for (let index = 0; index < 234; index++) {
        strip.showRainbow(1, 36000)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    256,
    true
    )
})
loops.everyInterval(3600000, function () {
    servos.P0.run(50)
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    for (let index = 0; index < 9000; index++) {
        strip.showRainbow(1, 90000)
        strip.shift(1)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    strip.setMatrixColor(90, 35, neopixel.colors(NeoPixelColors.Indigo))
    basic.showString("Hey! Try That Too!")
    radio.sendString("Hey! Try That Too!")
    datalogger.log(
    datalogger.createCV("Hey! Try That Too!", 90),
    datalogger.createCV("Hey! Try That Too!", 90.7),
    datalogger.createCV("Hey! Try That Too!", 90)
    )
})
