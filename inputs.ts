// Input events will go here
browserEvents.onMouseMove(function(x: number, y: number) {
    cursor.setPosition(x, y)
})

browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function(x: number, y: number) {
    const newTower = new Squirbo
    newTower.x = x
    newTower.y = y
})