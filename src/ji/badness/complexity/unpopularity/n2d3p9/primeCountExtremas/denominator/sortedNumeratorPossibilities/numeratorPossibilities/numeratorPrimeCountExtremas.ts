import { Extrema, Max, Min, Numerator, PrimeCount } from "@sagittal/general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorPrimeCountsGivenMaxN2D3P9 } from "./maxNumeratorPrimeCounts"

const computeNumeratorPrimeCountExtremasGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
): Array<Extrema<{ of: PrimeCount }>> => {
    const maxNumeratorPrimeCountsGivenMaxN2D3P9 = computeMaxNumeratorPrimeCountsGivenMaxN2D3P9(maxN2D3P9)

    return maxNumeratorPrimeCountsGivenMaxN2D3P9.map(
        (maxNumeratorPrimeCountGivenMaxN2D3P9: Max<Numerator & PrimeCount>): Extrema<{ of: PrimeCount }> => {
            return [0 as Min<PrimeCount>, maxNumeratorPrimeCountGivenMaxN2D3P9]
        },
    )
}

export { computeNumeratorPrimeCountExtremasGivenMaxN2D3P9 }
