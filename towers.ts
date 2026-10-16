// Tower classes will go here
class Tower extends Entity {
    // Stats
    dmgBonus = 0
    range: number
    atkInterval: number
    currentInterval = 0
    totalCost: number
    sellPrice: number

    // Animation
    frameIndex = 0
    frameInterval = 83
    animationState = -1
    frames: Image[]

    constructor(range: number, atkInterval: number, totalCost: number, frames: Image[]) {
        super(img`.`)
        this.range = range
        this.atkInterval = atkInterval
        this.totalCost = totalCost
        this.sellPrice = Math.round(totalCost * 0.8)
    }
    attackAI() {}
    animationHandler() {}
}

class Squirbo extends Tower {
    constructor() {
        super(40, 1200, 40, [])
    }
}