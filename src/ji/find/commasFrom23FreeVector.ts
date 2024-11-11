import {
    abs,
    Comma,
    computePlusOrMinusRange,
    computeRationalScaledVectorFromRationalVector,
    computeRationalScaledVectorSmoothness,
    Decimal,
    Exponent,
    isUndefined,
    Maybe,
    Vector,
    Prime,
    shallowClone,
    THREE_PRIME_INDEX,
    TWO_PRIME_INDEX,
    PrimeCount,
    Rational,
    Rough,
    Integer,
} from "@sagittal/general"
import { analyzeComma, CommaAnalysis } from "../analyze"
import {
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_ZONE,
} from "./constants"
import { CommasFrom23FreeVectorOptions } from "./types"
import { computeRationalVectorInZone } from "./vectorInZone"

const compute2FreeRationalVector = (
    two3FreeRationalVector: Vector<Rational & Rough<5>>,
    threeExponent: Exponent<3 & Prime> & PrimeCount<Rational & Rough<5>>,
): Vector<Rational & Rough<3>> => {
    const twoFreeRationalVector = shallowClone(two3FreeRationalVector)
    twoFreeRationalVector[THREE_PRIME_INDEX] = threeExponent

    if (isUndefined(twoFreeRationalVector[TWO_PRIME_INDEX])) {
        twoFreeRationalVector[TWO_PRIME_INDEX] = 0 as Exponent<3 & Prime> & PrimeCount<Rational & Rough<5>>
    }

    return twoFreeRationalVector as Vector as Vector<Rational & Rough<3>>
}

const computeCommasFrom23FreeRationalVector = (
    two3FreeRationalVector: Vector<Rational & Rough<5>>,
    options?: CommasFrom23FreeVectorOptions,
): Comma[] => {
    const {
        zone = DEFAULT_ZONE,
        maxAte = DEFAULT_MAX_ATE,
        maxAas = DEFAULT_MAX_AAS,
        maxN2D3P9 = DEFAULT_MAX_N2D3P9,
        maxPrimeLimit = DEFAULT_MAX_PRIME_LIMIT,
    } = options || {}

    const commas: Comma[] = []

    computePlusOrMinusRange(maxAte).forEach((threeExponent: Decimal<Integer> & Exponent<3 & Prime>): void => {
        const twoFreeRationalVector = compute2FreeRationalVector(
            two3FreeRationalVector,
            threeExponent as Exponent<3 & Prime> as Exponent<3 & Prime> & PrimeCount<Rational & Rough<5>>,
        )
        const rationalVectorInZone: Maybe<Vector> = computeRationalVectorInZone(twoFreeRationalVector, zone)

        if (rationalVectorInZone) {
            const comma = computeRationalScaledVectorFromRationalVector(rationalVectorInZone) as Comma

            const commaAnalysis: CommaAnalysis = analyzeComma(comma)
            if (
                abs(commaAnalysis.apotomeSlope) > maxAas ||
                commaAnalysis.two3FreeClassAnalysis.n2d3p9 > maxN2D3P9 ||
                computeRationalScaledVectorSmoothness(commaAnalysis.pitch) > maxPrimeLimit
            ) {
                return
            }

            commas.push(comma)
        }
    })

    return commas
}

export { computeCommasFrom23FreeRationalVector }
