import { Comma } from "@sagittal/general"
import { CommaNameOptions, computeCommaName, computeSizeCategoryIndex } from "../name"
import { analyzeJiPitch } from "./pitch"
import { CommaAnalysis } from "./types"

const analyzeComma = (comma: Comma, options: CommaNameOptions = {}): CommaAnalysis => {
    const name = computeCommaName(comma, options)
    const sizeCategory = computeSizeCategoryIndex(comma)

    const jiPitchAnalysis = analyzeJiPitch(comma)

    return { ...jiPitchAnalysis, pitch: comma, sizeCategory, name }
}

export { analyzeComma }
