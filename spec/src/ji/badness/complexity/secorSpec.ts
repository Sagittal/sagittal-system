import {Scamon} from "@sagittal/general"
import {computeSecorComplexity} from "../../../../../src/ji/badness/complexity/secor"
import {SecorComplexity} from "../../../../../src/ji/badness/complexity/types"

describe("computeSecorComplexity", (): void => {
    it("works per example given on the forum", (): void => {
        const jiPitch = {monzo: [-4, 4, -1]} as Scamon<{rational: true}>

        const actual = computeSecorComplexity(jiPitch)

        const expected = 6.120342 as SecorComplexity
        expect(actual).toBeCloseToTyped(expected)
    })
})
