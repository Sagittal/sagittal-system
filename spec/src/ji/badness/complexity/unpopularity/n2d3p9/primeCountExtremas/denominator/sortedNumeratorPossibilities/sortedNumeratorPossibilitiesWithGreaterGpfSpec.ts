import { Denominator, Max, Numerator, Of, Prime } from "@sagittal/general"
import {
    N2P,
    SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P,
} from "../../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/sortedNumeratorPossibilities"
import { computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P } from "../../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/sortedNumeratorPossibilities/sortedNumeratorPossibilitiesWithGreaterGpf"

describe("computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P", (): void => {
    it("returns the sorted numerator possibilities for the denominator prime given the max N2D3P9, in two lists: one with lesser GPF than the denominator prime, one with greater; both sorted by their respective values (N2 in the case of those with lesser GPF — because you can't know what the P which is short for GPF will be until you pick the denominator prime — and N2P in the case of those with greater GPF because you do know it already)", (): void => {
        const denominatorPrime = 11 as Prime & Of<Denominator>
        const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = [
            { numerator: 13 as Numerator, gpf: 13 as Max<Prime> },
            { numerator: 17 as Numerator, gpf: 17 as Max<Prime> },
            { numerator: 19 as Numerator, gpf: 19 as Max<Prime> },
            { numerator: 23 as Numerator, gpf: 23 as Max<Prime> },
            { numerator: 25 as Numerator, gpf: 5 as Max<Prime> },
        ]

        const actual: SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[] =
            computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P({
                denominatorPrime,
                numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            })

        const expected = [
            {
                numerator: 13 as Numerator,
                gpf: 13 as Max<Prime>,
                n2p: 84.5 as N2P,
            },
            {
                numerator: 17 as Numerator,
                gpf: 17 as Max<Prime>,
                n2p: 144.5 as N2P,
            },
            {
                numerator: 19 as Numerator,
                gpf: 19 as Max<Prime>,
                n2p: 180.5 as N2P,
            },
            {
                numerator: 23 as Numerator,
                gpf: 23 as Max<Prime>,
                n2p: 264.5 as N2P,
            },
        ] as SortedNumeratorPossibilityWithGreaterGpfThanDenominatorPrimeIncludingN2P[]
        expect(actual).toEqual(expected)
    })
})
