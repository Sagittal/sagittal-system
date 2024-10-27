import {
    computePrimes,
    FIVE_PRIME_INDEX,
    increment,
    Max,
    Numerator,
    Of,
    Prime,
    PrimeCount,
    shallowClone,
} from "@sagittal/general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorPrimeCountGivenMaxN2D3P9 } from "../../../maxNumeratorPrimeCount"
import { INITIAL_MAX_NUMERATOR_PRIME_COUNTS_FOR_TWO_AND_THREE } from "./constants"

const computeMaxNumeratorPrimeCountsGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
): Array<Max<Numerator & PrimeCount>> => {
    const primes = computePrimes()

    let numeratorPrimeIndex = FIVE_PRIME_INDEX
    const maxNumeratorPrimeCountsGivenMaxN2D3P9 = shallowClone(
        INITIAL_MAX_NUMERATOR_PRIME_COUNTS_FOR_TWO_AND_THREE,
    )
    while (true) {
        const numeratorPrime = primes[numeratorPrimeIndex] as Prime & Of<Numerator>

        const maxNumeratorPrimeCountGivenMaxN2D3P9 = computeMaxNumeratorPrimeCountGivenMaxN2D3P9(
            numeratorPrime,
            maxN2D3P9,
        )

        if (maxNumeratorPrimeCountGivenMaxN2D3P9 === 0) {
            break
        }
        maxNumeratorPrimeCountsGivenMaxN2D3P9.push(maxNumeratorPrimeCountGivenMaxN2D3P9)
        numeratorPrimeIndex = increment(numeratorPrimeIndex)
    }

    return maxNumeratorPrimeCountsGivenMaxN2D3P9
}

export { computeMaxNumeratorPrimeCountsGivenMaxN2D3P9 }
