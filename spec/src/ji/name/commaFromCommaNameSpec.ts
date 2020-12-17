import {Comma, Monzo} from "@sagittal/general"
import {computeCommaFromCommaNameQuotientAndSizeCategory} from "../../../../src"
import {CommaNameQuotient, SizeCategory} from "../../../../src/ji/name/types"

describe("computeCommaFromCommaNameQuotientAndSizeCategory", (): void => {
    it("gives you the monzo for the comma with the given name", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 91] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.SCHISMA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategory({commaNameQuotient, sizeCategory})

        const expected = {monzo: [-3, 6, 0, -1, 0, -1]} as Comma
        expect(actual).toEqual(expected)
    })

    it("an edge case with large N2D3P9", (): void => {
        const commaNameQuotient: CommaNameQuotient = [77, 185] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.SCHISMINA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategory({commaNameQuotient, sizeCategory})

        const expected = {monzo: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Monzo<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })

    it("can handle something as simple as the syntonic comma", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 5] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.COMMA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategory({commaNameQuotient, sizeCategory})

        const expected = {monzo: [-4, 4, -1] as Monzo<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })

    it("and also this one", (): void => {
        const commaNameQuotient: CommaNameQuotient = [17, 1] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.COMMA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategory({commaNameQuotient, sizeCategory})

        const expected = {monzo: [-12, 5, 0, 0, 0, 0, 1] as Monzo<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })

    it("can handle 3-limit commas", (): void => {
        const commaNameQuotient: CommaNameQuotient = [3, 1] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.SCHISMINA

        const actual = computeCommaFromCommaNameQuotientAndSizeCategory({commaNameQuotient, sizeCategory})

        const expected = {monzo: [485, -306] as Monzo<{rational: true}>} as Comma
        expect(actual).toEqual(expected)
    })
})
