import { slidingWindow } from "../../src/01/sliding_window"

describe("successfully convert array to three-measurement windows", () => {
    test("when the array is empty", () => {
        const input: number[] = []
        expect(slidingWindow(input)).toStrictEqual([])
    })
    test("when the array contains less than 3 numbers", () => {
        const input: number[] = [1, 2]
        expect(slidingWindow(input)).toStrictEqual([])
    })
    test("when the array contains 3 numbers", () => {
        const input: number[] = [1, 2, 3]
        expect(slidingWindow(input)).toStrictEqual([6])
    })
    test("when the array contains 10 numbers", () => {
        const input: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
        expect(slidingWindow(input)).toStrictEqual([607, 618, 618, 617, 647, 716, 769, 792])
    })
})
