import {
    computePrimes,
    Count,
    Decimal,
    deepEquals,
    Exponent,
    Extrema,
    FIVE_PRIME_INDEX,
    increment,
    Max,
    Prime,
    shallowClone,
} from "@sagittal/general"
import {N2D3P9} from "../types"
import {EMPTY_PRIME_EXPONENT_EXTREMA, INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE} from "./constants"
import {computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9} from "./denominator"
import {computePrimeExponentExtremaGivenMaxN2D3P9} from "./primeExponentExtrema"

const computePrimeExponentExtremasGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
    options: {mirrored?: boolean} = {},
): Array<Extrema<{of: Decimal<{integer: true}> & Count<Prime> & Exponent<Prime>}>> => {
    const primeExponentExtremasGivenMaxN2D3P9: Array<Extrema<{of: Decimal<{integer: true}> & Count<Prime> & Exponent<Prime>}>> =
        shallowClone(INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE)

    const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 =
        computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9(maxN2D3P9)

    const primes = computePrimes()

    let index = FIVE_PRIME_INDEX
    while (true) {
        const prime = primes[index]
        const primeExponentExtremaGivenMaxN2D3P9: Extrema<{of: Decimal<{integer: true}> & Count<Prime> & Exponent<Prime>}> =
            computePrimeExponentExtremaGivenMaxN2D3P9(
                prime,
                maxN2D3P9,
                numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
                options,
            )

        if (deepEquals(primeExponentExtremaGivenMaxN2D3P9, EMPTY_PRIME_EXPONENT_EXTREMA)) {
            break
        } else {
            primeExponentExtremasGivenMaxN2D3P9.push(primeExponentExtremaGivenMaxN2D3P9)
            index = increment(index)
        }
    }

    return primeExponentExtremasGivenMaxN2D3P9
}

export {
    computePrimeExponentExtremasGivenMaxN2D3P9,
}
