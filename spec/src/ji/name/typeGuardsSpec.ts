import { Rational, ScaledVector } from "@sagittal/general"
import { isCommaSized } from "../../../../src/ji/name/typeGuards"

describe("isCommaSized", (): void => {
    it("returns true if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const candidateCommaSizedPitch = {
            vector: [1, -1, 2, 0, 0, 0, 0, -1],
        } as ScaledVector<Rational> // -226.841¢

        const actual = isCommaSized(candidateCommaSizedPitch)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is smaller than the max size category bound (a double apotome)", (): void => {
        const candidateCommaSizedPitch = {
            vector: [0, -1, 1, 0, 0, 1, 0, -1],
        } as ScaledVector<Rational> // 227.373¢

        const actual = isCommaSized(candidateCommaSizedPitch)

        expect(actual).toBeFalsy()
    })
})
