// Initialization code will go here
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 256
    export const ARCADE_SCREEN_HEIGHT = 192
}

browserEvents.setCursorVisible(false)
game.stats = true

// Global class that every renderable entity will extend
class Entity {
    x = 0
    y = 0
    image: Image

    constructor(image: Image) {
        this.image = image
    }
}