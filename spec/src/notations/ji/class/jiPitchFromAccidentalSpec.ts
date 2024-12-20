import { Rational, ScaledVector } from "@sagittal/general"
import {
    ArmId,
    Compatible,
    computeAccidental,
    computeJiPitchFromAccidental,
    HeadId,
} from "../../../../../src"

describe("computeJiPitchFromAccidental", (): void => {
    it("computes a JI pitch from an accidental", (): void => {
        const accidental = computeAccidental({
            armId: ArmId.BIRD,
            headId: HeadId.LEFT_SCROLL,
            compatible: Compatible.SHARP,
        })

        const actual = computeJiPitchFromAccidental(accidental)

        // ``)|# =
        // ``)|  [  -7  -1   1   1   1 ⟩    +
        //     # [ -11   7             ⟩
        const expected = { vector: [-18, 6, 1, 1, 1] } as ScaledVector<Rational>
        expect(actual).toEqual(expected)
    })

    it("gets this one correctly", (): void => {
        const accidental = computeAccidental({
            armId: ArmId.ANTIWING_AND_TICK,
            headId: HeadId.RIGHT_SCROLL,
        })

        const actual = computeJiPitchFromAccidental(accidental)

        const expected = { vector: [-4, 9, -2, -2] } as ScaledVector<Rational>
        expect(actual).toEqual(expected)
    })
})
