input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Empty_Obstacle_Y = 0
let Ticks = 0
let Bird: game.LedSprite = null
let Index = 0
let Obstacles: game.LedSprite[] = []
Bird = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Obstacles.length > 0 && Obstacles[0].get(LedSpriteProperty.X) == 0) {
        Obstacles.removeAt(0).delete()
    }
    for (let Obstacle_2 of Obstacles) {
        Obstacle_2.change(LedSpriteProperty.X, -1)
    }
    if (Ticks % 3 == 0) {
        Empty_Obstacle_Y = randint(0, 4)
        for (let Index_2 = 0; Index_2 <= 4; Index_2++) {
            if (Index_2 != Empty_Obstacle_Y) {
                Obstacles.push(game.createSprite(4, Index_2))
            }
        }
    }
    for (let Obstacle_3 of Obstacles) {
        if (Obstacle_3.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle_3.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    basic.pause(1000)
})
