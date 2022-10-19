export function slidingWindow(input: number[]): number[] {
    const output: number[] = []
    for (let i = 0; i < input.length - 2; i++) {
        output.push(input[i] + input[i+1] + input[i+2])
    }
    return output
}
