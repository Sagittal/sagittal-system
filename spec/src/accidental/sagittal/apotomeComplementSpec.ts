import {computeAccidental} from "../../../../src"
import {ArmId, HeadId} from "../../../../src/accidental/flacco"
import {computeApotomeComplement, Shafts} from "../../../../src/accidental/sagittal"

describe("computeApotomeComplement", (): void => {
    it("returns the apotome complement of the given symbol", (): void => {
        const sagittal = computeAccidental({headId: HeadId.LEFT_BARB})                                       //  /|

        const actual = computeApotomeComplement(sagittal)

        const expected = computeAccidental({headId: HeadId.RIGHT_BARB, shafts: Shafts.DOUBLE})               // ||\\
        expect(actual).toEqual(expected)
    })

    it("can go from a multi-shaft symbol to the single-shaft symbol", (): void => {
        const sagittal = computeAccidental({headId: HeadId.LEFT_SCROLL_AND_BOATHOOK, shafts: Shafts.DOUBLE}) // )~||

        const actual = computeApotomeComplement(sagittal)

        const expected = computeAccidental({headId: HeadId.BOATHOOK_AND_BARB})                               // ~|\\
        expect(actual).toEqual(expected)
    })

    it("reorients the arm, so that they will cancel each other out", (): void => {
        const sagittal = computeAccidental({armId: ArmId.ANTIWING_AND_TICK, headId: HeadId.DOUBLE_SCROLL})   // ,'|(

        const actual = computeApotomeComplement(sagittal)

        const expected = computeAccidental({                                                                 // `./||)
            armId: ArmId.ANTIWING_AND_TICK,
            anti: true,
            headId: HeadId.DOUBLE_LEFT_BARB,
            shafts: Shafts.DOUBLE,
        })
        expect(actual).toEqual(expected)
    })

    it("can reorient arm the other way", (): void => {
        const sagittal = computeAccidental({                                                                 // `./||)
            armId: ArmId.ANTIWING_AND_TICK,
            anti: true,
            headId: HeadId.DOUBLE_LEFT_BARB,
            shafts: Shafts.DOUBLE,
        })

        const actual = computeApotomeComplement(sagittal)

        const expected = computeAccidental({armId: ArmId.ANTIWING_AND_TICK, headId: HeadId.DOUBLE_SCROLL})   // ,'|(
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural), mapping it to the apotome", (): void => {
        const sagittal = undefined

        const actual = computeApotomeComplement(sagittal)

        const expected = computeAccidental({headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE})
        expect(actual).toEqual(expected)
    })

    it("works for the apotome, mapping it to the null sagittal (the parenthetical natural", (): void => {
        const sagittal = computeAccidental({headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE})

        const actual = computeApotomeComplement(sagittal)

        const expected = undefined
        expect(actual).toEqual(expected)
    })

    it("maps a bare shaft with arm to the apotome with a reoriented arm", (): void => {
        const sagittal = computeAccidental({armId: ArmId.WING_AND_TICK, headId: HeadId.BARE_SHAFT})         // `'|

        const actual = computeApotomeComplement(sagittal)

        const expected = computeAccidental({                                                                // ,./||\\
            armId: ArmId.WING_AND_TICK,
            anti: true,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.DOUBLE,
        })
        expect(actual).toEqual(expected)
    })

    it("you really gotta be careful with these three different 1-scroll 2-barb symbols", (): void => {
        const sagittal = computeAccidental({headId: HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB})                 // )//|

        const actual = computeApotomeComplement(sagittal)   // *not* )/|\ which is HeadId.LEFT_SCROLL_AND_DOUBLE_BARB

        const expected = computeAccidental({headId: HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB})                // )|\\
        expect(actual).toEqual(expected)
    })

    it("throws an error if passed a down symbol", (): void => {
        const sagittal = computeAccidental({headId: HeadId.LEFT_BARB, down: true})                          //  \!

        expect((): void => {
            computeApotomeComplement(sagittal)
        }).toThrowError("Do not attempt to take apotome complement of downward-aiming sagittals.")
    })
})
