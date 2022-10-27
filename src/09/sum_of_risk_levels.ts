export function sumOfRiskLevels(input: number[][]): number {
    // Add padding to input
    input.forEach(row => {
        row.unshift(9)
        row.push(9)
    })
    input.unshift(yPadding(input))
    input.push(yPadding(input))

    let output: number = 0

    // Find the low points and add their risk levels to the total
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; j < input[i].length - 1; j++) {
            let pointOfInterest: number = input[i][j]
            if (
                pointOfInterest < input[i - 1][j] &&
                pointOfInterest < input[i + 1][j] &&
                pointOfInterest < input[i][j - 1] &&
                pointOfInterest < input[i][j + 1]
            ) {
                output += pointOfInterest + 1
            }
        }
    }

    return output
}

function yPadding(input: number[][]): number[] {
    return input[0].map(() => 9)
}
