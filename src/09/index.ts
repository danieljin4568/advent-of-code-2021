import * as fs from "fs"
import { sumOfRiskLevels } from "./sum_of_risk_levels"
import { largestBasins } from "./largest_basins"

const fileBuffer: Buffer = fs.readFileSync("input/09/input.txt")
const data: number[][] = fileBuffer
    .toString()
    .trimEnd()
    .split("\n")
    .map(line => line.split("").map(char => Number(char)))

console.log(sumOfRiskLevels(data))
console.log(largestBasins(data))
