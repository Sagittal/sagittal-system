import {
    abs,
    computePrimes,
    computeRationalPevSmoothness,
    computeTrimmedArray,
    Exponent,
    formatPev,
    isPevSub,
    NumericProperties,
    Prime,
    THREE_PRIME_INDEX,
    Two3FreeClass,
    TWO_PRIME_INDEX,
} from "@sagittal/general"
import {N2D3P9} from "./types"

const computeN2D3P9 = <T extends NumericProperties>(two3FreeClass: Two3FreeClass): N2D3P9 => {
    const rationalPev = two3FreeClass.pev

    if (computeTrimmedArray(rationalPev).length < 3) {
        return 1 as N2D3P9
    }

    if (rationalPev[TWO_PRIME_INDEX] !== 0 || rationalPev[THREE_PRIME_INDEX] !== 0) {
        throw new Error(`N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received pev ${formatPev(rationalPev)}`)
    }
    if (isPevSub(rationalPev)) {
        throw new Error(`N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received pev ${formatPev(rationalPev)}`)
    }

    const primes = computePrimes()

    return rationalPev.reduce(
        (n2d3p9: N2D3P9, primeExponent: Exponent<Prime>, index: number): N2D3P9 => {
            const prime = primes[index]
            const divisor = primeExponent < 0 ? 3 : 2

            return n2d3p9 * (prime / divisor) ** abs(primeExponent) as N2D3P9
        },
        1 as N2D3P9,
    ) * computeRationalPevSmoothness(rationalPev) * (1 / 9) as N2D3P9
}

export {
    computeN2D3P9,
}
