import {
    Accidental,
    ArmId,
    Sagitype,
    Compatible,
    computeAccidental,
    computeAccidentalSagitype,
    HeadId,
    parseSagitype,
} from "../../../../src"
import { Shafts } from "../../../../src/accidental/sagittal"
import { CaptureZone, computeRevoAccidentalFromCaptureZone } from "../../../../src/notations"
import { computeCaptureZones } from "../../../../src/notations/ji/class/captureZone/captureZones"
import { EXTREME_NOTATION } from "../../../../src/notations/ji/class/level/notations"

describe("parseSagitype", (): void => {
    it("parses a sagittal correctly into its arm and core", (): void => {
        const sagitype = ",'/|)" as Sagitype

        const actual = parseSagitype(sagitype)

        const expected = computeAccidental({ armId: ArmId.ANTIWING_AND_TICK, headId: HeadId.BARB_AND_ARC })
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagitype = "(|//|)" as Sagitype

        const actual = parseSagitype(sagitype)

        const expected = computeAccidental()        // {}
        expect(actual).toEqual(expected)
    })

    it("works for a sagittal aiming down with multiple shafts", (): void => {
        const sagitype = "~!!!" as Sagitype

        const actual = parseSagitype(sagitype)

        const expected = computeAccidental({ headId: HeadId.LEFT_BOATHOOK, shafts: Shafts.TRIPLE, down: true })
        expect(actual).toEqual(expected)
    })

    it("works for accidentals with compatibles", (): void => {
        const sagitype = "/|b" as Sagitype

        const actual = parseSagitype(sagitype)

        const expected = computeAccidental({ headId: HeadId.LEFT_BARB, compatible: Compatible.FLAT })
        expect(actual).toEqual(expected)
    })

    it("works for this example? edge case?", (): void => {
        const sagitype = "/|\\" as Sagitype

        const actual = parseSagitype(sagitype)

        const expected = computeAccidental({ headId: HeadId.DOUBLE_BARB })
        expect(actual).toEqual(expected)
    })

    it("doesn't mess this one up", (): void => {
        const sagitype = "`.!(" as Sagitype

        const actual = parseSagitype(sagitype)

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
        const actuals = captureZones.map(({ symbolClassId, section }: CaptureZone): Sagitype => {
            const revoAccidental = computeRevoAccidentalFromCaptureZone(symbolClassId, section)
            expecteds.push(revoAccidental)

            return computeAccidentalSagitype(revoAccidental)
        })

        expecteds.forEach((expected: Accidental, index: number): void => {
            const sagitype = actuals[index]

            const actual = parseSagitype(sagitype)

            expect(actual).toEqual(expected)
        })
    })

    it("assumes a floating accent is against a shaft, and gets the direction right", (): void => {
        expect(parseSagitype("`'" as Sagitype)).toEqual(computeAccidental({ armId: ArmId.WING_AND_TICK }))
        expect(parseSagitype("'" as Sagitype)).toEqual(computeAccidental({ armId: ArmId.TICK }))
        // Antiwing & tick is a valid arm, but not a valid symbol!
        expect(parseSagitype("``" as Sagitype)).toEqual(computeAccidental({ armId: ArmId.BIRD }))
        expect(parseSagitype("`" as Sagitype)).toEqual(computeAccidental({ armId: ArmId.WING }))
        expect(parseSagitype("," as Sagitype)).toEqual(computeAccidental({ armId: ArmId.WING, down: true }))
        expect(parseSagitype(",," as Sagitype)).toEqual(computeAccidental({ armId: ArmId.BIRD, down: true }))
        // Antiwing & tick is a valid arm, but not a valid symbol!
        expect(parseSagitype("." as Sagitype)).toEqual(computeAccidental({ armId: ArmId.TICK, down: true }))
        expect(parseSagitype(",." as Sagitype)).toEqual(computeAccidental({ armId: ArmId.WING_AND_TICK, down: true }))
    })
})
