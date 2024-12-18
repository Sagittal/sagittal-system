import { computeAccidental, HeadId } from "../../../../src"
import { ArmId, getArm } from "../../../../src/accidental"
import { getCore, Sagittal, Shafts } from "../../../../src/accidental/sagittal"
import { computeApotomeComplementHandlingAsymmetricalSelfComplement } from "../../../../src/notations/ji/asymmetricalSelfComplement"

// https://forum.sagittal.org/viewtopic.php?p=1308#p1308
describe("computeApotomeComplementHandlingAsymmetricalSelfComplement", (): void => {
    it("has the correct apotome complements for symbols with the core which is its own apotome complement and therefore things get tricky with its arms which are not symmetrical about the half apotome mirror", (): void => {
        const core = getCore(HeadId.LEFT_SCROLL_AND_DOUBLE_BARB)
        expect(
            computeApotomeComplementHandlingAsymmetricalSelfComplement({
                ...core,
                arm: getArm(ArmId.WING, { anti: true }),
            } as Sagittal),
        ).toEqual({
            ...core,
            arm: getArm(ArmId.BIRD),
        } as Sagittal)
        expect(
            computeApotomeComplementHandlingAsymmetricalSelfComplement({
                ...core,
            } as Sagittal),
        ).toEqual({
            ...core,
            arm: getArm(ArmId.WING),
        } as Sagittal)
        expect(
            computeApotomeComplementHandlingAsymmetricalSelfComplement({
                ...core,
                arm: getArm(ArmId.WING),
            } as Sagittal),
        ).toEqual({
            ...core,
        } as Sagittal)
        expect(
            computeApotomeComplementHandlingAsymmetricalSelfComplement({
                ...core,
                arm: getArm(ArmId.BIRD),
            } as Sagittal),
        ).toEqual({
            ...core,
            arm: getArm(ArmId.WING, { anti: true }),
        } as Sagittal)
    })

    describe("it otherwsie behaves like computeApotomeComplement", (): void => {
        it("returns the apotome complement of the given symbol", (): void => {
            const sagittal = computeAccidental({ headId: HeadId.LEFT_BARB }) //  /|

            const actual = computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal)

            const expected = computeAccidental({ headId: HeadId.RIGHT_BARB, shafts: Shafts.DOUBLE }) // ||\\
            expect(actual).toEqual(expected)
        })

        it("can go from a multi-shaft symbol to the single-shaft symbol", (): void => {
            const sagittal = computeAccidental({
                headId: HeadId.LEFT_SCROLL_AND_BOATHOOK,
                shafts: Shafts.DOUBLE,
            }) // )~||

            const actual = computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal)

            const expected = computeAccidental({ headId: HeadId.BOATHOOK_AND_BARB }) // ~|\\
            expect(actual).toEqual(expected)
        })

        it("reorients the arm, so that they will cancel each other out", (): void => {
            const sagittal = computeAccidental({
                armId: ArmId.ANTIWING_AND_TICK,
                headId: HeadId.DOUBLE_SCROLL,
            }) // ,'|(

            const actual = computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal)

            const expected = computeAccidental({
                // `./||)
                armId: ArmId.ANTIWING_AND_TICK,
                anti: true,
                headId: HeadId.DOUBLE_LEFT_BARB,
                shafts: Shafts.DOUBLE,
            })
            expect(actual).toEqual(expected)
        })

        it("can reorient arm the other way", (): void => {
            const sagittal = computeAccidental({
                // `./||)
                armId: ArmId.ANTIWING_AND_TICK,
                anti: true,
                headId: HeadId.DOUBLE_LEFT_BARB,
                shafts: Shafts.DOUBLE,
            })

            const actual = computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal)

            const expected = computeAccidental({
                armId: ArmId.ANTIWING_AND_TICK,
                headId: HeadId.DOUBLE_SCROLL,
            }) // ,'|(
            expect(actual).toEqual(expected)
        })

        it("works for the null sagittal (the parenthetical natural), mapping it to the apotome", (): void => {
            const sagittal = undefined

            const actual = computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal)

            const expected = computeAccidental({ headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE })
            expect(actual).toEqual(expected)
        })

        it("works for the apotome, mapping it to the null sagittal (the parenthetical natural", (): void => {
            const sagittal = computeAccidental({ headId: HeadId.DOUBLE_BARB, shafts: Shafts.DOUBLE })

            const actual = computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal)

            const expected = undefined
            expect(actual).toEqual(expected)
        })

        it("maps a bare shaft with arm to the apotome with a reoriented arm", (): void => {
            const sagittal = computeAccidental({ armId: ArmId.WING_AND_TICK, headId: HeadId.BARE_SHAFT }) // `'|

            const actual = computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal)

            const expected = computeAccidental({
                // ,./||\\
                armId: ArmId.WING_AND_TICK,
                anti: true,
                headId: HeadId.DOUBLE_BARB,
                shafts: Shafts.DOUBLE,
            })
            expect(actual).toEqual(expected)
        })

        it("you really gotta be careful with these three different 1-scroll 2-barb symbols", (): void => {
            const sagittal = computeAccidental({ headId: HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB }) // )//|

            const actual = computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal) // *not* )/|\ which is HeadId.LEFT_SCROLL_AND_DOUBLE_BARB

            const expected = computeAccidental({ headId: HeadId.LEFT_SCROLL_DOUBLE_RIGHT_BARB }) // )|\\
            expect(actual).toEqual(expected)
        })

        it("throws an error if passed a down symbol", (): void => {
            const sagittal = computeAccidental({ headId: HeadId.LEFT_BARB, down: true }) //  \!

            expect((): void => {
                computeApotomeComplementHandlingAsymmetricalSelfComplement(sagittal)
            }).toThrowError("Do not attempt to take apotome complement of downward-aiming sagittals.")
        })
    })
})
