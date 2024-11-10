import { Abs, Rational, ScaledVector } from "@sagittal/general"
import { ApotomeSlope, computeAas } from "../../../../../../src"

describe("computeAas", (): void => {
    it("returns the AAS (absolute apotome slope) of the JI pitch", (): void => {
        const jiPitch = { vector: [-1, -3, 1, 0, 1] } as ScaledVector<Rational>

        const actual = computeAas(jiPitch)

        const expected = 4.955989 as Abs<ApotomeSlope>
        expect(actual).toBeCloseToTyped(expected)
    })
})
