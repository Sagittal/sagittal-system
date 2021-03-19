import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeDecimalFromPev,
    computeQuotientFromPev,
    Spev,
} from "@sagittal/general"
import {computeAas, computeApotomeSlope, computeAte} from "../badness"
import {analyze23FreeClass} from "./two3FreeClass"
import {JiPitchAnalysis} from "./types"

const analyzeJiPitch = (jiPitch: Spev<{rational: true}>): JiPitchAnalysis => {
    const pev = jiPitch.pev
    const quotient = computeQuotientFromPev(pev)
    const decimal = computeDecimalFromPev(pev)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const two3FreeClass = compute23FreeClass(jiPitch)
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    return {
        pitch: jiPitch,
        pev,
        quotient,
        cents,
        decimal,
        two3FreeClassAnalysis,
        apotomeSlope,
        aas,
        ate,
    }
}

export {
    analyzeJiPitch,
}
