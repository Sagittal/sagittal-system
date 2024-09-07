import { Cents, Count, CENTS_PER_OCTAVE, computeRange, mod } from "@sagittal/general"
import { Edo, EdoStep } from "./types"

const FIFTHS_UNTIL_SHARP: Count = 7 as Count
const FIFTHS_UNTIL_WHOLE_TONE: Count = 2 as Count
const FIFTHS_UNTIL_LIMMA: Count = FIFTHS_UNTIL_WHOLE_TONE - FIFTHS_UNTIL_SHARP as Count

const JI_FIFTH_SIZE: Cents = 701.955000865 as Cents

const computeFifthStep = (edo: Edo): EdoStep => {
    const stepSize: Cents = CENTS_PER_OCTAVE / edo as Cents
    const stepSizes: Cents[] = computeRange(edo as Edo).map((step: EdoStep): Cents => step * stepSize as Cents)

    let bestFifthError: Cents = CENTS_PER_OCTAVE
    let bestFifthStep: EdoStep = edo
    stepSizes.forEach((stepSize: Cents, index: number): void => {
        const fifthError: Cents = Math.abs(JI_FIFTH_SIZE - stepSize) as Cents
        if (fifthError < bestFifthError) {
            bestFifthError = fifthError
            bestFifthStep = index as EdoStep
        }
    })

    return bestFifthStep
}

const computeSharpStep = (edo: Edo, fifthStep: EdoStep) =>
    mod(fifthStep * FIFTHS_UNTIL_SHARP, edo) as EdoStep

const computeWholeToneStep = (edo: Edo, fifthStep: EdoStep) =>
    mod(fifthStep * FIFTHS_UNTIL_WHOLE_TONE, edo) as EdoStep

const computeLimmaStep = (edo: Edo, fifthStep: EdoStep) => 
    mod(fifthStep * FIFTHS_UNTIL_LIMMA, edo) as EdoStep

export {
    computeFifthStep,
    computeSharpStep,
    computeWholeToneStep,
    computeLimmaStep,
}
