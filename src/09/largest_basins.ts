import { padInput } from "./pad_input"

interface Point {
    x: number,
    y: number
}

export function largestBasins(input: number[][]): number {
    let paddedInput: number[][] = padInput(input)

    // Find the low points
    let lowPoints: Point[] = []
    for (let y = 1; y < paddedInput.length - 1; y++) {
        for (let x = 1; x < paddedInput[y].length - 1; x++) {
            let pointOfInterest: number = paddedInput[y][x]
            if (
                pointOfInterest < paddedInput[y - 1][x] &&
                pointOfInterest < paddedInput[y + 1][x] &&
                pointOfInterest < paddedInput[y][x - 1] &&
                pointOfInterest < paddedInput[y][x + 1]
            ) {
                lowPoints.push({ x: x, y: y })
            }
        }
    }

    // Find the basins
    let basins: Point[][] = lowPoints.map(lowPoint => explore(paddedInput, lowPoint, []))

    // Multiply together the sizes of the 3 largest basins
    return basins
        .map(basin => basin.length)
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((previous, current) => previous * current, 1)
}

function explore(input: number[][], pointOfInterest: Point, traveledPoints: Point[]): Point[] {
    traveledPoints.push(pointOfInterest)
    let x: number = pointOfInterest.x
    let y: number = pointOfInterest.y
    let adjacentPoints: Point[] = [
        { x: x, y: y - 1 },
        { x: x, y: y + 1 },
        { x: x - 1, y: y },
        { x: x + 1, y: y }
    ]
    adjacentPoints.forEach(adjacentPoint => {
        let x: number = adjacentPoint.x
        let y: number = adjacentPoint.y
        if (!traveledPoints.some(p => p.x == x && p.y == y) && input[y][x] < 9) {
            traveledPoints = explore(input, adjacentPoint, traveledPoints)
        }
    })
    return traveledPoints
}
