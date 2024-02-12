let angulo = 0
basic.forever(function () {
    angulo = input.compassHeading()
    if (angulo < 10 || angulo > 350) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showString("")
    }
})
