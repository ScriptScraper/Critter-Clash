// Enemy classes and functions will go here
class Enemy extends Entity {
    // Stats
    health: number
    speed: number

    // Movement
    distance = 0
    path: Path

    constructor(health: number, speed: number, path: Path) {
        super(assets.image`enemyPlaceholder`)
        this.health = health
        this.speed = speed
        this.path = path

        renderables.push(this)
        enemies.push(this)
    }
    behavior(delta: number) {
        this.distance += this.speed * delta
        if (this.distance >= this.path.totalDist) {
            game.gameOver(false)
        } else {
            this.path.place(this, this.distance)
        }
        if (this.health <= 0) {
            renderables.removeElement(this)
            enemies.removeElement(this)
        }
    }
}

class PlaceholderBadGuy extends Enemy {
    constructor() {
        super(25, 25, currentMap.paths[0])
    }
}
