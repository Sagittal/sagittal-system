import {Abs, Comma, computeSpevFromDecimal, Decimal, Max, Min, Pev, Prime, Spev, Zone} from "@sagittal/general"
import {ApotomeSlope, Ate, computeCommasFrom23FreeRationalPev, N2D3P9} from "../../../../src"

describe("computeCommasFrom23FreeRationalPev", (): void => {
    const two3FreeRationalPev = [0, 0, 3, 5, -1] as Pev<{rational: true, rough: 5}>
    const lowerBound = computeSpevFromDecimal(1.023374 as Decimal) as Min<Spev>
    const upperBound = computeSpevFromDecimal(1.023433 as Decimal) as Max<Spev>
    const zone: Zone = {extrema: [lowerBound, upperBound]}
    const maxAte = 12 as Max<Ate>
    const maxN2D3P9 = 40000 as Max<N2D3P9>

    it("returns commas with the prime content from the 2,3-free rational pev", (): void => {
        const actual = computeCommasFrom23FreeRationalPev(two3FreeRationalPev, {zone, maxAte, maxN2D3P9})

        const expected = [{pev: [-8, -6, 3, 5, -1]} as Comma]
        expect(actual).toEqual(expected)
    })

    describe("max AAS", (): void => {
        it("does not include commas with apotome slope greater than it", (): void => {
            const highMaxAas = 10 as Max<Abs<ApotomeSlope>>
            const lowMaxAas = 8 as Max<Abs<ApotomeSlope>>

            const resultWithHighMaxAas = computeCommasFrom23FreeRationalPev(two3FreeRationalPev, {
                zone,
                maxAte,
                maxAas: highMaxAas,
                maxN2D3P9,
            })

            const expected = [{pev: [-8, -6, 3, 5, -1]} as Comma]
            expect(resultWithHighMaxAas).toEqual(expected)

            const resultWithLowMaxAas = computeCommasFrom23FreeRationalPev(two3FreeRationalPev, {
                zone,
                maxAte,
                maxAas: lowMaxAas,
            })

            expect(resultWithLowMaxAas).toEqual([])
        })
    })

    it("trims the pev if necessary", (): void => {
        const two3FreeRationalPev = [0, 0, 0] as Pev<{rational: true, rough: 5}>
        const lowerBound = computeSpevFromDecimal(1 as Decimal) as Min<Spev>
        const upperBound = computeSpevFromDecimal(1 as Decimal) as Max<Spev>
        const zone: Zone = {extrema: [lowerBound, upperBound]}

        const actual = computeCommasFrom23FreeRationalPev(two3FreeRationalPev, {
            zone,
            maxAte,
            maxN2D3P9,
        })

        const expected = [{pev: [] as unknown[]} as Comma]
        expect(actual).toEqual(expected)
    })

    it("following the trail of this edge case", (): void => {
        const two3FreeRationalPev = [0, 0, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Pev<{rational: true, rough: 5}>

        const actual = computeCommasFrom23FreeRationalPev(two3FreeRationalPev)

        const expected = [
            {pev: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1]},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("excludes commas that are beyond the prime limit (I think only important when it is 2)", (): void => {
        const two3FreeRationalPev = [] as unknown[] as Pev<{rational: true, rough: 5}>
        const maxPrimeLimit = 2 as Max<Max<Prime>>

        const actual = computeCommasFrom23FreeRationalPev(two3FreeRationalPev, {maxPrimeLimit})

        const expected = [
            {pev: [] as unknown[] as Pev<{rational: true}>},
        ] as Comma[]
        expect(actual).toEqual(expected)
    })
})
