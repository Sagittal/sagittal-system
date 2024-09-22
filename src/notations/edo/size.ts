import { Cents, CENTS_PER_OCTAVE } from "@sagittal/general"
import { Edo, EdoStep } from "./types"

const computeStepSize = (edo: Edo, edoStep: EdoStep = 1 as EdoStep): Cents =>
    (edoStep * (CENTS_PER_OCTAVE / edo)) as Cents

export { computeStepSize }
