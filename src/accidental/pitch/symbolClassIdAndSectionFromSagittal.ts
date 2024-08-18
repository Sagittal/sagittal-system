import {isUndefined, Maybe, stringify} from "@sagittal/general"
import {Section, SymbolClassId} from "../../notation"
import {computeApotomeComplement, Sagittal, Shafts} from "../sagittal"
import {getSymbolClassEntry} from "./symbolClassEntry"

const computeSymbolClassIdAndSectionFromSagittal = (sagittal: Maybe<Sagittal>): [SymbolClassId, Section] => {
    const section = {negated: false, shifted: false, mirrored: false}

    if (isUndefined(sagittal)) return [SymbolClassId.NULL, section]
    let inputSagittal = { ...sagittal }

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
        symbolClassEntry = getSymbolClassEntry(computeApotomeComplement(inputSagittal))
    }

    if (isUndefined(symbolClassEntry)) {
        throw new Error(`Could not find symbol class ID and section for sagittal ${stringify(sagittal)}`)
    }

    const [symbolClassId, _] = symbolClassEntry

    return [symbolClassId, section]
}

export {
    computeSymbolClassIdAndSectionFromSagittal,
}
