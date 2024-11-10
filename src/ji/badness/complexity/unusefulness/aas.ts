import { abs, Abs, Rational, ScaledVector } from "@sagittal/general"
import { computeApotomeSlope } from "./apotomeSlope"
import { ApotomeSlope } from "./types"

const computeAas = (jiPitch: ScaledVector<Rational>): Abs<ApotomeSlope> => abs(computeApotomeSlope(jiPitch))

export { computeAas }
