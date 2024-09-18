import {
    Cents,
    Count,
    CENTS_PER_OCTAVE,
    computeRange,
    mod,
} from "@sagittal/general"
import { Edo, EdoStep, StepWithError } from "./types"

const FIFTHS_UNTIL_SHARP: Count = 7 as Count
const FIFTHS_UNTIL_WHOLE_TONE: Count = 2 as Count
const FIFTHS_UNTIL_LIMMA: Count = (FIFTHS_UNTIL_WHOLE_TONE -
    FIFTHS_UNTIL_SHARP) as Count

const JI_FIFTH_SIZE: Cents = 701.955000865 as Cents

const computeFifthStep = (edo: Edo, useSecondBestFifth: boolean): EdoStep => {
    const stepSize: Cents = (CENTS_PER_OCTAVE / edo) as Cents

    const stepsWithError: StepWithError[] = computeRange(edo as Edo)
        .map(
            (step: EdoStep): StepWithError => ({
                step,
                error: Math.abs(JI_FIFTH_SIZE - step * stepSize) as Cents,
            }),
        )
        .sort((a: StepWithError, b: StepWithError): number => a.error - b.error)

    return useSecondBestFifth ? stepsWithError[1].step : stepsWithError[0].step
}

const ensureCorrectAbsoluteValue = (
    edoStep: EdoStep,
    { edo, fifthStep }: { edo: Edo; fifthStep: EdoStep },
) => (edoStep > fifthStep ? ((edoStep - edo) as EdoStep) : edoStep)

const computeSharpStep = (edo: Edo, fifthStep: EdoStep) =>
    ensureCorrectAbsoluteValue(
        mod(fifthStep * FIFTHS_UNTIL_SHARP, edo) as EdoStep,
        { edo, fifthStep },
    )

const computeWholeToneStep = (edo: Edo, fifthStep: EdoStep) =>
    ensureCorrectAbsoluteValue(
        mod(fifthStep * FIFTHS_UNTIL_WHOLE_TONE, edo) as EdoStep,
        { edo, fifthStep },
    )

const computeLimmaStep = (edo: Edo, fifthStep: EdoStep): EdoStep =>
    ensureCorrectAbsoluteValue(
        mod(fifthStep * FIFTHS_UNTIL_LIMMA, edo) as EdoStep,
        { edo, fifthStep },
    )

export {
    computeFifthStep,
    computeSharpStep,
    computeWholeToneStep,
    computeLimmaStep,
}
