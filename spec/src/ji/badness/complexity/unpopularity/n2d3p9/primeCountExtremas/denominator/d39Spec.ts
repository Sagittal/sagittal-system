import { Decimal, Denominator, Exponent, Max, Of, Prime } from "@sagittal/general"
import { computeD39ForPossibleMaxDenominatorPrimeCount } from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/d39"
import { D39 } from "../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/types"

describe("computeD39ForPossibleMaxDenominatorPrimeCount", (): void => {
    it("returns the D39 part of the N2D3P9 calculation", (): void => {
        const denominatorPrime = 11 as Prime & Of<Denominator>
        const possibleMaxDenominatorPrimeCountGivenMaxN2D3P9 = 5 as Max<
            Denominator & Decimal<{ integer: true }> & Exponent<Prime>
        >

        const actual = computeD39ForPossibleMaxDenominatorPrimeCount({
            possibleMaxDenominatorPrimeCountGivenMaxN2D3P9,
            denominatorPrime,
        })

        const expected = ((11 / 3) ** 5 * (1 / 9)) as D39
        expect(actual).toBeCloseToTyped(expected)
    })
})
