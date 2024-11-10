import {
    Cents,
    Count,
    computeRange,
    mod,
    Edo,
    EdoStep,
    abs,
    Error,
    computeStepSize,
    Decimal,
    Integer,
} from "@sagittal/general"
import { JI_FIFTH_SIZE } from "./constants"
import { parseEdoNotationName } from "./name"
import { EdoNotationName, StepWithError } from "./types"

const FIFTHS_UNTIL_SHARP: Count = 7 as Count
const FIFTHS_UNTIL_WHOLE_TONE: Count = 2 as Count
const FIFTHS_UNTIL_LIMMA: Count = (FIFTHS_UNTIL_WHOLE_TONE - FIFTHS_UNTIL_SHARP) as Count

const computeFifthStep = (edoNotationName: EdoNotationName): EdoStep => {
    const { edo, useSecondBestFifth }: { edo: Edo; useSecondBestFifth: boolean } =
        parseEdoNotationName(edoNotationName)

    const stepSize: Cents = computeStepSize(edo)

    const stepsWithError: StepWithError[] = computeRange((edo + 1) as Edo)
        .map(
            (step: EdoStep): StepWithError => ({
                step,
                error: abs((JI_FIFTH_SIZE - step * stepSize) as Error),
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
    ensureCorrectAbsoluteValue(mod((fifthStep * FIFTHS_UNTIL_SHARP) as Decimal<Integer>, edo) as EdoStep, {
        edo,
        fifthStep,
    })

const computeWholeToneStep = (edo: Edo, fifthStep: EdoStep) =>
    ensureCorrectAbsoluteValue(
        mod((fifthStep * FIFTHS_UNTIL_WHOLE_TONE) as Decimal<Integer>, edo) as EdoStep,
        { edo, fifthStep },
    )

const computeLimmaStep = (edo: Edo, fifthStep: EdoStep): EdoStep =>
    ensureCorrectAbsoluteValue(mod((fifthStep * FIFTHS_UNTIL_LIMMA) as Decimal<Integer>, edo) as EdoStep, {
        edo,
        fifthStep,
    })

export { computeFifthStep, computeSharpStep, computeWholeToneStep, computeLimmaStep }
