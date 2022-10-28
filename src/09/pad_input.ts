export function padInput(input: number[][]): number[][] {
    input.forEach(row => {
        row.unshift(9)
        row.push(9)
    })
    let yPadding: number[] = input[0].map(() => 9)
    input.unshift(yPadding)
    input.push(yPadding)
    return input
}
