import { Min } from "@sagittal/general"
import { N2D3P9 } from "../../types"
import { computeD39ForPossibleMaxDenominatorPrimeCount } from "./d39"
import { computeMinN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9 } from "./minN2P"
import { MinN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9Options } from "./types"

const computeMinN2D3P9ForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9 = (
    options: MinN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9Options,
): Min<N2D3P9> => {
    const {
        sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
        denominatorPrime,
        possibleMaxDenominatorPrimeCountGivenMaxN2D3P9,
    } = options

    const minN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9 =
        computeMinN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            possibleMaxDenominatorPrimeCountGivenMaxN2D3P9,
        })
    const d39ForPossibleMaxDenominatorPrimeCount = computeD39ForPossibleMaxDenominatorPrimeCount({
        denominatorPrime,
        possibleMaxDenominatorPrimeCountGivenMaxN2D3P9,
    })

    return (minN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9 *
        d39ForPossibleMaxDenominatorPrimeCount) as Min<N2D3P9>
}

export { computeMinN2D3P9ForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9 }
