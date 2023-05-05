input.onButtonPressed(Button.A, function () {
    if (Rigel.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
let Rigel: game.LedSprite = null
Rigel = game.createSprite(2, 2)
game.setLife(5)
basic.forever(function () {
    Rigel.move(1)
    basic.pause(100)
    Rigel.ifOnEdgeBounce()
})
