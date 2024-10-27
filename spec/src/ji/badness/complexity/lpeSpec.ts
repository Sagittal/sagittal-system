import { ScaledVector } from "@sagittal/general"
import { computeLpe } from "../../../../../src"
import { LPE } from "../../../../../src/ji/badness/complexity/types"

describe("computeLpe", (): void => {
    it("computes complexity according to LPE (lb compressed N2D3P9, power function expanded AAS, and exponential function expanded ATE)", (): void => {
        const jiPitch = { vector: [12, -4, 0, -2] } as ScaledVector<{ rational: true }>

        const actual = computeLpe(jiPitch)

        const expected = 3.902647 as LPE
        expect(actual).toBeCloseTo(expected)
    })
})
