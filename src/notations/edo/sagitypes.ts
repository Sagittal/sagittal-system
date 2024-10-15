import { Sagitype } from "../../accidental"
import { NonSubsetEdoNotationDefinition, StepDefinition } from "./types"

const computeSagitypes = (
    nonSubsetEdoNotationDefinition: NonSubsetEdoNotationDefinition,
): Sagitype[] =>
    nonSubsetEdoNotationDefinition.stepDefinitions.map(
        ({ sagitype }: StepDefinition): Sagitype => sagitype,
    )

export { computeSagitypes }
