import {HeadId, SymbolClassId} from "../../../../src"
import {Accidental, Compatible, Flavor} from "../../../../src/accidental"
import {computeEvoAccidentalFromCaptureZone} from "../../../../src/accidental/flavor/evo"
import {
    SECTION_N1A,
    SECTION_N1T,
    SECTION_N2A,
    SECTION_N2T,
    SECTION_P1A,
    SECTION_P1T,
    SECTION_P2A,
    SECTION_P2T,
} from "../../../../src/notation/sections"
import {computeAccidental} from "../../../helpers/src/accidental/accidental"

describe("computeEvoAccidentalFromCaptureZone", (): void => {
    it("works for section P1A", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_P1A)

        const expected = computeAccidental({headId: HeadId.DOUBLE_LEFT_BARB}) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P1T, in the area with a downward symbol accompanied by a conventional sharp", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_P1T)

        const expected = computeAccidental({
            headId: HeadId.DOUBLE_LEFT_BARB,
            down: true,
            compatible: Compatible.SHARP,
        }) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P1T, in the area where a single-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_P1T)

        const expected = computeAccidental({headId: HeadId.DOUBLE_ARC}) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P2A", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_P2A)

        const expected = computeAccidental({
            headId: HeadId.DOUBLE_LEFT_BARB,
            compatible: Compatible.SHARP,
        }) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P2T, in the area with a downward symbol and by a conventional double sharp", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_P2T)

        const expected = computeAccidental({
            headId: HeadId.DOUBLE_LEFT_BARB, down: true,
            compatible: Compatible.DOUBLE_SHARP,
        }) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section P2T, in the area with a symbol and a conventional sharp", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_P2T)

        const expected = computeAccidental({
            headId: HeadId.DOUBLE_ARC,
            compatible: Compatible.SHARP,
        }) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N1A", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_N1A)

        const expected = computeAccidental({headId: HeadId.DOUBLE_LEFT_BARB, down: true}) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N1T, in the area where an upward symbol accompanied by a flat results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_N1T)

        const expected = computeAccidental({
            headId: HeadId.DOUBLE_LEFT_BARB,
            compatible: Compatible.FLAT,
        }) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N1T, in the area where a single-shafted symbol results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_N1T)

        const expected = computeAccidental({headId: HeadId.DOUBLE_ARC, down: true}) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N2A", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_N2A)

        const expected = computeAccidental({
            headId: HeadId.DOUBLE_LEFT_BARB,
            down: true,
            compatible: Compatible.FLAT,
        }) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N2T, in the area where an upward symbol accompanied by a double flat results", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_LEFT_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_N2T)

        const expected = computeAccidental({
            headId: HeadId.DOUBLE_LEFT_BARB,
            compatible: Compatible.DOUBLE_FLAT,
        }) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for section N2T, in the area where a downward symbol accompanied by a conventional flat results               ", (): void => {
        const symbolClassId = SymbolClassId.DOUBLE_BARB

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_N2T)

        const expected = computeAccidental({
            headId: HeadId.DOUBLE_ARC,
            down: true,
            compatible: Compatible.FLAT,
        }) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for the natural symbol (in the zone just above the natural)", (): void => {
        const symbolClassId = SymbolClassId.NULL

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_P1A)

        const expected = computeAccidental() as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for the natural symbol (in the zone just below the natural)", (): void => {
        const symbolClassId = SymbolClassId.NULL

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_N1A)

        const expected = computeAccidental() as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for the flat symbol (in the zone just above the flat)", (): void => {
        const symbolClassId = SymbolClassId.NULL

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_N1T)

        const expected = computeAccidental({compatible: Compatible.FLAT}) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })

    it("works for the flat symbol (in the zone just below the flat)", (): void => {
        const symbolClassId = SymbolClassId.NULL

        const actual = computeEvoAccidentalFromCaptureZone(symbolClassId, SECTION_N2A)

        const expected = computeAccidental({compatible: Compatible.FLAT}) as Accidental<Flavor.EVO>
        expect(actual).toEqual(expected)
    })
})
