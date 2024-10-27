import { Cents, CENTS_PER_OCTAVE, Edo, EdoStep } from "@sagittal/general"

const computeStepSize = (edo: Edo, edoStep: EdoStep = 1 as EdoStep): Cents =>
    (edoStep * (CENTS_PER_OCTAVE / edo)) as Cents

export { computeStepSize }
