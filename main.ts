// azul
pins.onPulsed(DigitalPin.P14, PulseValue.High, function () {
    if (azul < 255) {
        azul = azul + 5
    } else {
        azul = 0
    }
})
// verde
pins.onPulsed(DigitalPin.P13, PulseValue.High, function () {
    if (verde < 255) {
        verde = verde + 5
    } else {
        verde = 0
    }
})
// vermelho
pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    if (vermelho < 255) {
        vermelho = vermelho + 5
    } else {
        vermelho = 0
    }
})
let azul = 0
let verde = 0
let vermelho = 0
led.enable(false)
vermelho = 0
verde = 0
azul = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, Math.map(vermelho, 0, 255, 0, 1023))
    pins.analogWritePin(AnalogPin.P2, Math.map(verde, 0, 255, 0, 1023))
    pins.analogWritePin(AnalogPin.P3, Math.map(azul, 0, 255, 0, 1023))
})
