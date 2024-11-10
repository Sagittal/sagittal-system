import {
    Comma,
    computeQuotientFromVector,
    computeRationalVectorFromRationalScaledVector,
    computeRoughRationalVector,
    Vector,
    Quotient,
    TWO_3_FREE,
    Rational,
    Rough,
} from "@sagittal/general"
import { CommaNameQuotient } from "./types"

const computeCommaNameQuotient = (comma: Comma): CommaNameQuotient => {
    const vector = computeRationalVectorFromRationalScaledVector(comma)
    const two3FreeVector = computeRoughRationalVector(vector, TWO_3_FREE) as Vector<Rational & Rough<5>>

    return computeQuotientFromVector(two3FreeVector) as Quotient as CommaNameQuotient
}

export { computeCommaNameQuotient }
