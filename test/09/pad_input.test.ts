import { padInput } from "../../src/09/pad_input"

test("correctly pad input", () => {
    expect(padInput([
        [1, 2, 9],
        [9, 9, 9],
        [9, 9, 9]
    ])).toStrictEqual([
        [9, 9, 9, 9, 9],
        [9, 1, 2, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9],
        [9, 9, 9, 9, 9]
    ])
})
