interface Point {
    x: number,
    y: number
}

export function countTotalFlashes(grid: number[][]): number {
    let paddedGrid: number[][] = padGrid(grid)
    let flashes: number = 0
    for (let i = 0; i < 100; i++) {
        paddedGrid = updateGrid(paddedGrid)
        flashes += countFlashes(paddedGrid)
    }
    return flashes
}

export function padGrid(grid: number[][]): number[][] {
    let paddedGrid: number[][] = []
    grid.forEach(row => paddedGrid.push(Object.assign([], row)))
    paddedGrid.forEach(row => {
        row.unshift(-Infinity)
        row.push(-Infinity)
    })
    paddedGrid.unshift(paddedGrid[0].map(() => -Infinity))
    paddedGrid.push(paddedGrid[0].map(() => -Infinity))
    return paddedGrid
}

export function updateGrid(paddedGrid: number[][]): number[][] {
    paddedGrid = incrementEnergyLevels(paddedGrid)
    for (let y = 1; y < paddedGrid.length - 1; y++) {
        for (let x = 1; x < paddedGrid[y].length - 1; x++) {
            if (paddedGrid[y][x] > 9) {
                flash(paddedGrid, { x: x, y: y })
            }
        }
    }
    return paddedGrid
}

export function incrementEnergyLevels(paddedGrid: number[][]): number[][] {
    for (let y = 1; y < paddedGrid.length - 1; y++) {
        for (let x = 1; x < paddedGrid[y].length - 1; x++) {
            paddedGrid[y][x]++
        }
    }
    return paddedGrid
}

export function flash(paddedGrid: number[][], point: Point): number[][] {
    let x: number = point.x
    let y: number = point.y
    let adjacentPoints: Point[] = [
        { x: x - 1, y: y - 1 },
        { x: x, y: y - 1 },
        { x: x + 1, y: y - 1 },
        { x: x + 1, y: y },
        { x: x + 1, y: y + 1 },
        { x: x, y: y + 1 },
        { x: x - 1, y: y + 1 },
        { x: x - 1, y: y }
    ]
    paddedGrid[y][x] = 0
    adjacentPoints.forEach(adjacentPoint => {
        let x: number = adjacentPoint.x
        let y: number = adjacentPoint.y
        if (paddedGrid[y][x] > 0) {
            paddedGrid[y][x]++
        }
        if (paddedGrid[y][x] > 9) {
            paddedGrid = flash(paddedGrid, adjacentPoint)
        }
    })
    return paddedGrid
}

export function countFlashes(paddedGrid: number[][]): number {
    let flashes: number = 0
    for (let y = 1; y < paddedGrid.length - 1; y++) {
        for (let x = 1; x < paddedGrid[y].length - 1; x++) {
            if (paddedGrid[y][x] == 0) {
                flashes++
            }
        }
    }
    return flashes
}
