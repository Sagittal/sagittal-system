import { isUndefined, Spev, sumRationalSpevs, UNISON } from "@sagittal/general"
import { Accidental } from "../../../accidental"
import { computeApotomicPitchAlterationFromSection } from "./section"
import { computeCommaticPitchAlterationFromSymbolClassIdAndSection } from "./commaticPitchAlteration"
import { computePitchAlterationFromCompatible } from "../compatiblePitchAlteration"
import { computeSymbolClassIdAndSectionFromSagittal } from "./symbolClassIdAndSectionFromSagittal"

const computeJiPitchFromAccidental = (
    accidental: Accidental,
): Spev<{ rational: true }> => {
    if (isUndefined(accidental)) return UNISON

    const { compatible, ...sagittal } = accidental

    const [symbolClassId, section] =
        computeSymbolClassIdAndSectionFromSagittal(sagittal)

    const pitchAlterations = [
        computeCommaticPitchAlterationFromSymbolClassIdAndSection([
            symbolClassId,
            section,
        ]),
    ] as Array<Spev<{ rational: true }>>

    const apotomePitchAlteration =
        computeApotomicPitchAlterationFromSection(section)
    if (!isUndefined(apotomePitchAlteration)) {
        pitchAlterations.push(apotomePitchAlteration)
    }

    if (!isUndefined(compatible)) {
        pitchAlterations.push(computePitchAlterationFromCompatible(compatible))
    }

    return sumRationalSpevs(...pitchAlterations)
}

export { computeJiPitchFromAccidental }
