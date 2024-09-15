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

const computeFifthStep = (
    edo: Edo,
    useSecondBestFifth: boolean = false,
): EdoStep => {
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

const computeSharpStep = (edo: Edo, fifthStep: EdoStep) =>
    mod(fifthStep * FIFTHS_UNTIL_SHARP, edo) as EdoStep

const computeWholeToneStep = (edo: Edo, fifthStep: EdoStep) =>
    mod(fifthStep * FIFTHS_UNTIL_WHOLE_TONE, edo) as EdoStep

const computeLimmaStep = (edo: Edo, fifthStep: EdoStep): EdoStep => {
    const possiblyShouldBeNegativeLimma: EdoStep = mod(
        fifthStep * FIFTHS_UNTIL_LIMMA,
        edo,
    ) as EdoStep

    return possiblyShouldBeNegativeLimma > fifthStep
        ? ((possiblyShouldBeNegativeLimma - edo) as EdoStep)
        : possiblyShouldBeNegativeLimma
}

export {
    computeFifthStep,
    computeSharpStep,
    computeWholeToneStep,
    computeLimmaStep,
}
