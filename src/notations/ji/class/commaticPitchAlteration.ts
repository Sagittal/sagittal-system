import { invertScaledVector, Rational, ScaledVector } from "@sagittal/general"
import { getCommaClass } from "./comma"
import { Section } from "./section"
import { getSymbolClass, SymbolClassId } from "./symbol"

const computeCommaticPitchAlterationFromSymbolClassIdAndSection = ([symbolClassId, section]: [
    SymbolClassId,
    Section,
]): ScaledVector<Rational> => {
    const symbolClass = getSymbolClass(symbolClassId)
    const commaClass = getCommaClass(symbolClass.commaClassId)
    const pitch = commaClass.pitch

    return section.mirrored
        ? section.negated
            ? pitch
            : (invertScaledVector(pitch) as ScaledVector<Rational>)
        : section.negated
          ? (invertScaledVector(pitch) as ScaledVector<Rational>)
          : pitch
}

export { computeCommaticPitchAlterationFromSymbolClassIdAndSection }
