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
    grid.forEach(row => {
        row.unshift(-Infinity)
        row.push(-Infinity)
    })
    grid.unshift(grid[0].map(() => -Infinity))
    grid.push(grid[0].map(() => -Infinity))
    return grid
}

export function updateGrid(grid: number[][]): number[][] {
    grid = incrementEnergyLevels(grid)
    for (let y = 1; y < grid.length - 1; y++) {
        for (let x = 1; x < grid[y].length - 1; x++) {
            if (grid[y][x] > 9) {
                flash(grid, { x: x, y: y })
            }
        }
    }
    return grid
}

export function incrementEnergyLevels(grid: number[][]): number[][] {
    return grid.map(row => row.map(energyLevel => energyLevel + 1))
}

export function flash(grid: number[][], point: Point): number[][] {
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
    grid[y][x] = 0
    adjacentPoints.forEach(adjacentPoint => {
        let x: number = adjacentPoint.x
        let y: number = adjacentPoint.y
        if (grid[y][x] > 0) {
            grid[y][x]++
        }
        if (grid[y][x] > 9) {
            grid = flash(grid, adjacentPoint)
        }
    })
    return grid
}

export function countFlashes(grid: number[][]): number {
    let flashes: number = 0
    for (let y = 1; y < grid.length - 1; y++) {
        for (let x = 1; x < grid[y].length - 1; x++) {
            if (grid[y][x] == 0) {
                flashes++
            }
        }
    }
    return flashes
}
