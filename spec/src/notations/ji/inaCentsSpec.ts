import { Cents } from "@sagittal/general"
import { computeCentsFromTinas, Minas, Tinas } from "../../../../src"
import {
    computeCentsFromAthinas,
    computeCentsFromHinas,
    computeCentsFromMinas,
    computeCentsFromUltrinas,
} from "../../../../src/notations/ji/inaCents"
import { Athinas, Hinas, Ultrinas } from "../../../../src/notations/ji/types"

describe("computeCentsFromTinas", (): void => {
    it("computes the cents from tinas", (): void => {
        const tinas = 1 as Tinas

        const actual = computeCentsFromTinas(tinas)

        const expected = 0.140525 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computeCentsFromMinas", (): void => {
    it("computes the cents from minas", (): void => {
        const minas = 1 as Minas

        const actual = computeCentsFromMinas(minas)

        const expected = 0.487918 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computeCentsFromUltrinas", (): void => {
    it("computes the cents from ultrinas", (): void => {
        const ultrinas = 1 as Ultrinas

        const actual = computeCentsFromUltrinas(ultrinas)

        const expected = 1.960086 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computeCentsFromHinas", (): void => {
    it("computes the cents from hinas", (): void => {
        const hinas = 1 as Hinas

        const actual = computeCentsFromHinas(hinas)

        const expected = 2.41883 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})

describe("computeCentsFromAthinas", (): void => {
    it("computes the cents from athinas", (): void => {
        const athinas = 1 as Athinas

        const actual = computeCentsFromAthinas(athinas)

        const expected = 5.413572 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})
