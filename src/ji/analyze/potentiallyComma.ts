import {Comma, Spev} from "@sagittal/general"
import {CommaNameOptions, computeCommaName, computeSizeCategoryIndex} from "../name"
import {analyzeJiPitch} from "./pitch"
import {PotentiallyCommaAnalysis} from "./types"

const analyzePotentiallyComma = (
    jiPitch: Spev<{rational: true}>,
    options: CommaNameOptions = {},
): PotentiallyCommaAnalysis => {
    let name
    try {
        name = computeCommaName(jiPitch as Comma, options)
    } catch (e) {
    }

    let sizeCategory
    try {
        sizeCategory = computeSizeCategoryIndex(jiPitch as Comma)
    } catch (e) {
    }

    const jiPitchAnalysis = analyzeJiPitch(jiPitch)

    return {...jiPitchAnalysis, pitch: jiPitch, sizeCategory, name} as PotentiallyCommaAnalysis
}

export {
    analyzePotentiallyComma,
}
