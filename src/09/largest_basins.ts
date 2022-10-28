interface Point {
    i: number,
    j: number
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
    let lowPoints: Point[] = []
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; j < input[i].length - 1; j++) {
            let pointOfInterest: number = input[i][j]
            if (
                pointOfInterest < input[i - 1][j] &&
                pointOfInterest < input[i + 1][j] &&
                pointOfInterest < input[i][j - 1] &&
                pointOfInterest < input[i][j + 1]
            ) {
                lowPoints.push({ i: i, j: j })
            }
        }
    }

    // Find the basins
    let basins: Point[][] = lowPoints.map(lowPoint => explore(input, lowPoint, []))

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

function explore(input: number[][], pointOfInterest: Point, traveledPoints: Point[]): Point[] {
    traveledPoints.push(pointOfInterest)
    let i: number = pointOfInterest.i
    let j: number = pointOfInterest.j
    let adjacentPoints: Point[] = [
        { i: i - 1, j: j },
        { i: i + 1, j: j },
        { i: i, j: j - 1 },
        { i: i, j: j + 1 }
    ]
    adjacentPoints.forEach(adjacentPoint => {
        let i: number = adjacentPoint.i
        let j: number = adjacentPoint.j
        if (input[i][j] < 9 && !traveledPoints.some(p => p.i == i && p.j == j)) {
            traveledPoints = explore(input, adjacentPoint, traveledPoints)
        }
    })
    return traveledPoints
}
