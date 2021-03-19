import {Spev} from "@sagittal/general"
import {ApotomeSlope, computeApotomeSlope} from "../../../../../../src"

describe("computeApotomeSlope", (): void => {
    it("gives the amount that the comma changes by when tempering the apotome", (): void => {
        const jiPitch = {pev: [-15, 8, 1]} as Spev<{rational: true}>

        const actual = computeApotomeSlope(jiPitch)

        const expected = 7.879702 as ApotomeSlope
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pevs without three exponents", (): void => {
        const jiPitch = {pev: [] as unknown[]} as Spev<{rational: true}>

        const actual = computeApotomeSlope(jiPitch)

        const expected = 0 as ApotomeSlope
        expect(actual).toBeCloseToTyped(expected)
    })
})
