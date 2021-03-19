import {computeSpevFromDecimal, Decimal, EMPTY_PEV, Exclusive, Max, Min, Pev, Spev} from "@sagittal/general"
import {computeRationalPevInZone} from "../../../../src/ji/find"
import {n_s_SIZE_CATEGORY_BOUND, u_n_SIZE_CATEGORY_BOUND} from "../../../../src/ji/name/sizeCategoryBounds"

describe("computeRationalPevInZone", (): void => {
    const exclusive: Exclusive = [true, false]

    it("given a 2-free pev, finds the correct power of 2 for the pev which is in the search bounds", (): void => {
        const twoFreePev = [0, -6, 3, 5, -1] as Pev<{rational: true, rough: 3}>
        const lowerBound = computeSpevFromDecimal(1.023374 as Decimal) as Min<Spev>
        const upperBound = computeSpevFromDecimal(1.023433 as Decimal) as Max<Spev>

        const actual = computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        const expected = [-8, -6, 3, 5, -1] as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no pev is within the search bounds", (): void => {
        const twoFreePev = [0, -6, 3, 5, -1] as Pev<{rational: true, rough: 3}>
        const lowerBound = computeSpevFromDecimal(1.023433 as Decimal) as Min<Spev>
        const upperBound = computeSpevFromDecimal(1.023492 as Decimal) as Max<Spev>

        const actual = computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free pev", (): void => {
        const twoFreePev = [0, 0] as Pev<{rational: true, rough: 3}>
        const lowerBound = computeSpevFromDecimal(1.023433 as Decimal) as Min<Spev>
        const upperBound = computeSpevFromDecimal(1.023492 as Decimal) as Max<Spev>

        const actual = computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        expect(actual).toBeUndefined()
    })

    it("works for the empty two-free pev when unison is within the search range (it comes in untrimmed, but leaves trimmed)", (): void => {
        const twoFreePev = [0, 0] as Pev<{rational: true, rough: 3}>
        const lowerBound = computeSpevFromDecimal(0.977104 as Decimal) as Min<Spev>
        const upperBound = computeSpevFromDecimal(1.023492 as Decimal) as Max<Spev>

        const actual = computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        const expected = EMPTY_PEV as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for the empty two-free pev when unison is on the cusp of the search range, if the default of exclusive bounds is disabled", (): void => {
        const twoFreePev = [0, 0] as Pev<{rational: true, rough: 3}>
        const lowerBound = computeSpevFromDecimal(1.000000 as Decimal) as Min<Spev>
        const upperBound = computeSpevFromDecimal(1.023433 as Decimal) as Max<Spev>
        const exclusive: Exclusive = false

        const actual = computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        const expected = EMPTY_PEV as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original pev", (): void => {
        const twoFreePev = [0, -6, 3, 5, -1] as Pev<{rational: true, rough: 3}>
        const lowerBound = computeSpevFromDecimal(1.023374 as Decimal) as Min<Spev>
        const upperBound = computeSpevFromDecimal(1.023433 as Decimal) as Max<Spev>

        computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        const expected = [0, -6, 3, 5, -1] as Pev<{rational: true}>
        expect(twoFreePev).toEqual(expected)
    })

    it("excludes the unison from the smallest size category besides unison (schismina)", (): void => {
        const twoFreePev = [0, -306] as Pev<{rational: true, rough: 3}>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as Spev as Min<Spev>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as Spev as Max<Spev>

        const actual = computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        const expected = [485, -306] as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("excludes the unison from the smallest size category besides unison (schismina), even when the 3-exponent is zero", (): void => {
        const twoFreePev = [0, 0] as Pev<{rational: true, rough: 3}>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as Spev as Min<Spev>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as Spev as Max<Spev>

        const actual = computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        expect(actual).toBeUndefined()
    })

    it("excludes the unison from the smallest size category besides unison (schismina), even when the 3-exponent is zero, unless exclusive is disabled", (): void => {
        const twoFreePev = [0, 0] as Pev<{rational: true, rough: 3}>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as Spev as Min<Spev>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as Spev as Max<Spev>
        const exclusive: Exclusive = false

        const actual = computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        const expected = [] as unknown[] as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works for a huge 3-limit pev", (): void => {
        const twoFreePev = [0, 665] as Pev<{rational: true, rough: 3}>
        const lowerBound = u_n_SIZE_CATEGORY_BOUND.pitch as Spev as Min<Spev>
        const upperBound = n_s_SIZE_CATEGORY_BOUND.pitch as Spev as Max<Spev>

        const actual = computeRationalPevInZone(twoFreePev, {extrema: [lowerBound, upperBound], exclusive})

        const expected = [-1054, 665] as Pev<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
