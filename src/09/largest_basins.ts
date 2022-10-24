function explore(input: number[][], point: number[] , traveledPoints: number[][]): number[][] {
    traveledPoints.push(point)
    let i: number = point[0]
    let j: number = point[1]
    if (input[i-1][j] < 9 && !(traveledPoints.some(p => p[0] == i-1 && p[1] == j))) {
        traveledPoints = explore(input, [i-1, j], traveledPoints)
    }
    if (input[i][j+1] < 9 && !(traveledPoints.some(p => p[0] == i && p[1] == j+1))) {
        traveledPoints = explore(input, [i, j+1], traveledPoints)
    }
    if (input[i+1][j] < 9 && !(traveledPoints.some(p => p[0] == i+1 && p[1] == j))) {
        traveledPoints = explore(input, [i+1, j], traveledPoints)
    }
    if (input[i][j-1] < 9 && !(traveledPoints.some(p => p[0] == i && p[1] == j-1))) {
        traveledPoints = explore(input, [i, j-1], traveledPoints)
    }
    return traveledPoints
}

export function largestBasins(input: number[][]): number {
    // Add padding to input
    let yPadding: number[] = input[0].map(() => 9)
    input.unshift(yPadding)
    input.push(yPadding)
    input.forEach(row => {
        row.unshift(9)
        row.push(9)
    })

    // Find the low points
    let lowPoints: number[][] = []
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; j < input[i].length - 1; j++) {
            if (input[i][j] < input[i-1][j] &&
                input[i][j] < input[i+1][j] &&
                input[i][j] < input[i][j-1] &&
                input[i][j] < input[i][j+1]) {
                lowPoints.push([i, j])
            }
        }
    }

    // Find the basins
    let basins: number[][][] = lowPoints.map(lowPoint => explore(input, lowPoint, []))

    // Multiply together the sizes of the 3 largest basins
    let basinSizes: number[] = basins.map(basin => basin.length)
    let largestBasinSizes: number[] = basinSizes.sort((a, b) => b - a)
                                                .slice(0,3)
    let output: number = largestBasinSizes.reduce((previous, current) => previous * current, 1)

    return output
}
