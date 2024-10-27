import {
    Comma,
    computeQuotientFromVector,
    computeRationalVectorFromRationalScaledVector,
    computeRoughRationalVector,
    computeSuperScaledVector,
    Direction,
    Vector,
    Quotient,
    TWO_3_FREE,
} from "@sagittal/general"
import { CommaNameQuotient } from "./types"

const computeCommaNameQuotient = (comma: Comma): CommaNameQuotient => {
    const superComma = computeSuperScaledVector(comma) as Comma<{
        rational: true
        direction: Direction.SUPER
    }>
    const superVector = computeRationalVectorFromRationalScaledVector(superComma)
    const two3FreeSuperVector = computeRoughRationalVector(superVector, TWO_3_FREE) as Vector<{
        rational: true
        rough: 5
    }>

    return computeQuotientFromVector(two3FreeSuperVector) as Quotient<{
        rational: true
    }> as CommaNameQuotient
}

export { computeCommaNameQuotient }
