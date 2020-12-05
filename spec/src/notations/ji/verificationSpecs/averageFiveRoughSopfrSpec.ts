import {
    compute23FreeClass,
    computeArithmeticMean,
    computeRationalScamonSopfr,
    Mean,
    MeanType,
    Sopfr,
} from "@sagittal/general"
import {CommaClassId, getCommaClass, JI_NOTATION} from "../../../../../src"

const AVERAGE_2_3_FREE_SOPFR = 22.878049 as Mean<{of: Sopfr<{rough: 5}>, meanType: MeanType.ARITHMETIC}>

describe("average 2,3-free SoPFR", (): void => {
    it("is about 23", (): void => {
        const two3FreeSopfrs: Array<Sopfr<{rough: 5}>> =
            JI_NOTATION.map((commaClassId: CommaClassId): Sopfr<{rough: 5}> => {
                const commaClass = getCommaClass(commaClassId)
                const two3FreeClass = compute23FreeClass(commaClass.pitch)

                return computeRationalScamonSopfr(two3FreeClass)
            })

        expect(computeArithmeticMean(...two3FreeSopfrs)).toBeCloseToTyped(AVERAGE_2_3_FREE_SOPFR)
    })
})
