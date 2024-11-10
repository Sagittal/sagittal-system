import { Rational, ScaledVector } from "@sagittal/general"
import { Ate, computeAte } from "../../../../../../src"

describe("computeAte", (): void => {
    it("returns the ATE (abs 3-exponent) of the JI pitch", (): void => {
        const jiPitch = { vector: [-1, -3, 1, 0, 1] } as ScaledVector<Rational>

        const actual = computeAte(jiPitch)

        const expected = 3 as Ate
        expect(actual).toBe(expected)
    })

    it("works for vectors without 3-exponents", (): void => {
        const jiPitch = { vector: [] as unknown[] } as ScaledVector<Rational>

        const actual = computeAte(jiPitch)

        const expected = 0 as Ate
        expect(actual).toBe(expected)
    })
})
