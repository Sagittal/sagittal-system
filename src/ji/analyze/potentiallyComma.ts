import { Comma, Rational, ScaledVector } from "@sagittal/general"
import { CommaNameOptions, computeCommaName, computeSizeCategoryIndex } from "../name"
import { analyzeJiPitch } from "./pitch"
import { PotentiallyCommaAnalysis } from "./types"

const analyzePotentiallyComma = (
    jiPitch: ScaledVector<Rational>,
    options: CommaNameOptions = {},
): PotentiallyCommaAnalysis => {
    let name
    try {
        name = computeCommaName(jiPitch as Comma, options)
        // eslint-disable-next-line no-empty
    } catch (e) {}

    let sizeCategory
    try {
        sizeCategory = computeSizeCategoryIndex(jiPitch as Comma)
        // eslint-disable-next-line no-empty
    } catch (e) {}

    const jiPitchAnalysis = analyzeJiPitch(jiPitch)

    return { ...jiPitchAnalysis, pitch: jiPitch, sizeCategory, name } as PotentiallyCommaAnalysis
}

export { analyzePotentiallyComma }
