basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Forever)
    }
})
