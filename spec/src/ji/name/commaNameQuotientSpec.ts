import {Comma} from "@sagittal/general"
import {computeCommaNameQuotient} from "../../../../src/ji/name/commaNameQuotient"
import {CommaNameQuotient} from "../../../../src/ji/name/types"

describe("computeCommaNameQuotient", (): void => {
    it("works for a complex comma", (): void => {
        const comma = {monzo: [-53, 32, 1]} as Comma

        const actual = computeCommaNameQuotient(comma)

        const expected = [5, 1] as CommaNameQuotient
        expect(actual).toEqual(expected)
    })
})
