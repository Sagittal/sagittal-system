import {ArmId, computeAccidental, HeadId} from "../../../../src"
import {computeSagittalFromFlacco, Flacco} from "../../../../src/accidental"
import { getFlacco } from "../../../../src/notations"
import { FlaccoId } from "../../../../src/notations/ji/class/flacco"

describe("computeSagittalFromFlacco", (): void => {
    it("takes a combo of flags and arm and returns the full Sagittal symbol", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.ANTIWING_BOATHOOK_AND_ARC)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = computeAccidental({armId: ArmId.WING, anti: true, headId: HeadId.BOATHOOK_AND_ARC}) // ,~|)
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with an accent and flag on the left", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.TICK_AND_LEFT_ARC)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = computeAccidental({armId: ArmId.TICK, headId: HeadId.LEFT_ARC})                        // '(|
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the right", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.RIGHT_BARB_AND_ARC)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = computeAccidental({headId: HeadId.RIGHT_BARB_AND_ARC})                                 // |\)
        expect(actual).toEqual(expected)
    })

    it("works for a symbol with multiple flags on the left", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.LEFT_SCROLL_DOUBLE_LEFT_BARB)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = computeAccidental({headId: HeadId.LEFT_SCROLL_DOUBLE_LEFT_BARB})                       // )//|
        expect(actual).toEqual(expected)
    })

    it("works for the null sagittal (the parenthetical natural)", (): void => {
        const flacco: Flacco = {}

        const actual = computeSagittalFromFlacco(flacco)

        expect(actual).toEqual(undefined)                                                             // (|//|)
    })

    it("works for a symbol with only arm", (): void => {
        const flacco: Flacco = getFlacco(FlaccoId.WING)

        const actual = computeSagittalFromFlacco(flacco)

        const expected = computeAccidental({armId: ArmId.WING})                                                 // `|
        expect(actual).toEqual(expected)
    })
})
