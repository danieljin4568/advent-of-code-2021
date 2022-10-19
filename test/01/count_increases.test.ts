import { countIncreases } from "../../src/01/count_increases"

describe("successfully count increases", () => {
    test("when an empty array is provided", () => {
        const input: number[] = []
        expect(countIncreases(input)).toStrictEqual(0)
    })
    test("when there are no increases", () => {
        const input: number[] = [0, 0]
        expect(countIncreases(input)).toStrictEqual(0)
    })
    test("when there is 1 increase", () => {
        const input: number[] = [0, 1]
        expect(countIncreases(input)).toStrictEqual(1)
    })
    test("when there are 7 increases", () => {
        const input: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
        expect(countIncreases(input)).toStrictEqual(7)
    })
})
