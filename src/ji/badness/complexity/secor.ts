import {
    abs,
    compute23FreeClass,
    computeQuotientFromVector,
    computeRationalDecimalCopfr,
    computeRationalScaledVectorSopfr,
    Quotient,
    Rational,
    ScaledVector,
    THREE_PRIME_INDEX,
} from "@sagittal/general"
import { SecorComplexity } from "./types"
import { computeApotomeSlope } from "./unusefulness"

// As reverse-engineered here: http://forum.sagittal.org/viewtopic.php?p=1659#p1659

const computeSecorComplexity = (jiPitch: ScaledVector<Rational>): SecorComplexity => {
    const two3FreeClass = compute23FreeClass(jiPitch)
    const g = computeRationalScaledVectorSopfr(two3FreeClass)

    const [numerator, denominator]: Quotient = computeQuotientFromVector(two3FreeClass.vector)
    const h = computeRationalDecimalCopfr(numerator)
    const i = computeRationalDecimalCopfr(denominator)
    const j = abs(h - i)

    const k = 2 ** (abs(jiPitch.vector[THREE_PRIME_INDEX] || 0) - 8.5) * Math.log(g + 2)

    const l = 2 ** (abs(computeApotomeSlope(jiPitch)) - 8.5) * Math.log(g + 2)

    return (g + j + k + l) as SecorComplexity
}

export { computeSecorComplexity }
