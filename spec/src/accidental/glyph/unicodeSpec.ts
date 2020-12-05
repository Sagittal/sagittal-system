import {ArmId, HeadId} from "../../../../src"
import {
    Accidental,
    Compatible,
    computeAccidentalUnicode,
    computeSagittalUnicode,
    EMPTY_ACCIDENTAL,
    Flavor,
    Unicode,
} from "../../../../src/accidental"
import {computeAccidental} from "../../../helpers/src/accidental/accidental"

describe("computeSagittalUnicode", (): void => {
    it("given a symbol, returns its unicode representation", (): void => {
        const sagittal = computeAccidental({armId: ArmId.BIRD, headId: HeadId.LEFT_SCROLL})          // ``)|

        const actual = computeSagittalUnicode(sagittal)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const sagittal = undefined

        const actual = computeSagittalUnicode(sagittal)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })
})

describe("computeAccidentalUnicode", (): void => {
    it("works for accidentals with a Sagittal-compatible glyph", (): void => {
        const accidental = computeAccidental({
            headId: HeadId.RIGHT_ARC,
            down: true,
            compatible: Compatible.FLAT,
        })

        const actual = computeAccidentalUnicode(accidental)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })

    it("works for accidentals with only a Sagittal-compatible glyph", (): void => {
        const accidental: Accidental<Flavor.EVO> = {
            compatible: Compatible.DOUBLE_FLAT,
        } as Accidental<Flavor.EVO>

        const actual = computeAccidentalUnicode(accidental)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })

    it("works for the empty accidental", (): void => {
        const accidental = EMPTY_ACCIDENTAL

        const actual = computeAccidentalUnicode(accidental)

        const expected = "" as Unicode
        expect(actual).toBe(expected)
    })
})
