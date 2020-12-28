import {
    Accidental,
    ArmId,
    Ascii,
    Compatible,
    computeAccidental,
    computeAccidentalAscii,
    HeadId,
    parseAscii,
} from "../../../../src"
import {computeRevoAccidentalFromCaptureZone} from "../../../../src/accidental/flavor/revo"
import {Shafts} from "../../../../src/accidental/sagittal"
import {CaptureZone} from "../../../../src/notation"
import {computeCaptureZones} from "../../../../src/notation/captureZones"
import {EXTREME_NOTATION} from "../../../../src/notations/ji/notations"

describe("parseAscii", (): void => {
    it("parses a sagittal correctly into its arm and core", (): void => {
        const ascii = ",'/|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({armId: ArmId.ANTIWING_AND_TICK, headId: HeadId.BARB_AND_ARC})
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const ascii = "(|//|)" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental()        // {}
        expect(actual).toEqual(expected)
    })

    it("works for a sagittal aiming down with multiple shafts", (): void => {
        const ascii = "~!!!" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({headId: HeadId.LEFT_BOATHOOK, shafts: Shafts.TRIPLE, down: true})
        expect(actual).toEqual(expected)
    })

    it("works for accidentals with compatibles", (): void => {
        const ascii = "/|b" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({headId: HeadId.LEFT_BARB, compatible: Compatible.FLAT})
        expect(actual).toEqual(expected)
    })

    it("works for this example? edge case?", (): void => {
        const ascii = "/|\\" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({headId: HeadId.DOUBLE_BARB})
        expect(actual).toEqual(expected)
    })

    it("doesn't mess this one up", (): void => {
        const ascii = "`.!(" as Ascii

        const actual = parseAscii(ascii)

        const expected = computeAccidental({
            headId: HeadId.RIGHT_SCROLL,
            armId: ArmId.ANTIWING_AND_TICK,
            down: true,
        })
        expect(actual).toEqual(expected)
    })

    it("works for all of them", (): void => {
        const captureZones = computeCaptureZones(EXTREME_NOTATION)

        const expecteds = [] as Accidental[]
        const actuals = captureZones.map(({symbolClassId, section}: CaptureZone): Ascii => {
            const revoAccidental = computeRevoAccidentalFromCaptureZone(symbolClassId, section)
            expecteds.push(revoAccidental)

            return computeAccidentalAscii(revoAccidental)
        })

        expecteds.forEach((expected: Accidental, index: number): void => {
            const ascii = actuals[index]

            const actual = parseAscii(ascii)

            expect(actual).toEqual(expected)
        })
    })

    it("assumes a floating accent is against a shaft, and gets the direction right", (): void => {
        expect(parseAscii("`'" as Ascii)).toEqual(computeAccidental({armId: ArmId.WING_AND_TICK}))
        expect(parseAscii("'" as Ascii)).toEqual(computeAccidental({armId: ArmId.TICK}))
        // Antiwing & tick is a valid arm, but not a valid symbol!
        expect(parseAscii("``" as Ascii)).toEqual(computeAccidental({armId: ArmId.BIRD}))
        expect(parseAscii("`" as Ascii)).toEqual(computeAccidental({armId: ArmId.WING}))
        expect(parseAscii("," as Ascii)).toEqual(computeAccidental({armId: ArmId.WING, down: true}))
        expect(parseAscii(",," as Ascii)).toEqual(computeAccidental({armId: ArmId.BIRD, down: true}))
        // Antiwing & tick is a valid arm, but not a valid symbol!
        expect(parseAscii("." as Ascii)).toEqual(computeAccidental({armId: ArmId.TICK, down: true}))
        expect(parseAscii(",." as Ascii)).toEqual(computeAccidental({armId: ArmId.WING_AND_TICK, down: true}))
    })
})
