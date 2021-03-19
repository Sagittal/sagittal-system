import {abs, Spev, THREE_PRIME_INDEX} from "@sagittal/general"
import {Ate} from "./types"

const computeAte = (jiPitch: Spev<{rational: true}>): Ate =>
    abs(jiPitch.pev[THREE_PRIME_INDEX] || 0) as Ate

export {
    computeAte,
}
