let strip : neopixel.Strip = null
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    servos.P0.run(50)
    for (let index = 0; index < 234; index++) {
        strip.showRainbow(1, 36000)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showIcon(IconNames.Sad)
})
basic.forever(function on_forever() {
    led.plotBarGraph(input.acceleration(Dimension.X), 256, true)
})
loops.everyInterval(3600000, function on_every_interval() {
    
    servos.P0.run(50)
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    for (let index2 = 0; index2 < 9000; index2++) {
        strip.showRainbow(1, 90000)
        strip.shift(1)
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    strip.setMatrixColor(90, 35, neopixel.colors(NeoPixelColors.Indigo))
    basic.showString("Hey! Try That Too!")
    radio.sendString("Hey! Try That Too!")
    datalogger.log(datalogger.createCV("Hey! Try That Too!", 90), datalogger.createCV("Hey! Try That Too!", 90.7), datalogger.createCV("Hey! Try That Too!", 90))
})
