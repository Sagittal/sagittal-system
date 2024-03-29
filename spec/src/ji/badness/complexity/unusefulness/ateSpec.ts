import {Spev} from "@sagittal/general"
import {Ate, computeAte} from "../../../../../../src"

describe("computeAte", (): void => {
    it("returns the ATE (abs 3-exponent) of the JI pitch", (): void => {
        const jiPitch = {pev: [-1, -3, 1, 0, 1]} as Spev<{rational: true}>

        const actual = computeAte(jiPitch)

        const expected = 3 as Ate
        expect(actual).toBe(expected)
    })

    it("works for pevs without 3-exponents", (): void => {
        const jiPitch = {pev: [] as unknown[]} as Spev<{rational: true}>

        const actual = computeAte(jiPitch)

        const expected = 0 as Ate
        expect(actual).toBe(expected)
    })
})
