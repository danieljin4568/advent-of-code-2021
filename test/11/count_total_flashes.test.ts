import { countTotalFlashes, padGrid, updateGrid, incrementEnergyLevels, flash, countFlashes } from "../../src/11/count_total_flashes"

test("add padding to grid", () => {
    expect(padGrid([
        [1]
    ])).toStrictEqual([
        [-Infinity,-Infinity,-Infinity],
        [-Infinity,1,-Infinity],
        [-Infinity,-Infinity,-Infinity]
    ])
})

test("update the grid after 1 step", () => {
    expect(updateGrid([
        [-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity],
        [-Infinity,1,1,1,1,1,-Infinity],
        [-Infinity,1,9,9,9,1,-Infinity],
        [-Infinity,1,9,1,9,1,-Infinity],
        [-Infinity,1,9,9,9,1,-Infinity],
        [-Infinity,1,1,1,1,1,-Infinity],
        [-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity]
    ])).toStrictEqual([
        [-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity],
        [-Infinity,3,4,5,4,3,-Infinity],
        [-Infinity,4,0,0,0,4,-Infinity],
        [-Infinity,5,0,0,0,5,-Infinity],
        [-Infinity,4,0,0,0,4,-Infinity],
        [-Infinity,3,4,5,4,3,-Infinity],
        [-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity]
    ])
})

test("increment energy levels", () => {
    expect(incrementEnergyLevels([
        [-Infinity,-Infinity,-Infinity],
        [-Infinity,1,-Infinity],
        [-Infinity,-Infinity,-Infinity]
    ])).toStrictEqual([
        [-Infinity,-Infinity,-Infinity],
        [-Infinity,2,-Infinity],
        [-Infinity,-Infinity,-Infinity]
    ])
})

test("update the grid when an octopus flashes", () => {
    expect(flash([
        [-Infinity,-Infinity,-Infinity],
        [-Infinity,1,-Infinity],
        [-Infinity,-Infinity,-Infinity]
    ], { x: 1, y: 1 })).toStrictEqual([
        [-Infinity,-Infinity,-Infinity],
        [-Infinity,0,-Infinity],
        [-Infinity,-Infinity,-Infinity]
    ])
})

test("count the number of flashes in a given grid", () => {
    expect(countFlashes([
        [-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity],
        [-Infinity,3,4,5,4,3,-Infinity],
        [-Infinity,4,0,0,0,4,-Infinity],
        [-Infinity,5,0,0,0,5,-Infinity],
        [-Infinity,4,0,0,0,4,-Infinity],
        [-Infinity,3,4,5,4,3,-Infinity],
        [-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity,-Infinity]
    ])).toStrictEqual(9)
})

describe("count the total flashes after 100 steps", () => {
    test("for a 1x1 grid", () => {
        expect(countTotalFlashes([
            [1]
        ])).toStrictEqual(10)
    })
    test("for a 10x10 grid", () => {
        expect(countTotalFlashes([
            [5,4,8,3,1,4,3,2,2,3],
            [2,7,4,5,8,5,4,7,1,1],
            [5,2,6,4,5,5,6,1,7,3],
            [6,1,4,1,3,3,6,1,4,6],
            [6,3,5,7,3,8,5,4,7,8],
            [4,1,6,7,5,2,4,6,4,5],
            [2,1,7,6,8,4,1,7,2,1],
            [6,8,8,2,8,8,1,1,3,4],
            [4,8,4,6,8,4,8,5,5,4],
            [5,2,8,3,7,5,1,5,2,6]
        ])).toStrictEqual(1656)
    })
})
