import { deepEquals, Maybe } from "@sagittal/general"
import { computeSagittalFromSymbolClass } from "./from"
import { SYMBOL_CLASSES } from "./constants"
import { Sagittal } from "../../../../accidental"
import { SymbolClass, SymbolClassId } from "./types"

const getSymbolClassEntry = (sagittal: Maybe<Sagittal>): Maybe<[SymbolClassId, SymbolClass]> =>
    (Object.entries(SYMBOL_CLASSES) as Array<[SymbolClassId, SymbolClass]>)
        .find(([_, symbolClass]: [SymbolClassId, SymbolClass]): boolean =>
            deepEquals(sagittal, computeSagittalFromSymbolClass(symbolClass)))

export {
    getSymbolClassEntry,
}
