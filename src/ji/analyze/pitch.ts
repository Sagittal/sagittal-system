import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeDecimalFromVector,
    computeQuotientFromVector,
    Rational,
    ScaledVector,
} from "@sagittal/general"
import { computeAas, computeApotomeSlope, computeAte } from "../badness"
import { analyze23FreeClass } from "./two3FreeClass"
import { JiPitchAnalysis } from "./types"

const analyzeJiPitch = (jiPitch: ScaledVector<Rational>): JiPitchAnalysis => {
    const vector = jiPitch.vector
    const quotient = computeQuotientFromVector(vector)
    const decimal = computeDecimalFromVector(vector)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const two3FreeClass = compute23FreeClass(jiPitch)
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    return {
        pitch: jiPitch,
        vector,
        quotient,
        cents,
        decimal,
        two3FreeClassAnalysis,
        apotomeSlope,
        aas,
        ate,
    }
}

export { analyzeJiPitch }
