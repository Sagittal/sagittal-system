import {
    Comma,
    computeQuotientFromPev,
    computeRationalPevFromRationalSpev,
    computeRoughRationalPev,
    computeSuperSpev,
    Direction,
    Pev,
    Quotient,
    TWO_3_FREE,
} from "@sagittal/general"
import {CommaNameQuotient} from "./types"

const computeCommaNameQuotient = (comma: Comma): CommaNameQuotient => {
    const superComma = computeSuperSpev(comma) as Comma<{rational: true, direction: Direction.SUPER}>
    const superPev = computeRationalPevFromRationalSpev(superComma)
    const two3FreeSuperPev = computeRoughRationalPev(superPev, TWO_3_FREE) as Pev<{rational: true, rough: 5}>

    return computeQuotientFromPev(two3FreeSuperPev) as Quotient<{rational: true}> as CommaNameQuotient
}

export {
    computeCommaNameQuotient,
}
