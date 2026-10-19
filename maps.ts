// Map classes, functions, and maps will go here
class Path {
    points: number[][]
    cumulativeDist: number[]
    totalDist: number
    
    constructor(points: number[][]) {
        this.points = points
        this.cumulativeDist = [0]
        for (let i = 1; i < points.length; i++) {
            const dx = points[i][0] - points[i - 1][0]
            const dy = points[i][1] - points[i - 1][1]
            this.cumulativeDist.push(this.cumulativeDist[i - 1] + Math.sqrt(dx ** 2 + dy ** 2))
        }
        this.totalDist = this.cumulativeDist[this.cumulativeDist.length - 1]
    }
    place(enemy: Enemy, dist: number) {
        let index = 1
        while (index < this.cumulativeDist.length - 1 && this.cumulativeDist[index] < dist) {
            index += 1
        }
        const percent = (dist - this.cumulativeDist[index - 1]) / (this.cumulativeDist[index] - this.cumulativeDist[index - 1])
        enemy.x = this.points[index - 1][0] + (this.points[index][0] - this.points[index - 1][0]) * percent
        enemy.y = this.points[index - 1][1] + (this.points[index][1] - this.points[index - 1][1]) * percent
    }
}

class Map {
    image: Image
    colorMap: Image
    paths: Path[]

    constructor(image: Image, colorMap: Image, paths: Path[]) {
        this.image = image
        this.colorMap = colorMap
        this.paths = paths
        scene.setBackgroundImage(image)
    }
}

class FriendlyForest extends Map {
    constructor() {
        super(
            assets.image`friendlyForest`,
            assets.image`friendlyForestColorMap`,
            [
                new Path([[-10, 131], [64, 131], [72, 135], [75, 142], [75, 170], [72, 177], [65, 181], [32, 181], [25, 177], [22, 170], [22, 84], [25, 77], [32, 73],
                    [125, 73], [132, 77], [135, 84], [135, 112], [132, 119], [125, 123], [92, 123], [85, 119], [82, 112], [82, 23], [85, 16], [92, 12],
                    [185, 12], [192, 16], [195, 23], [195, 51], [192, 58], [185, 62], [152, 62], [145, 58], [141, 51], [142, -10]])
            ]
        )
    }
}

let currentMap = new FriendlyForest