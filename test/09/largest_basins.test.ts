import { largestBasins } from "../../src/09/largest_basins"

describe("find the 3 largest basins in a given map and multiply their sizes together", () => {
    test("when the map has 1 basin", () => {
        const input: number[][] = [[1,2,9],
                                   [2,9,9],
                                   [9,9,9]]
        expect(largestBasins(input)).toStrictEqual(3)
    })
    test("when the map has 3 basins", () => {
        const input: number[][] = [[1,2,9,9],
                                   [9,9,9,9],
                                   [3,9,4,3],
                                   [4,9,4,2]]
        expect(largestBasins(input)).toStrictEqual(16)
    })
    test("when the map has 4 basins", () => {
        const input: number[][] = [[2,1,9,9,9,4,3,2,1,0],
                                   [3,9,8,7,8,9,4,9,2,1],
                                   [9,8,5,6,7,8,9,8,9,2],
                                   [8,7,6,7,8,9,6,7,8,9],
                                   [9,8,9,9,9,6,5,6,7,8]]
        expect(largestBasins(input)).toStrictEqual(1134)
    })
})
