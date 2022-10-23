import { sumOfRiskLevels } from "../../src/09/sum_of_risk_levels"

describe("calculate the sum of risk levels in a given map", () => {
    describe("when the map is 1-dimensional", () => {
        test("0 low points", () => {
            const input: number[][] = [[1,1,1]]
            expect(sumOfRiskLevels(input)).toStrictEqual(0)
        })
        test("1 low point in the middle", () => {
            const input: number[][] = [[3,2,3]]
            expect(sumOfRiskLevels(input)).toStrictEqual(3)
        })
        test("1 low point on the edge", () => {
            const input: number[][] = [[1,2,3]]
            expect(sumOfRiskLevels(input)).toStrictEqual(2)
        })
        test("2 low points on the edges", () => {
            const input: number [][] =[[2,5,2]]
            expect(sumOfRiskLevels(input)).toStrictEqual(6)
        })
    })
    test("when the map is 2-dimensional", () => {
        const input: number[][] = [[2,1,9,9,9,4,3,2,1,0],
                                   [3,9,8,7,8,9,4,9,2,1],
                                   [9,8,5,6,7,8,9,8,9,2],
                                   [8,7,6,7,8,9,6,7,8,9],
                                   [9,8,9,9,9,6,5,6,7,8]]
        expect(sumOfRiskLevels(input)).toStrictEqual(15)
    })
})
