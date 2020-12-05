import {Cents, computeCentsFromPitch} from "@sagittal/general"
import {CommaClassId, computeJiNotationCaptureZone, JiNotationLevelId} from "../../../../src"

describe("computeJiNotationCaptureZone", (): void => {
    it("given a JI Notation comma class and a JI notation level, returns the capture zone for the JI Notation comma class at that JI notation level (works for a JI Notation comma class introduced before Extreme, but Extreme is requested)", (): void => {
        const actual = computeJiNotationCaptureZone(CommaClassId._25_V_7_k, JiNotationLevelId.EXTREME)

        expect(computeCentsFromPitch(actual!.extrema[0]!)).toBeCloseToTyped(7.518106 as Cents)
        expect(computeCentsFromPitch(actual!.extrema[1]!)).toBeCloseToTyped(8.080207 as Cents)
    })

    it("works for a JI Notation comma class where a lower JI notation level than Extreme is requested", (): void => {
        const actual = computeJiNotationCaptureZone(CommaClassId._7_V_11_k, JiNotationLevelId.HIGH)

        expect(computeCentsFromPitch(actual!.extrema[0]!)).toBeCloseToTyped(9.063885 as Cents)
        expect(computeCentsFromPitch(actual!.extrema[1]!)).toBeCloseToTyped(11.031239 as Cents)
    })

    it("throws an error if a JI notation level is requested for a JI Notation comma class which does not exist at that JI notation level", (): void => {
        expect((): void => {
            computeJiNotationCaptureZone(CommaClassId._5_P_2_11_k, JiNotationLevelId.ULTRA)
        }).toThrowError("JI Notation comma class `)|( 5²⋅11k is not present at the Ultra JI notation level; it is not introduced until the Extreme JI notation level.")
    })
})
