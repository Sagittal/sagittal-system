import { Decimal, Extrema, Max, Numerator, Prime, PrimeCount } from "@sagittal/general"
import { N2D3P9 } from "../../../../../../../../src"
import { computePrimeCountExtremaGivenMaxN2D3P9 } from "../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/primeCountExtrema"

describe("computePrimeCountExtremaGivenMaxN2D3P9", (): void => {
    const prime = 5 as Prime
    const maxN2D3P9 = 5 as Max<N2D3P9>
    const numeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = [
        { numerator: 7 as Numerator & Decimal<{ integer: true }>, gpf: 7 as Max<Prime> },
        { numerator: 11 as Numerator & Decimal<{ integer: true }>, gpf: 11 as Max<Prime> },
        { numerator: 13 as Numerator & Decimal<{ integer: true }>, gpf: 13 as Max<Prime> },
        { numerator: 17 as Numerator & Decimal<{ integer: true }>, gpf: 17 as Max<Prime> },
        { numerator: 19 as Numerator & Decimal<{ integer: true }>, gpf: 19 as Max<Prime> },
        { numerator: 23 as Numerator & Decimal<{ integer: true }>, gpf: 23 as Max<Prime> },
        { numerator: 25 as Numerator & Decimal<{ integer: true }>, gpf: 5 as Max<Prime> },
    ]

    it("returns the max exponent for the denominator as the min exponent and the max exponent of the numerator as the max exponent", (): void => {
        const prime = 5 as Prime
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computePrimeCountExtremaGivenMaxN2D3P9(
            prime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
        )

        const expected = [-1, 2] as Extrema<{ of: PrimeCount }>
        expect(actual).toEqual(expected)
    })

    it("when mirrored is true, returns the denominator as the negative of the numerator", (): void => {
        const actual = computePrimeCountExtremaGivenMaxN2D3P9(
            prime,
            maxN2D3P9,
            numeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
            { mirrored: true },
        )

        const expected = [-2, 2] as Extrema<{ of: PrimeCount }>
        expect(actual).toEqual(expected)
    })
})
