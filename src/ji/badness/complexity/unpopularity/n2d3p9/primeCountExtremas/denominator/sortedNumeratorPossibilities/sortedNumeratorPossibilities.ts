import { Denominator, Of, Prime } from "@sagittal/general"
import { NumeratorPossibilityForDenominatorGivenMaxN2D3P9 } from "./numeratorPossibilities"
import { computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P } from "./sortedNumeratorPossibilitiesWithGreaterGpf"
import { computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 } from "./sortedNumeratorPossibilitiesWithLesserGpf"
import { SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 } from "./types"

const computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = (
    denominatorPrime: Prime & Of<Denominator>,
    numeratorPossibilitiesForDenominatorGivenMaxN2D3P9: NumeratorPossibilityForDenominatorGivenMaxN2D3P9[],
): SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 => {
    const sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 =
        computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2({
            denominatorPrime,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        })

    const sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P =
        computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P({
            denominatorPrime,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        })

    return {
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
        sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P,
    }
}

export { computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 }
