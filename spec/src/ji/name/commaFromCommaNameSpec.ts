import { Comma, Direction, Vector } from "@sagittal/general"
import { computeCommaFromCommaName } from "../../../../src"
import { CommaNameQuotient, SizeCategory } from "../../../../src/ji/name/types"

describe("computeCommaFromCommaName", (): void => {
    it("gives you the vector for the comma with the given name", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 91] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.SCHISMA

        const actual = computeCommaFromCommaName({
            commaNameQuotient,
            sizeCategory,
        })

        const expected = { vector: [-3, 6, 0, -1, 0, -1] } as Comma
        expect(actual).toEqual(expected)
    })

    it("an edge case with large N2D3P9", (): void => {
        const commaNameQuotient: CommaNameQuotient = [77, 185] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.SCHISMINA

        const actual = computeCommaFromCommaName({
            commaNameQuotient,
            sizeCategory,
        })

        const expected = {
            vector: [-13, 9, -1, 1, 1, 0, 0, 0, 0, 0, 0, -1] as Vector<{
                rational: true
            }>,
        } as Comma
        expect(actual).toEqual(expected)
    })

    it("can handle something as simple as the syntonic comma", (): void => {
        const commaNameQuotient: CommaNameQuotient = [1, 5] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.COMMA

        const actual = computeCommaFromCommaName({
            commaNameQuotient,
            sizeCategory,
        })

        const expected = {
            vector: [-4, 4, -1] as Vector<{ rational: true }>,
        } as Comma
        expect(actual).toEqual(expected)
    })

    it("and also this one", (): void => {
        const commaNameQuotient: CommaNameQuotient = [17, 1] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.COMMA

        const actual = computeCommaFromCommaName({
            commaNameQuotient,
            sizeCategory,
        })

        const expected = {
            vector: [-12, 5, 0, 0, 0, 0, 1] as Vector<{ rational: true }>,
        } as Comma
        expect(actual).toEqual(expected)
    })

    it("can handle this one", (): void => {
        const commaNameQuotient: CommaNameQuotient = [275, 7] as CommaNameQuotient // 25⋅11/7M
        const sizeCategory: SizeCategory = SizeCategory.MEDIUM_DIESIS

        const actual = computeCommaFromCommaName({
            commaNameQuotient,
            sizeCategory,
        })

        const expected = {
            vector: [1, -4, 2, -1, 1] as Vector<{ rational: true }>,
        } as Comma // 550/567
        expect(actual).toEqual(expected)
    })

    it("can handle 3-limit commas", (): void => {
        const commaNameQuotient: CommaNameQuotient = [3, 1] as CommaNameQuotient
        const sizeCategory: SizeCategory = SizeCategory.SCHISMINA

        const actual = computeCommaFromCommaName({
            commaNameQuotient,
            sizeCategory,
        })

        const expected = {
            vector: [485, -306] as Vector<{ rational: true }>,
        } as Comma
        expect(actual).toEqual(expected)
    })

    describe("uses direction of the comma name quotient to indicate direction of the comma (not the prime content), but you can override either direction in the comma name quotient by suffixing 'up' or 'down'", (): void => {
        describe("for a comma whose 2,3-free class has the same direction", (): void => {
            const sizeCategory: SizeCategory = SizeCategory.MEDIUM_DIESIS
            const commaUp = { vector: [-5, 1, 0, 0, 1] } as Comma
            const commaDown = { vector: [5, -1, 0, 0, -1] } as Comma

            it("when super quotient, no direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [11, 1] as CommaNameQuotient,
                    }),
                ).toEqual(commaUp)
            })

            it("when sub quotient, no direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [1, 11] as CommaNameQuotient,
                    }),
                ).toEqual(commaDown)
            })

            it("when super quotient, super direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [11, 1] as CommaNameQuotient,
                        direction: Direction.SUPER,
                    }),
                ).toEqual(commaUp)
            })

            it("when sub quotient, super direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [1, 11] as CommaNameQuotient,
                        direction: Direction.SUPER,
                    }),
                ).toEqual(commaUp)
            })

            it("when super quotient, sub direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [11, 1] as CommaNameQuotient,
                        direction: Direction.SUB,
                    }),
                ).toEqual(commaDown)
            })

            it("when sub quotient, sub direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [1, 11] as CommaNameQuotient,
                        direction: Direction.SUB,
                    }),
                ).toEqual(commaDown)
            })
        })

        describe("for a comma whose 2,3-free class has the opposite direction", (): void => {
            const sizeCategory: SizeCategory = SizeCategory.COMMA
            const commaUp = { vector: [-4, 4, -1] } as Comma
            const commaDown = { vector: [4, -4, 1] } as Comma

            it("when super quotient, no direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [5, 1] as CommaNameQuotient,
                    }),
                ).toEqual(commaDown)
            })

            it("when sub quotient, no direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [1, 5] as CommaNameQuotient,
                    }),
                ).toEqual(commaUp)
            })

            it("when super quotient, super direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [5, 1] as CommaNameQuotient,
                        direction: Direction.SUPER,
                    }),
                ).toEqual(commaUp)
            })

            it("when sub quotient, super direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [1, 5] as CommaNameQuotient,
                        direction: Direction.SUPER,
                    }),
                ).toEqual(commaUp)
            })

            it("when super quotient, sub direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [5, 1] as CommaNameQuotient,
                        direction: Direction.SUB,
                    }),
                ).toEqual(commaDown)
            })

            it("when sub quotient, sub direction", (): void => {
                expect(
                    computeCommaFromCommaName({
                        sizeCategory,
                        commaNameQuotient: [1, 5] as CommaNameQuotient,
                        direction: Direction.SUB,
                    }),
                ).toEqual(commaDown)
            })
        })
    })
})
