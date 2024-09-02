import { invertSpev, Spev } from "@sagittal/general"
import { getCommaClass } from "./comma"
import { getSymbolClass, SymbolClassId } from "./symbol"
import { Section } from "./section"

const computeCommaticPitchAlterationFromSymbolClassIdAndSection = (
    [symbolClassId, section]: [SymbolClassId, Section],
): Spev<{ rational: true }> => {
    const symbolClass = getSymbolClass(symbolClassId)
    const commaClass = getCommaClass(symbolClass.commaClassId)
    const pitch = commaClass.pitch

    return section.mirrored ?
        section.negated ? pitch : invertSpev(pitch) as Spev<{ rational: true }> :
        section.negated ? invertSpev(pitch) as Spev<{ rational: true }> : pitch
}

export {
    computeCommaticPitchAlterationFromSymbolClassIdAndSection,
}
