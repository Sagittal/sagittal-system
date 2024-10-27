import { invertScaledVector, ScaledVector } from "@sagittal/general"
import { getCommaClass } from "./comma"
import { getSymbolClass, SymbolClassId } from "./symbol"
import { Section } from "./section"

const computeCommaticPitchAlterationFromSymbolClassIdAndSection = ([symbolClassId, section]: [
    SymbolClassId,
    Section,
]): ScaledVector<{ rational: true }> => {
    const symbolClass = getSymbolClass(symbolClassId)
    const commaClass = getCommaClass(symbolClass.commaClassId)
    const pitch = commaClass.pitch

    return section.mirrored
        ? section.negated
            ? pitch
            : (invertScaledVector(pitch) as ScaledVector<{ rational: true }>)
        : section.negated
        ? (invertScaledVector(pitch) as ScaledVector<{ rational: true }>)
        : pitch
}

export { computeCommaticPitchAlterationFromSymbolClassIdAndSection }
