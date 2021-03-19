import {Abs, Spev} from "@sagittal/general"
import {ApotomeSlope, computeAas} from "../../../../../../src"

describe("computeAas", (): void => {
    it("returns the AAS (absolute apotome slope) of the JI pitch", (): void => {
        const jiPitch = {pev: [-1, -3, 1, 0, 1]} as Spev<{rational: true}>

        const actual = computeAas(jiPitch)

        const expected = 4.955989 as Abs<ApotomeSlope>
        expect(actual).toBeCloseToTyped(expected)
    })
})
