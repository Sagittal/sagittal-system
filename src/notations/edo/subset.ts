import {
    EdoStepNotation,
    Edo,
    SubsetEdoNotationDefinition,
    EdoNotationDefinition,
    NonSubsetEdoNotationDefinition,
    SubsetFactor,
} from "./types"
import { EDO_NOTATION_DEFINITIONS } from "./definitions"
import { Sagitype } from "../../accidental"
import { mod } from "@sagittal/general"

const isSubsetNotation = (edoNotationDefinition: EdoNotationDefinition): edoNotationDefinition is SubsetEdoNotationDefinition =>
    (<SubsetEdoNotationDefinition>edoNotationDefinition).supersetEdo !== undefined

const computeSubsetSagitypes = (edoNotationDefinition: SubsetEdoNotationDefinition): Sagitype[] => {
    const nonSubsetEdoNotationDefinition: NonSubsetEdoNotationDefinition = EDO_NOTATION_DEFINITIONS[edoNotationDefinition.supersetEdo] as NonSubsetEdoNotationDefinition

    return nonSubsetEdoNotationDefinition.sagitypes
}

const computeSubsetEdoStepNotations = ({ edoStepNotations, subsetFactor }: { edoStepNotations: EdoStepNotation[], subsetFactor: SubsetFactor }): EdoStepNotation[] => 
    edoStepNotations.filter((_: EdoStepNotation, index: number): boolean => mod(index, subsetFactor) === 0)

const computeSubsetFactor = ({ edo, supersetEdo }: { edo: Edo, supersetEdo: Edo }): SubsetFactor => supersetEdo / edo as SubsetFactor

export {
    isSubsetNotation,
    computeSubsetSagitypes,
    computeSubsetEdoStepNotations,
    computeSubsetFactor,
}
