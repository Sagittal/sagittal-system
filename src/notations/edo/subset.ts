import {
    Edo,
    SubsetEdoNotationDefinition,
    EdoNotationDefinition,
    SubsetFactor,
} from "./types"

const isSubsetNotation = (
    edoNotationDefinition: EdoNotationDefinition,
): edoNotationDefinition is SubsetEdoNotationDefinition =>
    (<SubsetEdoNotationDefinition>edoNotationDefinition)
        .supersetEdoNotationName !== undefined

const computeSubsetFactor = ({
    edo,
    supersetEdo,
}: {
    edo: Edo
    supersetEdo: Edo
}): SubsetFactor => (supersetEdo / edo) as SubsetFactor

export { isSubsetNotation, computeSubsetFactor }
