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
    Count,
} from "@sagittal/general"
import { analyzeComma, CommaAnalysis } from "../analyze"
import {
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_ZONE,
} from "./constants"
import { computeRationalVectorInZone } from "./vectorInZone"
import { CommasFrom23FreeVectorOptions } from "./types"

const compute2FreeRationalVector = (
    two3FreeRationalVector: Vector<{ rational: true; rough: 5 }>,
    threeExponent: Count<3 & Prime> & Exponent<3 & Prime> & { integer: true },
): Vector<{ rational: true; rough: 3 }> => {
    const twoFreeRationalVector: Vector<{ rational: true; rough: 3 }> = shallowClone(
        two3FreeRationalVector,
    ) as Vector<{ rational: true }> as Vector<{ rational: true; rough: 3 }>
    twoFreeRationalVector[THREE_PRIME_INDEX] = threeExponent

    if (isUndefined(twoFreeRationalVector[TWO_PRIME_INDEX])) {
        twoFreeRationalVector[TWO_PRIME_INDEX] = 0 as Count<Prime> &
            Exponent<Prime> & { integer: true }
    }

    return twoFreeRationalVector
}

const computeCommasFrom23FreeRationalVector = (
    two3FreeRationalVector: Vector<{ rational: true; rough: 5 }>,
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

    computePlusOrMinusRange(maxAte).forEach(
        (threeExponent: Decimal<{ integer: true }> & Exponent<3 & Prime>): void => {
            const twoFreeRationalVector = compute2FreeRationalVector(
                two3FreeRationalVector,
                threeExponent as Count<3 & Prime> & Exponent<3 & Prime> & { integer: true },
            )
            const rationalVectorInZone: Maybe<Vector<{ rational: true }>> =
                computeRationalVectorInZone(twoFreeRationalVector, zone)

            if (rationalVectorInZone) {
                const comma = computeRationalScaledVectorFromRationalVector(
                    rationalVectorInZone,
                ) as Comma

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
        },
    )

    return commas
}

export { computeCommasFrom23FreeRationalVector }
