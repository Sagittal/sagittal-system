import { Sagitype } from "../../accidental"
import { NonSubsetEdoNotationDefinition } from "./types"

const computeSagitypes = (
    nonSubsetEdoNotationDefinition: NonSubsetEdoNotationDefinition,
): Sagitype[] => nonSubsetEdoNotationDefinition.sagitypes

export { computeSagitypes }
