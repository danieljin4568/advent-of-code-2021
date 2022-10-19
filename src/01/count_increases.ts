export function countIncreases(input: number[]): number {
    let output: number = 0
    for (let i = 1; i < input.length; i++) {
        if (input[i] > input[i-1]) {
            output++
        }
    }
    return output
}
