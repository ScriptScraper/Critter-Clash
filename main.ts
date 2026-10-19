// Frame events and game startups will go here
game.onUpdate(function() {
    const delta = game.eventContext().deltaTime
    for (const tower of towers) {
        tower.attackAI()
    }
    for (const enemy of enemies) {
        enemy.behavior(delta)
    }
})

game.onUpdateInterval(1000, function() {
    let badGuy = new PlaceholderBadGuy
})

spriteutils.createRenderable(0, function(screen: Image) {
    for (const entity of renderables) {
        screen.drawTransparentImage(entity.image, entity.x - entity.image.width / 2, entity.y - entity.image.height / 2)
    }
    for (const tower of towers) {
        if (tower.shotDur > 0) {
            screen.drawLine(tower.x, tower.y, tower.shotEndX, tower.shotEndY, 1)
        }
    }
})