import { Denominator, Max, Min, Of, Prime, PrimeCount } from "@sagittal/general"
import { N2D3P9 } from "../../../../../../../../../src"
import * as d39 from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/d39"
import { computeMinN2D3P9ForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9 } from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/minN2D3P9"
import * as minN2P from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/minN2P"
import { N2P } from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/sortedNumeratorPossibilities"
import { D39 } from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/types"

describe("computeMinN2D3P9ForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9", (): void => {
    it("given a denominator prime and its possible max prime count, plus the sorted numerator possibilities, will gather the D39 and the min N2P then combine them", (): void => {
        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = {
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [],
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [],
        }
        const denominatorPrime = 7 as Prime & Of<Denominator>
        const possibleMaxDenominatorPrimeCountGivenMaxN2D3P9 = 2 as Max<Denominator & PrimeCount>

        const minN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9 = 15.5 as Min<N2P>
        const d39ForPossibleMaxDenominatorPrimeCount = 3 as D39

        spyOn(minN2P, "computeMinN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9").and.returnValue(
            minN2PForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9,
        )
        spyOn(d39, "computeD39ForPossibleMaxDenominatorPrimeCount").and.returnValue(
            d39ForPossibleMaxDenominatorPrimeCount,
        )

        const actual = computeMinN2D3P9ForPossibleMaxDenominatorPrimeCountGivenMaxN2D3P9({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            possibleMaxDenominatorPrimeCountGivenMaxN2D3P9,
        })

        const expected = 46.5 as Min<N2D3P9>
        expect(actual).toEqual(expected)
    })
})
