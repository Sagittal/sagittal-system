import {Abs, Comma, computeSpevFromDecimal, Decimal, Max, Min, Spev, UNISON, Zone} from "@sagittal/general"
import {ApotomeSlope, findNotatingCommas} from "../../../../src"

describe("findNotatingCommas", (): void => {
    it("given a JI pitch, returns a list of the commas that notate it", (): void => {
        const jiPitch = {pev: [0, 0, 0, 0, 1]} as Spev<{rational: true}>

        const actual = findNotatingCommas(jiPitch)

        const expected = [
            {pev: [14, -11, 0, 0, 1]},
            {pev: [-5, 1, 0, 0, 1]},
            {pev: [32, -18, 0, 0, -1]},
            {pev: [13, -6, 0, 0, -1]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("can filter", (): void => {
        const jiPitch = {pev: [0, 0, 0, 0, 1]} as Spev<{rational: true}>
        const maxAas = 9 as Max<Abs<ApotomeSlope>>
        const upperBound = computeSpevFromDecimal(1.032279 as Decimal) as Max<Spev>
        const zone: Zone = {extrema: [UNISON as Spev as Min<Spev>, upperBound]}

        const actual = findNotatingCommas(jiPitch, {maxAas, zone})

        const expected = [
            {pev: [-5, 1, 0, 0, 1]},
            {pev: [13, -6, 0, 0, -1]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("when given the unison, does not return duplicates", (): void => {
        const jiPitch = {pev: [] as unknown[]} as Spev<{rational: true}>

        const actual = findNotatingCommas(jiPitch)

        const expected = [
            {pev: []},
            {pev: [-19, 12]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("an edge case, with large N2D3P9", (): void => {
        const jiPitch = {pev: [0, 0, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1]} as Spev<{rational: true}>

        const actual = findNotatingCommas(jiPitch)

        const expected = [
            {pev: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1]},
            {pev: [-6, 3, 1, -1, -1, 0, 0, 0, 0, 0, 0, 1]},
            {pev: [-25, 15, 1, -1, -1, 0, 0, 0, 0, 0, 0, 1]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
