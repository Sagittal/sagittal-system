import { Extrema, Max, Numerator, PrimeCount } from "@sagittal/general"
import { N2D3P9 } from "../../../../../../../../../src"
import { computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 } from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/maxNumeratorWithLessN2D3P9"

describe("computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9", (): void => {
    it("chooses the max numerator with less N2D3P9 than the max N2D3P9", (): void => {
        // The numerator vectors to check are:
        // [],             // N2D3P9(1)  = 1
        // [0, 0, 1],      // N2D3P9(5)  = 1.39
        // [0, 0, 0, 1],   // N2D3P9(7)  = 2.72 (this is the winner: less than 3, but max N2D3P9 otherwise)
        // [0, 0, 1, 1],   // N2D3P9(35) = 6.81 (not less than 3, so it will get filtered out)

        const numeratorPrimeCountExtremasGivenMaxN2D3P9 = [
            [0, 0],
            [0, 0],
            [0, 1],
            [0, 1],
        ] as Array<Extrema<{ of: PrimeCount }>>
        const maxN2D3P9 = 3 as Max<N2D3P9>

        const actual = computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9(
            numeratorPrimeCountExtremasGivenMaxN2D3P9,
            maxN2D3P9,
        )

        const expected = 7 as Max<Numerator>
        expect(actual).toBe(expected)
    })
})
