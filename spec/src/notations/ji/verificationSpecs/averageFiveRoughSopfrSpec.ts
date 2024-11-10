import {
    compute23FreeClass,
    computeArithmeticMean,
    computeRationalScaledVectorSopfr,
    Mean,
    MeanType,
    Rough,
    Sopfr,
} from "@sagittal/general"
import { CommaClassId, getCommaClass, JI_NOTATION_COMMA_CLASS_IDS } from "../../../../../src"

const AVERAGE_2_3_FREE_SOPFR = 22.878049 as Mean<{
    of: Sopfr<Rough<5>>
    meanType: MeanType.ARITHMETIC
}>

describe("average 2,3-free SoPFR", (): void => {
    it("is about 23", (): void => {
        const two3FreeSopfrs: Array<Sopfr<Rough<5>>> = JI_NOTATION_COMMA_CLASS_IDS.map(
            (commaClassId: CommaClassId): Sopfr<Rough<5>> => {
                const commaClass = getCommaClass(commaClassId)
                const two3FreeClass = compute23FreeClass(commaClass.pitch)

                return computeRationalScaledVectorSopfr(two3FreeClass) as Sopfr<Rough<5>>
            },
        )

        expect(computeArithmeticMean(...two3FreeSopfrs)).toBeCloseToTyped(AVERAGE_2_3_FREE_SOPFR)
    })
})
