import { padInput } from "./pad_input"

export function sumOfRiskLevels(input: number[][]): number {
    let paddedInput: number[][] = padInput(input)

    // Find the low points and add their risk levels to the total
    let output: number = 0
    for (let y = 1; y < paddedInput.length - 1; y++) {
        for (let x = 1; x < paddedInput[y].length - 1; x++) {
            let pointOfInterest: number = paddedInput[y][x]
            if (
                pointOfInterest < paddedInput[y - 1][x] &&
                pointOfInterest < paddedInput[y + 1][x] &&
                pointOfInterest < paddedInput[y][x - 1] &&
                pointOfInterest < paddedInput[y][x + 1]
            ) {
                output += pointOfInterest + 1
            }
        }
    }

    return output
}
