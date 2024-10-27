import {
    computePrimes,
    deepEquals,
    Extrema,
    FIVE_PRIME_INDEX,
    increment,
    Max,
    PrimeCount,
    shallowClone,
} from "@sagittal/general"
import { N2D3P9 } from "../types"
import { EMPTY_PRIME_COUNT_EXTREMA, INITIAL_PRIME_COUNT_EXTREMAS_FOR_TWO_AND_THREE } from "./constants"
import { computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9 } from "./denominator"
import { computePrimeCountExtremaGivenMaxN2D3P9 } from "./primeCountExtrema"

const computePrimeCountExtremasGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
    options: { mirrored?: boolean } = {},
): Array<Extrema<{ of: PrimeCount }>> => {
    const primeCountExtremasGivenMaxN2D3P9: Array<Extrema<{ of: PrimeCount }>> = shallowClone(
        INITIAL_PRIME_COUNT_EXTREMAS_FOR_TWO_AND_THREE,
    )

    const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 =
        computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9(maxN2D3P9)

    const primes = computePrimes()

    let index = FIVE_PRIME_INDEX
    while (true) {
        const prime = primes[index]
        const primeCountExtremaGivenMaxN2D3P9: Extrema<{
            of: PrimeCount
        }> = computePrimeCountExtremaGivenMaxN2D3P9(
            prime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            options,
        )

        if (deepEquals(primeCountExtremaGivenMaxN2D3P9, EMPTY_PRIME_COUNT_EXTREMA)) {
            break
        } else {
            primeCountExtremasGivenMaxN2D3P9.push(primeCountExtremaGivenMaxN2D3P9)
            index = increment(index)
        }
    }

    return primeCountExtremasGivenMaxN2D3P9
}

export { computePrimeCountExtremasGivenMaxN2D3P9 }
