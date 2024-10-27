import { Max, Numerator, PrimeCount } from "@sagittal/general"
import { N2D3P9 } from "../../../../../../../../../../../src"
import { computeMaxNumeratorPrimeCountsGivenMaxN2D3P9 } from "../../../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities/maxNumeratorPrimeCounts"

describe("computeMaxNumeratorPrimeCountsGivenMaxN2D3P9", (): void => {
    it("returns an array of the max exponent per prime, cutting off at the first prime for which is it is zero (i.e. with this max N2D3P9, there is no way to have that prime in the numerator, even just to the first power, even in complete isolation) but where the first two elements are 0 (corresponding to primes 2 and 3 which have no effect in 2,3-free land)", (): void => {
        const maxN2D3P9: Max<N2D3P9> = 136 as Max<N2D3P9>

        const actual = computeMaxNumeratorPrimeCountsGivenMaxN2D3P9(maxN2D3P9)

        //                      2  3  5  7 11 13 17 19 23 ...
        const expected = [0, 0, 6, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1] as Array<Max<Numerator & PrimeCount>>
        expect(actual).toEqual(expected)
    })

    it("another example", (): void => {
        const maxN2D3P9: Max<N2D3P9> = 10 as Max<N2D3P9>

        const actual = computeMaxNumeratorPrimeCountsGivenMaxN2D3P9(maxN2D3P9)

        //                      2  3  5  7 11 13
        const expected = [0, 0, 3, 2, 1, 1] as Array<Max<Numerator & PrimeCount>>
        expect(actual).toEqual(expected)
    })

    it("edge case - max N2D3P9 of 1 given", (): void => {
        const maxN2D3P9: Max<N2D3P9> = 1 as Max<N2D3P9>

        const actual = computeMaxNumeratorPrimeCountsGivenMaxN2D3P9(maxN2D3P9)

        const expected = [0, 0] as Array<Max<Numerator & PrimeCount>>
        expect(actual).toEqual(expected)
    })
})
