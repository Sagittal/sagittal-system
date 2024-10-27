import { EdoStep } from "@sagittal/general"
import { computeFifthStep, EdoNotationName } from "../../../../src"

describe("computeFifthStep", (): void => {
    it("chooses the correct fifth step for 17-EDO and its second-best fifth notation", (): void => {
        expect(computeFifthStep("17" as EdoNotationName)).toBe(10 as EdoStep)
        expect(computeFifthStep("17b" as EdoNotationName)).toBe(9 as EdoStep)
    })

    it("chooses the correct fifth step for 1-EDO and its second-best fifth notation", (): void => {
        expect(computeFifthStep("1" as EdoNotationName)).toBe(1 as EdoStep)
        expect(computeFifthStep("1b" as EdoNotationName)).toBe(0 as EdoStep)
    })
})
