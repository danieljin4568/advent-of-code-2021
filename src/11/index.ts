import * as fs from "fs"
import { countTotalFlashes } from "./count_total_flashes"

const fileBuffer: Buffer = fs.readFileSync("input/11/input.txt")
const grid: number[][] = fileBuffer
    .toString()
    .trimEnd()
    .split("\n")
    .map(line => line.split("").map(char => Number(char)))

console.log(countTotalFlashes(grid))
