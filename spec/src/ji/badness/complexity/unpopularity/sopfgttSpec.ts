import {Sopfr, Two3FreeClass} from "@sagittal/general"
import {computeSopfgtt} from "../../../../../../src/ji/badness"
import {Unpopularity} from "../../../../../../src/ji/badness/complexity/unpopularity/types"

describe("computeSopfgtt", (): void => {
    it("returns the sum of prime factors greater than three", (): void => {
        const two3FreeClass = {pev: [0, 0, 2, 0, 0, 0, 0, 0, -1]} as Two3FreeClass  // {25/23}₂,₃

        const actual = computeSopfgtt(two3FreeClass)

        const expected = 33 as Unpopularity & Sopfr<{rough: 5}>
        expect(actual).toBe(expected)
    })
})
