import { Cents, Decimal, Ed, Index, Window } from "@sagittal/general"
import { Sagittal, Sagitype } from "../../accidental"
import { Link } from "../../types"

type EdoStep = Decimal<{ integer: true }> & { _EdoStepBrand: boolean }

type Edo = Ed<{ of: Window<{ of: 2 }> }> & EdoStep

interface SubsetEdoNotationDefinition {
    supersetEdo: Edo
}

interface NonSubsetEdoNotationDefinition {
    isLimmaFraction?: boolean,
    sagitypes: Sagitype[],
}

type EdoNotationDefinition = SubsetEdoNotationDefinition | NonSubsetEdoNotationDefinition

type SubsetFactor = Decimal<{ integer: true }> & { _SubsetFactorStepBrand: boolean }

interface StepWithError {
    step: EdoStep
    error: Cents
}

export {
    Edo,
    EdoStep,
    EdoNotationDefinition,
    SubsetEdoNotationDefinition,
    NonSubsetEdoNotationDefinition,
    SubsetFactor,
    StepWithError,
}
