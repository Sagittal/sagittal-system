import {
    abs,
    Comma,
    computePlusOrMinusRange,
    computeRationalSpevFromRationalPev,
    computeRationalSpevSmoothness,
    Decimal,
    Exponent,
    isUndefined,
    Maybe,
    Pev,
    Prime,
    shallowClone,
    THREE_PRIME_INDEX,
    TWO_PRIME_INDEX,
} from "@sagittal/general"
import {analyzeComma, CommaAnalysis} from "../analyze"
import {DEFAULT_MAX_AAS, DEFAULT_MAX_ATE, DEFAULT_MAX_N2D3P9, DEFAULT_MAX_PRIME_LIMIT, DEFAULT_ZONE} from "./constants"
import {computeRationalPevInZone} from "./pevInZone"
import {CommasFrom23FreePevOptions} from "./types"

const compute2FreeRationalPev = (
    two3FreeRationalPev: Pev<{rational: true, rough: 5}>,
    threeExponent: Decimal<{integer: true}> & Exponent<3 & Prime>,
): Pev<{rational: true, rough: 3}> => {
    const twoFreeRationalPev: Pev<{rational: true, rough: 3}> =
        shallowClone(two3FreeRationalPev) as Pev<{rational: true}> as Pev<{rational: true, rough: 3}>
    twoFreeRationalPev[THREE_PRIME_INDEX] = threeExponent

    if (isUndefined(twoFreeRationalPev[TWO_PRIME_INDEX])) {
        twoFreeRationalPev[TWO_PRIME_INDEX] = 0 as Decimal<{integer: true}> & Exponent<Prime>
    }

    return twoFreeRationalPev
}

const computeCommasFrom23FreeRationalPev = (
    two3FreeRationalPev: Pev<{rational: true, rough: 5}>,
    options?: CommasFrom23FreePevOptions,
): Comma[] => {
    const {
        zone = DEFAULT_ZONE,
        maxAte = DEFAULT_MAX_ATE,
        maxAas = DEFAULT_MAX_AAS,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
        maxPrimeLimit = DEFAULT_MAX_PRIME_LIMIT,
    } = options || {}

    const commas: Comma[] = []

    computePlusOrMinusRange(maxAte).forEach((threeExponent: Decimal<{integer: true}> & Exponent<3 & Prime>): void => {
        const twoFreeRationalPev = compute2FreeRationalPev(two3FreeRationalPev, threeExponent)
        const rationalPevInZone: Maybe<Pev<{rational: true}>> =
            computeRationalPevInZone(twoFreeRationalPev, zone)

        if (rationalPevInZone) {
            const comma = computeRationalSpevFromRationalPev(rationalPevInZone) as Comma

            const commaAnalysis: CommaAnalysis = analyzeComma(comma)
            if (
                abs(commaAnalysis.apotomeSlope) > maxAas
                || commaAnalysis.two3FreeClassAnalysis.n2d3p9 > maxN2D3P9
                || computeRationalSpevSmoothness(commaAnalysis.pitch) > maxPrimeLimit
            ) {
                return
            }

            commas.push(comma)
        }
    })

    return commas
}

export {
    computeCommasFrom23FreeRationalPev,
}
