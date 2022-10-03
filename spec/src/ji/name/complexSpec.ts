import {BLANK, Comma, slowTestOnlyRunInFullSuite} from "@sagittal/general"
import {SizeCategory} from "../../../../src"
import {computeMaybeComplex} from "../../../../src/ji/name/complex"

describe("computeMaybeComplex", (): void => {
    it("returns blank for a comma which is the simplest comma with its (undirected) quotient and size category           ", (): void => {
        const comma = {pev: [-4, 4, -1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe(BLANK)
    })

    it("works for a comma that is more complex than another with its same (undirected) quotient and size category          ", (): void => {
        const comma = {pev: [-34, 20, 1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("complex-")
    })

    it("works for a supercomplex comma", (): void => {
        const comma = {pev: [50, -33, 1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("sc")
    })

    it("works for a hypercomplex comma", (): void => {
        const comma = {pev: [80, -49, -1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("hc")
    })

    it("works for an ultracomplex comma", (): void => {
        const comma = {pev: [-88, 57, -1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("uc")
    })

    it("works for a 5-complex comma", (): void => {
        const comma = {pev: [-118, 73, 1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("5c")
    })

    it("works for a 6-complex comma", (): void => {
        slowTestOnlyRunInFullSuite()

        const comma = {pev: [134, -86, 1]} as Comma
        const sizeCategory = SizeCategory.COMMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("6c")
    })

    it("returns blank for a comma which is the simplest 3-limit comma in its size category", (): void => {
        const comma = {pev: [-84, 53]} as Comma
        const sizeCategory = SizeCategory.SCHISMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe(BLANK)
    })

    it("works for a comma that is more complex than another 3-limit comma in its size category, prefixing it with the EDO which tempers it out (which is equal to the 3-exponent)", (): void => {
        slowTestOnlyRunInFullSuite()

        const comma = {pev: [-569, 359]} as Comma
        const sizeCategory = SizeCategory.SCHISMA
        const abbreviated = false

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("359-EDO-")
    })

    it("can abbreviate the complexity for 3-limit commas", (): void => {
        slowTestOnlyRunInFullSuite()

        const comma = {pev: [970, -612]} as Comma
        const sizeCategory = SizeCategory.SCHISMA
        const abbreviated = true

        const actual = computeMaybeComplex(comma, {sizeCategory, abbreviated})

        expect(actual).toBe("612e")
    })
})
