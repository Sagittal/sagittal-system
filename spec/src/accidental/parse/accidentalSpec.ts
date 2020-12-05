import {Io} from "@sagittal/general"
import {ArmId, Compatible, HeadId, parseAccidental} from "../../../../src"
import {Shafts} from "../../../../src/accidental/sagittal"
import {computeAccidental} from "../../../helpers/src/accidental/accidental"

describe("parseAccidental", (): void => {
    it("works for ASCII format", (): void => {
        const accidentalIo = ",'/|)" as Io

        const actual = parseAccidental(accidentalIo)

        const expected = computeAccidental({armId: ArmId.ANTIWING_AND_TICK, headId: HeadId.BARB_AND_ARC})
        expect(actual).toEqual(expected)
    })

    it("works for smiley format", (): void => {
        const accidentalIo = ":,::'::/ /|||:" as Io

        const actual = parseAccidental(accidentalIo)

        const expected = computeAccidental({
            armId: ArmId.ANTIWING_AND_TICK,
            headId: HeadId.DOUBLE_LEFT_BARB,
            shafts: Shafts.TRIPLE,
        })
        expect(actual).toEqual(expected)
    })

    it("works for Unicode format", (): void => {
        const accidentalIo = "" as Io

        const actual = parseAccidental(accidentalIo)

        const expected = computeAccidental({
            armId: ArmId.WING,
            headId: HeadId.RIGHT_BARB,
            compatible: Compatible.SHARP,
        })
        expect(actual).toEqual(expected)
    })
})
