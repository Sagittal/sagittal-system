import {abs, Abs, Spev} from "@sagittal/general"
import {computeApotomeSlope} from "./apotomeSlope"
import {ApotomeSlope} from "./types"

const computeAas = (jiPitch: Spev<{rational: true}>): Abs<ApotomeSlope> =>
    abs(computeApotomeSlope(jiPitch))

export {
    computeAas,
}
