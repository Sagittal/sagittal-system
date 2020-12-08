import {
    Comma,
    computeQuotientFromMonzo,
    computeRationalMonzoFromRationalScamon,
    computeRoughRationalMonzo,
    computeSuperScamon,
    Direction,
    Monzo,
    Quotient,
    TWO_3_FREE,
} from "@sagittal/general"
import {CommaNameQuotient} from "./types"

const computeCommaNameQuotient = (comma: Comma): CommaNameQuotient => {
    const superComma = computeSuperScamon(comma) as Comma<{rational: true, direction: Direction.SUPER}>
    const superMonzo = computeRationalMonzoFromRationalScamon(superComma)
    const two3FreeSuperMonzo = computeRoughRationalMonzo(superMonzo, TWO_3_FREE) as Monzo<{rational: true, rough: 5}>

    return computeQuotientFromMonzo(two3FreeSuperMonzo) as Quotient<{rational: true}> as CommaNameQuotient
}

export {
    computeCommaNameQuotient,
}
