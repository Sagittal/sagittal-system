import { isUndefined, Rational, ScaledVector, sumRationalScaledVectors, UNISON } from "@sagittal/general"
import { Accidental } from "../../../accidental"
import { computePitchAlterationFromCompatible } from "../compatiblePitchAlteration"
import { computeCommaticPitchAlterationFromSymbolClassIdAndSection } from "./commaticPitchAlteration"
import { computeApotomicPitchAlterationFromSection } from "./section"
import { computeSymbolClassIdAndSectionFromSagittal } from "./symbolClassIdAndSectionFromSagittal"

const computeJiPitchFromAccidental = (accidental: Accidental): ScaledVector<Rational> => {
    if (isUndefined(accidental)) return UNISON

    const { compatible, ...sagittal } = accidental

    const [symbolClassId, section] = computeSymbolClassIdAndSectionFromSagittal(sagittal)

    const pitchAlterations = [
        computeCommaticPitchAlterationFromSymbolClassIdAndSection([symbolClassId, section]),
    ] as ScaledVector<Rational>[]

    const apotomePitchAlteration = computeApotomicPitchAlterationFromSection(section)
    if (!isUndefined(apotomePitchAlteration)) {
        pitchAlterations.push(apotomePitchAlteration)
    }

    if (!isUndefined(compatible)) {
        pitchAlterations.push(computePitchAlterationFromCompatible(compatible))
    }

    return sumRationalScaledVectors(...pitchAlterations)
}

export { computeJiPitchFromAccidental }
