import { Cents, Comma, Decimal, Ed, Name, Window } from "@sagittal/general"
import { Sagitype } from "../../accidental"

type EdoStep = Decimal<{ integer: true }> & { _EdoStepBrand: boolean }

type Edo = Ed<{ of: Window<{ of: 2 }> }> & EdoStep

type EdoNotationName = string & { _EdoNotationNameBrand: boolean }

interface SubsetEdoNotationDefinition {
    supersetEdoNotationName: EdoNotationName
}

type NonJiMeaning = string & { _NonJiMeaningBrand: boolean }

interface StepDefinition {
    sagitype: Sagitype
    validCommas?: Name<Comma>[]
    nonJiMeaning?: NonJiMeaning
}

interface NonSubsetEdoNotationDefinition {
    isLimmaFraction?: boolean
    stepDefinitions: StepDefinition[]
}

type EdoNotationDefinition =
    | SubsetEdoNotationDefinition
    | NonSubsetEdoNotationDefinition

type SubsetFactor = Decimal<{ integer: true }> & {
    _SubsetFactorStepBrand: boolean
}

interface StepWithError {
    step: EdoStep
    error: Cents
}

enum SectionColor {
    BLACK = "#000000", // currently there are none of these
    GOLD = "#CCA800",
    GREEN = "#00FF00",
    BLUE = "#00B6FF",
    MAGENTA = "#FF73FF",
    GREY = "#ABABAB",
    ORANGE = "#FF8F00",
    PINK = "FFD4D4", // currently there are none of these
    YELLOW = "#FFFF00",
    CYAN = "#00FFFF",
    PURPLE = "#B39CFF",
    ROSE = "#FF8888",
    WHITE = "#FFFFFF", // currently there are none of these
}

export {
    Edo,
    EdoStep,
    EdoNotationDefinition,
    SubsetEdoNotationDefinition,
    NonSubsetEdoNotationDefinition,
    SubsetFactor,
    StepWithError,
    SectionColor,
    EdoNotationName,
    StepDefinition,
    NonJiMeaning,
}
