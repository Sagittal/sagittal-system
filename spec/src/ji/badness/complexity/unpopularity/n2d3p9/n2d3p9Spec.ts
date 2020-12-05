import {Direction, EMPTY_MONZO, Monzo, Two3FreeClass} from "@sagittal/general"
import {computeN2D3P9, N2D3P9} from "../../../../../../../src"

describe("computeN2D3P9", (): void => {
    it("returns an approximate rank of the 2,3-free class's popularity", (): void => {
        const two3FreeClass = {monzo: [0, 0, 1, 0, 1]} as Two3FreeClass // {55}₂,₃

        const actual = computeN2D3P9(two3FreeClass)

        const expected = 16.805556 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })

    it("yet another example", (): void => {
        const two3FreeClass = {monzo: [0, 0, 2, 2]} as Two3FreeClass  // {1225}₂,₃

        const actual = computeN2D3P9(two3FreeClass)

        const expected = 59.548611 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })

    it("yet another another example", (): void => {
        const two3FreeClass = {monzo: [0, 0, 0, 0, -1, 0, 0, 0, 1]} as Two3FreeClass  // {23/11}₂,₃

        const actual = computeN2D3P9(two3FreeClass)

        const expected = 107.759259 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })

    it("errors if given a malformed 2,3-free class, which is not actually 2,3-free", (): void => {
        const two3FreeClass = {monzo: [-4, -1, 1, 0, 1]} as Two3FreeClass // {55/48}₂,₃ # bad!!

        expect((): void => {
            computeN2D3P9(two3FreeClass)
        })
            .toThrowError("N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo [  -4  -1   1   0   1 ⟩")
    })

    it("errors if given a malformed 2,3-free class, for which the quotient is not super (n ≥ d)", (): void => {
        const two3FreeClass = {monzo: [0, 0, 0, 0, -2]} as Two3FreeClass  // {1/121}₂,₃  # bad!!

        expect((): void => {
            computeN2D3P9(two3FreeClass)
        })
            .toThrowError("N2D3P9 must be given a 2,3-free class (5-rough, n ≥ d); received monzo [   0   0   0   0  -2 ⟩")
    })

    it("can handle 1/1, the empty 2,3-free class", (): void => {
        const two3FreeClass = {
            monzo: EMPTY_MONZO as Monzo<{rational: true, direction: Direction.SUPER, rough: 5}>,   // {1}₂,₃
        } as Two3FreeClass

        const actual = computeN2D3P9(two3FreeClass)

        const expected = 1 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })

    it("in case it receives a non-trimmed monzo, doesn't break", (): void => {
        const two3FreeClass = {monzo: [0, 0, 0, 0]} as Two3FreeClass      // {1}₂,₃

        const actual = computeN2D3P9(two3FreeClass)

        const expected = 1 as N2D3P9
        expect(actual).toBeCloseToTyped(expected)
    })
})
