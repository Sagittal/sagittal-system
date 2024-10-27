import { Denominator, Max, Of, Prime, PrimeCount } from "@sagittal/general"
import { SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 } from "./sortedNumeratorPossibilities"

interface D39ForPossibleMaxDenominatorPrimeCountOptions {
    denominatorPrime: Prime & Of<Denominator>
    possibleMaxDenominatorPrimeCountGivenMaxN2D3P9: Max<Denominator & PrimeCount>
}

interface MinN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9Options
    extends D39ForPossibleMaxDenominatorPrimeCountOptions {
    sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9: SortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9
}

type D39 = number & { _D39Brand: boolean }

export {
    MinN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9Options,
    D39ForPossibleMaxDenominatorPrimeCountOptions,
    D39,
}
