import * as fs from 'fs'
import { countIncreases } from './count_increases'
import { slidingWindow } from './sliding_window'

const fileBuffer: Buffer = fs.readFileSync("input/01/input.txt")
const data: number[] = fileBuffer.toString().split("\n").map(value => {
    return Number(value)
})

console.log(countIncreases(data))
console.log(countIncreases(slidingWindow(data)))
