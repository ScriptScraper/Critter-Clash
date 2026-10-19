// Tower classes will go here
class Tower extends Entity {
    // Stats
    dmgBonus = 0
    range: number
    displayRange: number
    atkInterval: number
    currentInterval = 0
    totalCost: number
    sellPrice: number
    hitboxRadius: number
    visibleEnemies: Enemy[] = []

    shotEndX = 0
    shotEndY = 0
    shotDur = 0

    // Animation
    frameIndex = 0
    frameInterval = 83
    animationState = -1
    frames: Image[]

    constructor(range: number, atkInterval: number, totalCost: number, frames: Image[]) {
        super(assets.image`towerPlaceholder`)
        this.range = range
        this.atkInterval = atkInterval
        this.totalCost = totalCost
        this.sellPrice = Math.round(totalCost * 0.8)
        renderables.push(this)
        towers.push(this)
    }
    attackAI() {}
    animationHandler() {}
}

class Squirbo extends Tower {
    constructor() {
        super(40, 1200, 40, [])
    }
    attackAI() {
        if (this.currentInterval <= 0) {
            let furthestDist = -1
            let target: Enemy = null
            for (const enemy of enemies) {
            const dx = enemy.x - this.x
            const dy = enemy.y - this.y
            if (dx ** 2 + dy ** 2 <= this.range ** 2 && enemy.distance > furthestDist) {
                target = enemy
                furthestDist = enemy.distance
            }
        }
            if (target != null) {
                target.health -= 10
                this.shotEndX = target.x
                this.shotEndY = target.y - 6
                this.shotDur = 80
                this.currentInterval = this.atkInterval
            }
        } else {
            this.currentInterval -= game.eventContext().deltaTimeMillis
        }
        if (this.shotDur > 0) {
            this.shotDur -= game.eventContext().deltaTimeMillis
        }
    }
}