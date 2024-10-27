import {
    computeScaledVectorFromDecimal,
    Decimal,
    EMPTY_VECTOR,
    Exclusive,
    Max,
    Min,
    Vector,
    ScaledVector,
} from "@sagittal/general"
import { computeRationalVectorInZone } from "../../../../src/ji/find"
import {
    n_s_SIZE_CATEGORY_BOUND,
    u_n_SIZE_CATEGORY_BOUND,
} from "../../../../src/ji/name/sizeCategoryBounds"

describe("computeRationalVectorInZone", (): void => {
    const exclusive: Exclusive = [true, false]

    it("given a 2-free vector, finds the correct power of 2 for the vector which is in the search bounds", (): void => {
        const twoFreeVector = [0, -6, 3, 5, -1] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = computeScaledVectorFromDecimal(1.023374 as Decimal) as Min<ScaledVector>
        const upperBound = computeScaledVectorFromDecimal(1.023433 as Decimal) as Max<ScaledVector>

        const actual = computeRationalVectorInZone(twoFreeVector, {
            extrema: [lowerBound, upperBound],
            exclusive,
        })

        const expected = [-8, -6, 3, 5, -1] as Vector<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no vector is within the search bounds", (): void => {
        const twoFreeVector = [0, -6, 3, 5, -1] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = computeScaledVectorFromDecimal(1.023433 as Decimal) as Min<ScaledVector>
        const upperBound = computeScaledVectorFromDecimal(1.023492 as Decimal) as Max<ScaledVector>

        const actual = computeRationalVectorInZone(twoFreeVector, {
            extrema: [lowerBound, upperBound],
            exclusive,
        })

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free vector", (): void => {
        const twoFreeVector = [0, 0] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = computeScaledVectorFromDecimal(1.023433 as Decimal) as Min<ScaledVector>
        const upperBound = computeScaledVectorFromDecimal(1.023492 as Decimal) as Max<ScaledVector>

        const actual = computeRationalVectorInZone(twoFreeVector, {
            extrema: [lowerBound, upperBound],
            exclusive,
        })

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free vector when unison is within the search range (it comes in untrimmed, but leaves trimmed)", (): void => {
        const twoFreeVector = [0, 0] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = computeScaledVectorFromDecimal(0.977104 as Decimal) as Min<ScaledVector>
        const upperBound = computeScaledVectorFromDecimal(1.023492 as Decimal) as Max<ScaledVector>

        const actual = computeRationalVectorInZone(twoFreeVector, {
            extrema: [lowerBound, upperBound],
            exclusive,
        })

        const expected = EMPTY_VECTOR as Vector<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works for the empty two-free vector when unison is on the cusp of the search range, if the default of exclusive bounds is disabled", (): void => {
        const twoFreeVector = [0, 0] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = computeScaledVectorFromDecimal(1.0 as Decimal) as Min<ScaledVector>
        const upperBound = computeScaledVectorFromDecimal(1.023433 as Decimal) as Max<ScaledVector>
        const exclusive: Exclusive = false

        const actual = computeRationalVectorInZone(twoFreeVector, {
            extrema: [lowerBound, upperBound],
            exclusive,
        })

        const expected = EMPTY_VECTOR as Vector<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original vector", (): void => {
        const twoFreeVector = [0, -6, 3, 5, -1] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = computeScaledVectorFromDecimal(1.023374 as Decimal) as Min<ScaledVector>
        const upperBound = computeScaledVectorFromDecimal(1.023433 as Decimal) as Max<ScaledVector>

        computeRationalVectorInZone(twoFreeVector, { extrema: [lowerBound, upperBound], exclusive })

        const expected = [0, -6, 3, 5, -1] as Vector<{ rational: true }>
        expect(twoFreeVector).toEqual(expected)
    })

    it("excludes the unison from the smallest size category besides unison (schismina)", (): void => {
        const twoFreeVector = [0, -306] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as ScaledVector as Min<ScaledVector>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as ScaledVector as Max<ScaledVector>

        const actual = computeRationalVectorInZone(twoFreeVector, {
            extrema: [lowerBound, upperBound],
            exclusive,
        })

        const expected = [485, -306] as Vector<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("excludes the unison from the smallest size category besides unison (schismina), even when the 3-exponent is zero", (): void => {
        const twoFreeVector = [0, 0] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as ScaledVector as Min<ScaledVector>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as ScaledVector as Max<ScaledVector>

        const actual = computeRationalVectorInZone(twoFreeVector, {
            extrema: [lowerBound, upperBound],
            exclusive,
        })

        expect(actual).toBeUndefined()
    })

    it("excludes the unison from the smallest size category besides unison (schismina), even when the 3-exponent is zero, unless exclusive is disabled", (): void => {
        const twoFreeVector = [0, 0] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as ScaledVector as Min<ScaledVector>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as ScaledVector as Max<ScaledVector>
        const exclusive: Exclusive = false

        const actual = computeRationalVectorInZone(twoFreeVector, {
            extrema: [lowerBound, upperBound],
            exclusive,
        })

        const expected = [] as unknown[] as Vector<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works for a huge 3-limit vector", (): void => {
        const twoFreeVector = [0, 665] as Vector<{ rational: true; rough: 3 }>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as ScaledVector as Min<ScaledVector>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as ScaledVector as Max<ScaledVector>

        const actual = computeRationalVectorInZone(twoFreeVector, {
            extrema: [lowerBound, upperBound],
            exclusive,
        })

        const expected = [-1054, 665] as Vector<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})
