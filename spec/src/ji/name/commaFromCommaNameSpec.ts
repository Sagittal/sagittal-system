import {Comma, Direction, Pev} from "@sagittal/general"
import {computeCommaFromCommaName} from "../../../../src"
import {CommaNameQuotient, SizeCategory} from "../../../../src/ji/name/types"

describe("computeCommaFromCommaName", (): void => {
    it("gives you the pev for the comma with the given name", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 91] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.SCHISMA

        const actual = computeCommaFromCommaName({commaNameQuotient, sizeCategory})

        const expected = {pev: [-3, 6, 0, -1, 0, -1]} as Comma
        expect(actual).toEqual(expected)
    })

    it("an edge case with large N2D3P9", (): void => {
        const commaNameQuotient: CommaNameQuotient = [77, 185] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.SCHISMINA

        const actual = computeCommaFromCommaName({commaNameQuotient, sizeCategory})

        const expected = {pev: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Pev<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })

    it("can handle something as simple as the syntonic comma", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 5] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.COMMA

        const actual = computeCommaFromCommaName({commaNameQuotient, sizeCategory})

        const expected = {pev: [-4, 4, -1] as Pev<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })

    it("and also this one", (): void => {
        const commaNameQuotient: CommaNameQuotient = [17, 1] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.COMMA

        const actual = computeCommaFromCommaName({commaNameQuotient, sizeCategory})

        const expected = {pev: [-12, 5, 0, 0, 0, 0, 1] as Pev<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })

    it("can handle 3-limit commas", (): void => {
        const commaNameQuotient: CommaNameQuotient = [3, 1] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.SCHISMINA

        const actual = computeCommaFromCommaName({commaNameQuotient, sizeCategory})

        const expected = {pev: [485, -306] as Pev<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })

    // todo finish this
    // tslint:disable-next-line:ban
    xdescribe("uses direction of the comma name quotient to indicate direction of the comma (not the prime content), but you can override either direction in the comma name quotient by suffixing 'up' or 'down'", (): void => {
        const sizeCategory: SizeCategory = SizeCategory.COMMA
        const down = {pev: [4, -4, 1]} as Comma
        const up = {pev: [-4, 4, -1]} as Comma

        it("when super quotient, no direction", (): void => {
            expect(computeCommaFromCommaName({
                sizeCategory,
                commaNameQuotient: [5, 1] as CommaNameQuotient,
            })).toEqual(down)
        })

        it("when sub quotient, no direction", (): void => {
            expect(computeCommaFromCommaName({
                sizeCategory,
                commaNameQuotient: [1, 5] as CommaNameQuotient,
            })).toEqual(up)
        })

        it("when super quotient, super direction", (): void => {
            expect(computeCommaFromCommaName({
                sizeCategory,
                commaNameQuotient: [5, 1] as CommaNameQuotient,
                direction: Direction.SUPER,
            })).toEqual(up)
        })

        it("when sub quotient, super direction", (): void => {
            expect(computeCommaFromCommaName({
                sizeCategory,
                commaNameQuotient: [1, 5] as CommaNameQuotient,
                direction: Direction.SUPER,
            })).toEqual(up)
        })

        it("when super quotient, sub direction", (): void => {
            expect(computeCommaFromCommaName({
                sizeCategory,
                commaNameQuotient: [5, 1] as CommaNameQuotient,
                direction: Direction.SUB,
            })).toEqual(down)
        })

        it("when sub quotient, sub direction", (): void => {
            expect(computeCommaFromCommaName({
                sizeCategory,
                commaNameQuotient: [1, 5] as CommaNameQuotient,
                direction: Direction.SUB,
            })).toEqual(down)
        })
    })
})
