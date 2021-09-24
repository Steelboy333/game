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
loops.everyInterval(180000, function () {
    game.gameOver()
})
loops.everyInterval(60000, function () {
    game.addScore(100)
    for (let Obstacle_2 of Obstacles) {
        Obstacle_2.change(LedSpriteProperty.X, -2)
    }
})
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
    for (let Obstacle_1 of Obstacles) {
        if (Obstacle_1.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.Y) && Obstacle_1.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.X)) {
            game.addScore(1)
        }
    }
    for (let Obstacle_2 of Obstacles) {
        if (Obstacle_2.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.Y) && Obstacle_2.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.X)) {
            game.addScore(1)
        }
    }
    for (let Obstacle_3 of Obstacles) {
        if (Obstacle_3.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle_3.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.addScore(1)
        }
    }
    for (let Obstacle_4 of Obstacles) {
        if (Obstacle_4.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle_4.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.addScore(1)
        }
    }
    for (let Obstacle_5 of Obstacles) {
        if (Obstacle_5.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle_5.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.addScore(1)
        }
    }
    for (let Obstacle_6 of Obstacles) {
        if (Obstacle_6.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle_6.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.addScore(1)
        }
    }
    for (let Obstacle_3 of Obstacles) {
        if (Obstacle_3.get(LedSpriteProperty.X) == Bird.get(LedSpriteProperty.X) && Obstacle_3.get(LedSpriteProperty.Y) == Bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Ticks += 1
    game.startCountdown(60000)
    basic.pause(1000)
})
loops.everyInterval(120000, function () {
    game.addScore(100)
    for (let Obstacle_2 of Obstacles) {
        Obstacle_2.change(LedSpriteProperty.X, -3)
    }
})
