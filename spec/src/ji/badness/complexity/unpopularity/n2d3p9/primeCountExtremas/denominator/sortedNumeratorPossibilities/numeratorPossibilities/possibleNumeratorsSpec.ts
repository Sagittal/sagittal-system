import { Max, Numerator } from "@sagittal/general"
import { N2D3P9 } from "../../../../../../../../../../../src"
import { computePossibleNumeratorsGivenMaxN2D3P9 } from "../../../../../../../../../../../src/ji/badness/complexity/unpopularity/n2d3p9/primeCountExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities/possibleNumerators"

describe("computePossibleNumeratorsGivenMaxN2D3P9", (): void => {
    it("returns the possibilities for the numerator (which will be used to calculate the possibilities for the denominator; hence starting at 7) given the max N2D3P9", (): void => {
        const maxN2D3P9 = 6 as Max<N2D3P9>

        const actual = computePossibleNumeratorsGivenMaxN2D3P9(maxN2D3P9)

        const expected = [
            7 as Numerator,
            11 as Numerator,
            13 as Numerator,
            17 as Numerator,
            19 as Numerator,
            23 as Numerator,
            25 as Numerator,
        ]
        expect(actual).toEqual(expected)
    })
})
