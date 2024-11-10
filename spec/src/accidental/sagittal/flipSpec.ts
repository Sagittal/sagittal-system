import { ArmId, computeAccidental, HeadId } from "../../../../src"
import { flipSagittal, Shafts } from "../../../../src/accidental/sagittal"

describe("flipSagittal", (): void => {
    it("flips the entire symbol from up to down (only modifies the core; does not need to change arm since their orientation is described relative to the core)", (): void => {
        const sagittal = computeAccidental({
            // `./|||\\
            armId: ArmId.ANTIWING_AND_TICK,
            anti: true,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.TRIPLE,
        })

        const actual = flipSagittal(sagittal)

        const expected = computeAccidental({
            // ,'\\!!!/
            armId: ArmId.ANTIWING_AND_TICK,
            anti: true,
            headId: HeadId.DOUBLE_BARB,
            shafts: Shafts.TRIPLE,
            down: true,
        })
        expect(actual).toEqual(expected)
    })
})
