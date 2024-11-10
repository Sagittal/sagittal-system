import {
    Abs,
    Comma,
    computeScaledVectorFromDecimal,
    Decimal,
    Max,
    Min,
    Vector,
    Prime,
    ScaledVector,
    Rational,
    Rough,
} from "@sagittal/general"
import { ApotomeSlope, Ate, computeCommasFrom23FreeRationalVector, N2D3P9 } from "../../../../src"
import { Zone } from "../../../../src/ji/types"

describe("computeCommasFrom23FreeRationalVector", (): void => {
    const two3FreeRationalVector = [0, 0, 3, 5, -1] as Vector<Rational & Rough<5>>
    const lowerBound = computeScaledVectorFromDecimal(1.023374 as Decimal) as Min<ScaledVector>
    const upperBound = computeScaledVectorFromDecimal(1.023433 as Decimal) as Max<ScaledVector>
    const zone: Zone = { extrema: [lowerBound, upperBound] }
    const maxAte = 12 as Max<Ate>
    const maxN2D3P9 = 40000 as Max<N2D3P9>

    it("returns commas with the prime content from the 2,3-free rational vector", (): void => {
        const actual = computeCommasFrom23FreeRationalVector(two3FreeRationalVector, {
            zone,
            maxAte,
            maxN2D3P9,
        })

        const expected = [{ vector: [-8, -6, 3, 5, -1] } as Comma]
        expect(actual).toEqual(expected)
    })

    describe("max AAS", (): void => {
        it("does not include commas with apotome slope greater than it", (): void => {
            const highMaxAas = 10 as Max<Abs<ApotomeSlope>>
            const lowMaxAas = 8 as Max<Abs<ApotomeSlope>>

            const resultWithHighMaxAas = computeCommasFrom23FreeRationalVector(two3FreeRationalVector, {
                zone,
                maxAte,
                maxAas: highMaxAas,
                maxN2D3P9,
            })

            const expected = [{ vector: [-8, -6, 3, 5, -1] } as Comma]
            expect(resultWithHighMaxAas).toEqual(expected)

            const resultWithLowMaxAas = computeCommasFrom23FreeRationalVector(two3FreeRationalVector, {
                zone,
                maxAte,
                maxAas: lowMaxAas,
            })

            expect(resultWithLowMaxAas).toEqual([])
        })
    })

    it("trims the vector if necessary", (): void => {
        const two3FreeRationalVector = [0, 0, 0] as Vector<Rational & Rough<5>>
        const lowerBound = computeScaledVectorFromDecimal(1 as Decimal) as Min<ScaledVector>
        const upperBound = computeScaledVectorFromDecimal(1 as Decimal) as Max<ScaledVector>
        const zone: Zone = { extrema: [lowerBound, upperBound] }

        const actual = computeCommasFrom23FreeRationalVector(two3FreeRationalVector, {
            zone,
            maxAte,
            maxN2D3P9,
        })

        const expected = [{ vector: [] as unknown[] } as Comma]
        expect(actual).toEqual(expected)
    })

    it("following the trail of this edge case", (): void => {
        const two3FreeRationalVector = [0, 0, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Vector<Rational & Rough<5>>

        const actual = computeCommasFrom23FreeRationalVector(two3FreeRationalVector)

        const expected = [{ vector: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] }] as Comma[]
        expect(actual).toEqual(expected)
    })

    it("excludes commas that are beyond the prime limit (I think only important when it is 2)", (): void => {
        const two3FreeRationalVector = [] as unknown[] as Vector<Rational & Rough<5>>
        const maxPrimeLimit = 2 as Max<Max<Prime>>

        const actual = computeCommasFrom23FreeRationalVector(two3FreeRationalVector, {
            maxPrimeLimit,
        })

        const expected = [{ vector: [] as unknown[] as Vector<Rational> }] as Comma[]
        expect(actual).toEqual(expected)
    })
})
