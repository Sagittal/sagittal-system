import { abs, Rational, ScaledVector, THREE_PRIME_INDEX } from "@sagittal/general"
import { Ate } from "./types"

const computeAte = (jiPitch: ScaledVector<Rational>): Ate =>
    abs(jiPitch.vector[THREE_PRIME_INDEX] || 0) as Ate

export { computeAte }
