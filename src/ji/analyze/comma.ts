import { Comma } from "@sagittal/general"
import { CommaNameOptions, computeCommaName, computeSizeCategoryIndex } from "../name"
import { analyzeJiPitch } from "./pitch"
import { CommaAnalysis } from "./types"

const analyzeComma = (comma: Comma, commaNameOptions: CommaNameOptions = {}): CommaAnalysis => {
    console.log("in analyzeComma: directedWord", commaNameOptions.directedWord)
    console.log("in analyzeComma: directedNumbers", commaNameOptions.directedNumbers)
    const name = computeCommaName(comma, commaNameOptions)
    const sizeCategory = computeSizeCategoryIndex(comma)

    const jiPitchAnalysis = analyzeJiPitch(comma)

    return { ...jiPitchAnalysis, pitch: comma, sizeCategory, name }
}

export { analyzeComma }
