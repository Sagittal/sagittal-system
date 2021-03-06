import {Decimal, Denominator, Exponent, Max, Min, Numerator, Of, Prime} from "@sagittal/general"
import {N2D3P9} from "../../../../../../../../../src"
import {
    computeMaxDenominatorPrimeExponentGivenMaxN2D3P9,
    NumeratorPossibilityForDenominatorGivenMaxN2D3P9,
} from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeExponentExtremas/denominator"
import * as minN2D3P9
    from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeExponentExtremas/denominator/minN2D3P9"
import * as sortedNumeratorPossibilities
    from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/sortedNumeratorPossibilities"

describe("computeMaxDenominatorPrimeExponentGivenMaxN2D3P9", (): void => {
    it("returns the max exponent for a denominator prime given a max N2D3P9", (): void => {
        const denominatorPrime = 5 as Prime & Of<Denominator>
        const maxN2D3P9 = 27 as Max<N2D3P9> // N2D3P9(49/25) = 26.47
        const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = [
            {numerator: 7 as Numerator & Decimal<{integer: true}>, gpf: 7 as Max<Prime>},
            {numerator: 11 as Numerator & Decimal<{integer: true}>, gpf: 11 as Max<Prime>},
            {numerator: 13 as Numerator & Decimal<{integer: true}>, gpf: 13 as Max<Prime>},
            {numerator: 17 as Numerator & Decimal<{integer: true}>, gpf: 17 as Max<Prime>},
            {numerator: 19 as Numerator & Decimal<{integer: true}>, gpf: 19 as Max<Prime>},
            {numerator: 23 as Numerator & Decimal<{integer: true}>, gpf: 23 as Max<Prime>},
            {numerator: 25 as Numerator & Decimal<{integer: true}>, gpf: 5 as Max<Prime>},
            {numerator: 29 as Numerator & Decimal<{integer: true}>, gpf: 29 as Max<Prime>},
            {numerator: 31 as Numerator & Decimal<{integer: true}>, gpf: 31 as Max<Prime>},
            {numerator: 35 as Numerator & Decimal<{integer: true}>, gpf: 7 as Max<Prime>},
            {numerator: 37 as Numerator & Decimal<{integer: true}>, gpf: 37 as Max<Prime>},
            {numerator: 41 as Numerator & Decimal<{integer: true}>, gpf: 41 as Max<Prime>},
            {numerator: 43 as Numerator & Decimal<{integer: true}>, gpf: 43 as Max<Prime>},
            {numerator: 47 as Numerator & Decimal<{integer: true}>, gpf: 47 as Max<Prime>},
            {numerator: 49 as Numerator & Decimal<{integer: true}>, gpf: 7 as Max<Prime>},
            // It actually goes on...
        ] as NumeratorPossibilityForDenominatorGivenMaxN2D3P9[]

        const actual = computeMaxDenominatorPrimeExponentGivenMaxN2D3P9(
            denominatorPrime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        )

        const expected = 2 as Max<Denominator & Decimal<{integer: true}> & Exponent<Prime>>
        expect(actual).toBe(expected)
    })

    it("gets the sorted numerator possibilities, then works its way up through each possible max exponent for the denominator prime, seeing what the min N2D3P9 is for it, and returning the max exponent whose min N2D3P9 is less than the max N2D3P9", (): void => {
        const denominatorPrime = 1033 as Prime & Of<Denominator> // Something crazy
        const maxN2D3P9 = 10 as Max<N2D3P9>
        const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = [
            {numerator: 7 as Numerator & Decimal<{integer: true}>, gpf: 7 as Max<Prime>},
            {numerator: 11 as Numerator & Decimal<{integer: true}>, gpf: 11 as Max<Prime>},
            {numerator: 13 as Numerator & Decimal<{integer: true}>, gpf: 13 as Max<Prime>},
            {numerator: 17 as Numerator & Decimal<{integer: true}>, gpf: 17 as Max<Prime>},
            {numerator: 19 as Numerator & Decimal<{integer: true}>, gpf: 19 as Max<Prime>},
            {numerator: 23 as Numerator & Decimal<{integer: true}>, gpf: 23 as Max<Prime>},
            {numerator: 25 as Numerator & Decimal<{integer: true}>, gpf: 5 as Max<Prime>},
        ]

        const sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9 = {
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2: [],
            sortedNumeratorPossibilitiesGivenMaxN2D3P9WithGreaterGpfThanDenominatorPrimeSortedByN2P: [],
        }
        spyOn(sortedNumeratorPossibilities, "computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9")
            .and.returnValue(sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9)
        spyOn(minN2D3P9, "computeMinN2D3P9ForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9").and.returnValues(
            // For possible max exponent for denominator prime = 1
            9.5 as Min<N2D3P9>,
            // For possible max exponent for denominator prime = 2,
            // And this is the one which is the biggest without going over,
            // So that's why 2 is the final expectation in this test
            9.7 as Min<N2D3P9>,
            // For possible max exponent for denominator prime = 3
            10.3 as Min<N2D3P9>,
        )

        const actual = computeMaxDenominatorPrimeExponentGivenMaxN2D3P9(
            denominatorPrime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        )

        expect(sortedNumeratorPossibilities.computeSortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9)
            .toHaveBeenCalledWith(
                denominatorPrime,
                maxN2D3P9,
                numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            )
        expect(minN2D3P9.computeMinN2D3P9ForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9).toHaveBeenCalledWith({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9:
                1 as Max<Denominator & Decimal<{integer: true}> & Exponent<Prime>>,
        })
        expect(minN2D3P9.computeMinN2D3P9ForPossibleMaxDenominatorPrimeExponentGivenMaxN2D3P9).toHaveBeenCalledWith({
            sortedNumeratorPossibilitiesForDenominatorPrimeGivenMaxN2D3P9,
            denominatorPrime,
            possibleMaxDenominatorPrimeExponentGivenMaxN2D3P9:
                2 as Max<Denominator & Decimal<{integer: true}> & Exponent<Prime>>,
        })
        const expected = 2 as Max<Denominator & Decimal<{integer: true}> & Exponent<Prime>>
        expect(actual).toBe(expected)
    })
})
