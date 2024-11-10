import { Rational, ScaledVector } from "@sagittal/general"
import { ApotomeSlope, computeApotomeSlope } from "../../../../../../src"

describe("computeApotomeSlope", (): void => {
    it("gives the amount that the comma changes by when tempering the apotome", (): void => {
        const jiPitch = { vector: [-15, 8, 1] } as ScaledVector<Rational>

        const actual = computeApotomeSlope(jiPitch)

        const expected = 7.879702 as ApotomeSlope
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for vectors without three exponents", (): void => {
        const jiPitch = { vector: [] as unknown[] } as ScaledVector<Rational>

        const actual = computeApotomeSlope(jiPitch)

        const expected = 0 as ApotomeSlope
        expect(actual).toBeCloseToTyped(expected)
    })
})
