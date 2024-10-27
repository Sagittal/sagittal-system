import {
    abs,
    computePrimes,
    computeRationalVectorSmoothness,
    computeTrimmedArray,
    Exponent,
    formatVector,
    isVectorSub,
    NumericProperties,
    Prime,
    THREE_PRIME_INDEX,
    Two3FreeClass,
    TWO_PRIME_INDEX,
} from "@sagittal/general"
import { N2D3P9 } from "./types"

const computeN2D3P9 = <T extends NumericProperties>(two3FreeClass: Two3FreeClass): N2D3P9 => {
    const rationalVector = two3FreeClass.vector

    if (computeTrimmedArray(rationalVector).length < 3) {
        return 1 as N2D3P9
    }

    if (rationalVector[TWO_PRIME_INDEX] !== 0 || rationalVector[THREE_PRIME_INDEX] !== 0) {
        throw new Error(
            `N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received vector ${formatVector(
                rationalVector,
            )}`,
        )
    }
    if (isVectorSub(rationalVector)) {
        throw new Error(
            `N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received vector ${formatVector(
                rationalVector,
            )}`,
        )
    }

    const primes = computePrimes()

    return (rationalVector.reduce(
        (n2d3p9: N2D3P9, primeExponent: Exponent<Prime>, index: number): N2D3P9 => {
            const prime = primes[index]
            const divisor = primeExponent < 0 ? 3 : 2

            return (n2d3p9 * (prime / divisor) ** abs(primeExponent)) as N2D3P9
        },
        1 as N2D3P9,
    ) *
        computeRationalVectorSmoothness(rationalVector) *
        (1 / 9)) as N2D3P9
}

export { computeN2D3P9 }
