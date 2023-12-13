input.onButtonPressed(Button.A, function () {
    isLineTracking = 1
})
input.onButtonPressed(Button.B, function () {
    isLineTracking = 0
})
let isLineTracking = 0
isLineTracking = 3
basic.forever(function () {
    if (isLineTracking == 1) {
        serial.writeLine("" + (Rover.LineTracking()))
        if (Rover.LineTracking() == 3) {
            Rover.MotorRunDual(60, -50)
        } else if (Rover.LineTracking() == 6) {
            Rover.MotorRunDual(-50, 60)
        } else if (Rover.LineTracking() == 2) {
            Rover.Move(100)
        }
    } else if (isLineTracking == 0) {
        serial.writeLine("" + (Rover.Ultrasonic()))
        if (Rover.Ultrasonic() < 15) {
            Rover.MotorRunDual(-50, 50)
            basic.pause(500)
        } else {
            Rover.Move(255)
        }
    }
})
