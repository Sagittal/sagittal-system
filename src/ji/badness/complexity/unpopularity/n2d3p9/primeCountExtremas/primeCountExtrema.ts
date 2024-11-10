import { Denominator, Extrema, Max, Min, negative, Numerator, Of, Prime, PrimeCount } from "@sagittal/general"
import { N2D3P9 } from "../types"
import {
    computeMaxDenominatorPrimeCountGivenMaxN2D3P9,
    NumeratorPossibilityForDenominatorGivenMaxN2D3P9,
} from "./denominator"
import { computeMaxNumeratorPrimeCountGivenMaxN2D3P9 } from "./maxNumeratorPrimeCount"

const computePrimeCountExtremaGivenMaxN2D3P9 = (
    prime: Prime,
    maxN2D3P9: Max<N2D3P9>,
    numeratorPossibilitiesForDenominatorGivenMaxN2D3P9: NumeratorPossibilityForDenominatorGivenMaxN2D3P9[],
    { mirrored }: { mirrored?: boolean } = {},
): Extrema<{ of: PrimeCount }> => {
    const maxNumeratorPrimeCountGivenMaxN2D3P9: Max<Numerator & PrimeCount> =
        computeMaxNumeratorPrimeCountGivenMaxN2D3P9(prime as Prime & Of<Numerator>, maxN2D3P9)

    const maxDenominatorPrimeCountGivenMaxN2D3P9: Max<Denominator & PrimeCount> = mirrored
        ? (maxNumeratorPrimeCountGivenMaxN2D3P9 as Max<PrimeCount> as Max<Denominator & PrimeCount>)
        : computeMaxDenominatorPrimeCountGivenMaxN2D3P9(
              prime as Prime & Of<Denominator>,
              maxN2D3P9,
              numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
          )

    return [
        negative(maxDenominatorPrimeCountGivenMaxN2D3P9) as number as Min<PrimeCount>,
        maxNumeratorPrimeCountGivenMaxN2D3P9 as number as Max<PrimeCount>,
    ]
}

export { computePrimeCountExtremaGivenMaxN2D3P9 }
