import {
    Abs,
    Comma,
    computeScaledVectorFromDecimal,
    Decimal,
    Max,
    Min,
    Rational,
    ScaledVector,
    UNISON,
} from "@sagittal/general"
import { ApotomeSlope, findNotatingCommas } from "../../../../src"
import { Zone } from "../../../../src/ji/types"

describe("findNotatingCommas", (): void => {
    it("given a JI pitch, returns a list of the commas that notate it", (): void => {
        const jiPitch = { vector: [0, 0, 0, 0, 1] } as ScaledVector<Rational>

        const actual = findNotatingCommas(jiPitch)

        const expected = [
            { vector: [14, -11, 0, 0, 1] },
            { vector: [-5, 1, 0, 0, 1] },
            { vector: [32, -18, 0, 0, -1] },
            { vector: [13, -6, 0, 0, -1] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("can filter", (): void => {
        const jiPitch = { vector: [0, 0, 0, 0, 1] } as ScaledVector<Rational>
        const maxAas = 9 as Max<Abs<ApotomeSlope>>
        const upperBound = computeScaledVectorFromDecimal(1.032279 as Decimal) as Max<ScaledVector>
        const zone: Zone = { extrema: [UNISON as ScaledVector as Min<ScaledVector>, upperBound] }

        const actual = findNotatingCommas(jiPitch, { maxAas, zone })

        const expected = [{ vector: [-5, 1, 0, 0, 1] }, { vector: [13, -6, 0, 0, -1] }] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("when given the unison, does not return duplicates", (): void => {
        const jiPitch = { vector: [] as unknown[] } as ScaledVector<Rational>

        const actual = findNotatingCommas(jiPitch)

        const expected = [{ vector: [] }, { vector: [-19, 12] }] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("an edge case, with large N2D3P9", (): void => {
        const jiPitch = { vector: [0, 0, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] } as ScaledVector<Rational>

        const actual = findNotatingCommas(jiPitch)

        const expected = [
            { vector: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] },
            { vector: [-6, 3, 1, -1, -1, 0, 0, 0, 0, 0, 0, 1] },
            { vector: [-25, 15, 1, -1, -1, 0, 0, 0, 0, 0, 0, 1] },
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
