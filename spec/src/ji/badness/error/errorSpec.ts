import {Cents, computeCentsFromPitch, halveSpev} from "@sagittal/general"
import {computeCentsError, TINA} from "../../../../../src"

describe("computeCentsError", (): void => {
    const centUnit = computeCentsFromPitch(halveSpev(TINA))   // Semitina cents

    it("checks out against Dave's spreadsheet", (): void => {
        const cents = 0.081 as Cents

        const actual = computeCentsError(cents, centUnit)

        const expected = 0.152820
        expect(actual).toBeCloseTo(expected)
    })

    it("another example, close to the max", (): void => {
        const cents = 0.106 as Cents

        const actual = computeCentsError(cents, centUnit)

        const expected = 0.491372
        expect(actual).toBeCloseTo(expected)
    })

    it("another example, almost exactly a semitina", (): void => {
        const cents = 0.492 as Cents

        const actual = computeCentsError(cents, centUnit)

        const expected = 0.002313
        expect(actual).toBeCloseTo(expected)
    })
})
