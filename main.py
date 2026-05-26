strip: neopixel.Strip = None

def on_button_pressed_a():
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    servos.P0.run(50)
    for index in range(234):
        strip.show_rainbow(1, 36000)
    strip.show_color(neopixel.colors(NeoPixelColors.INDIGO))
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    basic.show_icon(IconNames.SAD)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    led.plot_bar_graph(input.acceleration(Dimension.X), 256, True)
basic.forever(on_forever)

def on_every_interval():
    global strip
    servos.P0.run(50)
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    for index2 in range(9000):
        strip.show_rainbow(1, 90000)
        strip.shift(1)
    strip.show_color(neopixel.colors(NeoPixelColors.INDIGO))
    strip.set_matrix_color(90, 35, neopixel.colors(NeoPixelColors.INDIGO))
    basic.show_string("Hey! Try That Too!")
    radio.send_string("Hey! Try That Too!")
    datalogger.log(datalogger.create_cv("Hey! Try That Too!", 90),
        datalogger.create_cv("Hey! Try That Too!", 90.7),
        datalogger.create_cv("Hey! Try That Too!", 90))
loops.every_interval(3600000, on_every_interval)
