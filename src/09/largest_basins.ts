function explore(input: number[][], point: number[], traveledPoints: number[][]): number[][] {
    traveledPoints.push(point)
    let i: number = point[0]
    let j: number = point[1]
    let adjacentPoints: number[][] = [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1]
    ]
    adjacentPoints.forEach(point => {
        let i: number = point[0]
        let j: number = point[1]
        if (input[i][j] < 9 && !traveledPoints.some(p => p[0] == i && p[1] == j)) {
            traveledPoints = explore(input, point, traveledPoints)
        }
    })
    return traveledPoints
}

export function largestBasins(input: number[][]): number {
    // Add padding to input
    input.forEach(row => {
        row.unshift(9)
        row.push(9)
    })
    input.unshift(yPadding(input))
    input.push(yPadding(input))

    // Find the low points
    let lowPoints: number[][] = []
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; j < input[i].length - 1; j++) {
            let pointOfInterest: number = input[i][j]
            if (
                pointOfInterest < input[i - 1][j] &&
                pointOfInterest < input[i + 1][j] &&
                pointOfInterest < input[i][j - 1] &&
                pointOfInterest < input[i][j + 1]
            ) {
                lowPoints.push([i, j])
            }
        }
    }

    // Find the basins
    let basins: number[][][] = lowPoints.map(lowPoint => explore(input, lowPoint, []))

    // Multiply together the sizes of the 3 largest basins
    return basins
        .map(basin => basin.length)
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((previous, current) => previous * current, 1)
}

function yPadding(input: number[][]): number[] {
    return input[0].map(() => 9)
}
