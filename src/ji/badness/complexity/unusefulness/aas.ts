import { abs, Abs, ScaledVector } from "@sagittal/general"
import { computeApotomeSlope } from "./apotomeSlope"
import { ApotomeSlope } from "./types"

const computeAas = (jiPitch: ScaledVector<{ rational: true }>): Abs<ApotomeSlope> =>
    abs(computeApotomeSlope(jiPitch))

export { computeAas }
