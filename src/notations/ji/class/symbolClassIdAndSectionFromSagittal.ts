import { isUndefined, Maybe, stringify } from "@sagittal/general"
import { Sagittal, Shafts } from "../../../accidental"
import { computeApotomeComplementHandlingAsymmetricalSelfComplement } from "../asymmetricalSelfComplement"
import { Section } from "./section"
import { SymbolClassId, getSymbolClassEntry } from "./symbol"

const computeSymbolClassIdAndSectionFromSagittal = (sagittal: Maybe<Sagittal>): [SymbolClassId, Section] => {
    const section = { negated: false, shifted: false, mirrored: false }

    if (isUndefined(sagittal)) return [SymbolClassId.NULL, section]
    const inputSagittal = { ...sagittal }

    if (inputSagittal.shafts === Shafts.TRIPLE) {
        inputSagittal.shafts = Shafts.SINGLE
        section.shifted = true
    } else if (inputSagittal.shafts === Shafts.EX) {
        inputSagittal.shafts = Shafts.DOUBLE
        section.shifted = true
    }

    if (inputSagittal.down) {
        delete inputSagittal.down
        section.negated = true
    }

    let symbolClassEntry = getSymbolClassEntry(inputSagittal)

    if (isUndefined(symbolClassEntry)) {
        section.mirrored = true
        symbolClassEntry = getSymbolClassEntry(
            computeApotomeComplementHandlingAsymmetricalSelfComplement(inputSagittal),
        )
    }

    if (isUndefined(symbolClassEntry)) {
        throw new Error(`Could not find symbol class ID and section for sagittal ${stringify(sagittal)}`)
    }

    const [symbolClassId, _] = symbolClassEntry

    return [symbolClassId, section]
}

export { computeSymbolClassIdAndSectionFromSagittal }
