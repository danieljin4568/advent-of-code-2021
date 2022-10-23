export function sumOfRiskLevels(input: number[][]): number {
    // Add padding to input
    let yPadding: number[] = input[0].map(() => 9)
    input.unshift(yPadding)
    input.push(yPadding)
    input.forEach(row => {
        row.unshift(9)
        row.push(9)
    })
    
    let output: number = 0

    // Find the low points and add their risk levels to the total
    for (let i = 1; i < input.length - 1; i++) {
        for (let j = 1; j < input[i].length - 1; j++) {
            if (input[i][j] < input[i-1][j] &&
                input[i][j] < input[i+1][j] &&
                input[i][j] < input[i][j-1] &&
                input[i][j] < input[i][j+1]) {
                output += input[i][j] + 1
            }
        }
    }

    return output
}
